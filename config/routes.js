import React, { Component } from 'react';
import { AppRegistry, View, Image, Navigator, Dimensions, Text, ScrollView, StatusBar } from 'react-native';
import Home from '../pages/Home';
import ComeIn from '../pages/ComeIn';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import EndRegistration from '../pages/EndRegistration';
import Catalog from '../pages/Catalog';
import Basket from '../pages/Basket';
import Detail from '../pages/Detail';
import Shares from '../pages/Shares';
import SharesDetail from '../pages/SharesDetail';
import User from '../pages/User';
import UserSettings from '../pages/User/settings';

export default routes = [
    {id: 'Home', name: 'Home', component: Home, index: 0},
    {id: 'ComeIn', name: 'ComeIn', component: ComeIn, index: 1},
    {id: 'Login', name: 'Login', component: Login, index: 2},
    {id: 'Registration', name: 'Registration', component: Registration, index: 3},
    {id: 'EndRegistration', name: 'EndRegistration', component: EndRegistration, index: 4},
    {id: 'Catalog', name: 'Catalog', component: Catalog, index: 5, categoryId:0 },
    {id: 'Basket', name: 'Basket', component: Basket, index: 6, categoryId:0 },
    {id: 'Detail', name: 'Detail', component: Detail, index: 7 },
    {id: 'SharesDetail', name: 'SharesDetail', component: SharesDetail, index: 8 },
    {id: 'Shares', name: 'Shares', component: Shares, index: 9},
    {id: 'UserSettings', name: 'UserSettings', component: UserSettings, index: 10},
];
export const RenderScene = ({route, navigator}) => (
    <ScrollView style={{flex:1}}>
        {route.id === 'Home' ? <Home navigator={navigator} route={route} /> :
        route.id === 'ComeIn' ? <ComeIn navigator={navigator} route={route} /> :
        route.id === 'Login' ? <Login navigator={navigator} route={route} /> :
        route.id === 'Registration' ? <Registration navigator={navigator} route={route} /> : 
        route.id === 'EndRegistration' ? <EndRegistration navigator={navigator} route={route} /> :
        route.id === 'Catalog' ? <Catalog navigator={navigator} route={route} /> :
        route.id === 'Basket' ? <Basket navigator={navigator} route={route} /> :
        route.id === 'Detail' ? <Detail navigator={navigator} route={route} /> :
        route.id === 'Shares' ? <Shares navigator={navigator} route={route} /> :
        route.id === 'SharesDetail' ? <SharesDetail navigator={navigator} route={route} /> :
        route.id === 'User' ? <User navigator={navigator} route={route} /> :
        route.id === 'UserSettings' ? <UserSettings navigator={navigator} route={route} /> :
        <View></View>}
    </ScrollView>
)