import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga'

const TRACKING_ID = "G-ZYN8X673R4" // Our Tracking ID


ReactGA.initialize(TRACKING_ID)



function App() {
  const dataSubmit = () => {
    window.alert("Data Sumbitted Successfully")
  }
  useEffect(()=>{
    hotjar.initialize(3151496, 6)
  },[])

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname)
  },[])
  return (
    <div className="App">
      <h1>This is the POC for implementation of Hotjar</h1>
      <img className="image-view" src="https://bit.ly/3Vvv2jF"></img>
      <input className='input-box' placeholder='Enter Name'></input>
      <input className='input-box' placeholder='Enter Email'></input>
      <input className='input-box' placeholder='Enter Password' type='password'></input>
      <button className='post-btn' onClick={dataSubmit}>Submit</button>
    </div>
  );
}

export default App;
