import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, StatusBar, Button , TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import u from '../../css/user'
import global from '../../css/global';

class User extends Component{
    constructor(props){
        super(props)
        this.state = {
            activity:'',
            percent:'',
            points:''
        }
    }
    componentDidMount(){
        this.setState({
            activity:this.props.Store.user.loyalty.user_activity,
            percent:this.props.Store.user.loyalty.user_card.percent,
            points:this.props.Store.user.loyalty.user_points
        })
    }
    render(){
        const { profile } = this.props.Store.user
        const { loyalty } = this.props.Store.user
        return(
            <ScrollView>
                <View style={u.page}>
                {Object.keys(profile).length != 0 ? (
                    <View>
                    <View style={u.item}>
                        <View style={u.itemTop}>
                            <View style={u.iconBlockWrap}><View style={u.iconWrap}><Image source={require('../../img/icon/u1.png')} style={{width:14, height:14}} /></View><Text style={u.itemName}>Профиль</Text></View>
                            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'UserSettings',name: 'UserSettings'})} style={u.itemLink}><Text style={u.itemLinkText}>Редактировать</Text><Image source={require('../../img/icon/up.png')} style={{width:16, height:16}} /></TouchableOpacity>
                        </View>
                        <View style={u.data}>
                            <View>
                            <Text style={u.name}>{profile.user_name}</Text>
                            {profile.user_address != null ? (
                                <Text style={u.address}>{profile.user_address}</Text>
                            ) : (<Text></Text>)}
                            <TouchableOpacity onPress={() => this.props.navigator.push({id: 'UserSettings',name: 'UserSettings'})} style={u.tools}>
                                <Image style={u.tollsImg} source={require(`../../img/icon/u5.png`)} />
                                <Text style={u.toolsText}>Настройки профиля</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={u.item}>
                        <View style={u.itemTop}>
                            <View style={u.iconBlockWrap}><View style={u.iconWrap}><Image source={require('../../img/icon/u2.png')} style={{width:14, height:14}} /></View><Text style={u.itemName}>Активность</Text></View>
                            <TouchableOpacity style={u.itemLink}><Text style={u.itemLinkText}>Подробнее</Text><Image source={require('../../img/icon/up.png')} style={{width:16, height:16}} /></TouchableOpacity>
                        </View>
                        <View style={u.data}>
                            <Text style={u.text}>Чем больше активность, тем больше % возврата</Text>
                            <View style={u.dataPoint}>
                                <Text style={u.point}><Text style={u.span1}>{this.state.activity}</Text> из 100</Text>
                                <Image source={require('../../img/ui/bg1.png')} style={[u.pointBlock, u.leftStr]}><Text style={u.pointBlockText}>Текущая скидка{"\n"}<Text style={u.span2}>{this.state.percent}%</Text></Text></Image>
                            </View>
                        </View>
                    </View>
                    <View style={u.item}>
                        <View style={u.itemTop}>
                            <View style={u.iconBlockWrap}><View style={u.iconWrap}><Image source={require('../../img/icon/u3.png')} style={{width:14, height:14}} /></View><Text style={u.itemName}>Баллы</Text></View>
                            <TouchableOpacity style={u.itemLink}><Text style={u.itemLinkText}>Подробнее</Text><Image source={require('../../img/icon/up.png')} style={{width:16, height:16}} /></TouchableOpacity>
                        </View>
                        <View style={u.data}>
                            <Text style={u.text}>Зарабатывайте баллы и обменивайте их на подарки</Text>
                            <View style={u.dataPoint}>
                                <Image source={require('../../img/ui/bg2.png')} style={[u.pointBlock, u.topStr]}><Text style={u.pointBlockText}>Кол-во баллов{"\n"}<Text style={u.span2}>{this.state.points}</Text></Text></Image>
                            </View>
                        </View>
                    </View>
                    </View>
                ) : (
                    <View></View>
                )}
            </View>
            </ScrollView>
        )
    }
}
export default connect(
    state => ({Store: state}),
    dispatch =>({})
)(User)