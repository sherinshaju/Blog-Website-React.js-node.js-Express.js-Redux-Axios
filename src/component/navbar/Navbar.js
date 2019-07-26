import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  logoutBtn = () => {
    
    this.props.dispatch({
      type: "logout",
      payload: false
    });
    localStorage.clear()
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <span className="navbar-brand">
            <img
              src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
              width="30"
              height="30"
              alt="logo"
            />
            my Blog
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-list-4"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <span className="mr-2">
            <Link to="/">
              <span className="text-white"> Home </span>
            </Link>
          </span>

          {this.props.isLoggedIn === true ? (
            <span className="mr-2">
              <Link to="/upload">
                <span className="text-white"> Upload </span>
              </Link>
            </span>
          ) : null}

          {this.props.isLoggedIn === false ? (
            <span className="mr-2">
              <Link to="/login">
                <span className="text-white">Login </span>
              </Link>
            </span>
          ) : (
            <div className="collapse navbar-collapse" id="navbar-list-4">
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                      alt="new"
                      width="40"
                      height="40"
                      className="rounded-circle"
                    />
                  </span>
                  <div
                    className="dropdown-menu new_drop"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <span className="dropdown-item" onClick={this.logoutBtn}>
                      Log Out
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

function connectRedux(state) {
  return {
    isLoggedIn: state.isLoggedIn
  };
}

export default connect(connectRedux)(Navbar);
