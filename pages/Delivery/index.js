import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import global from '../../css/global';
import d from '../../css/delivery'

class Delivery extends Component{
    render(){
        return(
            <ScrollView className={d.deliveryPage}>
                <View style={d.item}>
                    <Text style={d.itemTextOne}>Условия доставки</Text>
                    <Text style={d.itemTextTwo}>Есть исключения, смотрите карту доставки</Text>
                    <View style={d.itemBlockWrap}>
                    <View style={d.itemBlock}>
                        <Image source={require('../../img/icon/delivery/map.png')} style={{position:'absolute', top:0, bottom:0, left:0, right:0}} />
                        <View style={d.it}>
                            <View style={d.itLeft}>
                                <Image style={d.itLeftImg} source={require(`../../img/icon/delivery/icon-1.png`)}/>
                            </View>
                            <View style={d.itRight}>
                                <Text style={d.pOne}>Бесплатная доставка</Text>
                                <Text style={d.pTwo}>Вы оплачиваете только заказ, мы доствим его бесплатно</Text>
                            </View>
                        </View>
                        <View style={d.it}>
                            <View style={d.itLeft}>
                                <Image style={d.itLeftImg} source={require(`../../img/icon/delivery/icon-2.png`)}/>
                            </View>
                            <View style={d.itRight}>
                                <Text style={d.pOne}>49 минут</Text>
                                <Text style={d.pTwo}>За это время мы доставим ваш заказ. При заказе не более 3-х блюд и доставке в черте города</Text>
                            </View>
                        </View>
                        <View style={[d.it, {borderBottomWidth:0}]}>
                            <View style={d.itLeft}>
                                <Image style={d.itLeftImg} source={require(`../../img/icon/delivery/icon-3.png`)}/>
                            </View>
                            <View style={d.itRight}>
                                <Text style={d.pOne}>с 10 до 02 часов</Text>
                                <Text style={d.pTwo}>В эти часы мы приготовим и привезём ваш заказ</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                </View>
                <Image source={require('../../img/icon/delivery/map.png')} style={d.fullBlock}>
                    <View style={d.fullText}><Image style={d.fullTextImg} source={require('../../img/icon/delivery/icon-8.png')}/><Text style={d.fullTextSt}>Карта доставки</Text></View>
                </Image>
                <View style={d.item}>
                    <Text style={d.itemTextOne}>Способы доставки</Text>
                    <View style={d.itemBlockWrap}>
                    <View style={d.itemBlock}>
                        <Image source={require('../../img/icon/delivery/map.png')} style={{position:'absolute', top:0, bottom:0, left:0, right:0}} />
                        <View style={d.it}>
                            <View style={d.itLeft}>
                                <Image style={d.itLeftImg} source={require(`../../img/icon/delivery/icon-4.png`)}/>
                            </View>
                            <View style={d.itRight}>
                                <Text style={d.pOne}>Способы доставки</Text>
                                <Text style={d.pTwo}>Курьер доставит Ваш заказ по указанному адресу</Text>
                            </View>
                        </View>
                        <View style={d.it}>
                            <View style={d.itLeft}>
                                <Image style={d.itLeftImg} source={require(`../../img/icon/delivery/icon-5.png`)}/>
                            </View>
                            <View style={d.itRight}>
                                <Text style={d.pOne}>Забрать из ресторана</Text>
                                <Text style={d.pTwo}>Вы можете забрать свой заказ прямо из ресторана по этим адресам</Text>
                            </View>
                        </View>
                        <View style={[d.it, {borderBottomWidth:0}]}>
                            <View style={d.itLeft}>
                                <Image style={d.itLeftImg} source={require(`../../img/icon/delivery/icon-3.png`)}/>
                            </View>
                            <View style={d.itRight}>
                                <Text style={d.pOne}>К определенному времени</Text>
                                <Text style={d.pTwo}>При заказе сообщите,к какому времени нужна доставка. Всё будет доставленно точно в срок</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                </View>
                <View style={d.bottom}>
                    <View style={d.bottomTitle}><Text style={d.bottomTitleText}>Способы оплаты</Text></View>
                    <View style={d.bottomWrap}>
                        <View style={d.bottomItem}>
                            <View style={d.bottomItemPich}>
                                <Image style={d.bottomItemImg} style={{width:31,height:31}} source={require('../../img/icon/delivery/icon-6.png')} />
                            </View>
                            <View style={d.wrapText}>
                                <Text style={d.bottomItemPOne}>Наличными</Text>
                                <Text style={d.bottomItemPTwo}>Вы можете оплатить заказ наличными курьеру или при получении в ресторане</Text>
                            </View>
                        </View>
                        <View style={d.bottomItem}>
                            <View style={d.bottomItemPich}>
                                <Image style={d.bottomItemImg} style={{width:36,height:25}} source={require('../../img/icon/delivery/icon-7.png')} />
                            </View>
                            <View style={d.wrapText}>
                                <Text style={d.bottomItemPOne}>Банковской картой</Text>
                                <Text style={d.bottomItemPTwo}>Пожалуйста, предупредите нас, если хотите оплатить заказ банковской картой</Text>
                            </View>
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
)(Delivery)