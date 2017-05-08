import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import AppCss from './css/AppStyle';
import global from './css/global';
import Header from './ui/header';
import Home from './pages/Home';
import BottomPanel from './ui/bottomPanel'

class App extends Component {
  render() {
    return (
      <View style={AppCss.App}>
      <StatusBar barStyle="light-content" />
        <Header />
        <Image source={require("./img/bg.jpg")} style={AppCss.bg}>
          <ScrollView style={global.content}>
            <View style={global.block}>
              <Home />
            </View>
          </ScrollView>
          <BottomPanel />
        </Image>
      </View>
    );
  }
}
module.exports = App;
AppRegistry.registerComponent('App', () => App);
