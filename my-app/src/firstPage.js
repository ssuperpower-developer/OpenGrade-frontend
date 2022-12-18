import * as React from "react";
//import ProgressBar from "../components/ProgressBar";
import { Navigate,Link } from "react-router-dom";
 import login from './login';

const firstPage = () => {
  return (
    <div>
      <br />
      <img className="firstImg" src="img/first.png" alt="first pic."></img>
      <button>로그인</button>
    </div>
  );
};
 
export default firstPage;