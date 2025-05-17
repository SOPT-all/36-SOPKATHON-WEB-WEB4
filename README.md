# 36-SOPKATHON-WEB-WEB4

```
~~ 서비스입니다. 
```
//슬라이스1

<br/>

# ⚒️ Developer
|엄경호</br>[@maehwasoo](https://github.com/maehwasoo)|박소이</br>[@soyyyyy](https://github.com/soyyyyy)|정희연</br>[@heeyyeon](https://github.com/heeyyeon)|조성하</br>[@earl9rey](https://github.com/earl9rey)|
|:---:|:---:|:---:|:---:|
|<img src = "https://avatars.githubusercontent.com/u/63665123?v=4" width ="250">|<img src = "https://avatars.githubusercontent.com/u/90364636?v=4" width ="250">|<img src = "https://github.com/user-attachments/assets/069a27d6-ac46-411e-8dfd-bd01d8ce2cab" width ="250">|<img src = "https://avatars.githubusercontent.com/u/129039817?v=4" width ="250">|
|`분담1`|`분담2`|`분담3`|`분담4`|

<br/>

# 📘 Tech Stack
| Category | Stack |
|----------|-------|
| Library | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) |
| Styling | ![Emotion](https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white) |
| Data Fetching | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) |
| Package Manager | ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white) |
| Formatting & Linting | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| Version Control      | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) |

<br/>

# 📂 Foldering
```
📦src/          
├── 🗂️apis/
├── 🗂️assets/
├── 🗂️components/
│   └── 🗂️@common
├── 🗂️constants/
├── 🗂️hooks/
│   └── 🗂️queries
├── 🗂️pages/
├── 🗂️router
├── 🗂️styles/
├── 🗂️types/
└── 🗂️utils/

```
<br/>

# ✳️ Convention
## Coding Convention
### 1. Default 네이밍 
1. 컴포넌트 / class  `PascalCase`
2. 폴더명  `carmelCase`  
3. 파일 명 *(컴포넌트 제외)*   `carmelCase`  
4. 변수, 함수  `carmelCase`
5. 파라미터  `carmelCase`
6. 상수  `BIG_SNAKE_CASE`

### 2. 변수 
1. 변수 선언 시 `var`는 사용하지 않는다.
   - 되도록 `const`를 사용. 필요한 경우에 `let`을 사용한다.
2. 전역 변수는 최대한 지양한다.
3. 구조 분해 할당은 적극적으로 활용한다.     
4. 변수를 조합해서 문자열 만들때는 무조건  `템플릿 리터럴(`: 벡틱)`을 이용한다.
5. 변수와 함수는 의미를 잘 이해할 수 있도록 네이밍한다.
   - 만약 추가적인 이해가 필요하다면 주석을 통해 이해를 돕는다.

### 3. 함수

1. 함수는 기본적으로 화살표 함수를 사용한다.
2. 변수와 함수는 의미를 잘 이해할 수 있도록 네이밍한다.
3. 이벤트 핸들러 네이밍 : `handle + 기능 + 이벤트`    
4. 값이 boolean일 경우는 `is + 상태` (default)
   - 추가적으로 `can / should / has` 정도를 상황에 맞게 추가한다.
5. api 함수 `HTTP 메서드 + 명사`

### 4. 타입 (TypeScript)
1. 기본적으로 모든 타입에는 뒤에 `-Types`를 붙인다.
2. 컴포넌트 인자에 대한 타입은 컴포넌트 바로 상단에 선언한다.
   - 예외적으로 Props 타입은 `컴포넌트명+PropTypes` 
3. object는`interface`, 단일 변수는 `type`으로 선언한다.

<br/>

## Git Convention
### 1. 브랜치 전략 (총 4개, 이름별 운영)

개발 효율을 극대화하기 위해, 브랜치는 **이름 기준 개인 브랜치 4개만** 운영한다.

```
🟣 main : 배포용 브랜치 (최종 결과물만 머지)
🔵 dev : 통합 개발 브랜치

🟢 kyoungho : 개인 개발 브랜치
🟢 heeyeon : 개인 개발 브랜치
🟢 soy : 개인 개발 브랜치
🟢 sungha : 개인 개발 브랜치
```

- 공동 작업 시에도 각자 브랜치에서 작업 후 main에 PR을 날린다.
- Issue 없이도 빠르게 진행할 수 있도록 구조를 단순화한다.
- conflict가 없는 상태에서만 main으로 머지한다.

> 해커톤 진행 과정에서는 빠른 개발과 커뮤니케이션이 중요하므로, 불필요한 브랜치/이슈 관리는 생략하고 **"작업 → 커밋 → PR" 루틴에 집중**한다.


### 2. 커밋 컨벤션
`[FEAT] 공통 컴포넌트 구현`
- 형식: `[타입 대문자] 내용`
- 제한: 내용은 72자 이내

**커밋 타입 목록**

| 타입      | 설명                         |
|-----------|------------------------------|
| FEAT      | 새로운 기능 추가             |
| BUG       | 확인된 버그 명시             |
| FIX       | 버그 수정                    |
| REFACTOR  | 코드 리팩토링                |
| DOCS      | 문서 수정                    |
| STYLE     | 스타일, 포맷 (로직 변화 없음)|
| CHORE     | 기타 설정, 빌드 작업 등      |
