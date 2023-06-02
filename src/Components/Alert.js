import React, {useState} from "react";

function Alert(props) {
  const [isVisible, setIsVisible] = useState(true);

  const closeAlert = () => {
    // documeent.clsAlert.style.display = "none";
    setIsVisible(false);
  };

  return (
    <div className="alert-container">
      {isVisible && (
        <div className="alert">
          <span className="alert-msg">
            <strong>! </strong>
            {props.alertmsg}
          </span>
          <button className="clsAlert" onClick={closeAlert}>
            <strong>X</strong>
          </button>
        </div>
      )}
    </div>
  );
}

Alert.defaultProps = {
  alertmsg: "Alert Message",
};

export default Alert;
