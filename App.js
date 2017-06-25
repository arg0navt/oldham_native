import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import { Provider, connect } from 'react-redux'
import Reducers from './reducers';
import Children from './pages/Children';

const store = createStore(Reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Children />
      </Provider>
    );
  }
}
export default App

AppRegistry.registerComponent('App', () => App);
