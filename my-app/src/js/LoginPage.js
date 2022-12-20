import "../css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function LoginForm() {
  const [changeId, setChangeId] = useState();
  const [changePw, setChangePw] = useState();

  const navigate = useNavigate();
  const clickLogin = () => {
    LoginCheck(changeId, changePw);
  };

  const LoginCheck = async (changeId, changePw) => {
    try {
      console.log("hi");
      const api = axios.create({
        baseURL: "http://34.64.123.6:8080",
      });
      console.log("hihi");
      const result = await api.post("/login/request", {
        id: changeId,
        pw: changePw,
      });
      console.log(result.data);
      if (result.data.token !== null) {
        localStorage.setItem("wtw-token", result.data.token);
        navigate("/login/mainPage");
      } else if (result.data.stoken !== "") {
        alert(
          "융합특성화자유전공학부가 아닙니다. 이 사이트를 이용하실 수 없습니다."
        );
      } else {
        alert("회원 정보가 올바르지 않습니다.");
      }
    } catch (e) {
      alert("다시 입력해주세요.");
    }
  };

  return (
    <div className="main">
      <div id="login">
        <div id="loginTitle">통합 LOGIN</div>
        <div id="usaintID">
          <div className="loginSubTitle">아이디</div>
          <input
            className="loginInput"
            onChange={(e) => setChangeId(e.target.value)}
          />
        </div>
        <div id="usaintPW">
          <div className="loginSubTitle">비밀번호</div>
          <input
            className="loginInput"
            type="password"
            onChange={(e) => setChangePw(e.target.value)}
          />
        </div>
        <button id="loginBtn" onClick={clickLogin}>
          <img id="lock" src="img/lock.png" alt="lock pic." />
          로그인
        </button>
      </div>
      <img className="sidePng" src="img/side.png" alt="logo pic."></img>
    </div>
  );
}
