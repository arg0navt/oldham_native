import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import card from '../../css/card'
import global from '../../css/global';
import progressBar from '../../css/progressBar'
import ResponsiveImage from 'react-native-responsive-image';
import { url } from '../../config'
import { connect } from 'react-redux'
import {Actions} from  'react-native-redux-router'
import ComeIn from '../../pages/ComeIn';
import routes from '../../config/routes'

const BarItem = ({progress, procent, status, active, length}) => (
    <View style={progressBar.item} >
        <View style={active == 'active' ? progressBar.circle : [progressBar.circle, progressBar.opacity]}></View>
        <Text style={active == 'active' ? progressBar.num : [progressBar.num, progressBar.opacity]}>{progress}</Text>
        <Text style={active == 'active' ? progressBar.text : [progressBar.text, progressBar.activeText]}>{status}{"\n"}{procent}%</Text>
    </View>
)

const ProgressBar = (props, {num, loyalty}) => {
    if (props.num < 50){
        props.num = props.num / 0.6 - 12
    } else if (props.num == 50){
        props.num = 66
    } else if (props.num > 50){
        props.num = 50 + props.num / 2
    }
    let width = '';
    if (width === 1){
        width = 1
    } else {
        width = `${props.num}%`
    }
    return (
    <View style={progressBar.wrap}>
        <View style={progressBar.line}></View>
        <View style={progressBar.lineProgressWrap}>
            {width !== 1 ? <View style={[progressBar.lineProgress, {width:width}]}></View> : null}
        </View>
        <View style={progressBar.items}>
            {props.loyalty.settings.cards.map((item, index) =>{
                return <BarItem key={index} progress={item.activity} procent={item.percent} status={item.title_short} active={props.num > item.activity ? 'active' : ''} />
            })}
        </View>
    </View>
)}

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
    }
    render(){
        const { Store } = this.props
        const { user } = this.props.Store
        const { profile, loyalty, token } = this.props.Store.user
        return(
            <View style={card.blockCard}>
                <View style={card.cardContent}>
                    <View style={[global.row, card.cardTop]}>
                    {Object.keys(loyalty).length != 0 ? (
                        <View style={card.cardLogo}>
                            {Object.keys(loyalty).length != 0 ? (
                            <View>
                                {loyalty.user_activity > 0 && loyalty.user_activity < 25  ? (
                                    <Image style={card.cardProcent} source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${loyalty.settings.cards[0].percent}.png`}} />
                                ) :
                                loyalty.user_activity >= 25 && loyalty.user_activity < 50 ? (
                                    <Image style={card.cardProcent} source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${loyalty.settings.cards[1].percent}.png`}} />
                                ) :
                                loyalty.user_activity >= 50 ? (
                                    <Image style={card.cardProcent} source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${loyalty.settings.cards[2].percent}.png`}} />
                                ) :
                                loyalty.user_activity == 100 ? (
                                    <Image style={card.cardProcent} source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/percent_${loyalty.settings.cards[3].percent}.png`}} />
                                ) : ''}
                                <Text style={card.procentText}>
                                    {loyalty.user_card.title} {loyalty.user_card.percent}%
                                </Text>
                            </View>
                            ) : (<View></View>)}
                        </View>
                    ) : (<View></View>)}
                    {Object.keys(loyalty).length != 0 ? (
                        <View style={card.cardInfo}>
                            <TouchableOpacity onPress={() => this.props.nav.push({id: 'User',name: 'User'})} style={[global.row, card.cardName]}><Text style={card.cardNameText}>{user.profile.user_name}</Text><Image source={require('./img/icon/up.png')} style={{width:16, height:16}}></Image></TouchableOpacity>
                            <Text style={card.cardScore}>
                                активность <Text style={card.cardScoreActive}>{loyalty.user_activity}</Text> из 100
                            </Text>
                            <ProgressBar num={Number(loyalty.user_activity)} loyalty={loyalty} />
                        </View>
                    ) : (
                        <View style={card.cardInfo}>
                            <Text style={card.noUserText}>Заполните свой профиль{"\n"}для получения BASIS CARD 5%</Text>
                            <TouchableOpacity onPress={() => this.props.nav.push({id: 'ComeIn',name: 'ComeIn'})} activeOpacity={1} style={card.noUserButton}>
                                <Text style={card.noUserButtonText}>войти в свой аккаунт</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    </View>
                    {Object.keys(loyalty).length != 0 ? (
                    <View style={[global.row, card.cardBottom]}>
                        <View style={card.cardBottomLeft}>
                            <Text style={card.cardBottomNum}>
                                кол-во баллов{"\n"}<Text style={card.cardBottomNumAction}>{loyalty.user_points}</Text>
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
                    </View>
                {loyalty.user_activity > 0 && loyalty.user_activity < 25  ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[0].percent}.png`}} style={{position:'absolute', top:0, left:0,zIndex:1, height: '100%', width: '100%'}} resizeMode="stretch" />
                ) :
                loyalty.user_activity >= 25 && loyalty.user_activity < 50 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[1].percent}.png`}} style={{position:'absolute', top:0, left:0,zIndex:1, height: '100%', width: '100%'}} resizeMode="stretch" />
                ) :
                loyalty.user_activity >= 50 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[2].percent}.png`}} style={{position:'absolute', top:0, left:0,zIndex:1, height: '100%', width: '100%'}} resizeMode="stretch" />
                ) :
                loyalty.user_activity == 100 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_${loyalty.settings.cards[3].percent}.png`}} style={{position:'absolute', top:0, left:0,zIndex:1, height: '100%', width: '100%'}} resizeMode="stretch" />
                ) : <View></View>}
                {Object.keys(loyalty).length == 0 ? (
                    <Image source={{uri: `${url.STATIC_SERVER}/assets/${url.CLIENT_ID}/mod_app/main_card/bg_card_no_auth.png`}} style={{position:'absolute', top:0, left:0,zIndex:1, height: '100%', width: '100%'}} resizeMode="stretch" />
                ) : <View></View>}
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