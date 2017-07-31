import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, View, Image, Navigator, Dimensions, Text, ScrollView, StatusBar } from 'react-native';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import { Provider, connect } from 'react-redux'
import Header from './ui/header';
import Navigation from './ui/navigation'
import Drawer from 'react-native-drawer'
import { url } from './config'
import routes from './config/routes'
import { RenderScene } from './config/routes'
import AppCss from './css/AppStyle';
import Reducers from './reducers';
import CatalogPanel from './ui/panel';

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
          content={<Navigation navig={this._navigator} drawer={this._drawer} />}
        >
        <Navigator
          initialRoute={routes[0]}
          ref={(ref) => this._navigator = ref}
          renderScene={(route, navigator) => (
            
                <View style={{flex:1}}>
                  <StatusBar translucent={true} />
                  {route.id != 'EndRegistration' ? <Header route={route} navigator={navigator} openPanel={this.openControlPanel} /> : <View></View>}
                  <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg`}} style={{flex:1, position:'absolute', top:25, left:0, width:'100%', height:'100%'}} />
                  <RenderScene route={route} navigator={navigator} />
                  <CatalogPanel route={route} navigator={navigator} />
                </View>
            )}      
        />
        {this.props.Store.error.errorStatus == true ? (
          <View style={{flex:1, position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:99,display:'flex',flexWrap: 'wrap',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <View style={{width:300,backgroundColor:'rgba(0,0,0,.9)',borderRadius:6, minHeight:150,display:'flex',flexWrap: 'wrap',justifyContent:'center',alignItems:'center',flexDirection:'row', padding:25}}>
              <Text style={{color:'#fff'}}>{this.props.Store.error.errorText}</Text>
            </View>
          </View>
        ): (<View></View>)}
        </Drawer>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  Store: state
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

AppRegistry.registerHeadlessTask('Root', () => Root);
