import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button , TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import u from '../../css/user'
import UserHoc from '../../hoc/userHoc'
import global from '../../css/global';

class UserSettings extends Component{
    constructor(props){
        super(props)
        this.state = {
            OldPassword:'',
            NewPassword:'',
            name:'',
            lastname:'',
            phone:'',
            email:'',
            city:'',
            error:''
        }
    }
    componentWillReceiveProps(nextProps){
        const { profile } = this.props.Store.user 
        if (nextProps.Store.user.profile != this.props.Store.user.profile){
            if (nextProps.Store.user.profile != undefined){
                this.setState({
                    phone: profile.user_phone,
                    name: profile.user_name,
                    lastname: profile.user_lastname,
                    city: profile.user_address,
                    email: profile.user_email,
                })
            }
        }
    }
    userSettings(){
        this.props.getUserSettings(this.props.Store.user.token, this.state.phone, this.state.OldPassword, this.state.NewPassword, this.state.name, this.state.lastname, this.state.email, this.state.city)
    }
    render(){
        const { profile } = this.props.Store.user
        const { loyalty } = this.props.Store.user
        return(
            <ScrollView style={{paddingLeft:15, paddingRight:15, paddingBottom:30}}>
                <View className={u.page}>
                    <View className={[u.pageWr, {paddingLeft:15, paddingRight:15}]}>
                        <View style={u.inputBlock}>
                            <TextInput
                                style={u.formInput}
                                onChangeText={(text) => this.setState({phone:text})}
                                value={this.state.phone}
                                placeholder={'Номер телефона'}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                            />
                        </View>
                        <View style={u.inputBlock}>
                            <TextInput
                                style={u.formInput}
                                onChangeText={(text) => this.setState({OldPassword:text})}
                                value={this.state.OldPassword}
                                placeholder={'Старый пароль'}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                            />
                        </View>
                        <View style={u.inputBlock}>
                            <TextInput
                                style={u.formInput}
                                onChangeText={(text) => this.setState({NewPassword:text})}
                                value={this.state.NewPassword}
                                placeholder={'Новый пароль'}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                            />
                        </View>
                        <View style={u.inputBlock}>
                            <TextInput
                                style={u.formInput}
                                onChangeText={(text) => this.setState({name:text})}
                                value={this.state.name}
                                placeholder={'Имя'}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                            />
                        </View>
                        <View style={u.inputBlock}>
                            <TextInput
                                style={u.formInput}
                                onChangeText={(text) => this.setState({lastname:text})}
                                value={this.state.lastname}
                                placeholder={'Фамилия'}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                            />
                        </View>
                        <View style={u.inputBlock}>
                            <TextInput
                                style={u.formInput}
                                onChangeText={(text) => this.setState({email:text})}
                                value={this.state.email}
                                placeholder={'E-mail'}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                            />
                        </View>
                        <View style={u.inputBlock}>
                            <TextInput
                                style={u.formInput}
                                onChangeText={(text) => this.setState({city:text})}
                                value={this.state.city}
                                placeholder={'Город'}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'rgba(0,0,0,0)'}
                            />
                        </View>
                        <TouchableOpacity onPress={this.userSettings.bind(this)} style={[u.tools, u.toolsSub]}><Text style={u.tollSettings}>Принять</Text></TouchableOpacity>
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
)(UserHoc(UserSettings))