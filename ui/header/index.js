import React, {Component} from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, BackAndroid } from 'react-native';
import global from '../../css/global';
import styleHeader from '../../css/header';
import { connect } from 'react-redux'
import { url } from '../../config'
import { Router, Route, Animations, Schema, Actions } from 'react-native-redux-router'

const w = Dimensions.get('window');

class Header extends Component{
    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.props.route.id != 'Home') {
                this.props.navigator.jumpBack()
                return true;
            } else {
                return true;
            }
        })
    }
    openNavigation(){
        this.props.openPanel()
    }
    render(){
        const { route, navigator } = this.props
        return (
            <View style={{height:60}}>
            <View style={styleHeader.header}>
                <View style={[global.row, global.noPadding]}>
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg`}} style={[global.row, {height: w.height, width: w.width, paddingTop:24, paddingLeft:15, paddingRight:15, alignItems:'flex-start', marginTop:7,position:'absolute'}]} resizeMode="stretch">
                        <View style={[global.col4, global.left]}>
                            {route.id == 'Home' ? (
                                <TouchableOpacity onPress={this.openNavigation.bind(this)}>
                                    <View style={styleHeader.buttonNavWr}><Image style={styleHeader.buttonNav} source={require("./img/icon/nav.png")} ></Image></View>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => navigator.jumpBack()}>
                                    <View style={styleHeader.buttonNavWr}><Image style={styleHeader.buttonNav} source={require("../../img/icon/back.png")} ></Image></View>
                                </TouchableOpacity>
                            )}
                        </View>
                        {route.id != 'Home' ? (
                        <TouchableOpacity style={[global.col4, styleHeader.logoWr]} onPress={() => navigator.push({id: 'Home',name: 'Home'})}></TouchableOpacity>
                        ) : (
                            <View></View>
                        )}
                        <View style={[global.col4, global.right]}>
                            <TouchableOpacity onPress={() => navigator.push({id: 'Basket',name: 'Basket'})} style={styleHeader.buttonShopWr}>
                                <Image style={styleHeader.buttonShopImage} source={require("./img/icon/shop.png")}>
                                    {this.props.Store.basket.length != 0 ? (
                                        <View style={styleHeader.numShop}></View>
                                    ) : (<View></View>)}
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </Image>
                </View>
            </View>
            </View>
        )
    }
}
export default connect(
    state => ({
        Store: state
    })
)(Header)