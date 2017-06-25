import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button , TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Provider, connect } from 'react-redux'
import global from '../../css/global';
import c from '../../css/comein';
import {Actions} from 'react-native-redux-router'
import FloatingLabel from 'react-native-floating-labels'

const w = Dimensions.get('window');

class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            error:'',
            name:'',
            login:'',
            cod:'',
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
    render(){
        return(
            <ScrollView style={global.content}>
                <View style={[{height:w.height - 75}, c.wrap]}>
                <View style={c.comeinCenter}>
                    <TextInput
                        style={c.formInputReg}
                        onChange={this.change.bind(this, 'name')}
                        value={this.state.name}
                        placeholder={'Имя'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={c.formInputReg}
                        onChange={this.change.bind(this, 'login')}
                        value={this.state.login}
                        placeholder={'Номер телефона'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={[c.formInputReg]}
                        onChange={this.change.bind(this, 'password')}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder={'Пароль'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={[c.formInputReg, {marginBottom:80}]}
                        onChange={this.change.bind(this, 'cod')}
                        value={this.state.cod}
                        placeholder={'Код приглашения'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TouchableOpacity style={[c.button, c.comeinButtonLogin, {width:310, marginTop:30}]} onPress={Actions.login} activeOpacity={1}>
                        <Text style={c.buttonText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        )
    }
}
export default connect(
    state => ({Store: state}),
    dispatch =>({})
)(Registration)