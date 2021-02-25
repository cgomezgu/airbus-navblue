import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import './function.js';

class App extends Component {
  constructor () {
    super()

    this.state = {
      isOpenJQuery: false,
      isOpenTG: false
    }
  }

  render() {
    return (
      <div className="App">
        
        <div className="container">
          <div className="slider"></div>
          <div className="nav"></div>
          <div data-target='right' className="side-nav side-nav--right"></div>
          <div data-target='left' className="side-nav side-nav--left"></div>
        </div>
      </div>
    );
  }
}



export default App;
