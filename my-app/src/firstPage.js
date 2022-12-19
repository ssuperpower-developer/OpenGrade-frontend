import * as React from "react";
//import ProgressBar from "../components/ProgressBar";
import { Navigate, useNavigate, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
//import { Button } from "bootstrap";
import "./FirstPage.css";


const FirstPage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("login");  
  };

  //const navigate = useNavigate();

  // 버튼 클릭시 호출

  return (
    <div className="main">
      <br />
      <div className="login_left">
      <img src="img/first.png" alt="first pic."></img></div>
      <div className="login_right">
        <img className="logo" src="img/ssu-logo.png" alt="logo pic."></img>
        <button onClick={navigateToLogin}>로그인</button>

        <div className="firstComment">
          숭실대학교 유세인트의 아이디, 비빌번호를 입력해주시면 됩니다.
        </div>
        <div className="secondComment">
          <span>Open Grade / 융학사</span>
          <br />
          융합특성화 자유전공학부 학생들의 성공적인 전과를 위해 만든
          시스템입니다. 수집한 개인정보는 절대로 개인의 이익을 위해 착복하지
          않을 것을 약속드립니다. 성공적인 전과를 바라겠습니다.
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
