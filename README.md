# 알쏭달쏭 용어사전

Hugo로 만든 정적 용어사전 사이트입니다. 로그인이나 데이터베이스 없이, 마크다운 파일과 git만으로 콘텐츠를 관리합니다.

## 폴더 구조

```
content/terms/      # 용어 글 (.md 파일 하나 = 용어 하나)
content/about.md    # 사이트 소개
content/contact.md  # 문의하기
content/privacy.md  # 개인정보처리방침
content/terms-of-service.md  # 이용약관
content/disclaimer.md        # 면책고지
layouts/            # 페이지 디자인(템플릿)
assets/css, assets/js  # 스타일 및 스크립트
static/              # 이미지 등 그대로 복사되는 파일
hugo.toml            # 사이트 전체 설정
.github/workflows/hugo.yml  # 자동 빌드·배포 설정
```

## 용어 추가/수정하는 법

가장 쉬운 방법은 Claude Code에게 "OO 용어 추가해줘" 라고 요청하는 것입니다. 직접 만들고 싶다면:

1. `content/terms/` 아래에 새 `.md` 파일을 만듭니다 (예: `content/terms/example.md`).
2. 아래 형식(Front Matter)을 맨 위에 넣습니다.

   ```markdown
   ---
   title: "용어 이름"
   description: "검색 결과와 메타 태그에 쓰일 한두 문장 설명"
   summary: "카드에 보여줄 짧은 요약"
   date: 2026-07-10
   lastmod: 2026-07-10
   category: "분류명"
   draft: false
   ---

   ## 한눈에 보는 정의

   내용을 작성합니다.

   ## 관련 용어

   {{< term "다른용어파일이름" >}}
   ```

3. 다른 용어를 연결하고 싶으면 `{{< term "슬러그" >}}` 형태로 쓰면 자동으로 링크가 걸립니다. 슬러그는 그 용어 파일의 파일명(확장자 제외)입니다.
4. 밑줄을 넣고 싶으면 `{{< underline >}}밑줄 텍스트{{< /underline >}}` 를 사용합니다.

### 카테고리 (`category`)

용어사전 페이지가 카테고리별로 묶여서 보이도록, `category` 값은 아래 8개 중 하나를 그대로 사용합니다. 새 분야의 용어가 많아지면 이 목록에 새 카테고리를 추가할 수 있습니다.

- 맞춤법
- 경제·금융
- 보안
- 클라우드·개발
- AI
- 반도체
- 경영·비즈니스
- 바이오·제약

## 로컬에서 미리보기 (선택 사항)

Hugo를 설치한 뒤 저장소 폴더에서:

```bash
hugo server
```

를 실행하면 `http://localhost:1313` 에서 미리 볼 수 있습니다. (검색 기능은 GitHub Actions가 배포할 때 자동으로 만들어지므로, 로컬에서는 검색이 동작하지 않을 수 있습니다 — 정상입니다.)

## GitHub Pages로 배포하는 법 (처음 한 번만 설정)

1. GitHub에서 이 저장소 페이지로 이동합니다.
2. 상단 메뉴에서 **Settings** 를 클릭합니다.
3. 왼쪽 메뉴에서 **Pages** 를 클릭합니다.
4. **Build and deployment** 항목의 **Source** 를 `Deploy from a branch` 가 아니라 **"GitHub Actions"** 로 선택합니다.
5. 이 브랜치를 `main`으로 병합(merge)하면 `.github/workflows/hugo.yml` 이 자동으로 실행되어 사이트를 빌드하고 배포합니다.
6. 저장소의 **Actions** 탭에서 진행 상황을 확인할 수 있고, 완료되면 `https://idea-add.github.io` 에서 사이트를 볼 수 있습니다.

## 커스텀 도메인으로 나중에 바꾸는 법

1. `static/CNAME` 파일을 만들고 그 안에 도메인 이름 한 줄만 적습니다 (예: `example.com`).
2. `hugo.toml` 의 `baseURL` 값을 새 도메인으로 바꿉니다.
3. GitHub 저장소의 **Settings → Pages** 에서 Custom domain 항목에 같은 도메인을 입력합니다.
4. 도메인을 구매한 곳(가비아, 카페24 등)에서 안내하는 A 레코드 또는 CNAME 레코드를 등록합니다.

## 문의 이메일 실제 주소로 바꾸기

지금은 `contact@example.com` 이 예시로 들어가 있습니다. 실제 이메일 주소로 바꾸려면:

- `content/contact.md` 파일 안의 이메일 주소
- `hugo.toml` 의 `contactEmail` 값

두 곳을 실제 주소로 수정하면 됩니다.

## 용어 추가 요청 게시판

방문자는 헤더의 **용어 요청** 메뉴(또는 `/terms/` 페이지 상단 링크)를 통해 GitHub Issue로 용어 추가를 요청할 수 있습니다. GitHub 계정이 있으면 누구나 작성할 수 있습니다.

- 요청 글에 링크가 포함되어 있으면 `.github/workflows/term-request-filter.yml` 이 자동으로 감지해 안내 댓글을 남기고 닫습니다 (광고/스팸 방지).
- 별도의 관리자 로그인 페이지는 만들지 않았습니다. 저장소의 **Issues** 탭 자체가 관리 화면입니다 — 요청을 확인하고, 반영하기로 했으면 Claude Code에게 "이 요청 용어 추가해줘"라고 하거나 직접 `content/terms/`에 파일을 추가한 뒤, 해당 Issue를 닫으면 됩니다.

## 우클릭/복사 제한에 대하여

방문자의 우클릭 메뉴와 본문 복사를 막는 기능이 켜져 있습니다 (`assets/js/main.js`). 이는 완전한 보안 수단이 아니라 저작권 보호를 위한 최소한의 장치이며, 검색창 등 입력 요소에는 적용되지 않습니다.
