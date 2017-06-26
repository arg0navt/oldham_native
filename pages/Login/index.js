import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button , TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Provider, connect } from 'react-redux'
import global from '../../css/global';
import c from '../../css/comein';
import {Actions} from 'react-native-redux-router'
import FloatingLabel from 'react-native-floating-labels'
import UserHoc from '../../hoc/userHoc'
import { url } from '../../config'

const w = Dimensions.get('window');

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            error:'',
            login:'',
            password:''
        }
    }
    change(key, event){
        const items = this.state[key];
        this.state[key] = event.target.value;
        this.setState({
            items,
        })
    }
    login(token, login, password){
        this.props.getLogin(token, login, password)
        Actions.home
    }
    render(){
        const {token} = this.props.Store.user
        return(
            <ScrollView style={global.content}>
                <View style={[{height:w.height - 75}, c.wrap]}>
                <View style={c.comeinCenter}>
                    <Text style={c.comeinTextLogin}>Для входа на сайт введите ваш номер телефона и пароль</Text>
                    <TextInput
                        style={c.formInput}
                        onChangeText={(text) => this.setState({login:text})}
                        value={this.state.login}
                        placeholder={'Логин'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={[c.formInput, {marginBottom:30}]}
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder={'Пароль'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TouchableOpacity style={[c.button, c.comeinButtonLogin, {width:310, marginTop:30}]} onPress={Actions.home} activeOpacity={1}>
                        <Text style={c.buttonText}>Войти</Text>
                    </TouchableOpacity>
                        <Text style={c.buttonText}>Забыли пароль?</Text>
                </View>
                </View>
            </ScrollView>
        )
    }
}
export default connect(
    state => ({Store: state}),
    dispatch =>({
        pushProfile: (item) => {dispatch({type:'@user.PROFILE', payload:item})}
    })
)(UserHoc(Login))