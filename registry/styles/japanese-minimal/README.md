# japanese-minimal

일본 OTC·약국 페르소나 — `near-black #0A0A0A` · 단일 액센트 `pharmacy green #1F8A4F` · 각진 `radius: 4` 단일.

## Install

```bash
npx shadcn@latest add https://magi-front.vercel.app/r/japanese-minimal
```

## 산출물

- `theme.css` → `app/globals.css`에 주입 (CSS 변수 + light/dark)
- `cssVars.theme/light/dark` (registry-item.json에 동일 토큰)

## 단일 소스 (Source of Truth)

`design-md/japanese-minimal.md` frontmatter가 마스터. 일본 약기법 (薬機法) 시각 시그널 준수: ✓ / 별 / 등급 / 효능 비교 그래프 사용 절대 금지. 색은 단일 accent + status 4종으로 한정.

## 페르소나 산문

전체 rationale·anti-pattern은 `design-md/japanese-minimal.md` 참조.
