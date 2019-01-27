import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Modal from './components/Modal';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <Main />
            <Route path="/detailview/" component={Modal} />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
