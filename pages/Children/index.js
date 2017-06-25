import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity  } from 'react-native';
import Drawer from 'react-native-drawer'
import { Cache, MemoryStore } from 'react-native-cache';
import Home from '../Home'
import Login from '../Login';
import Registration from '../Registration';
import ComeIn from '../ComeIn';
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import Header from '../../ui/header';
import Navigation from '../../ui/navigation'
import BottomPanel from '../../ui/bottomPanel'
import { Provider, connect } from 'react-redux'
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router'
import { url } from '../../config'
import UserHoc from '../../hoc/userHoc'

var cache = new Cache({
    namespace: 'myapp',
    policy: {
        maxEntries: 50000
    },
    backend: MemoryStore
});

class Children extends Component{
    componentDidMount(){
        console.log(this)
        this.props.Store.user.profile.user_token ? this.props.pushToken(this.props.Store.user.profile.user_token) : this.props.getToken()
    }
    openControlPanel = () => {
        this._drawer.open()
    }
    render(){
        var navigationView = (
            <Navigation />
        )
        return (
            <View style={{flex:1}}>
                <Drawer
                openDrawerOffset={0.45}
                closedDrawerOffset={-3}
                tapToClose={true}
                ref={(ref) => this._drawer = ref}
                content={<Navigation />}
            >
                <Header openPanel={this.openControlPanel} />
                <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg`}} style={AppCss.bg}>
                    <Router>
                        <Route name="home" component={Home} title="Home" sceneConfig={Animations.FlatFloatFromRight} type="push" />
                        <Route name="comein" component={ComeIn} title="Вход" sceneConfig={Animations.FlatFloatFromRight} type="push"/>
                        <Route name="login" component={Login} title="Вход" sceneConfig={Animations.FlatFloatFromRight} type="push"/>
                        <Route name="registration" component={Registration} title="Регистрация" sceneConfig={Animations.FlatFloatFromRight} type="push"/>
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