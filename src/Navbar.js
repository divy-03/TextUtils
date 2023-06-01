import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav>
      <div className="navbar flex-start">
        <div className="nav-left flex-start">
          <h2 className="title">{props.Title}</h2>
          <div className="nav-list flex-start">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Service</a>
            <a href="/">Contact</a>
          </div>
          {/* <ul className="nav-list flex-start">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Service</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul> */}
        </div>
        <div className="nav-right flex-start">
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
    title: PropTypes.string
}

Navbar.defaultProps = {
    title : "Set title here"
}