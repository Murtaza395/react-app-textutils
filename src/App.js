//import logo from './logo.svg';
import './Components/About.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const[darkmode,setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 const toggleMode=()=>{
      if (darkmode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='grey';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
      }
  }

  
  
  return (
    <Router>
    <>
 <Navbar title="TextUtils" about="About" mode={darkmode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
  <div className='container'>
  <Routes>
  <Route path="/about" element={<About/>}/>
<Route path="/"element={<TextForm heading="Enter the text to analyze" mode={darkmode} showAlert={showAlert}/>} />
</Routes>
</div>
 </>
 </Router>

  );
}

export default App;
