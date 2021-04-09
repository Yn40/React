# 💡 Strapi application

strapi를 황용하면 코드 한줄 없이 rest api서버를 구축가능하다. <br>
react 공부하다 보면 데이터도 db에 저장하고 싶고, 회원가입 기능도 넣고 싶었는데, 토이 프로젝트에 적용하면 대박이다 싶어서 한번 살짝 공부해봄
<br><br>

`* mongodb 연동하고 heroku로 배포 예정`
<br><br>

- Strapi Dosc - https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html 

- mongodb 클라우드 서버 - https://www.mongodb.com/

- heroku 서버 - https://dashboard.heroku.com/

- 참고 사이트 - https://puzzle-puzzle.tistory.com/entry/strapi-strapi%EC%99%80-mongodb-atlas-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0

<br><br><br><br>

## 🎈 mongdb 
nosql 대표 db로 무료 클라우드를 이용해서 사용 가능하다
<br><br>
## 🎈 heroku
git을 이용하여 배포하는 서버로 사용시만 구동된다. <br>
역시 무료 사용 가능<br><br><br>


## 👀 Strapi 설치
--quickstart 하면 기본 sqLite 설치 된다.<br> 
해당 명령어를 사용하지 않으면 db를 선택가능하다. <br>
mongodb를 바로 연결하려 했는데 안되서 일단 quickstart로 설치 후 수동으로 연동 예정 <br>

```java

npx create-strapi-app 프로젝트이름 --quickstart

```

설정이 끝나면 자동으로 오픈되는데, 개발자용으로 설정을 변경해야 npm start 했을때 테이블 추가 수정이 가능함
<br><br><br>
## 👀  develop 모드로 변경하기! - 설정 파일 수정
`package.json`<br>
딱히 start로 작동하지 않을것 같아서 변경함 하지만 웬만하면 config/server.js 파일을 수정하기!<br>
해당 프로젝트는 둘자 변경함 <br>

```java
 "scripts": {
    "develop": "strapi develop",
    "start": "strapi develop",
    "build": "strapi build",
    "strapi": "strapi"
  },
```
`config/server.js`
```java
 module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  ...
  autoReload: {
    'enabled': true
  },
});

```
<br><br><br><br>
## 👀  mongodb Atlas 설치
구글보고 cluster만들면 된다<br><br>
참고 - https://puzzle-puzzle.tistory.com/entry/strapi-strapi%EC%99%80-mongodb-atlas-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0 <br><br>


 `create cluster `<br>
 google > tokyo 선택<br>

 호스트 0.0.0.0 으로 활짝 열어주고 user 생성도 함 (strapi 연결할때 사용한다)
 
<br><br><br>
## 👀  strapi, mongodb 연동 - 설정 파일 수정

`config/database.js`
```java
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
```
`.env`
```java
DATABASE_URI=mongodb+srv://id:pw@cluster이름.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```


```java
//추가 설치
npm install --save strapi-connector-mongoose
// develop 오픈
npm start
```

<br><br><br>
## 👀 heroku 연동
참고 - https://minify.tistory.com/25 <br>

`heroku 회원가입 후 create new app으로 새로운 앱 만듬`<br><br>
`아래 url에서 heroku-cli 설치`<br>
https://devcenter.heroku.com/articles/heroku-cli<br>

strapi 프로젝트에서 아래 명령어 입력

```java
//enter치면 로그인 페이지 연결
heroku login

```
연결 후 git 연동 (heroku git 사용 예정)
```java
git init
heroku git:remote -a yn-project 
git add.
git commit -am "my app deploy"
git push heroku master //한참 기다리면 배포 완료됨 
```java