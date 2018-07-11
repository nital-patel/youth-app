import React, { Component } from 'react';
import Youth from './components/Youth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src="images/home-bg.jpg" className="" />
          <p className="App-title">Register For Atmiya Youth Shibir 2018</p>
            <h1 className="h2">Enter your email address to see if you have an account or create an account</h1>
            <input className="input"
                type="text"
                placeholder="Email"
                />

      </div>
    );
  }
}

export default App;
