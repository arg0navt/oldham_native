import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import slider from '../../css/slider'
import global from '../../css/global';
import Swiper from 'react-native-swiper';

const w = Dimensions.get('window');

var styles = StyleSheet.create({
  wrapper: {
      height:174
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class Slider extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <Swiper style={styles.slide1}>
                    <View style={styles.container}>
                        <View style={slider.slide}>
                            <Image source={require('./img/picher/slider.jpg')} style={slider.blockImg} resizeMode="stretch"></Image>
                            <View style={slider.blockText}>
                                <View style={global.row}>
                                    <View style={slider.leftText}>
                                        <Text style={slider.sliderText}>Доставим за 40 минут или бесплатно!</Text>
                                    </View>
                                    <View style={slider.rightText}>
                                        <View style={global.row}>
                                            <Text style={slider.sliderLink}>Все акции</Text><Image source={require('./img/icon/up.png')} style={{width:16, height:16}}></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <View style={slider.slide}>
                            <Image source={require('./img/picher/slider.jpg')} style={slider.blockImg} resizeMode="stretch"></Image>
                            <View style={slider.blockText}>
                                <View style={global.row}>
                                    <View style={slider.leftText}>
                                        <Text style={slider.sliderText}>Доставим за 40 минут или бесплатно!</Text>
                                    </View>
                                    <View style={slider.rightText}>
                                        <View style={global.row}>
                                            <Text style={slider.sliderLink}>Все акции</Text><Image source={require('./img/icon/up.png')} style={{width:16, height:16}}></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Swiper>
            </View>
        )
    }
}