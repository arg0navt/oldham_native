import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import global from '../../css/global';
import catalog from '../../css/catalog'

export default class Slider extends Component{
    render(){
        return(
            <View style={[global.row, catalog.catalogBlock]}>
                <View style={catalog.catalogRow}>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-1.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/pizza.png')} style={[catalog.iconImg, {width:42,height:44}]}></Image>
                                    <Text style={[catalog.iconText, {width:44}]}>пицца</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-2.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/sushi.png')} style={[catalog.iconImg, {width:50,height:47}]}></Image>
                                    <Text style={[catalog.iconText, {width:47}]}>суши и роллы</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-3.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/wok.png')} style={[catalog.iconImg, {width:50,height:50}]}></Image>
                                    <Text style={[catalog.iconText, {width:50}]}>WOK</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-4.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/pasta.png')} style={[catalog.iconImg, {width:43,height:40}]}></Image>
                                    <Text style={[catalog.iconText, {width:40}]}>паста</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-5.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/beverages.png')} style={[catalog.iconImg, {width:35,height:51}]}></Image>
                                    <Text style={[catalog.iconText, {width:51}]}>напитки</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-6.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/snacks.png')} style={[catalog.iconImg, {width:56,height:42}]}></Image>
                                    <Text style={[catalog.iconText, {width:42}]}>закуски</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-7.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/salad.png')} style={[catalog.iconImg, {width:55,height:46}]}></Image>
                                    <Text style={[catalog.iconText, {width:46}]}>салаты</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-8.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/dessert.png')} style={[catalog.iconImg, {width:49,height:43}]}></Image>
                                    <Text style={[catalog.iconText, {width:43}]}>десерты</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={catalog.itemCol}>
                        <View style={catalog.itemBlock}>
                            <Image source={require('./img/ui/item-9.jpg')} style={catalog.bgItem}></Image>
                            <View style={catalog.icon}>
                                <View style={catalog.iconWrap}>
                                    <Image source={require('./img/icon/food/sup.png')} style={[catalog.iconImg, {width:55,height:45}]}></Image>
                                    <Text style={[catalog.iconText, {width:55}]}>супы</Text>
                                </View>
                            </View>
                        </View>
                    </View>  
                </View>
            </View>
        )
    }
}