#!/usr/bin/env node
/*
 * magi-front · build script
 * design-md/ + registry/ → public/ 미러
 *
 *   public/design-md/<persona>.md   ← design-md/<persona>.md
 *   public/r/<persona>.json         ← registry/styles/<persona>/registry-item.json
 *   public/r/registry.json          ← registry/registry.json (인덱스)
 *   public/r/<persona>/theme.css    ← registry/styles/<persona>/theme.css
 *   public/index.html               ← 단순 안내 페이지
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync, copyFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DESIGN_MD_SRC = join(ROOT, 'design-md');
const REGISTRY_SRC = join(ROOT, 'registry');
const PUBLIC_DIR = join(ROOT, 'public');

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

function ensureDir(p) {
  mkdirSync(p, { recursive: true });
}

function clean() {
  if (existsSync(PUBLIC_DIR)) rmSync(PUBLIC_DIR, { recursive: true, force: true });
  ensureDir(PUBLIC_DIR);
}

function mirrorDesignMd() {
  const dst = join(PUBLIC_DIR, 'design-md');
  ensureDir(dst);
  for (const persona of PERSONAS) {
    const src = join(DESIGN_MD_SRC, `${persona}.md`);
    if (!existsSync(src)) throw new Error(`missing design-md: ${src}`);
    copyFileSync(src, join(dst, `${persona}.md`));
    console.log(`  ✓ design-md/${persona}.md`);
  }
  const globalSrc = join(DESIGN_MD_SRC, '_GLOBAL.md');
  if (existsSync(globalSrc)) {
    copyFileSync(globalSrc, join(dst, '_GLOBAL.md'));
    console.log('  ✓ design-md/_GLOBAL.md');
  }
}

function mirrorRegistry() {
  const dstR = join(PUBLIC_DIR, 'r');
  ensureDir(dstR);

  const rootIndex = JSON.parse(readFileSync(join(REGISTRY_SRC, 'registry.json'), 'utf8'));
  writeFileSync(join(dstR, 'registry.json'), JSON.stringify(rootIndex, null, 2));
  console.log('  ✓ r/registry.json (index)');

  for (const persona of PERSONAS) {
    const itemSrc = join(REGISTRY_SRC, 'styles', persona, 'registry-item.json');
    if (!existsSync(itemSrc)) throw new Error(`missing registry-item: ${itemSrc}`);
    const itemRaw = readFileSync(itemSrc, 'utf8');
    const item = JSON.parse(itemRaw);
    writeFileSync(join(dstR, `${persona}.json`), JSON.stringify(item, null, 2));
    console.log(`  ✓ r/${persona}.json`);

    const themeSrc = join(REGISTRY_SRC, 'styles', persona, 'theme.css');
    if (existsSync(themeSrc)) {
      const personaDir = join(dstR, persona);
      ensureDir(personaDir);
      copyFileSync(themeSrc, join(personaDir, 'theme.css'));
      console.log(`  ✓ r/${persona}/theme.css`);
    }
  }
}

const DESCRIPTIONS = {
  'clinical': '정제된 한국 의료 — deep teal · 신뢰·가독성',
  'editorial': 'JP-KO 한방 위키 long-form — serif · warm paper',
  'community': '한방 라이프 커뮤니티 — warm coral · 둥근 형태',
  'japanese-minimal': '일본 OTC·약국 — 정보밀도·각진·단일 액센트',
  'luxury-trust': 'KR-JP 카이토리 럭셔리 — charcoal · gold · serif heading',
  'dev-technical': '개발자 도구·SaaS — near-mono · sky accent · dark 1급',
  'playful-friendly': '소비자 캐주얼 — vivid violet · golden yellow · 둥근 형태',
  'institutional': '기관·정부·금융 — deep navy · 거의 없는 accent · 각진',
};

function writeIndexHtml() {
  const designLis = PERSONAS.map(
    (p) => `    <li><a href="/design-md/${p}.md">${p}</a><small>${DESCRIPTIONS[p] || ''}</small></li>`,
  ).join('\n');
  const registryLis = PERSONAS.map(
    (p) => `    <li><a href="/r/${p}.json">/r/${p}</a></li>`,
  ).join('\n');

  const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>magi-front · Magi Frontend Design Assets</title>
<meta name="description" content="DESIGN.md ${PERSONAS.length} personas + shadcn registry v4 ${PERSONAS.length} preset (${PERSONAS.join(' / ')})." />
<style>
  :root { color-scheme: light dark; --fg:#1A1B1E; --bg:#FAFAF8; --muted:#6A665D; --accent:#B8956A; --border:#D9D5C9; }
  @media (prefers-color-scheme: dark) { :root { --fg:#F5F2EC; --bg:#0F1012; --muted:#9A968D; --accent:#C9A57F; --border:#2C2D31; } }
  body { margin:0; padding:48px 24px; font-family:-apple-system,'Pretendard','Noto Sans KR','Noto Sans JP',sans-serif; background:var(--bg); color:var(--fg); line-height:1.65; }
  main { max-width:760px; margin:0 auto; }
  h1 { font-family:'Noto Serif KR','Noto Serif JP',serif; font-size:40px; margin:0 0 8px; letter-spacing:-0.02em; }
  .subtitle { color:var(--muted); margin:0 0 40px; font-size:16px; }
  h2 { font-size:18px; margin:40px 0 16px; letter-spacing:-0.01em; }
  ul { padding-left:0; list-style:none; margin:0; }
  li { padding:12px 0; border-bottom:1px solid var(--border); }
  li a { color:var(--fg); text-decoration:none; font-weight:500; }
  li a:hover { color:var(--accent); }
  li small { color:var(--muted); display:block; margin-top:4px; font-size:13px; font-weight:400; }
  pre { background:rgba(127,127,127,0.08); padding:16px; border-radius:4px; overflow:auto; font-size:13px; }
  code { font-family:'SF Mono',Menlo,Consolas,monospace; }
  footer { margin-top:64px; padding-top:24px; border-top:1px solid var(--border); color:var(--muted); font-size:13px; }
  a.gh { color:var(--accent); text-decoration:none; }
</style>
</head>
<body>
<main>
  <h1>magi-front</h1>
  <p class="subtitle">Magi Frontend Design Assets — DESIGN.md ${PERSONAS.length} personas + shadcn registry v4 ${PERSONAS.length} preset.</p>

  <h2>공통 헌법 (8 페르소나 cross-cutting)</h2>
  <ul>
    <li><a href="/design-md/_GLOBAL.md">_GLOBAL</a><small>SOT 헌법 · verification ↔ status 의미 분기 · persona branching · 안티패턴 공통 룰셋</small></li>
  </ul>

  <h2>DESIGN.md (사람이 읽는 산문)</h2>
  <ul>
${designLis}
  </ul>

  <h2>shadcn registry (기계가 install)</h2>
  <ul>
${registryLis}
  </ul>

  <h2>사용 패턴</h2>
  <pre><code># DESIGN.md cp
curl -o ./DESIGN.md https://magi-front.vercel.app/design-md/&lt;persona&gt;.md

# shadcn install
npx shadcn@latest add https://magi-front.vercel.app/r/&lt;persona&gt;</code></pre>

  <footer>
    <a class="gh" href="https://github.com/gojj1229/magi-front">github.com/gojj1229/magi-front</a> · MIT
  </footer>
</main>
</body>
</html>
`;
  writeFileSync(join(PUBLIC_DIR, 'index.html'), html);
  console.log('  ✓ index.html');
}

console.log('magi-front build → public/');
clean();
mirrorDesignMd();
mirrorRegistry();
writeIndexHtml();
console.log('\nbuild ok.');
