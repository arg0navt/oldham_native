import React, { Component } from 'react';
import { AppRegistry, View, Image, Navigator, Dimensions, Text, ScrollView, StatusBar } from 'react-native';
import Home from '../pages/Home';
import ComeIn from '../pages/ComeIn';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

export default routes = [
    {id: 'Home', name: 'Home', component: Home, index: 0},
    {id: 'ComeIn', name: 'ComeIn', component: ComeIn, index: 1},
    {id: 'Login', name: 'Login', component: Login, index: 2},
    {id: 'Registration', name: 'Registration', component: Registration, index: 3},
];
export const RenderScene = ({route, navigator}) => (
    <View style={{flex:1}}>
    {route.id === 'Home' ? <Home navigator={navigator} /> :
    route.id === 'ComeIn' ? <ComeIn navigator={navigator} /> :
    route.id === 'Login' ? <Login navigator={navigator} /> :
    route.id === 'Registration' ? <Registration navigator={navigator} /> : 
    <View></View>}
    </View>
)