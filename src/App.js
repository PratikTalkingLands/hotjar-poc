import logo from './logo.svg';
import './App.css';

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
