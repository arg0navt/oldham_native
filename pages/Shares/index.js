import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, TouchableOpacity, Image } from 'react-native';
import global from '../../css/global';
import s from '../../css/shares';
import { connect } from 'react-redux'
import SharesHoc from '../../hoc/sharesHoc'

const w = Dimensions.get('window');

const Item = ({data, nav}) => (
    <View style={s.item}>
        <TouchableOpacity onPress={()=> nav.push({id: 'SharesDetail',name: 'SharesDetail', sharesId:data.action_id})} style={s.itemPich}>
            <Image style={{position:'absolute', width:'100%', height:240}} source={{uri: `http://dev.kaerus.ru/uploads/${data.action_image_s}`}} />
        </TouchableOpacity>
        <View style={s.itemText}>
            <View style={s.date}></View>
            <View style={s.title}>
                <TouchableOpacity onPress={()=> nav.push({id: 'SharesDetail',name: 'SharesDetail', sharesId:data.action_id})}><Text style={s.titleLink}>{data.action_title}</Text></TouchableOpacity>
            </View>
        </View>
    </View>
)


class Shares extends Component{
    componentDidMount(){
        this.props.getList()
    }
    render(){
        const { shares } = this.props.Store
        return(
            <ScrollView style={{width:'100%', height:w.height, paddingLeft:15, paddingRight:15}}>
                {shares.sharesList.map((item, index) => <Item nav={this.props.navigator} key={index} data={item}/>)}
            </ScrollView>
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
)(SharesHoc(Shares))