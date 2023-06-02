// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import Alert from "./Components/Alert";


function App() {
  const [mode, setMode] = useState("dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "sucess");
      document.title = "TextUtils - Light Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#2b2e36';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "sucess");
      document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    <>
      <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Alert alertmsg={alert}/> */}
      {/* <Navbar/> */}
      <TextArea heading="Enter your text here" mode={mode}/>
    </>
  );  
}

export default App;
