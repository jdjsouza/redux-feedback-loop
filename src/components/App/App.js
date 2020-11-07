import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Content from '../../pages/Content/Content';
import Supported from '../../pages/Supported/Supported';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/content" component={Content} />
        <Route exact path="/supported" component={Supported} />
      </Router>
    );
  }
}

export default App;
