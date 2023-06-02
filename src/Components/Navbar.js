import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav>
      <div className={`navbar flex-start navbar-${props.mode}`}>
        <div className="nav-left flex-start">
          <h2 className="title">{props.Title}</h2>
          <div className="nav-list flex-start">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Service</Link>
            <Link to="/">Contact</Link>
          </div>
          {/* <ul className="nav-list flex-start">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Service</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul> */}
        </div>
        <div className="nav-right flex-start">
          <div>
            {/* <label className="toggle">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label> */}
            <div className="custom-control custom-switch">
              <input
                onClick={props.toggleMode}
                type="checkbox"
                className="custom-control-input"
                id="customSwitch"
              />
              <label className="custom-control-label" htmlFor="customSwitch">
                {`Enable ${props.mode} mode`}
              </label>
            </div>
          </div>
          {/* <div>Dark Mode</div> */}
          <div className="in">
            <button id="login" className="btn-in">
              LogIn
            </button>
            <button id="signup" className="btn-in">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
};
