
## 프로젝트 구조

* src
    * layouts
        * controller 역할로 router 기능이 들어있는 components
    * views
        * page 의 전체적인 layout 부터 세세한 부분까지 담당
    * components
        * 기능 단위로 파편화 시켜서 놓을 components 들을 모아둘곳
    * assets
        * static file 또는 global style 등등을 모아 놓는곳
    * services
        * 자주 사용할만한 function 들을 모아두어 만들곳
    * api
        * 비동기 통신을 파편화 시켜 놓는곳
    * stores
        * reducer 를 정의해 둔곳
    * actions
        * action 들을 정의해 둔곳
    * sagas
        * redux-saga 를 정의해 둔곳
    * .env
        * 환경변수
