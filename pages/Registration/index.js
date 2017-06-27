import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button , TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Provider, connect } from 'react-redux'
import global from '../../css/global';
import c from '../../css/comein';
import UserHoc from '../../hoc/userHoc'
import { url } from '../../config'

const w = Dimensions.get('window');

class Registration extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            login:'',
            cod:'',
            password:''
        }
    }
    registration(token, name, phone, password, cod){
        this.props.getRegistration(token, name, phone, password, cod)
    }
    render(){
        const {token} = this.props.Store.user
        return(
            <ScrollView style={global.content}>
                <View style={c.wrap}>
                <View style={c.comeinCenter}>
                    <TextInput
                        style={c.formInputReg}
                        onChangeText={(text) => this.setState({name:text})}
                        value={this.state.name}
                        enablesReturnKeyAutomatically={true}
                        placeholder={'Имя'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={c.formInputReg}
                        onChangeText={(text) => this.setState({login:text})}
                        value={this.state.login}
                        enablesReturnKeyAutomatically={true}
                        placeholder={'Номер телефона'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={[c.formInputReg]}
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                        enablesReturnKeyAutomatically={true}
                        secureTextEntry={true}
                        placeholder={'Пароль'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TextInput
                        style={[c.formInputReg, {marginBottom:80}]}
                        onChangeText={(text) => this.setState({cod:text})}
                        value={this.state.cod}
                        enablesReturnKeyAutomatically={true}
                        placeholder={'Код приглашения'}
                        placeholderTextColor={'#fff'}
                        underlineColorAndroid={'rgba(0,0,0,0)'}
                    />
                    <TouchableOpacity onPress={this.registration.bind(this, token, this.state.name, this.state.login, this.state.password, this.state.cod)} style={[c.button, c.comeinButtonLogin, {width:310, marginTop:30}]}  activeOpacity={1}>
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
    dispatch =>({
        pushProfile: (item) => {dispatch({type:'PROFILE', payload:item})},
        pushLoyalty: (item) => {dispatch({type:'LOYALITY', payload:item})},
        initError: (text) => {dispatch({type:'ERROR', payload:text})},
        removeError:() => {dispatch({type:'DROP_ERROR'})}
    })
)(UserHoc(Registration))