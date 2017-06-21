import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Slider from '../../ui/slider'
import Catalog from '../../ui/catalog'
import Card from '../../ui/card'
import { Provider, connect } from 'react-redux'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'

class Children extends Component{
    componentDidMount(){
        setTimeout(()=>{console.log(this)},1000)
    }
    render(){
        return (
            <View>
                <Router>
                    <Route name="home" component={Slider} title="Home" type="replace"/>
                    <Route name="register" component={Slider} title="Register"/>
                </Router>
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