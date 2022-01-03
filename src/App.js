import React,{useState} from 'react';       //react에 있는 내장함수를 하나 쓰겠습니다.
import logo from './logo.svg';
import './App.css';
function App() {

  //var [a,b] = [10,100];   // 10,100을 a와 b변수에 담아주세요! __ (참고) ES6 destructuring 문법 __ array, object에 있던 자료를 변수에 쉽게 담고 싶을때

 // state -- 1.변수대신 쓰는 데이터 저장공간 //2. useState()를 이용해 만들어야함 // 3. 문자 숫자 array, object 다 저장가능

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남우동 맛집']); 

  let posts ='강남 고기 맛집';
  function 함수(){
    return 100
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }</h3>
        <p>1월 3일 발행 수정</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
