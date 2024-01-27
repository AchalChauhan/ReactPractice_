import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode= ()=>{
    mode === 'light'? setmode('dark') : setmode('light'); 
    if(mode === 'light'){
      document.body.style.backgroundColor = 'rgb(30 39 49)'
      document.body.style.color = 'white'
      setmode('dark');
      showAlert('Dark Mode has been enabled', 'danger')
    }else{
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'rgb(33,37,41)'
      setmode('light');
      showAlert('Light Mode has been enabled', 'success');
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Text Utils" aboutHead="About TextUtils" mode={mode} toggleMode ={toggleMode} />
      <Alert alert = {alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </Router>
      {/* <Navbar title="Text Utils" aboutHead="About TextUtils" mode={mode} toggleMode ={toggleMode} />
        <Alert alert = {alert}/>
        <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />
        <About mode={mode}/> */}
    </>
  );
}

export default App;
