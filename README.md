# 💡 React Study 
react 예제들을 만들어보며 공부 하기 위한 공간입니다.<br>
https://yn40.github.io/react/


<br><br><br>
## 👀 React 개발을 위해 준비해야 할것
- node 설치
- yarm 설치 (npm을 사용해도 무방)
- vscode, webstorm 선택하여 설치 

<br><br>
## 👀 create-react-app
페이스북에서 공식적으로 만든 react 기반의 프로젝트 개발환경을 구성해주는 모듈입니다.<br>
react 웹 개발용 보일러플레이트(Boilerplate)이다.<br>
es가 최신버전으로 설치되어 하위브라우저 지원이 안되는 경우가 있어  이 경우 babel을 통해 설정할수있습니다. 
<br>
### `npx create-react-app 페키지명 or .`
패키지명 대신 . 입력하면 현제 디렉토리에 설치 됩니다.<br>
해당 명령어를 실행하면 최신 패키지가 설치 됩니다.<br>

### sass 사용하려면 설치해야한다
npm install node-sass sass-loader

### `npm start`
리엑트 프로젝트 시작

### `npm run build`
리엑트 프로젝트를 배포하기 위해 빌드 
### `npm run eject`
create-react-app으로 설치하면 웹팩같은 설정 파일이 숨어있다.<br>
따로 설정하기를 원한다면 해당 명령어를 실행하면 설정파일이 밖으로 빠진다.

<br><br>
## 👀 절대 경로 설정하기
root 디렉토리에 jsconfig.json 생성 후 아래 코드를 입력해주고 vscode 재로드
```java
{
  "compilerOptions": {
      "baseUrl": "src"
  },
  "include": [
      "src"
  ]
}
```
```java
import Header from 'components/todo/Header.js';
```

<br><br>
## 👀 Context Api를 활용한 상태 관리
- 만약 Context Api를 쓰지 않는다면, App 컴포먼트에서 뭐든걸 컨트롤 해야한다.<br>
중간에 컴포먼트를 거치는 경우 중간에서 사용하지 않음에 불구하고 app에서 부터 가장 하위에 있는 컴포먼트까지 이벤트를 보내야한다는 문제가 있음. 

- 사용하는 경우는 app에서 아래 컴포먼트에게 값을 내려주지 않음<br>
대신에 context를 만들어서 여기 각 컴포먼트에서 끌어다가 사용할수있게 할수있다. <br>
이프로젝트에서는 상태 업데이트에 필요한 엑션들을 만들고 필요한 값만 넣을 예정. 

- Context Api 해당 프로젝트에서 작은 프로젝트에서는 딱히 필요는 없지만 큰프로젝트에는 엄청나게 유용해서 사용된다. 

<br><br><br><br>
## 👀 props
부모로 부터 객체로 값을 받아오고, 아래 처럼 기본값 세팅이 가능  <br>
xxx.defaultProps={name:'기본'}; 
### `childern`
컴퍼먼트 안에 내용을 쓸때 props로 childern을 받아서 넣어주면 사용가능하다<br>
```java
<Test>테스트</Test>

const Testcodo = ({childern}) => {...
  return <div>{childern}</div> //결과는 테스트가 노출
}
```
  

<br><br><br><br>
## 👀 메서드
### `useState()`
hooks 중 하나로 컴포먼트에서 상태관리를 할수있다. 
```java
const [number, setNumber] = useState(0);

//본래는 아래처럼 처리를해야하지만 간단하게 쓸수있다.
//배열 비구조화 할당을 통하여 각 원소를 추출한것
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];
}
```

<br><br><br><br>
## 👀 Redux 
- 가장많이 사용하는 상태관리 라이브러리<br>
- 비동기 작업을 체계적으로 관리 가능 <br>
- 요용한 함수와 hooks 지원가능과 기본적인 최적화 이미되어있음

### `리덕스 사용`
- 프로젝트 규모가 큰경우
- 비동기작업이 많은 경우
- 리덕스가 편한가요?''


### `Action`
```java
  tyoe :"ADD_TODO",
  data :{
    id : "1"
    ...
  }
```
### `리듀스`
변화를 일으키는 함수로 액션을 만들어 발생시키면 현재상태와 전달받은 액션 객체를 파라미터로 받고 그값을 참고하여 새로운 상태를 만들어서 반환한다
### `스토어`
보통 한개의 애플리케이션에 스토어 1개만 만든다<br>
프로젝트에 리덕스를 적용하기 위하여 스토어를 만든다. 현재 애플리케이션 상태와 리듀서 및 중요한 내장함수를 갖고 잇다.

### `dispatch()`
스토어 내장함수로 호출되면 스토어는 리듀스 함수를 실행시켜 새로운상태를 만듬

### `불변성을 지켱야함`
### `concat()`
인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새배열을 반환하는것

### `filter()`
요소를 걸러내어 배열로 true/false 반환, 없으면 빈 배열

<br><br>
## 👀 Drag & Drop
공식 : https://react-dnd.github.io/react-dnd/about
### `설치`

```
  npm install --save-dev react-dnd react-dnd-html5-backend
```
<br><br>
## 👀 github 페이지 배포

### `설치`
참고 : https://www.hohyeonmoon.com/blog/react-js-github-pages-deploy/


<br><br><br><br>



## 📌 처음 듣는 개발 용어?
### `보일러플레이트`
javaScript나 html에서의 보일러플레이트라고 하면 보통 크로스 브라우징과 호환성을 위한 Modernizr, polyfill, Normalize 등이 적용되어 있는 템플릿 같은 형태로 많이 사용된다.\
반복되지만 자주쓰이는 형태를 자동화한다는 것이 핵심
