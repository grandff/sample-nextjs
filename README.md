# Nextjs Introduction

# 0. Basic
- npx create-next-app@latest
- 실행 명령어는 npm run dev

# 1.0 Library vs Framework
1) pages 안에 있는거 전부 삭제해보기
2) 라이브러리와 프레임워크의 차이점에 대해 정확히 알아야함
    - 라이브러리란 ? 내가 불러와서 사용하는거
    - 프레임워크란 ? 프레임워크가 내 코드를 불러오는거
    (1) pages를 다 삭제하고 index.js 파일을 만들어서 return 아무거나 해보기
    (2) 그러고 실행하면 localhost:3000 basic 경로에 index.js가 호출됨(next js의 특징인듯?)
    (3) about.js를 만들고(함수 이름은 아무거나) localhost:3000/about을 치면 about.js의 내용이 나옴
3) 정리하자면 리액트는 라이브러리, nextjs는 프레임워크
4) nextjs에 맞게 코드를 짜야함

# 1.1 Pages
1) pages 폴더 안에 js를 만들면 next js가 파일의 이름을 가져다가 url로 씀
    - 파일의 이름은 그대로 쓰지만 파일 안의 component의 이름은 중요하지 않음
    - export default만 잘해주면 됨
2) 예외 사항은 있음
    - index는 무조건 최초 홈으로만 이동함
3) jsx를 쓴다면 react를 import 안해도 됨(물론 useState, useEffect를 쓸 경우에는 해야함. import React from "react" 이런식으로만 안해도 된다는거임)

# 1.2 Static Pre Rendering
1) 앱에 있는 페이지들은 server side에서 rendering 되서 사용자에게 보여짐
2) 만약 자바스크립트를 끄면 안되는 리액트나 인터넷속도를 느리게 할 경우 페이지 로딩이 느려지는건 전부 client side rendering이 되서 그런거임
	- next는 이런 문제 해결
3) hydration이 가능함
	- hydration : react.js를 프론트엔드 안에서 실행
	- SEO에도 좋다고함 (meta tag 설정하는걸 말하는듯)
	
# 1.3 Routing
1) next.js 는 next/link와 a를 결합해서 사용함
2) a에는 href가 들어가면 안됨. 클래스나 기타 attribute는 a tag에 적어야함
3) next/router를 통해 location에 대한 정보를 얻을 수 있음

# 1.4 CSS Modules
1) css 적용을 위해 module.css 사용
2) class 적용할때는 className으로 사용
3) 만약 두개 이상을 쓰려면 `${}` 로 연결하거나 join으로 연결하는 방법이 있음

# 1.5 Styled JSX
1) next.js 고유 방법으로 style 태그 안에 jsx prop을 추가해주면 됨
2) 각 컴포넌트별로 독립되어있기때문에 서로 영향을 안미침

# 1.6 Custom App
1) Global Styles 추가하려면 _app.js 에 추가하기
2) 그 외 공통 컴포넌트를 여기다가 추가하면 됨
3) 일반 css 파일도 import 가능(pages에 하려면 module.css 만 가능함. 그외는 에러남.)


# 2.0 Patterns
1) 가장 많이 쓰는 패턴인 Layout 패턴 사용
2) components에 Layout을 만들고 공통으로 사용하는 모듈들을 다 넣을거임
3) 헤더를 처리해줄 Seo.js 생성
	- 실습때는 next-seo library 사용해보기
4) index, about에 seo 추가하기
5) _app.js 에 Layout 컴포넌트를 추가하면 기본 구성 완료
- style 까지만 추가하고 커밋


# 2.1 Fetching Data
1) themoviedb 에서 데이터 가져올거임
	- api key 발급 해놨음
2) index 에서 list 보여지도록 처리

# 2.2 Redirect and Rewrite
1) API Key를 숨겨야함
2) Next.js 는 기본적으로 Redirect와 Rewirte를 제공함
3) REdirect는 말그대로 리다이렉트하는거고 Rewrite는 다른 url로 덮을 수 있음
4) 둘다 config.js 에 추가 가능
5) config 파일을 수정하면 서버재시작을 필수로 해야함
6) 만약 여러개 파라미터가 들어간다면? &를 인코딩해버리니까
	- encodeURIComponent("&") 사용
	
# 2.3 Server Side Rendering
1) server 단에서 렌더링을 끝내고 화면에 보여지도록 server side rendering 사용
2) getServerSideProps 사용 이름은 무조건 고정

# 실습 과정
## 사전준비 목록
#### api 
- 대신증권 API 사용하기
#### 레이아웃
#### 디자인
#### 기타 참조

### 주식 API 사용해서 하기 
### 레이아웃은 tailblocks를 사용해서 작업
### Incremental Static Regenration 사용해보기 (아니면 그냥 Static Regenration만 ?)
### SWR을 사용해서 데이터 fetch하기
### SEO 설정
### chart나 이미지 사용해보기 (이미지는 next로 무조건)
### github 로그인 기능까지 만들어보기 (iron-session ? next-auth ?? )
### vercel 배포까지

# 이거 샘플은 stackblitz에서 해보기
# 심화 과정 내가 찾아봐야할것들?
- Static Regenration
    -> 뭔가 정적으로 데이터 다루는거 같음
- Server Side Rendering(심화가 있나?)
- Incremental Static Regeneration
    -> https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    -> https://merrily-code.tistory.com/173
- Stateless serverless authentication
    -> https://nextjs.org/docs/authentication
    -> https://next-auth.js.org/getting-started/example
- PlanetScale's Serverless SQL Database with Prisma
- Using Cloudflare(streaming, image hosting)
- TailwindCSS v3 UI Build
	- npx create-next-app -e with-tailwindcss nextjs-tailwind
	- https://cpro95.tistory.com/531
	- 위에 링크에 설명 개잘되어있음 반응형 네비게이션 메뉴 만드는거
	- https://tailblocks.cc/
	- 무친타일블록스 여기서 다짜줌 개사기
- React 18 functions
    - Suspense, SSR Streaming, React Server Components