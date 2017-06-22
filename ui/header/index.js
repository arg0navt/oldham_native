import React, {Component} from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import global from '../../css/global';
import styleHeader from '../../css/header';
import { url } from '../../config'

const w = Dimensions.get('window');

class Header extends Component{
    render(){
        return (
            <Navigator
                barTintColor="#fff" 
                style={styleHeader.header}
                initialRoute={{}}
                renderScene={(route, navigator) => (
                    <View style={[global.row, global.noPadding]}>
                        <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/home/bg_mainscreen.jpg`}} style={[global.row, {height: w.height, width: w.width, paddingTop:22, paddingLeft:15, paddingRight:15, alignItems:'flex-start', marginTop:-10}]} resizeMode="stretch">
                        <View style={[global.col4, global.left]}>
                            <View style={styleHeader.buttonNavWr}><Image style={styleHeader.buttonNav} source={require("./img/icon/nav.png")} ></Image></View>
                        </View>
                        <View style={[global.col4, global.center]}>
                            <View style={styleHeader.logoWr}></View>
                        </View>
                        <View style={[global.col4, global.right]}>
                            <View style={styleHeader.buttonShopWr}><Image style={styleHeader.buttonShopImage} source={require("./img/icon/shop.png")} ><View style={styleHeader.numShop}></View></Image></View>
                        </View>
                        </Image>
                    </View>
                )}
            >
            </Navigator>
        )
    }
}
module.exports = Header;