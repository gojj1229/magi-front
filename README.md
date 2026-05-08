# magi-front

**Magi Frontend Design Assets** — DESIGN.md 5종 + shadcn registry v4 5 preset.

다른 프로덕트(seolmyung·kanpo·prub·jp-otc·exit-sys 등)가 *cp 한 줄* 또는 *shadcn install 한 줄*로 가져갈 수 있는 디자인 자산 레포. 위키가 아니며 코드도 직접 호스팅하지 않는다. 페르소나 산문(rationale) + 토큰(CSS 변수 + DTCG)만 둔다.

---

## 3-Layer 아키텍처

```
[Knowledge]  magi-wiki content/*           ← Pinecone 시맨틱 검색 (왜 이 결정인가)
[Assets]     magi-front (이 레포)          ← DESIGN.md + shadcn registry (Vercel)
[Interface]  ~/.claude/skills/front/       ← /front 슬래시 스킬 (단일 진입점)
```

각 레이어는 명확히 분리된다.

- **Knowledge** — 결정의 *근거*와 합의 흔적. magi-wiki entity/decision/incident.
- **Assets** — 실행 가능한 *코드 자산*. 이 레포가 그것.
- **Interface** — 사람과 에이전트의 *진입점*. `/front` 스킬이 페르소나 합의를 강제한 뒤 이 레포의 자산을 호출한다.

---

## 사용 패턴

### 1) DESIGN.md cp (사람이 읽고 적용)

```bash
# 페르소나 한 종 가져오기
curl -o ./DESIGN.md \
  https://magi-front.vercel.app/design-md/clinical.md

# 또는 GitHub raw
curl -o ./DESIGN.md \
  https://raw.githubusercontent.com/gojj1229/magi-front/main/design-md/clinical.md
```

DESIGN.md 8섹션 표준(brand·colors·type·spacing·radius·shadows·components·rationale)을 따른다. frontmatter에 hex/font/scale을 박아 둔다.

### 2) shadcn registry install (CLI가 토큰 주입)

```bash
# 페르소나 토큰을 프로젝트에 install (CSS 변수 + theme.css)
npx shadcn@latest add https://magi-front.vercel.app/r/clinical
```

각 preset은 `registry:base` 타입으로 묶여 있어 한 번에 CSS 변수 + theme.css가 주입된다. Tailwind v4 `cssVars.theme/light/dark` 스키마 준수.

> Vercel 배포 URL은 첫 deploy 후 README가 한 번 갱신된다. 도메인 연결 전까지는 위 패턴의 host만 다르다.

---

## 페르소나 5종

| persona | mood | primary use | language |
|---------|------|-------------|----------|
| **clinical** | 정제 / 신뢰 | 의료·한의원 (seolmyung) | KR |
| **editorial** | 지식 / 가독성 | 위키·교육 (kanpo) | JP-KO |
| **community** | 따뜻함 / 사회성 | 한방 라이프 (prub) | KR |
| **japanese-minimal** | 미니멀 / 약국 | OTC·약국 (jp-otc) | JP |
| **luxury-trust** | 럭셔리 / 거래신뢰 | 카이토리 (exit-sys) | KR-JP |

각 페르소나 산문은 `design-md/<persona>.md`에서, 코드 자산은 `registry/styles/<persona>/`에서 본다.

---

## 디렉토리 구조

```
magi-front/
├── design-md/                  # DESIGN.md 5종 (사람이 읽는 산문)
│   ├── clinical.md
│   ├── editorial.md
│   ├── community.md
│   ├── japanese-minimal.md
│   └── luxury-trust.md
├── registry/                   # shadcn registry v4 (기계가 install)
│   ├── registry.json           # 루트 매니페스트 (5 preset 인덱싱)
│   └── styles/
│       ├── clinical/{registry-item.json, theme.css, tokens.json, README.md}
│       ├── editorial/...
│       ├── community/...
│       ├── japanese-minimal/...
│       └── luxury-trust/...
├── public/                     # Vercel 정적 호스팅 루트 (빌드 산출물)
│   ├── design-md/              #   ↳ design-md/ 미러
│   └── r/                      #   ↳ registry-item.json 미러
├── scripts/
│   ├── build.mjs               # design-md/registry → public/ 미러
│   └── validate.mjs            # DESIGN.md ↔ registry 토큰 1:1 검증
├── vercel.json
└── package.json
```

`design-md/<persona>.md`의 frontmatter가 **단일 소스**이고 `registry/styles/<persona>/`의 토큰은 그 미러다. `npm run validate`로 두 쪽이 어긋나지 않는지 본다.

---

## 권장 진입점: `/front` 슬래시 스킬

직접 `curl` / `npx shadcn add`도 가능하지만, **권장 사용법**은 글로벌 스킬 `/front`다.

```
/front
```

`/front`는 다음을 강제한다.

1. 어떤 페르소나로 갈지 사용자와 합의 (페르소나 부재 = generic AI aesthetic 함정 차단)
2. magi-wiki entity 시맨틱 검색으로 *왜* 그 페르소나인지 확인
3. magi-front에서 DESIGN.md를 cp하거나 registry를 install
4. 구현 단계로 넘김

상세는 `~/.claude/skills/front/SKILL.md`.

---

## magi-wiki 참조 (Knowledge 레이어)

각 페르소나의 결정 근거·과거 incident·연관 컨셉은 magi-wiki에 박제된다. 정식 ingest 후 entity URL이 채워진다.

- `entity/magi-front-asset-repo.md` (이 레포 자체) — *예정*
- `entity/persona-clinical.md` / `persona-editorial.md` / `persona-community.md` / `persona-japanese-minimal.md` / `persona-luxury-trust.md` — *예정*
- `incident/exit-sys-persona-vacancy-2026-05-08.md` — 페르소나 부재 함정의 실측 사례
- `decision/front-skill-charter-2026-05-08.md` — 옵션 C(지식·자산 분리) 채택

---

## 라이선스

[MIT](./LICENSE) © 2026 gojj1229 (Magi System)
