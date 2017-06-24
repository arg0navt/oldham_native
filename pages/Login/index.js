import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button  } from 'react-native';
import { Provider, connect } from 'react-redux'
import global from '../../css/global';
import {Actions} from 'react-native-redux-router'
import FloatingLabel from 'react-native-floating-labels'

class Login extends Component{
    render(){
        return(
            <ScrollView style={global.content}>
                <Text style={{color:'#fff'}}>111</Text>
            </ScrollView>
        )
    }
}
export default connect(
    state => ({Store: state}),
    dispatch =>({})
)(Login)