import React, { Component } from 'react';
import logo from './images/navblue-white-logo.png';
import 'jquery-ui-dist/jquery-ui';
import './css/main.css';
import './css/slide-1.css';
import './css/slide-2.css';
import './css/slide-3.css';
import './css/slide-4.css';
import './css/slide-5.css';
import './css/modal.css';
import './css/animated-gradient.css';
import './css/draggable-comparator.css';
import './css/button.css';
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
        <div className="modal">
          <div className="content">
            <div className="close"></div>
            <h1> Hello, World!</h1>
            <p> <a href="https://www.jqueryscript.net/tags.php?/Modal/">Modal</a> Content Here </p>
          </div>
        </div>
        <section className="container">          
          <div className="slider"></div>
          <div className="nav"></div>
          <div data-target='right' className="side-nav side-nav--right"><span className="lnr lnr-chevron-right"></span></div>
          <div data-target='left' className="side-nav side-nav--left"><span className="lnr lnr-chevron-left"></span></div>
        </section>
        
      </div>
    );
  }
}



export default App;
