import React, {Component} from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import global from '../../css/global';
import styleHeader from '../../css/header';

class Header extends Component{
    render(){
        return (
            <Navigator
                barTintColor="#fff" 
                style={styleHeader.header}
                initialRoute={{}}
                renderScene={(route, navigator) => (
                    <View style={global.row}>
                        <View style={[global.col4, global.left]}>
                            <View style={styleHeader.buttonNavWr}><Image style={styleHeader.buttonNav} source={require("./img/icon/nav.png")} ></Image></View>
                        </View>
                        <View style={[global.col4, global.center]}>
                            <View style={styleHeader.logoWr}><Image style={styleHeader.logo} source={require("./img/icon/logo.png")} ></Image></View>
                        </View>
                        <View style={[global.col4, global.right]}>
                            <View style={styleHeader.buttonShopWr}><Image style={styleHeader.buttonShopImage} source={require("./img/icon/shop.png")} ><View style={styleHeader.numShop}></View></Image></View>
                        </View>
                    </View>
                )}
            >
            </Navigator>
        )
    }
}
module.exports = Header;