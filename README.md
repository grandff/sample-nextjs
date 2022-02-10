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
- React 18 functions
    - Suspense, SSR STreaming, React Server Components