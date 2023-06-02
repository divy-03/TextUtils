// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#2b2e36';
    }
  }
  return (
    <>
      <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <TextArea heading="Enter your text here" mode={mode}/>
    </>
  );  
}

export default App;
