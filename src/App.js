import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    );
  }
}

export default App;
