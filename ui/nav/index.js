import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  ComeIn: { screen: ComeIn },
  Login: { screen: Login },
  Registration: { screen: Registration }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);