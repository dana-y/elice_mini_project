# elice_mini_project

### 사용한 skill

- axios
- react-query
- styled-component
- recoil
- lodash (메소드)

### 트러블 슈팅

- 무료, 유료 카테고리 필터링 하는 부분에서 무료와 유료의 상태변화 에러가 남.

- 10페이지에서 다음페이지로 이동시 데이터가 누락됨

- 리액트쿼리로 debounce를 진행하려 했는데, lodash 메소드를 적용해보았더니 debounce로 api호출은 성공했지만 브라우저의 데이터가 리렌더링 되지 않는다.

  이유: 전역변수인 searchInput값은 실시간으로 업데이트 해주고, api함수에만 debounce를 걸었는데 리액트쿼리의 키값에 searchInput 변수값을 넣어줘서 값이 변할 때마다 실시간으로 렌더링 되는 것을 막기 위해 키값에서 제외했다. 이 때문에 브라우저 상의 데이터는 리렌더링되지 않았다.

  해결한 방법: lodash를 사용하지 않고 커스텀hook을 만들어주는 방법이 있으나, searchInput값에도 debounce를 걸어주고 쿼리키에도 추가해주는 방법으로 해결했다.
