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

# 심화 과정 내가 찾아봐야할것들?
- Static Reneration
- Server Side Rendering(심화가 있나?)
- Incremental Static Regeneration
- Stateless serverless authentication
- PlanetScale's Serverless SQL Database with Prisma
- Using Cloudflare(streaming, image hosting)
- TailwindCSS v3 UI Build
- React 18 functions
    - Suspense, SSR STreaming, React Server Components