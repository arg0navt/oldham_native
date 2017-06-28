import React, { Component } from 'react';
import { AppRegistry, View, Image, Navigator, Dimensions, Text, ScrollView, StatusBar } from 'react-native';
import Home from '../pages/Home';
import ComeIn from '../pages/ComeIn';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import EndRegistration from '../pages/EndRegistration';
import Catalog from '../pages/Catalog';

export default routes = [
    {id: 'Catalog', name: 'Catalog', component: Catalog, index: 0},
    {id: 'ComeIn', name: 'ComeIn', component: ComeIn, index: 1},
    {id: 'Login', name: 'Login', component: Login, index: 2},
    {id: 'Registration', name: 'Registration', component: Registration, index: 3},
    {id: 'EndRegistration', name: 'EndRegistration', component: EndRegistration, index: 4},
];
export const RenderScene = ({route, navigator}) => (
    <ScrollView style={{flex:1}}>
    {route.id === 'Home' ? <Home navigator={navigator} /> :
    route.id === 'ComeIn' ? <ComeIn navigator={navigator} /> :
    route.id === 'Login' ? <Login navigator={navigator} /> :
    route.id === 'Registration' ? <Registration navigator={navigator} /> : 
    route.id === 'EndRegistration' ? <EndRegistration navigator={navigator} /> :
    route.id === 'Catalog' ? <Catalog navigator={navigator} /> :
    <View></View>}
    </ScrollView>
)