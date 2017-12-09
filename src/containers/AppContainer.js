import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import {
    HomeScreen,
    LoginScreen
} from '../screens';

class AppContainer extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/login' component={LoginScreen}/>
        </Switch>
      );
    }
  }
  
  export default AppContainer;