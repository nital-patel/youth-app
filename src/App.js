import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src="images/home-bg.jpg" className="" />
          <h1 className="App-title">Register For Atmiya Youth Shibir 2018</h1>
            <h2 className="h2">Enter your email address to see if you have an account or create an account</h2>
            <input className="input"
                type="text"
                placeholder="Email"
                />
        </header>
      </div>
    );
  }
}

export default App;
