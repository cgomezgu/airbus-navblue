import React, { Component } from 'react';
import logo from './images/navblue-white-logo.png';
import 'jquery-ui-dist/jquery-ui';
import './css/main.css';
import './css/video.css';
import './css/animated-gradient.css';
import './css/draggable.css';
import './css/glowing-button.css';
import './js/function.js';

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
        <section>
          <div className="main-logo-container">
            <img src={logo} alt="navblue"  className="main-logo"/>
          </div>          
        </section>
        <section className="container">
          <div className="slider"></div>
          <div className="nav"></div>
          <div data-target='right' className="side-nav side-nav--right"></div>
          <div data-target='left' className="side-nav side-nav--left"></div>
        </section>
      </div>
    );
  }
}



export default App;
