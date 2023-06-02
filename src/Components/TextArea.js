import React, { useState } from "react";

export default function TextArea(props) {
  const clear = () => {
    let newTxt = "";
    setTxt(newTxt);
  };

  const txtUpper = () => {
    let txtUp = txt.toUpperCase();
    setTxt(txtUp);
  };

  const txtLower = () => {
    let txtLow = txt.toLowerCase();
    setTxt(txtLow);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setTxt(event.target.value);
  };

  const samTxt = () => {
    setTxt("Hello World!");
  };

  const [txt, setTxt] = useState("");
  // setTxt("Hello World!");

  const words = txt.trim().split(/\s+/);
  const wordCount = words.length > 0 ? words.length : 0;
  const characterCount = txt.length;

  return (
    <div className={`body-${props.mode}`}>
      <div className={`container container-${props.mode} my-4`}>
        <h1 className="">{props.heading}</h1>
        <form action="#php">
          <textarea
            name="myTxt"
            className={`textarea-${props.mode}`}
            onChange={handleOnChange}
            id="myTxt"
            value={txt}
            cols="120"
            rows="10"
          ></textarea>
        </form>
        {/* <button className="btn btn-primary m-1" onClick={samTxt}>Click to enter sample text "Hello World!"</button> */}
        <button className="btn btn-primary m-1 mb-2" onClick={txtUpper}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary m-1 mb-2" onClick={txtLower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary m-1 mb-2" onClick={clear}>
          Clear
        </button>
      </div>
      <div className={`container container-${props.mode} my-4`}>
        <h2 className="my-2">{props.summary}</h2>
        {txt && (
          <p>
            {wordCount} {wordCount === 1 ? "word" : "words"} and{" "}
            {characterCount} characters
          </p>
        )}
      </div>
    </div>
  );
}

TextArea.defaultProps = {
  heading: "Enter Text",
  summary: "Your text summary here",
};
