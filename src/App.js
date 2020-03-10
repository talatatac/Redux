import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/index';
import {increaseCount, decreaseCount, testFetch} from './store/actions';
import {connect} from "react-redux";
import get from 'lodash/get'



class App extends React.Component {
    render () {
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
            <button onClick={() => decreaseCount('Testical 2')}> Decrease </button><br/>
              <button onClick={() => testFetch()}> Test Fetch </button><br/>

          </header>
          <h1>TESTICAL</h1>
            <h3>{this.props.osman}</h3>
        </div>
    );

  }

}

export default
connect(
    state => {
        const osman = get(state, 'sliceReducer', '');
        console.log("osman", osman)
        return {osman}

    })(App);
