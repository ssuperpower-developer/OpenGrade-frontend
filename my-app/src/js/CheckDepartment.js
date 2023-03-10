import "../css/CheckDepartment.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function CheckDepartment() {
  const departmentList = ["솦", "컴"];
  const [clickDepartment, setClickDepartment] = useState([false, false]);
  const [department, setDepartment] = useState();
  const handleClickDepartment = (index) => {
    const newClickDepartment = Array(2).fill(false);
    newClickDepartment[index] = true;
    setDepartment(departmentList[index]);
    setClickDepartment(newClickDepartment);
  };

  const checkDepartment = async () => {
    try {
      const api = axios.create({
        baseURL: "http://34.64.123.6:8080",
        headers: {
          jwtToken: localStorage.getItem("wtw-token"),
        },
      });
      await api.post("/login/apply", {
        department: department,
      });
      navigate("/mainPage");
    } catch (e) {
      console.log(e);
    }
  };

  const navigate = useNavigate();

  const handleClickCheckBtn = () => {
    if (JSON.stringify(clickDepartment) === JSON.stringify([false, false])) {
      alert("희망 전공을 선택하세요");
    } else {
      checkDepartment();
    }
  };

  return (
    <div className="main">
      <div className="checkDepartment">
        <div id="checkDepartmentTitle">학과설정</div>
        <div id="nickName">
          <div className="checkDepartmentSubTitle">닉네임</div>
          <div className="nickNameText">{localStorage.getItem("nickName")}</div>
        </div>
        <div id="checkBox">
          <div className="checkDepartmentSubTitle">학과 설정</div>
          <button
            className={
              "checkDepartmentBtn" + (clickDepartment[0] ? "Active" : "")
            }
            onClick={() => handleClickDepartment(0)}
          >
            소프트웨어학부
            <svg
              width="30"
              height="30"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9167 24.5833L13.3854 20.0521C13.0035 19.6701 12.5264 19.4882 11.9542 19.5062C11.3806 19.5229 10.9028 19.7222 10.5208 20.1042C10.1389 20.4861 9.94792 20.9722 9.94792 21.5625C9.94792 22.1528 10.1389 22.6389 10.5208 23.0208L16.4583 28.9583C16.8403 29.3403 17.3264 29.5312 17.9167 29.5312C18.5069 29.5312 18.9931 29.3403 19.375 28.9583L31.1979 17.1354C31.5799 16.7535 31.7625 16.2757 31.7458 15.7021C31.7278 15.1299 31.5278 14.6528 31.1458 14.2708C30.7639 13.8889 30.2778 13.6979 29.6875 13.6979C29.0972 13.6979 28.6111 13.8889 28.2292 14.2708L17.9167 24.5833ZM20.8333 41.6667C17.9514 41.6667 15.2431 41.1194 12.7083 40.025C10.1736 38.9319 7.96875 37.4479 6.09375 35.5729C4.21875 33.6979 2.73472 31.4931 1.64167 28.9583C0.547222 26.4236 0 23.7153 0 20.8333C0 17.9514 0.547222 15.2431 1.64167 12.7083C2.73472 10.1736 4.21875 7.96875 6.09375 6.09375C7.96875 4.21875 10.1736 2.73403 12.7083 1.63958C15.2431 0.546528 17.9514 0 20.8333 0C23.7153 0 26.4236 0.546528 28.9583 1.63958C31.4931 2.73403 33.6979 4.21875 35.5729 6.09375C37.4479 7.96875 38.9319 10.1736 40.025 12.7083C41.1194 15.2431 41.6667 17.9514 41.6667 20.8333C41.6667 23.7153 41.1194 26.4236 40.025 28.9583C38.9319 31.4931 37.4479 33.6979 35.5729 35.5729C33.6979 37.4479 31.4931 38.9319 28.9583 40.025C26.4236 41.1194 23.7153 41.6667 20.8333 41.6667ZM20.8333 37.5C25.4514 37.5 29.384 35.8771 32.6312 32.6312C35.8771 29.384 37.5 25.4514 37.5 20.8333C37.5 16.2153 35.8771 12.2826 32.6312 9.03542C29.384 5.78958 25.4514 4.16667 20.8333 4.16667C16.2153 4.16667 12.2833 5.78958 9.0375 9.03542C5.79028 12.2826 4.16667 16.2153 4.16667 20.8333C4.16667 25.4514 5.79028 29.384 9.0375 32.6312C12.2833 35.8771 16.2153 37.5 20.8333 37.5Z"
                // fill="#8D8D8D"
                fill={clickDepartment[0] ? "#000000" : "#8D8D8D"}
              />
            </svg>
          </button>
          <button
            className={
              "checkDepartmentBtn" + (clickDepartment[1] ? "Active" : "")
            }
            onClick={() => handleClickDepartment(1)}
          >
            컴퓨터학부
            <svg
              width="30"
              height="30"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9167 24.5833L13.3854 20.0521C13.0035 19.6701 12.5264 19.4882 11.9542 19.5062C11.3806 19.5229 10.9028 19.7222 10.5208 20.1042C10.1389 20.4861 9.94792 20.9722 9.94792 21.5625C9.94792 22.1528 10.1389 22.6389 10.5208 23.0208L16.4583 28.9583C16.8403 29.3403 17.3264 29.5312 17.9167 29.5312C18.5069 29.5312 18.9931 29.3403 19.375 28.9583L31.1979 17.1354C31.5799 16.7535 31.7625 16.2757 31.7458 15.7021C31.7278 15.1299 31.5278 14.6528 31.1458 14.2708C30.7639 13.8889 30.2778 13.6979 29.6875 13.6979C29.0972 13.6979 28.6111 13.8889 28.2292 14.2708L17.9167 24.5833ZM20.8333 41.6667C17.9514 41.6667 15.2431 41.1194 12.7083 40.025C10.1736 38.9319 7.96875 37.4479 6.09375 35.5729C4.21875 33.6979 2.73472 31.4931 1.64167 28.9583C0.547222 26.4236 0 23.7153 0 20.8333C0 17.9514 0.547222 15.2431 1.64167 12.7083C2.73472 10.1736 4.21875 7.96875 6.09375 6.09375C7.96875 4.21875 10.1736 2.73403 12.7083 1.63958C15.2431 0.546528 17.9514 0 20.8333 0C23.7153 0 26.4236 0.546528 28.9583 1.63958C31.4931 2.73403 33.6979 4.21875 35.5729 6.09375C37.4479 7.96875 38.9319 10.1736 40.025 12.7083C41.1194 15.2431 41.6667 17.9514 41.6667 20.8333C41.6667 23.7153 41.1194 26.4236 40.025 28.9583C38.9319 31.4931 37.4479 33.6979 35.5729 35.5729C33.6979 37.4479 31.4931 38.9319 28.9583 40.025C26.4236 41.1194 23.7153 41.6667 20.8333 41.6667ZM20.8333 37.5C25.4514 37.5 29.384 35.8771 32.6312 32.6312C35.8771 29.384 37.5 25.4514 37.5 20.8333C37.5 16.2153 35.8771 12.2826 32.6312 9.03542C29.384 5.78958 25.4514 4.16667 20.8333 4.16667C16.2153 4.16667 12.2833 5.78958 9.0375 9.03542C5.79028 12.2826 4.16667 16.2153 4.16667 20.8333C4.16667 25.4514 5.79028 29.384 9.0375 32.6312C12.2833 35.8771 16.2153 37.5 20.8333 37.5Z"
                // fill="#8D8D8D"
                fill={clickDepartment[1] ? "#000000" : "#8D8D8D"}
              />
            </svg>
          </button>
        </div>
        <button id="checkBtn" onClick={handleClickCheckBtn}>
          <img id="lock" src="img/lock.png" alt="lock pic." />
          설정완료
        </button>
      </div>
      <img className="sidePng" src="img/side.png" alt="logo pic."></img>
    </div>
  );
}
