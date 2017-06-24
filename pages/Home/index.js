import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button  } from 'react-native';
import Slider from '../../ui/slider'
import Catalog from '../../ui/catalog'
import Card from '../../ui/card'
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import {Router, Route, Animations, Schema, Actions} from  'react-native-redux-router'
import { Provider, connect } from 'react-redux'

class Home extends Component{
    render(){
        return(
            <ScrollView style={global.content}>
                <Slider />
                <Card />
                <Catalog />
            </ScrollView>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({})
)(Home)