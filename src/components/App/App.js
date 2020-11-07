import React, { Component } from 'react';
import './App.css';
// route imports for pages
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Content from '../../pages/Content/Content';
import Supported from '../../pages/Supported/Supported';
import Comments from '../../pages/Comments/Comments';
import Review from '../../pages/Review/Review';

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
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={Review} />
      </Router>
    );
  }
}

export default App;
