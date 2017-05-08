import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import card from '../../css/card'
import global from '../../css/global';
import progressBar from '../../css/progressBar'
import ResponsiveImage from 'react-native-responsive-image';

const BarItem = ({progress, procent, status, active}) => (
    <View style={progressBar.item} >
        <View style={progressBar.circle}></View>
        <Text style={active == 'active' ? [progressBar.text, progressBar.active] : progressBar.text}>
            {status}{"\n"}{procent}%
        </Text>
    </View>
)

const ProgressBar = ({num}) => (
    <View style={progressBar.wrap}>
        <View style={progressBar.line}></View>
        <View style={progressBar.lineProgressWrap}>
            <View style={[global.row, progressBar.procentWrap]}>
                <View><Text style={progressBar.num}>0</Text></View>
                <View><Text style={progressBar.num}>25</Text></View>
                <View><Text style={progressBar.num}>50</Text></View>
                <View><Text style={progressBar.num}>100</Text></View>
            </View>
            <View style={[progressBar.lineProgress, {width:`${num}%`}]}></View>
        </View>
        <View style={[global.row, progressBar.items]}>
            <BarItem procent={5} status={'Basis'} active={num >= 0 && num < 25 ? 'active' : ''} />
            <BarItem procent={10} status={'Silver'} active={num >= 25 && num < 50 ? 'active' : ''} />
            <BarItem procent={15} status={'Gold'} active={num >= 50 && num < 100 ? 'active' : ''} />
            <BarItem procent={20} status={'VIP'} active={num == 100 ? 'active' : ''} />
        </View>
    </View>
)

export default class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 74
        }
    }
    render(){
        return(
            <View style={card.blockCard}>
                <View style={card.cardContent}>
                    <View style={[global.row, card.cardTop]}>
                        <View style={card.cardLogo}>
                            <View>
                                <Image source={require('./img/icon/logo.png')} style={card.cardLogoImg} ></Image>
                                <Text style={card.cardlogoNum}>Gold Card 15%</Text>
                            </View>
                        </View>
                        <View style={card.cardInfo}>
                            <View style={[global.row, card.cardName]}><Text style={card.cardNameText}>Евгений Новиков</Text><Image source={require('./img/icon/up.png')} style={{width:16, height:16}}></Image></View>
                            <Text style={card.cardScore}>
                                активность <Text style={card.cardScoreActive}>{this.state.num}</Text> из 100
                            </Text>
                            <ProgressBar num={this.state.num} />
                        </View>
                    </View>
                    <View style={[global.row, card.cardBottom]}>
                        <View style={card.cardBottomLeft}>
                            <Text style={card.cardBottomNum}>
                                кол-во баллов{"\n"}<Text style={card.cardBottomNumAction}>174</Text>
                            </Text>
                        </View>
                        <View style={card.cardBottomRight}>
                            <View style={[global.row, card.cardButtonWrap]}>
                                <Text style={[card.cardButton, card.cardButtonOne]}>
                                    предъявить карту и{"\n"}<Text style={card.cardButtonText}>Получить баллы</Text>
                                </Text>
                                <Text style={[card.cardButtonLine]}></Text>
                                <Text style={[card.cardButton, card.cardButtonTwo]}>
                                    выбрать подарок и{"\n"}<Text style={card.cardButtonText}>Потратить баллы</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image source={require('./img/ui/card.png')} style={{flex:1, height: undefined, width: undefined}} resizeMode="stretch"></Image>
            </View>
        )
    }
}