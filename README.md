# elice_mini_project

### 사용한 skill

- react
- axios
- react-query
- styled-component
- recoil
- lodash (메소드)

<br>

---

## 트러블 슈팅

<br>

#### 무료, 유료 카테고리 필터링 하는 부분에서 무료와 유료의 상태변화 에러가 남

- 이유: 필터링하는 filter_conditions를 어떻게 세팅해야 하는지 감이 안와서 자꾸 틀린 return값이 나왔습니다.

- 해결방법: 카테고리의 선택 유무는 recoil로 true, false 값으로 상태관리 해주고 이를 filter_conditions으로 치환해주는 selector함수를 만들어서 사용했습니다.

<br>

#### 10페이지에서 다음페이지로 이동시 데이터가 누락됨

- 이유: 페이지넘버와 배열 내 페이지 index 넘버가 헷갈려 잘못된 코드를 작성했습니다.

- 해결방법: offset에 페이지넘버-1을 곱해줘야 했는데 페이지넘버를 곱해줘 10페이지에서 offset이 오버된 값으로 들어갔습니다.

- 코드를 수정하니 이번엔 클릭하는 페이지의 데이터가 한박자 느리게 나오는 에러가 발생했습니다.

<br>

#### 클릭하는 페이지의 데이터가 한박자 느리게 나옴

- 이유: 현재 페이지 넘버와 offset 넘버를 둘다 전역변수로 취해주면서 리액트쿼리에 키 값으로 넣어주니 혼선이 생긴 것 같습니다.

- 해결방법: recoil의 selector로 offset을 계산해주고 전역변수로는 페이지넘버만 관리하게 코드를 수정하니 해결됐다.
  <br>~~아직 완벽하게 왜 이 문제가 생겼고 왜 해결됐는지는 모르겠습니다.~~

#### 리액트쿼리로 debounce를 진행하려 했는데, lodash 메소드를 적용해보았더니 debounce로 api호출은 성공했지만 브라우저의 데이터가 리렌더링 되지 않음

- 이유: 전역변수인 searchInput값은 실시간으로 업데이트 해주고, api함수에만 debounce를 걸었는데 리액트쿼리의 키값에 searchInput 변수값을 넣어줘서 값이 변할 때마다 실시간으로 렌더링 되는 것을 막기 위해 키값에서 제외했습니다. 이 때문에 브라우저 상의 데이터는 리렌더링되지 않았습니다.

- 해결한 방법: debounce를 구현하기 위해 lodash를 사용하지 않고 커스텀 hook을 만들어주는 방법이 있으나, searchInput값에도 debounce를 걸어주고 쿼리키에도 searchInput 전역변수값을 추가해주는 방법으로 해결했습니다.

<br>

---

## 도전하고 싶은 부분

- 여전히 recoil이 익숙해서 recoil을 사용하게 되었는데, redux + redux saga 조합으로도 코드를 작성해보고 싶습니다.
- url 쿼리의 원리와 사용법을 더 공부해서 능숙하게 다루고 싶습니다.
- 에러처리가 프론트엔드에서 매우 중요함에도 개발을 할 때 신경을 덜 쓰게 되는 것 같습니다. 에러처리를 공부하는 시간을 가져야 겠다고 생각했습니다.

---

<br>

### 폴더트리

```
elice
└─ src
   ├─ apis
   │  ├─ cards.js
   │  └─ index.js
   ├─ App.js
   ├─ components
   │  ├─ card
   │  │  ├─ Card.jsx
   │  │  └─ style.js
   │  ├─ categories
   │  │  ├─ Categories.jsx
   │  │  └─ style.js
   │  ├─ courseCards
   │  │  ├─ CourseCards.jsx
   │  │  └─ style.js
   │  ├─ pagination
   │  │  ├─ Pagination.jsx
   │  │  └─ style.js
   │  ├─ searchArea
   │  │  ├─ SearchArea.jsx
   │  │  └─ style.js
   │  └─ style.js
   ├─ GlobalStyles.js
   ├─ index.js
   ├─ pages
   │  └─ searchPage
   │     ├─ SearchPage.jsx
   │     └─ style.js
   ├─ store
   │  └─ index.js
   └─ theme.js

```
