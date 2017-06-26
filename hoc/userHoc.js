import React, { Component } from 'react';
import axios  from 'axios';
import { Api } from '../config'
import routes from '../config/routes'

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
                if (response.data[0].result != undefined){
                    this.pushToken(response.data[0].result.user_token)
                } else {
                    this.error(response.data[0].error.message)
                }
            })
            .catch((error) => {this.error(error)})
        }
        getLogin(token, login, password){
            console.log(this)
            axios.get(Api('Auth','auth',`"token":"${token}","login":"${login}","password":"${password}"`))
            .then((response)=>{
                if (response.data[0].result != undefined){
                    this.pushProfile(response.data[0].result.user)
                    this.navigator.jumpTo(routes[0])
                    this.getLoyality(response.data[0].result.user.user_token) 
                } else {
                    this.error(response.data[0].error.message)
                }
            })
            .catch((error) => { this.error(error) })
        }
        getRegistration(token, name, phone, password, cod){
            axios.get(Api('Auth','registerByToken',`%22token%22:%22${token}%22,%22name%22:%22${name}%22,%22login%22:%22${phone}%22,%22password%22:%22${password}%22,%22phone%22:%22${phone}%22,%22promocode%22:%22${cod}%22`))
            .then((response)=>{
                if (response.data[0].result != undefined){
                    this.getLogin(response.data[0].result.user.user_token, phone, password)
                    this.getLoyality(response.data[0].result.user.user_token)
                } else {
                    this.error(response.data[0].error.message)
                }
            })
            .catch((error) => { this.error(error) })
        }
        getLoyality(token){
            axios.get(Api('Loyalty','get',`"token":"${token}"`))
            .then((response)=>{
                if (response.data[0].result != undefined){
                    this.pushLoyalty(response.data[0].result)
                } else {
                    this.error(response.data[0].error.message)
                }
            })
            .catch((error) => { console.log('Ошибка от сервера2') })
        }
        render() {
            return <ComposedComponent error={this.error} getRegistration={this.getRegistration} getLoyality={this.getLoyality} getToken={this.getToken} getLogin={this.getLogin} {...this.props} {...this.state} />;
        }
    }
    return UserHoc
}
export default UserHoc;