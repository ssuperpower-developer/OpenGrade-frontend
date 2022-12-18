import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate,Link } from "react-router-dom";

//Class 형태로 만들어진 컴포넌트는 꼭 render 함수 있어야하며 render 함수 내부에서 JSX 코드를 return 해주어야함.
class App extends Component {
  //render 함수
  render() {

    return (
    
      //JSX
      <div>
        <div>융학사</div>
        <img className="firstImg" src="img/first.png" alt="first pic."></img>
        <button size="large">로그인</button>
        </div>
    );
  }
}
export default App; //현 컴포넌트를 다른 곳에서 불러와 사용할 수 있도록 내보내기를 해줌.