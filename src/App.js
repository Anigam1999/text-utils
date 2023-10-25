import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light") 
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  const removeBodyclasses = ()=> {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls)=> {
    removeBodyclasses()
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1a1238'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils"/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below:"/>} />
      </Routes>
    </div>
    </Router>
    </>
    );
}

export default App;
