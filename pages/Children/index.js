import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar  } from 'react-native';
import Home from '../Home'
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import Header from '../../ui/header';
import BottomPanel from '../../ui/bottomPanel'
import { Provider, connect } from 'react-redux'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'
import { url } from '../../config'

class Children extends Component{
    render(){
        return (
            <View style={AppCss.App}>
                <StatusBar barStyle="light-content" />
                <Header />
                <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg`}} style={AppCss.bg}>
                    <Router>
                        <Route name="home" component={Home} title="Home" type="replace"/>
                    </Router>
                <BottomPanel />
                </Image>
            </View>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({})
)(Children)