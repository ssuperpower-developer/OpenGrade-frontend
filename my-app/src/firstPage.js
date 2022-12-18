import * as React from "react";
//import ProgressBar from "../components/ProgressBar";
import { Navigate,Link } from "react-router-dom";
 import login from './login';

const firstPage = () => {
  const navigate = Navigate();
  const navigateToLogin= () => {
    navigate("/login");
  };

 
  return (
    <div>
      <br />
      <img className="firstImg" src="img/first.png" alt="first pic."></img>
      <Link to="/login">
          <button size="large">
            로그인</button></Link>
    </div>
  );
};
 
export default firstPage;