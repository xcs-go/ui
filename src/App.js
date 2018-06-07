import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,withRouter} from 'react-router-dom';
import MainHome from './components/mainHome';
import Button from './components/button';
import Dialog from './components/dialog';
import Alert from './components/alert';
import Loading from './components/loading';
import Home from './components/home'
import Input from './components/input';
import Icon from './components/icon';
import Example from './components/example';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app-content">
            <Home/>
            <div className="main-content">
              <Route exact path="/" component={MainHome} />
              <Route path="/button" component={Button} />
              <Route path="/icon" component={Icon}/>
              <Route path="/input" component={Input} />
              <Route path="/dialog" component={Dialog} />
              <Route path="/alert" component={Alert} />
              <Route path="/loading" component={Loading} />
              <Route path="/example" component={Example}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
