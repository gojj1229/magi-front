# dev-technical

개발자 도구·SaaS·대시보드 페르소나 — `near-mono #0F0F12` · 단일 `sky accent #0EA5E9` · `radius: 4` 단일 · dark mode 1급.

## Install

```bash
npx shadcn@latest add https://magi-front.vercel.app/r/dev-technical
```

## 산출물

- `theme.css` → `app/globals.css`에 주입 (CSS 변수 + light/dark)
- `cssVars.theme/light/dark` (registry-item.json에 동일 토큰)
- mono font 변수 포함 (코드·로그·ID 등 기계 읽힘 텍스트 전용)

## 단일 소스 (Source of Truth)

`design-md/dev-technical.md` frontmatter가 마스터. Linear / Vercel / Plausible / Notion(admin) / Stripe(developer) 톤. status 컬러 5종(success·warning·error·info·neutral) 외 색 사용 절대 금지 (의미 분기 차단).

## 페르소나 산문

전체 rationale·anti-pattern은 `design-md/dev-technical.md` 참조.
