import React, { Component } from 'react';
import axios  from 'axios';
import { Api } from '../config'

const UserHoc = (ComposedComponent) => {
    class UserHoc extends Component{
        getToken(){
            axios.get(Api('Auth','getTokenWithoutAuth'))
            .then((response) => {
                this.pushToken(response.data[0].result.user_token)
            })
            .catch((error) => {console.log(error)})
        }
        getLogin(token, login, password){
            axios.get(Api('Auth','auth',`"token":"${token}","login":"${login}","password":"${password}"`))
            .then((response)=>{
                this.pushProfile(response.data[0].result.user)
            })
            .catch((error) => { console.log('Ошибка от сервера') })
        }
        render() {
            return <ComposedComponent getToken={this.getToken} getLogin={this.getLogin} {...this.props} {...this.state} />;
        }
    }
    return UserHoc
}
export default UserHoc;