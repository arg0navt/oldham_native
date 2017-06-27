import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button , TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Provider, connect } from 'react-redux'
import global from '../../css/global';
import c from '../../css/comein';

const w = Dimensions.get('window');

class EndRegistration extends Component{
    render(){
        return(
            <View style={[global.content, {height:w.height}]}>
                <View style={{height:w.height, position:'absolute', top:0, bottom:0, right:0, left:0}}>
                    <Image source={require('../../img/picher/end.png')} style={{position:'absolute', height:w.height - 150,width:w.width, marginTop:0}} resizeMode="stretch" />
                    <View style={[global.center, {position:'absolute', bottom:30, left:0, zIndex:2}]}>
                        <Text style={{width:'100%', color:'#fff', marginBottom:20, textAlign:'center'}}>Регистрация прошла успешно</Text>
                        <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Home',name: 'Home'})} style={[c.button, c.comeinButtonLogin, {width:310, marginTop:30, backgroundColor:'#3a934f', borderWidth:0}]}  activeOpacity={1}>
                            <Text style={c.buttonText}>Продолжить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default connect(
    state => ({Store: state}),
    dispatch =>({})
)(EndRegistration)