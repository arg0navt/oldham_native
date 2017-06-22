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
        render() {
            return <ComposedComponent getToken={this.getToken} {...this.props} {...this.state} />;
        }
    }
    return UserHoc
}
export default UserHoc;