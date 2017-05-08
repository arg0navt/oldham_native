import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import global from '../../css/global';
import bottomPanel from '../../css/bottomPanel'

export default class Slider extends Component{
    render(){
        return(
            <View style={bottomPanel.bottomPanel}>
                <View style={global.row}>
                    <View style={global.col4}>
                        <Text style={bottomPanel.sity}><Image style={bottomPanel.iconSity} source={require("../../img/icon/sity.png")} ></Image>Санкт-Петербург</Text>
                    </View>
                    <View style={global.col4}>
                        <Text style={bottomPanel.changeSity}>Изменить</Text>
                    </View>
                </View>
            </View>
        )
    }
}
