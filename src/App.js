import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga'

const TRACKING_ID = "UA-247182080-1" // Our Tracking ID


ReactGA.initialize(TRACKING_ID)



function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const addName = (e) => {
    setName(e.target.value)
  }
  const addEmail = (e) => {
    setEmail(e.target.value)
  }
  const addPassword = (e) => {
    setPassword(e.target.value)
  }
  const dataSubmit = () => {
    window.alert("Data Sumbitted Successfully")
    ReactGA.event({
      category: name,
      action: email,
      label: password,
    });
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
      <input className='input-box' placeholder='Enter Name' onChange={addName}></input>
      <input className='input-box' placeholder='Enter Email' onChange={addEmail}></input>
      <input className='input-box' placeholder='Enter Password' type='password' onChange={addPassword}></input>
      <button className='post-btn' onClick={dataSubmit}>Submit</button>
    </div>
  );
}

export default App;
