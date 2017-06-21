import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import AppCss from './css/AppStyle';
import global from './css/global';
import Header from './ui/header';
import Children from './pages/Children';
import BottomPanel from './ui/bottomPanel'
import { Provider, connect } from 'react-redux'
import Reducers from './reducers';

const store = createStore(Reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={AppCss.App}>
      <StatusBar barStyle="light-content" />
        <Header />
        <Image source={require("./img/bg.jpg")} style={AppCss.bg}>
          <ScrollView style={global.content}>
            <View style={global.block}>
              <Children />
            </View>
          </ScrollView>
          <BottomPanel />
        </Image>
      </View>
      </Provider>
    );
  }
}
export default App

AppRegistry.registerComponent('Example', () => Example);
