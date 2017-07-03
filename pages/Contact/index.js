import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, Image, TouchableOpacity } from 'react-native';
import global from '../../css/global';
import g from '../../css/guarantees';
import con from '../../css/contact';
import { connect } from 'react-redux'

class Contact extends Component{
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
                            <TouchableOpacity style={con.addMap}><Text style={con.addMapText}>Посмотреть на карте</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={con.itemPhone}>
                        <View style={con.itemPhoneLeft}>
                            <View>
                                <Text style={con.itemPhoneText}>Телефон</Text>
                                <Text style={con.itemPhoneSpan}>8 (8162) 92-64-94</Text>
                            </View>
                        </View>
                        <View style={con.itemPhoneRight}>
                            <TouchableOpacity style={con.itemPhoneButton}><Text style={con.itemPhoneButtonColor}>позвонить</Text></TouchableOpacity>
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
                            <TouchableOpacity style={con.addMap}><Text style={con.addMapText}>Посмотреть на карте</Text></TouchableOpacity>
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