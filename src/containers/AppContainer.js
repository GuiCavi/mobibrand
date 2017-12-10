import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import {
    HomeScreen,
    LoginScreen,
    ProductWizardScreen,
    OrdersScreen
} from '../screens';

class AppContainer extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/login' component={LoginScreen}/>
            <Route exact path='/product/register' component={ProductWizardScreen}/>
            <Route exact path='/orders' component={OrdersScreen}/>
        </Switch>
      );
    }
  }
  
  export default AppContainer;