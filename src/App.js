import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setMode]= useState('light');
  const toggleMode = ()=>{
    if (mode == 'light') {
      setMode('dark'); 
      // document.body.Style     
    }
    else
    {
      setMode('light');
    }
    
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>WHAT
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>

    This is a simple navbar taken from bootstrap official site.
    <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="''this is a alert''  "/>
    <Switch>
          <Routes path="/about">
            <About/>
          </Routes>
         
          <Routea path="/">
              {/* <div className="container"> */}
             
              <TextForms/>
              {/* </div> */}
          </Routea>
    </Switch>
    
    <About/>
</Router>
    </>

  );
}

export default App;




