#!/usr/bin/env node
/*
 * magi-front · validate script
 * design-md/<persona>.md frontmatter ↔ registry/styles/<persona>/registry-item.json cssVars 1:1 검증
 *
 * 단일 소스: design-md/<persona>.md frontmatter (YAML).
 * registry는 그것의 미러여야 한다.
 */

import { readFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const PERSONAS = [
  'clinical',
  'editorial',
  'community',
  'japanese-minimal',
  'luxury-trust',
  'dev-technical',
  'playful-friendly',
  'institutional',
];

function readFrontmatter(filePath) {
  const txt = readFileSync(filePath, 'utf8');
  const m = txt.match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error(`no frontmatter: ${filePath}`);
  return parseSimpleYaml(m[1]);
}

function parseSimpleYaml(yaml) {
  const out = {};
  const lines = yaml.split('\n');
  let i = 0;
  let currentKey = null;
  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.replace(/\s+$/, '');
    if (!line.trim() || line.trim().startsWith('#')) { i++; continue; }
    const m2 = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (m2 && !line.startsWith(' ')) {
      const [, k, v] = m2;
      if (v.trim() === '') {
        out[k] = {};
        currentKey = k;
      } else {
        out[k] = stripQuotes(v.trim());
        currentKey = null;
      }
    } else if (currentKey && line.match(/^\s+([A-Za-z0-9_-]+):\s*(.*)$/)) {
      const m3 = line.match(/^\s+([A-Za-z0-9_-]+):\s*(.*)$/);
      out[currentKey][m3[1]] = stripQuotes(m3[2].trim());
    }
    i++;
  }
  return out;
}

function stripQuotes(s) {
  if (s.startsWith('"') && s.endsWith('"')) return s.slice(1, -1);
  if (s.startsWith("'") && s.endsWith("'")) return s.slice(1, -1);
  return s;
}

function normalizeHex(h) {
  return (h || '').toLowerCase().trim();
}

let errors = 0;

for (const persona of PERSONAS) {
  const dmd = join(ROOT, 'design-md', `${persona}.md`);
  const ritem = join(ROOT, 'registry', 'styles', persona, 'registry-item.json');

  if (!existsSync(dmd)) { console.error(`✗ ${persona}: missing ${dmd}`); errors++; continue; }
  if (!existsSync(ritem)) { console.error(`✗ ${persona}: missing ${ritem}`); errors++; continue; }

  const fm = readFrontmatter(dmd);
  const item = JSON.parse(readFileSync(ritem, 'utf8'));

  if (fm.persona !== persona) {
    console.error(`✗ ${persona}: design-md persona='${fm.persona}' mismatch`);
    errors++;
  }
  if (item.name !== persona) {
    console.error(`✗ ${persona}: registry-item name='${item.name}' mismatch`);
    errors++;
  }

  const colors = fm.colors || {};
  const light = (item.cssVars && item.cssVars.light) || {};

  const checks = [
    ['primary', colors.primary, light.primary],
    ['accent', colors.accent, light.accent],
    ['bg-primary → background', colors['bg-primary'], light.background],
    ['bg-secondary → card/secondary', colors['bg-secondary'], light.card],
    ['text-primary → foreground', colors['text-primary'], light.foreground],
    ['text-secondary → muted-foreground', colors['text-secondary'], light['muted-foreground']],
    ['border', colors.border, light.border],
  ];

  for (const [label, dmdVal, regVal] of checks) {
    if (!dmdVal) {
      console.error(`✗ ${persona} · ${label}: design-md value missing`);
      errors++;
      continue;
    }
    if (!regVal) {
      console.error(`✗ ${persona} · ${label}: registry value missing`);
      errors++;
      continue;
    }
    if (normalizeHex(dmdVal) !== normalizeHex(regVal)) {
      console.error(`✗ ${persona} · ${label}: ${dmdVal} (design-md) ≠ ${regVal} (registry)`);
      errors++;
    } else {
      console.log(`  ✓ ${persona} · ${label} = ${dmdVal}`);
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} mismatch(es). build blocked.`);
  process.exit(1);
}
console.log('\nvalidate ok.');
