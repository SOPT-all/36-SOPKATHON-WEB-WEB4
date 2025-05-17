# 36-SOPKATHON-WEB-WEB4

### 서비스 이름
`마실지도`

### 서비스 소개
`마실지도`는 경상남도의 지역별 전통주를 기반으로 사용자의 취향에 맞는 술을 추천하는 유형 테스트 서비스입니다. 단순한 성향 테스트를 넘어, 지역 특산품인 전통주를 소개하고, 청년 창업자 및 지역 소상공인을 자연스럽게 홍보하는 역할을 합니다.

경상남도는 타 지역에 비해 유명 전통주가 부족한 편이며, 현재 전통주 육성과 청년 창업 지원 정책이 활발히 진행 중입니다. 본 서비스는 전통주를 매개로 각 지역의 매력을 전달함과 동시에 전통주를 활용한 청년 창업의 가능성을 함께 소개함으로써 지역 경제 활성화와 청년 유입에 기여할 수 있습니다.

고령화가 심화된 경상남도에서, 젊은 창업 인구를 늘리고 지역 특산물의 가치를 재조명하는 것은 매우 중요한 과제입니다. 이 테스트는 단순 재미를 넘어서 경남 전통주의 인식 확산, 지역 특성 소개, 청년 창업 모델 홍보라는 실질적인 효과를 지향합니다.

### 주요 기능

- **유형 테스트 기반 추천**  
  사용자의 취향과 성향에 따라 어울리는 전통주를 추천합니다.

- **경상남도 지역별 전통주 매칭**  
  각 전통주와 연관된 지역 정보를 함께 제공하여, 지역 문화 및 특산물에 대한 흥미를 유도합니다.

- **지역 홍보 및 관광 유도**  
  전통주 생산지 정보를 통해 지역 관광 정보나 근처 명소에 대한 호기심을 유도합니다.


### 기대 효과

- 경상남도의 전통주 인식 확산 및 지역 브랜드화
- 고령화 지역에 대한 청년 유입 가능성 제고
- 경남 각 지역의 관광 및 문화적 관심 유도
- 테스트를 통한 친근한 방식의 공공 인식 캠페인


### 서비스 대상

- 전통주에 관심 있는 MZ 세대
- 경남 지역에 관심 있는 일반 사용자
- 전통주 브랜드에 도전해보고자 하는 청년 창업가
- 지역 기반 마케팅에 관심 있는 지자체 및 단체

<br/>

# ⚒️ Developer
|엄경호</br>[@maehwasoo](https://github.com/maehwasoo)|박소이</br>[@soyyyyy](https://github.com/soyyyyy)|정희연</br>[@heeyyeon](https://github.com/heeyyeon)|조성하</br>[@earl9rey](https://github.com/earl9rey)|
|:---:|:---:|:---:|:---:|
|<img src = "https://avatars.githubusercontent.com/u/63665123?v=4" width ="250">|<img src = "https://avatars.githubusercontent.com/u/90364636?v=4" width ="250">|<img src = "https://github.com/user-attachments/assets/069a27d6-ac46-411e-8dfd-bd01d8ce2cab" width ="250">|<img src = "https://avatars.githubusercontent.com/u/129039817?v=4" width ="250">|
|`Register 기능 구현/API 연동`|`Test UI 구현/API 연동`|`Result UI 구현/API 연동`|`Part UI 구현/API 연동`|

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
<img src="https://github.com/user-attachments/assets/63e7260a-a0c1-41f3-9f48-3f0c2df98497" width="400px"/>

- 공동 작업 시에도 각자 브랜치에서 작업 후 main에 PR을 날린다.
- Issue 없이도 빠르게 진행할 수 있도록 구조를 단순화한다.
- conflict가 없는 상태에서만 main으로 머지한다.

> 해커톤 진행 과정에서는 빠른 개발과 커뮤니케이션이 중요하므로, 불필요한 브랜치/이슈 관리는 생략하고 **"작업 → 커밋 → PR" 루틴에 집중**한다.
<br/>

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

### 웹 4조 
![image](https://github.com/user-attachments/assets/d0b9fa99-c975-43b2-a65b-27a58659c3f5)
