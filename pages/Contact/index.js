import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, Image, TouchableOpacity, Linking } from 'react-native';
import Communications from 'react-native-communications';
import global from '../../css/global';
import g from '../../css/guarantees';
import con from '../../css/contact';
import { connect } from 'react-redux'

class Contact extends Component{
    linkMap(link){
        const url = link;
        Linking.openURL(url).catch();
    }
    linkTel(link){
        Communications.phonecall('88162926494', true)
    }
    render(){
        return(
            <ScrollView>
                <View style={con.pageContact}>
                    <View style={con.Top}>
                        <Text style={con.topOne}>СЛУЖБА ГОРЯЧЕЙ{"\n"}ДОСТАВКИ GOURMETTO</Text>
                        <Text style={con.topTwo}>8(8162) 700-300</Text>
                        <Text style={con.topThree}>Ежедневно, с 10 до 2 часов ночи</Text>
                    </View>
                    <View style={con.item}>
                        <View style={con.itemLeft}>
                            <Image style={{width:83, height:64}} source={require('../../img/icon/con1.png')} />
                        </View>
                        <View style={con.itemRight}>
                            <Text style={con.sity}>Великий Новгород</Text>
                            <Text style={con.addres}>ул. Ломоносова, д. 18, кор. 2</Text>
                            <TouchableOpacity onPress={this.linkMap.bind(this, 'https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%9B%D0%BE%D0%BC%D0%BE%D0%BD%D0%BE%D1%81%D0%BE%D0%B2%D0%B0,+18,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9+%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@58.5332513,31.2401692,17z/data=!3m1!4b1!4m5!3m4!1s0x46beebc811787919:0xa34ddbdb3c93dafb!8m2!3d58.5332513!4d31.2423579')} style={con.addMap}><Text style={con.addMapText}>Посмотреть на карте</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={con.itemPhone}>
                        <TouchableOpacity style={con.itemPhoneLeft} onPress={this.linkTel.bind(this)}>
                            <View>
                                <Text style={con.itemPhoneText}>Телефон</Text>
                                <Text style={con.itemPhoneSpan}>8 (8162) 92-64-94</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={con.itemPhoneRight}>
                            <TouchableOpacity onPress={this.linkTel.bind(this)} style={con.itemPhoneButton}><Text style={con.itemPhoneButtonColor}>позвонить</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={con.itemPhone}>
                        <View style={con.itemPhoneLeft}>
                            <View>
                                <Text style={con.itemPhoneTextOne}>Время работы</Text>
                                <Text style={con.itemPhoneTextTwo}>Ежедневно</Text>
                                <Text style={con.itemPhoneTextTwo}>с 11:00 до 23 часов</Text>
                            </View>
                        </View>
                        <View style={con.itemPhoneRight}></View>
                    </View>
                    <View style={con.item}>
                        <View style={con.itemLeft}>
                            <Image style={{width:83, height:29}} source={require('../../img/icon/con2.png')} />
                        </View>
                        <View style={con.itemRight}>
                            <Text style={con.sity}>Великий Новгород</Text>
                            <Text style={con.addres}>ул. Псковская, д. 11</Text>
                            <TouchableOpacity onPress={this.linkMap.bind(this, 'https://www.google.ru/maps/place/%D0%9F%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+11,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9+%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+173015/@58.5162137,31.2450554,17z/data=!3m1!4b1!4m5!3m4!1s0x46beea2cfa91f20b:0x5658f8a0867563b4!8m2!3d58.5162137!4d31.2472441')} style={con.addMap}><Text style={con.addMapText}>Посмотреть на карте</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(Contact)