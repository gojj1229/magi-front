# clinical

정제된 한국 의료 페르소나 — `deep teal #0F6E7C` · 신뢰·가독성 우선.

## Install

```bash
npx shadcn@latest add https://magi-front.vercel.app/r/clinical
```

## 산출물

- `theme.css` → `app/globals.css`에 주입 (CSS 변수 + light/dark)
- `cssVars.theme/light/dark` (registry-item.json에 동일 토큰)

## 단일 소스 (Source of Truth)

`design-md/clinical.md` frontmatter가 마스터. 이 폴더의 토큰은 그것의 미러다. 어긋나면 `npm run validate` FAIL.

## 페르소나 산문

전체 rationale·anti-pattern은 `design-md/clinical.md` 참조. 이 README는 install용 한 장.
