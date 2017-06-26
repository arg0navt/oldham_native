import React, { Component } from 'react';
import { AppRegistry, View, Image, Navigator, Dimensions } from 'react-native';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import { Provider, connect } from 'react-redux'
import Header from './ui/header';
import Navigation from './ui/navigation'
import Drawer from 'react-native-drawer'
import { url } from './config'
import routes from './config/routes'
import AppCss from './css/AppStyle';
import Reducers from './reducers';

const store = createStore(Reducers)
const w = Dimensions.get('window');

class App extends React.Component {
  openControlPanel = () => {
      this._drawer.open()
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Drawer
          openDrawerOffset={0.45}
          tapToClose={true}
          ref={(ref) => this._drawer = ref}
          content={<Navigation />}
        >
          <Navigator
              initialRouteStack={routes}
              initialRoute={routes[0]}
              renderScene={(route, navigator) => (
                <View style={{height: w.height}}>
                  <Header route={route} navigator={navigator} openPanel={this.openControlPanel} />
                  <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg`}} style={{flex:1}}>
                    <route.component {...route.passProps} navigator={navigator} route={route} />
                  </Image>
                </View>
              )}      
            />
        </Drawer>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root

AppRegistry.registerComponent('Root', () => Root);
