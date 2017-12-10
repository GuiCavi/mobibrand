import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import {
    HomeScreen,
    LoginScreen,
    ProductWizardScreen,
    ShippingDataScreen,
    ConclusionScreen
} from '../screens';

class AppContainer extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/login' component={LoginScreen}/>
            <Route exact path='/shipping' component={ShippingDataScreen}/>
            <Route exact path='/conclusion' component={ConclusionScreen}/>
            <Route exact path='/product/register' component={ProductWizardScreen}/>
        </Switch>
      );
    }
  }
  
  export default AppContainer;