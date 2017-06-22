import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import card from '../../css/card'
import global from '../../css/global';
import progressBar from '../../css/progressBar'
import ResponsiveImage from 'react-native-responsive-image';
import { url } from '../../config'
import { connect } from 'react-redux'

const BarItem = ({progress, procent, status, active, length}) => (
    <View className={active == 'active' ? [progressBar.item, progressBar.active] : progressBar.item} >
        <View className={progressBar.circle}></View>
        <View className={progressBar.num}>{progress}</View>
        <Text className={active == 'active' ? [progressBar.text, progressBar.active] : progressBar.text}>
            {status}<br/>{procent}%
        </Text>
    </View>
)

const ProgressBar = (props, {num}) => {
    if (num < 50){
        num = num / 0.6 - 12
    } else if (num == 50){
        num = 66
    } else if (num > 50){
        num = 50 + num / 2
    }
    return (
    <View className={progressBar.wrap}>
        <View className={progressBar.line}></View>
        <View className={progressBar.lineProgressWrap}>
            <View className={progressBar.lineProgress} style={{width:num + '%'}}></View>
        </View>
        <View className={progressBar.items}>
        {props.State.loyalty.settings.cards.map((item, index) =>{
            return <BarItem key={index} progress={0} procent={5} status={'Basis'} active={num > 0 ? 'active' : ''} />
        })}
        </View>
    </View>
)}

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 74
        }
    }
    go(){

    }
    render(){
        let Actions = this.props.routes;
        const { Store } = this.props
        const { user } = this.props.Store
        const { profile, loyalty, token } = this.props.Store.user
        return(
            <View style={card.blockCard}>
                <View style={card.cardContent}>
                    <View style={[global.row, card.cardTop]}>
                    {Object.keys(loyalty).length != 0 ? (
                        <View style={card.cardLogo}>
                            <View>
                                <Image source={require('./img/icon/logo.png')} style={card.cardLogoImg} ></Image>
                                <Text style={card.cardlogoNum}>Gold Card 15%</Text>
                            </View>
                        </View>
                    ) : (<View></View>)}
                    {Object.keys(loyalty).length != 0 ? (
                        <View style={card.cardInfo}>
                            <View style={[global.row, card.cardName]}><Text style={card.cardNameText}>Евгений Новиков</Text><Image source={require('./img/icon/up.png')} style={{width:16, height:16}}></Image></View>
                            <Text style={card.cardScore}>
                                активность <Text style={card.cardScoreActive}>{this.state.num}</Text> из 100
                            </Text>
                            <ProgressBar num={this.state.num} />
                        </View>
                    ) : (
                        <View style={card.cardInfo}>
                            <Text style={card.noUserText}>Заполните свой профиль{"\n"}для получения BASIS CARD 5%</Text>
                            <TouchableHighlight activeOpacity={1} style={card.noUserButton}>
                                <Text style={card.noUserButtonText}>войти в свой аккаунт</Text>
                            </TouchableHighlight>
                        </View>
                    )}
                    </View>
                    {Object.keys(loyalty).length != 0 ? (
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
                    ) : (<View></View>)}
                {loyalty.user_activity > 0 && loyalty.user_activity < 25  ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[0].percent}.png`}} style={{flex:1, height: undefined, width: undefined}} resizeMode="stretch" />
                ) :
                loyalty.user_activity >= 25 && loyalty.user_activity < 50 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[1].percent}.png`}} style={{flex:1, height: undefined, width: undefined}} resizeMode="stretch" />
                ) :
                loyalty.user_activity >= 50 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[2].percent}.png`}} style={{flex:1, height: undefined, width: undefined}} resizeMode="stretch" />
                ) :
                loyalty.user_activity == 100 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[3].percent}.png`}} style={{flex:1, height: undefined, width: undefined}} resizeMode="stretch" />
                ) : <View></View>}
                {Object.keys(loyalty).length == 0 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_no_auth.png`}} style={{position:'absolute', top:0, left:0,zIndex:1, height: '100%', width: '100%'}} resizeMode="stretch" />
                ) : <View></View>}
            </View>
            </View>
        )
    }
}
export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({})
)(Card)