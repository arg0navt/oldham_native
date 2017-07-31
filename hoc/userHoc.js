import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import axios  from 'axios';
import { Api } from '../config'
import routes from '../config/routes'

const catcherError = (data) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => { data.data[0].result == undefined ? reject(data.data[0].error.message) : resolve(data.data[0].result) },10)
    })
}

const UserHoc = (ComposedComponent) => {
    class UserHoc extends Component{
        error(text){
            this.initError(text)
            setTimeout(()=>{
                this.removeError()
            },3000)
        }
        getToken(){
            axios.get(Api('Auth','getTokenWithoutAuth'))
            .then((response) => {
                catcherError(response)
                    .then((data) => {
                        this.pushToken(data.user_token)
                    })
                    .catch((message) => {this.error.bind(this, message)})
            })
            .catch((error) => {this.error.bind(this, error)})
        }
        getLogin(token, login, password, reset = 'Home'){
            if (login == undefined || login == '' || password == undefined || password == '' ){
                this.error('Введите логин или пароль')
            } else {
                axios.get(Api('Auth','auth',`"token":"${token}","login":"${login}","password":"${password}"`))
                .then((response) => {
                    catcherError(response)
                        .then((data) => {
                            this.pushProfile(data.user)
                            this.getLoyality(data.user.user_token)
                            AsyncStorage.setItem('user', JSON.stringify(data.user));
                            this.navigator.push({id: reset, name: reset}) 
                        })
                        .catch((message) => {
                            this.error(message)
                        })
                })
                .catch((error) => { this.error(error) })
            }
        }
        getRegistration(token, name, phone, password, cod){
            if (phone == undefined || phone == '' || password == undefined || password == '' ){
                this.error('Введите логин или пароль')
            } else {
                axios.get(Api('Auth','registerByToken',`%22token%22:%22${token}%22,%22name%22:%22${name}%22,%22login%22:%22${phone}%22,%22password%22:%22${password}%22,%22phone%22:%22${phone}%22,%22promocode%22:%22${cod}%22`))
                .then((response)=>{
                    catcherError(response)
                        .then((data) => {
                            this.getLogin(data.user.user_token, phone, password, 'EndRegistration')
                            this.getLoyality(data.user.user_token)
                        })
                        .catch((message) => {
                            this.error(message)
                        })
                })
                .catch((error) => { this.error(error) })
            }
        }
        getUserSettings(token, phone, OldPassword, NewPassword, name, lastname, email, city){
            const settings = `%22token%22:%22${token}%22,%22user_login%22:%22${phone}%22,%22user_phone%22:%22${phone}%22,%22user_old_password%22:%22${OldPassword}%22,%22user_new_password%22:%22${NewPassword}%22,%22user_name%22:%22${name}%22${lastname != "" ? ',%22user_lastname%22:%22' + lastname + '%22': ''}${email != "" ? ',%22user_email%22:%22' + email + '%22': ''}${city != "" ? ',%22user_address%22:%22' + city + '%22': ''}`
            if (phone == undefined || phone == '' || OldPassword == undefined || OldPassword == '' || NewPassword == undefined || NewPassword == '' ){
                this.error('Введите логин или пароль')
            } else {
                axios.get(Api('User','update', settings))
                .then((response) => {
                    catcherError(response)
                    .then((data) => {
                        this.pushToken(data.user_token)
                        this.getLogin(token, phone, NewPassword)
                    })
                    .catch((message) => {
                        this.error(message)
                    })
                })
                .catch((error) => {})
            }
        }
        getLoyality(token){
            axios.get(Api('Loyalty','get',`"token":"${token}"`))
            .then((response)=>{
                catcherError(response)
                    .then((data) => {
                        this.pushLoyalty(data)
                    })
                    .catch((message) => {
                        this.getToken();
                    })
            })
            .catch((error) => {})
        }
        render() {
            return <ComposedComponent getUserSettings={this.getUserSettings} error={this.error} getRegistration={this.getRegistration} getLoyality={this.getLoyality} getToken={this.getToken} getLogin={this.getLogin} {...this.props} {...this.state} />;
        }
    }
    return UserHoc
}
export default UserHoc;