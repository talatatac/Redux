import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/index';
import {increaseCount, decreaseCount} from './store/actions';
import connectToStore from './store/connectToStore';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>

        <br/>
        <button onClick={() => increaseCount('Testical 1')}> Increase </button><br/>
        <button onClick={() => decreaseCount('Testical 2')}> Decrease </button>
      </header>
      <h1>TESTICAL</h1>
      <h3>{connectToStore('sliceReducer')}</h3>
    </div>
  );
}

export default App;
