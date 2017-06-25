import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button, TouchableOpacity  } from 'react-native';
import { connect } from 'react-redux'
import global from '../../css/global';
import c from '../../css/comein';
import { Actions } from 'react-native-redux-router'

class ComeIn extends Component{
    render(){
        return(
            <View style={[global.content, c.wrap]}>
                <View style={c.comeinCenter}>
                <Text style={c.comeinText}>Зарегистрируйтесь, чтобы получить больше баллов и совершать заказы быстрее.</Text>
                <View style={c.comeinButtons}>
                    <TouchableOpacity style={[c.button, c.comeinButtonLogin]} onPress={Actions.login} activeOpacity={1}>
                        <Text style={c.buttonText}>Войти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[c.button, c.comeinButtonRegistration]} onPress={Actions.registration} activeOpacity={1}>
                        <Text style={c.buttonText}>Регистрация</Text>
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
)(ComeIn)