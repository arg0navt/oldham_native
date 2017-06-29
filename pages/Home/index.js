import React, { Component } from 'react';
import { View, ScrollView  } from 'react-native';
import Drawer from 'react-native-drawer'
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import { connect } from 'react-redux'
import { url } from '../../config'
import UserHoc from '../../hoc/userHoc'
import Slider from '../../ui/slider'
import Catalog from '../../ui/catalog'
import Card from '../../ui/card'

class Home extends Component{
    componentDidMount(){
        this.props.getToken()
    }
    render(){
        return (
            <ScrollView style={{flex:1, paddingLeft:15, paddingRight:15}}>
                <Slider nav={this.props.navigator} />
                <Card nav={this.props.navigator} />
                <Catalog nav={this.props.navigator} />
            </ScrollView>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({
        pushToken: (token) => {dispatch({type:'TOKEN', payload:token})},
    })
)(UserHoc(Home))