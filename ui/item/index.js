import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { transliterate } from '../../config'
import global from '../../css/global';
import c from '../../css/catalog';
import _ from 'underscore'

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
        },10)
    }
    sum(){
        this.setState({num: this.state.num + 1})
        this.props.more({...this.props.item, width:30})
        this.price()
    }
    sub(){
        if(this.state.num > 1){
            this.setState({num:this.state.num - 1})
            this.props.sub({...this.props.item, width:30})
            this.price()
        } else if (this.state.num == 1){
            this.setState({num:0})
            this.props.delete({...this.props.item, width:30})
        }
    }
    sum40(){
        this.setState({num40: this.state.num40 + 1})
        this.props.more40({...this.props.item, width:40})
        this.price()
    }
    sub40(){
        if(this.state.num40 > 1){
            this.setState({num40:this.state.num40 - 1})
            this.props.sub40({...this.props.item, width:40})
            this.price()
        } else if (this.state.num40 == 1){
            this.setState({num40:0})
            this.props.delete({...this.props.item, width:40})
        }
    }
    add(){
        setTimeout(()=>{
            if (this.state.width == 30){
                this.setState({num:1})
                this.props.addBasket({...this.props.item, width:30})
            } else if (this.state.width == 40){
                this.setState({num40:1})
                this.props.addBasket({...this.props.item, width:40})
            }
        },10)
        this.price()
    }
    widthW(width){
        this.setState({width: width})
    }
    componentDidMount(){
        this.setState({link:transliterate(this.props.item.category_name)})
        const found = _.filter(this.props.Store.basket, (item) => { return item.item_id == this.props.item.item_id; })
        if (found.length != [] ){
            found.map((item, index) => {
                if (item.width == 30){
                    setTimeout(()=>{
                        this.setState({num: item.call || 1,width:30})
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
    }
    render(){
        const {props} = this
        const {item} = this.props
        const {state} = this
        return(
            <View style={c.item}>
                <View style={c.itemPich}>
                    <TouchableOpacity onPress={() => this.props.nav.push({id:'Detail', name:'Detail', itemId:this.props.item.item_id})}>
                        <View style={c.statusWr}></View>
                        <View style={c.itemImgWr}>
                            <Image style={c.img} source={{uri: `http://dev.kaerus.ru/uploads/${item.item_image_m}`}} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={c.itemText}>
                    <TouchableOpacity onPress={() => this.props.nav.push({id:'Detail', name:'Detail', itemId:this.props.item.item_id})}>
                        <Text style={c.name}>{item.item_name}</Text>
                        <Text style={c.descroption}>{item.item_description}</Text>
                    </TouchableOpacity>
                    <View style={c.buttons}>
                    {item.item_size_m_price != null ? (
                        <View style={c.width}>
                            <TouchableOpacity onPress={this.widthW.bind(this, 30)} style={state.width == 30 ? [c.widthItem, c.widthItemActive] : c.widthItem} activeOpacity={1}><Text style={c.widthText}>30 см</Text></TouchableOpacity>
                            <TouchableOpacity onPress={this.widthW.bind(this, 40)} style={state.width == 40 ? [c.widthItem, c.widthItemActive] : c.widthItem} activeOpacity={1}><Text style={c.widthText}>40 см</Text></TouchableOpacity>
                        </View>
                    ) : (<View></View>)}
                    {this.state.num >= 1 && this.state.width == 30 ? (
                        <View style={[global.uiNum, c.numItem]} ref={(numWrap) => this.numWrap = numWrap}>
                            <TouchableOpacity style={c.uiNumM} onPress={this.sub.bind(this)}>
                                <Text style={[global.minus, c.minus, {lineHeight:21, width:25}]}>-</Text>
                            </TouchableOpacity>
                            <TextInput style={[global.input, c.input]} value={this.state.num + ''} />
                            <TouchableOpacity style={c.uiNumM} onPress={this.sum.bind(this)}>
                                <Text style={[global.plus, c.plus, {lineHeight:19, borderLeftWidth:0}]}>+</Text>
                            </TouchableOpacity>
                        </View>
                    ) : this.state.num40 >= 1 && this.state.width == 40 ? (
                        <View style={[global.uiNum, c.numItem]} ref={(numWrap) => this.numWrap = numWrap}>
                            <TouchableOpacity style={c.uiNumM} onPress={this.sub40.bind(this)}>
                                <Text style={[global.minus, c.minus, {lineHeight:21}]}>-</Text>
                            </TouchableOpacity>
                            <TextInput style={[global.input, c.input]} value={this.state.num40 + ''} />
                            <TouchableOpacity style={c.uiNumM} onPress={this.sum40.bind(this)}>
                                <Text style={[global.plus, c.plus, {lineHeight:19, borderLeftWidth:0}]}>+</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (<View style={{display:'none'}}></View>)}
                    {this.state.num < 1 && this.state.width == 30 ? (
                        <View style={c.num} ref={(start) => this.start = start}>
                            <TouchableOpacity onPress={this.add.bind(this)} activeOpacity={1} style={c.start}>
                                <Text style={c.price}>{item.item_price} ₽</Text>
                                <Text style={c.plus}>+</Text>
                            </TouchableOpacity>
                        </View> 
                    ) : this.state.num40 < 1 && this.state.width == 40 ? (
                        <View style={c.num} ref={(start) => this.start = start}>
                            <TouchableOpacity onPress={this.add.bind(this)} activeOpacity={1} style={c.start}>
                                <Text style={c.price}>{parseFloat(item.item_price) + parseFloat(item.item_size_m_price)} ₽</Text>
                                <Text style={c.plus}>+</Text>
                            </TouchableOpacity>
                        </View> 
                    ) :(<View style={{display:'none'}}></View>)}
                    </View>
                </View>    
            </View>
        )
    }
}

export default connect(
    state => ({Store: state}),
    dispatch =>({
        addBasket: (item) => {dispatch({type:'ADD_BASKET', payload:item})},
        more:(item) => {dispatch({type:'MORE', payload:item})},
        sub:(item) => {dispatch({type:'SUB', payload:item})},
        more40:(item) => {dispatch({type:'MORE40', payload:item})},
        sub40:(item) => {dispatch({type:'SUB40', payload:item})},
        price:(price) => {dispatch({type:'PRICE', payload:price})},
        delete:(item) => {dispatch({type:'DELETE', payload:item})}
    })
)(Item)