* 개발 환경
    * node v19.8.1
    * typescript v4.9.5
    * npm 9.5.1


* react+typescript 프로젝트 생성
### `npx create-react-app todo_demo --template typescript`


* 주요 라이브러리 추가
    * Prettier
    ### `npm install --save-dev prettier`

    * ESLint
    ### `npm install --save-dev eslint`

    * emotion
    ### `npm install --save @emotion/react @emotion/styled`


* 실행
    * 라이브러리
        * 최초 라이브러리 설치
        ### `npm install`
        * 추가 라이브러리 설치
        ### `npm ci`

    * prettier
        * 체크
        ### `npm run format`
        * 수정
        ### `npm run format:fix`

    * ESLint
        * 체크
        ### `npm run lint`
        * 수정
        ### `npm run lint:fix`

    * 어플리케이션 실행
        * normal
        ### `npm start`
        * http://localhost:3000 브라우저 확인
        * test
        ### `npm test`
        * https://facebook.github.io/create-react-app/docs/running-tests
        
    
    * 빌드
        ### `npm run build`
        * https://facebook.github.io/create-react-app/docs/deployment


* 참고
    * react https://reactjs.org/
    * typescript https://www.typescriptlang.org/
    * Prettier https://prettier.io/
    * ESLint https://eslint.org/
    * emotion https://emotion.sh/docs/introduction
