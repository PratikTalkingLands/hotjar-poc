import React from 'react';
import './App.css';
import { hotjar } from 'react-hotjar';


hotjar.initialize(3151496, 6);

// Identify the user
hotjar.identify('USER_ID', { userProperty: 'value' });

// Add an event
hotjar.event('button-click');

// Update SPA state
hotjar.stateChange('/');

// Check if Hotjar has been initialized before calling its methods
if (hotjar.initialized()) {
  hotjar.identify('USER_ID', { userProperty: 'value' });
}

function App() {
  const dataSubmit = () => {
    window.alert("Data Sumbitted Successfully")
  }
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
