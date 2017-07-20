import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import slider from '../../css/slider'
import global from '../../css/global';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux'
import SharesHoc from '../../hoc/sharesHoc';

const w = Dimensions.get('window');

var styles = StyleSheet.create({
  wrapper: {
      width:'100%',
      height:174
  },
  slide:{
        width:Dimensions.get('window').width - 30,
        height:173,
        position:'relative'
  }
})

const Item = ({nav, img, text, id}) => (
    <View style={styles.slide}>
        <TouchableOpacity style={{width:'100%', height:'100%', position:'relative', top:0, bottom:0, left:0, right:0, zIndex:1}} onPress={()=> nav.push({id: 'SharesDetail',name: 'SharesDetail', sharesId:id})}>
            <Image source={{uri: img}} style={slider.blockImg} resizeMode="stretch" />
        </TouchableOpacity>
        <View style={slider.blockText}>
            <View style={[global.row, slider.center]}>
                <TouchableOpacity style={slider.leftText} onPress={()=> nav.push({id: 'SharesDetail',name: 'SharesDetail', sharesId:id})}>
                    <Text style={slider.sliderText}>{text}</Text>
                </TouchableOpacity>
                <View style={slider.rightText}>
                    <TouchableOpacity style={global.row} onPress={()=> nav.push({id: 'Shares',name: 'Shares'})}><Text style={slider.sliderLink}>Все акции</Text><Image source={require('./img/icon/up.png')} style={{width:16, height:16}}></Image></TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
)


class Slider extends Component{
    componentDidMount(){
        this.props.getList()
    }
    render(){
        const { Store } = this.props
        return(
            <View style={styles.wrapper}>
                {Store.shares.sharesList != 0 ? (
                    <Swiper>
                        {Store.shares.sharesList.map((item, index) => <Item nav={this.props.nav} key={index} img={`http://dev.kaerus.ru/uploads/${item.action_image_s}`} id={item.action_id} text={`${item.action_title}`} />)}
                    </Swiper>
                ) : (<View></View>)}
            </View>
        )
    }
}
export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({
        pushShares:(item) => {dispatch({type:'SHARES_LIST', payload:item})}
    })
)(SharesHoc(Slider))