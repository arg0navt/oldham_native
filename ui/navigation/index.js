import React, {Component} from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import global from '../../css/global';
import nav from '../../css/navigation';
import { connect } from 'react-redux'
import { url } from '../../config'

class Navigation extends Component{
    goPage(page){
        this.props.navig.push({id: page,name: page})
    }
    render(){
        return(
            <View style={nav.nav}>
                <View style={nav.avtorization}>
                    <Image source={require('../../img/icon/nav/logo_nav.png')} style={{width:70, height:52}}/>
                </View>
                <View className={nav.ul}>
                    <TouchableOpacity style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-1.png')} style={[nav.icon, {width:17, height:17}]} /></View><Text style={nav.liText}>Личный кабинет</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.goPage.bind(this, 'Shares')} style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-2.png')} style={[nav.icon, {width:22, height:22}]} /></View><Text style={nav.liText}>Акции</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.goPage.bind(this, 'Guarantees')} style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-3.png')} style={[nav.icon, {width:16, height:21}]} /></View><Text style={nav.liText}>Гарантии</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.goPage.bind(this, 'Delivery')} style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-4.png')} style={[nav.icon, {width:20, height:17}]} /></View><Text style={nav.liText}>О доставке</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.goPage.bind(this, 'Contact')} style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-5.png')} style={[nav.icon, {width:21, height:22}]} /></View><Text style={nav.liText}>Контакты</Text></TouchableOpacity>
                    <TouchableOpacity style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-6.png')} style={[nav.icon, {width:24, height:24}]} /></View><Text style={nav.liText}>Помощь</Text></TouchableOpacity>
                    <TouchableOpacity style={nav.li}><View style={nav.iconWrap}><Image source={require('../../img/icon/nav/icon-7.png')} style={[nav.icon, {width:21, height:21}]} /></View><Text style={nav.liText}>О приложении</Text></TouchableOpacity>
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