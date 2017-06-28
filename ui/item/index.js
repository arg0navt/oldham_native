import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import global from '../../css/global';
import c from '../../css/catalog';

class Item extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 0,
            width: 30,
            link:'',
            num40:0
        }
    }
    render(){
        const {props} = this
        const {item} = this.props
        const {state} = this
        return(
            <View style={c.item}>
                <View style={c.itemPich}>
                    <View style={c.statusWr}></View>
                    <View style={c.itemImgWr}>
                        <Image style={c.img} source={{uri: `http://dev.kaerus.ru/uploads/${item.item_image_m}`}} />
                    </View>
                </View>
                <View style={c.itemText}>
                    <View>
                        <Text style={c.name}>{item.item_name}</Text>
                        <Text style={c.descroption}>{item.item_description}</Text>
                    </View>
                    <View style={c.buttons}>
                    {item.item_size_m_price != null ? (
                        <View style={c.width}>
                            <TouchableOpacity style={state.width == 30 ? [c.widthItem, c.widthItemActive] : c.widthItem} activeOpacity={1}><Text style={c.widthText}>30 см</Text></TouchableOpacity>
                            <TouchableOpacity style={state.width == 40 ? [c.widthItem, c.widthItemActive] : c.widthItem} activeOpacity={1}><Text style={c.widthText}>40 см</Text></TouchableOpacity>
                        </View>
                    ) : (<View></View>)}
                    <View style={c.num}>
                        <TouchableOpacity activeOpacity={1} style={c.start}>
                            <Text style={c.price}>{item.item_price} ₽</Text>
                            <Text style={c.plus}>+</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>    
            </View>
        )
    }
}

export default connect(
    state => ({Store: state}),
    dispatch =>({})
)(Item)