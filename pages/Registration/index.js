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

class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            error:'',
            name:'Крутой',
            login:'88006767676',
            cod:'',
            password:'123456789'
        }
    }
    registration(token, name, phone, password, cod){
        this.props.getRegistration(token, name, phone, password, cod)
    }
    render(){
        return(
            <View style={[{height:w.height - 75}, c.wrap]}>
                <View style={c.comeinCenter}>
                    <TextInput
                        style={c.formInputReg}
                        onChangeText={(text) => this.setState({name:text})}
                        value={this.state.name}
                        placeholder={'Имя'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={c.formInputReg}
                        onChangeText={(text) => this.setState({login:text})}
                        value={this.state.login}
                        placeholder={'Номер телефона'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={[c.formInputReg]}
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder={'Пароль'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={[c.formInputReg, {marginBottom:80}]}
                        onChangeText={(text) => this.setState({cod:text})}
                        value={this.state.cod}
                        placeholder={'Код приглашения'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TouchableOpacity style={[c.button, c.comeinButtonLogin, {width:310, marginTop:30}]} onPress={this.registration.bind(this, this.props.Store.user.token, this.state.name, this.state.login, this.state.password, this.state.cod)} activeOpacity={1}>
                        <Text style={c.buttonText}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default connect(
    state => ({Store: state}),
    dispatch =>({
        pushProfile: (item) => {dispatch({type:'PROFILE', payload:item})},
        pushLoyalty: (item) => {dispatch({type:'LOYALITY', payload:item})},
        initError: (text) => {dispatch({type:'ERROR', payload:text})},
        removeError:() => {dispatch({type:'DROP_ERROR'})}
    })
)(UserHoc(Registration))