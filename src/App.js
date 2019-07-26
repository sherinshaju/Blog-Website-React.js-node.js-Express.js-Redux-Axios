import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Upload from "./component/Upload";
import Login from "./component/Login";
import withAuth from "./component/withAuth";
import { connect } from "react-redux";

class App extends React.Component {
  componentWillUnmount() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />

          <Route path="/upload" component={withAuth(Upload)} />

          <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}
function connereact(state) {
  return {
    isLoggedIn: state.isLoggedIn
  };
}

window.onload = function() {
  localStorage.clear();
};
export default connect(connereact)(App);
