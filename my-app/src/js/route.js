import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch,routes } from "react-router-dom";

import FirstPage from "./firstPage";
import LoginPage from './login';

export default class route extends React.Component {
  render() {
    return (
      <Routes>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/login" component={LoginPage} />
      </Routes>
    );
  }
}