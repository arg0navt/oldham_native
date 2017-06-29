import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, TouchableOpacity, Image } from 'react-native';
import global from '../../css/global';
import s from '../../css/shares';
import { connect } from 'react-redux'
import CatalogHoc from '../../hoc/sharesHoc'

const w = Dimensions.get('window');

class SharesDetail extends Component{
    componentDidMount(){
        this.props.getDetail(this.props.route.sharesId)
    }
    render(){
        const { shares } = this.props.Store
        return(
            <ScrollView style={{width:'100%', height:w.height}}>
                <View>
                    <View style={s.detailPich}>
                        <Image style={s.detailPichImage} source={{uri: `http://dev.kaerus.ru/uploads/${shares.detail.action_image_s}`}} />
                    </View>
                    <View style={s.dataPanel}>
                        <Image style={{width:w.width, height:110, position:'absolute', top:0, bottom:0, left:0, right:0}} source={require('../../img/bottom.jpg')} />
                        <Text style={s.detailTitle}>{shares.detail.action_title}</Text>
                    </View>
                    <View style={s.detailText}>
                        <Text style={s.p}>Только с 11 по 20 августа. В нашем ресторане действует скидка на закуски. </Text>
                        <Text style={s.p}>Рекламный блок, безусловно, продуцирует медийный канал. Целевой трафик исключительно тормозит типичный рекламоноситель. Соц-дем характеристика аудитории слабо искажает эксклюзивный медиавес. </Text>
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
  dispatch =>({
      pushSharesDetail: (item) => {dispatch({type:'SHARES_DETAIL', payload: item})}
  })
)(CatalogHoc(SharesDetail))