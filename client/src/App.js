import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Basic by David <br /><br/>
          <a href="http://projectsbydavid.com/">My Portfolio</a></h1>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
