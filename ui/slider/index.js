import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import slider from '../../css/slider'
import global from '../../css/global';
import Carousel from 'react-native-carousel';

const w = Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
})

export default class Slider extends Component{
    render(){
        return(
            <View style={slider.sliderWrap}>
                <Carousel >
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
                </Carousel>
            </View>
        )
    }
}