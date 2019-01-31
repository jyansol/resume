import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Modal from './components/Modal';
import Main from './components/Main';

import './App.css';
import Project from './components/Linked';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <Modal />
            <Route exact path="/" component={Main} />
            <Route exact path="/project/" component={Project} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
