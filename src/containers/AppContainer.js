import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import {
    HomeScreen,
    LoginScreen,
    ProductWizardScreen,
    OrdersScreen,
    ShippingDataScreen,
    ConclusionScreen,
    OrderStatusScreen
} from '../screens';

class AppContainer extends Component {
    render() {
      return (
        <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/login' component={LoginScreen}/>
            <Route exact path='/shipping' component={ShippingDataScreen}/>
            <Route exact path='/conclusion' component={ConclusionScreen}/>
            <Route exact path='/status' component={OrderStatusScreen}/>
            <Route exact path='/product/register' component={ProductWizardScreen}/>
            <Route exact path='/orders' component={OrdersScreen}/>
        </Switch>
      );
    }
  }
  
  export default AppContainer;