import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
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

const Item = ({img, text, id}) => (
    <View style={styles.slide}>
        <Image source={{uri: img}} style={slider.blockImg} resizeMode="stretch" />
        <View style={slider.blockText}>
            <View style={[global.row, slider.center]}>
                <View style={slider.leftText}>
                    <Text style={slider.sliderText}>{text}</Text>
                </View>
                <View style={slider.rightText}>
                    <View style={global.row}>
                        <Text style={slider.sliderLink}>Все акции</Text><Image source={require('./img/icon/up.png')} style={{width:16, height:16}}></Image>
                    </View>
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
                        {Store.shares.sharesList.map((item, index) => <Item key={index} img={`http://dev.kaerus.ru/uploads/${item.action_image_s}`} id={item.action_id} text={`${item.action_title}`} />)}
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