import React, {Component} from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, ScrollView, Dimensions,  } from 'react-native';
import global from '../../css/global';
import nav from '../../css/navigation';
import { connect } from 'react-redux'
import { url } from '../../config'

class Navigation extends Component{
    render(){
        return(
            <View style={nav.nav}>
                <View style={nav.avtorization}>
                    <Image source={require('../../img/icon/nav/logo_nav.png')} style={{width:70, height:52}}/>
                </View>
                <View className={nav.ul}>
                    <View style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-1.png')} style={[nav.icon, {width:17, height:17}]} /></View><Text style={nav.liText}>Личный кабинет</Text></View>
                    <View style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-2.png')} style={[nav.icon, {width:22, height:22}]} /></View><Text style={nav.liText}>Акции</Text></View>
                    <View style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-3.png')} style={[nav.icon, {width:16, height:21}]} /></View><Text style={nav.liText}>Гарантии</Text></View>
                    <View style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-4.png')} style={[nav.icon, {width:20, height:17}]} /></View><Text style={nav.liText}>О доставке</Text></View>
                    <View style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-5.png')} style={[nav.icon, {width:21, height:22}]} /></View><Text style={nav.liText}>Контакты</Text></View>
                    <View style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-6.png')} style={[nav.icon, {width:24, height:24}]} /></View><Text style={nav.liText}>Помощь</Text></View>
                    <View style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-7.png')} style={[nav.icon, {width:21, height:21}]} /></View><Text style={nav.liText}>О приложении</Text></View>
                </View>
            </View>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({
        
    })
)(Navigation)