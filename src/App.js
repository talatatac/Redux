import React from 'react';
import store from './store/index';
import {increaseCount, decreaseCount, testFetch} from './store/actions';
import {connect} from "react-redux";
import get from 'lodash/get'



class App extends React.Component {
    render () {
    return (
        <div className="App">
          <header className="App-header">

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
