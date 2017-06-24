import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar  } from 'react-native';
import Drawer from 'react-native-drawer'
import Home from '../Home'
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import Header from '../../ui/header';
import Navigation from '../../ui/navigation'
import BottomPanel from '../../ui/bottomPanel'
import { Provider, connect } from 'react-redux'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'
import { url } from '../../config'
import UserHoc from '../../hoc/userHoc'

class Children extends Component{
    componentDidMount(){
        this.props.getToken()
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render(){
        var navigationView = (
            <Navigation />
        )
        return (
            <View style={AppCss.App}>
                <Drawer
                openDrawerOffset={0.45}
                closedDrawerOffset={-3}
                tapToClose={true}
                tweenHandler={Drawer.tweenPresets.parallax}
                ref={(ref) => this._drawer = ref}
                content={<Navigation />}
            >
                <Header openPanel={this.openControlPanel} />
                <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg`}} style={AppCss.bg}>
                    <Router>
                        <Route name="home" component={Home} title="Home" type="replace"/>
                    </Router>
                </Image>
                </Drawer>
            </View>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({
        pushToken:(token) => {dispatch({type:'@user.TOKEN', payload:token})}
    })
)(UserHoc(Children))