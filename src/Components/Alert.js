import React from "react";

function Alert(props) {
  return (
    props.alert && <div className="alert-container">
      <div className="alert">
        <span className="alert-msg">
          <strong>! </strong>
          {props.alertmsg}
        </span>
        <button className="clsAlert">
          <strong>X</strong>
        </button>
      </div>
    </div>
  );
}

export default Alert;
