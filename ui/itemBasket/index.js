import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import basket from '../../css/basket'
import global from '../../css/global'
import c from '../../css/catalog'
import _ from 'underscore'

class ItemBasket extends Component{
    constructor(props){
        super(props)
        this.state = {
            num: 0,
            num40:0,
            width: 0,
        }
    }
    price(){
        let price = 0
        setTimeout(()=>{
            this.props.Store.basket.map((item, index) => {
                if (item.width == 30){
                    if (item.call != undefined){
                        price = price + parseFloat(item.item_price) * parseFloat(item.call)
                    } else {
                        price = price + parseFloat(item.item_price)
                    }
                } else if (item.width == 40){
                    if (item.call != undefined){
                        price = price + (parseFloat(item.item_price) + parseFloat(item.item_size_m_price)) * parseFloat(item.call)
                    } else {
                        price = price + parseFloat(item.item_price) + parseFloat(item.item_size_m_price)
                    } 
                }
            })
            this.props.price(price)
        },100)
    }
    sum(){
        this.setState({num: this.state.num + 1})
        this.props.more(this.props.item)
        this.price()
    }
    sub(){
        if(this.state.num > 1){
            this.setState({num:this.state.num - 1})
            this.props.sub(this.props.item)
            this.price()
        } else if (this.state.num == 1){
            this.setState({num:0})
            this.props.delete({...this.props.item, width:30})
            this.price()
        }
    }
    sum40(){
        this.setState({num40: this.state.num40 + 1})
        this.props.more40(this.props.item)
        this.price()
    }
    sub40(){
        if(this.state.num40 > 1){
            this.setState({num40:this.state.num40 - 1})
            this.props.sub40(this.props.item)
            this.price()
        } else if (this.state.num40 == 1){
            this.setState({num40:0})
            this.props.delete({...this.props.item, width:40})
            this.price()
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            const found = _.filter(this.props.Store.basket, (item) => { return item.item_id == this.props.item.item_id && item.width == this.props.item.width; })
            if (found.length != [] ){
            found.map((item, index) => {
                if (item.width == 30){
                    setTimeout(()=>{
                        this.setState({
                            num: item.call || 1,
                            width:30
                        })
                    },10)
                } else {
                    setTimeout(()=>{
                        this.setState({
                            num40: item.call || 1,
                            width:40
                        })
                    },10)
                }
            })
        }
        },10)
    }
    componentWillReceiveProps(nextProps){
        setTimeout(()=>{
            const found = _.filter(nextProps.Store.basket, (item) => { return item.item_id == nextProps.item.item_id && item.width == nextProps.item.width; })
            if (found.length != [] ){
            found.map((item, index) => {
                if (item.width == 30){
                    setTimeout(()=>{
                        this.setState({
                            num: item.call || 1,
                            width:30
                        })
                    },10)
                } else {
                    setTimeout(()=>{
                        this.setState({
                            num40: item.call || 1,
                            width:40
                        })
                    },10)
                }
            })
        }
    },10)
    }
    render(){
        return(
            <View style={basket.item}>
                <View style={basket.itemTop}>
                    <View style={basket.itemTopLeft}>
                        <Text style={basket.type}>{this.props.item.category_name}</Text>
                        <Text style={basket.name}>{this.props.item.item_name} {this.props.item.item_size_m_price != null ? (`(${this.props.item.width} см)`) : ''}</Text>
                    </View>
                    <View style={basket.itemTopRight}>
                        {this.state.width == 30 ? (
                            <View style={[global.uiNum, c.numItem]} ref={(numWrap) => this.numWrap = numWrap}>
                                <TouchableOpacity style={c.uiNumM} onPress={this.sub.bind(this)}>
                                    <Text style={[global.minus, c.minus, {lineHeight:21, width:25}]}>-</Text>
                                </TouchableOpacity>
                                <Text style={[global.input, c.input]}>{this.state.num}</Text>
                                <TouchableOpacity style={c.uiNumM} onPress={this.sum.bind(this)}>
                                    <Text style={[global.plus, c.plus, {lineHeight:19, borderLeftWidth:0}]}>+</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={[global.uiNum, c.numItem]}>
                                <TouchableOpacity style={c.uiNumM} onPress={this.sub40.bind(this)}>
                                    <Text style={[global.minus, c.minus, {lineHeight:21, width:25}]}>-</Text>
                                </TouchableOpacity>
                                <Text style={[global.input, c.input]}>{this.state.num40}</Text>
                                <TouchableOpacity style={c.uiNumM} onPress={this.sum40.bind(this)}>
                                    <Text style={[global.plus, c.plus, {lineHeight:19, borderLeftWidth:0}]}>+</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
                <Text style={basket.summ}>{
                    this.props.item.width == 30 && this.props.item.call == undefined ? `${this.props.item.item_price} ₽` : 
                    this.props.item.width == 40 && this.props.item.call == undefined ? `${Number(this.props.item.item_price) + Number(this.props.item.item_size_m_price)} ₽` :
                    this.props.item.width == 30 && this.props.item.call != undefined && this.props.item.call != 1 ? `${this.props.item.item_price} ₽ x ${this.props.item.call} = ${parseFloat(this.props.item.item_price) * parseFloat(this.props.item.call)} ₽` :
                    this.props.item.width == 40 && this.props.item.call != undefined && this.props.item.call != 1 ? `${Number(this.props.item.item_price) + Number(this.props.item.item_size_m_price)} ₽ x ${this.props.item.call} = ${(parseFloat(this.props.item.item_price) + parseFloat(this.props.item.item_size_m_price)) * parseFloat(this.props.item.call)} ₽` :
                    this.props.item.width == 40 && this.props.item.call != undefined && this.props.item.call == 1 ? `${Number(this.props.item.item_price) + Number(this.props.item.item_size_m_price)} ₽` :
                    this.props.item.width == 30 && this.props.item.call != undefined && this.props.item.call == 1 ? `${this.props.item.item_price} ₽` :
                    (<Text></Text>) }
                </Text>
            </View>      
        )
    }
}

export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({
    addBasket: (item) => {dispatch({type:'ADD_BASKET', payload:item})},
    more:(item) => {dispatch({type:'MORE', payload:item})},
    sub:(item) => {dispatch({type:'SUB', payload:item})},
    more40:(item) => {dispatch({type:'MORE40', payload:item})},
    sub40:(item) => {dispatch({type:'SUB40', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})},
    delete:(item) => {dispatch({type:'DELETE', payload:item})}
  })
)(ItemBasket)