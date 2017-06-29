import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, ActivityIndicator, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import CatalogHoc from '../../hoc/catalogListHoc'
import global from '../../css/global';
import c from '../../css/catalog';
import d from '../../css/detail';
import _ from 'underscore'

const w = Dimensions.get('window');

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:'',
            num:0,
            num40:0,
            width:30,
        }
    }
    price(){
        let price = 0
        setTimeout(()=>{
            this.props.Store.basket.map((item, index) => {
                if (item.width == 30){
                    if (item.call != undefined){
                        price = price + Number(item.item_price) * Number(item.call)
                    } else {
                        price = price + Number(item.item_price)
                    }
                } else if (item.width == 40){
                    if (item.call != undefined){
                        price = price + (Number(item.item_price) + Number(item.item_size_m_price)) * Number(item.call)
                    } else {
                        price = price + Number(item.item_price) + Number(item.item_size_m_price)
                    } 
                }
            })
            this.props.price(price)
        },10)
    }
    sum(item){
        this.setState({num: this.state.num + 1})
        this.props.more({...item, width:30})
        this.price()
    }
    sub(item){
        if(this.state.num > 1){
            this.setState({num:this.state.num - 1})
            this.props.sub({...item, width:30})
            this.price()
        } else if (this.state.num == 1){
            this.setState({num:0})
            this.props.delete({...item, width:30})
        }
    }
    sum40(item){
        this.setState({num40: this.state.num40 + 1})
        this.props.more40({...item, width:40})
        this.price()
    }
    sub40(item){
        if(this.state.num40 > 1){
            this.setState({num40:this.state.num40 - 1})
            this.props.sub40({...item, width:40})
            this.price()
        } else if (this.state.num40 == 1){
            this.setState({num40:0})
            this.props.delete({...item, width:40})
        }
    }
    add(item, width){
        this.setState({
            width:width
        })
        setTimeout(()=>{
            if (this.state.width == 30){
                this.setState({num:1})
                this.props.addBasket({...item, width:30})
            } else if (this.state.width == 40){
                this.setState({num40:1})
                this.props.addBasket({...item, width:40})
            }
        },10)
        this.price()
    }
    componentDidMount(){
        this.props.getDetail(this.props.route.itemId)
        setTimeout(()=>{
            const found = _.filter(this.props.Store.basket, (item) => { return item.item_id == this.props.Store.category.detail.item_id; })
                if (found.length != [] ){
                    found.map((item, index) => {
                        if (item.width == 30){
                            setTimeout(()=>{
                                this.setState({
                                    num: item.call || 1,
                                })
                            },10)
                        } else {
                            setTimeout(()=>{
                                this.setState({
                                    num40: item.call || 1,
                                })
                            },10)
                        }
                    })
                }
        },320)
    }
    render(){
        const { detail } = this.props.Store.category
        return(
            <ScrollView style={[d.detailPage, {height:w.height}]}>
                <View style={{width:'100%', height:240, position:'relative'}}>
                    <Image source={{uri: `http://dev.kaerus.ru/uploads/${detail.item_image_750x480}`}} style={{position:'absolute', top:0, left:0,zIndex:1, width: '100%', height:240}} resizeMode="stretch" />
                </View>
                <View style={d.detailText}>
                    <Text style={d.name}>{detail.item_name}</Text>
                    <Text style={d.description}>
                        <Text style={d.span}>Состав</Text>{"\n"}
                        {detail.item_description}
                    </Text>
                </View>
                <View style={d.list}>
                    <View style={d.listItem}>
                        <View style={[d.col, d.listItemLeft]}>
                            {detail.item_size_m_price != null ? (
                                <Text style={d.param}>
                                    <Text style={d.paramNum}>30</Text>{"\n"}
                                    <Text>см</Text>
                                </Text>
                            ) : (<View></View>)}
                        </View>
                        <Text style={[d.col, d.price]}>{detail.item_price} ₽</Text>
                        <View style={[d.col, d.listItemRight]}>
                            {this.state.num < 1 ? (
                                <View style={[global.uiNum, d.uiNum]}>
                                    <TouchableOpacity onPress={this.add.bind(this, detail, 30)} style={[global.addCart, d.addCart]}><Text style={d.addCartText}>В корзину</Text></TouchableOpacity>
                                </View>
                            ) : this.state.num >= 1 ? (
                                <View style={[global.uiNum, c.numItem, d.numItem]} ref={(numWrap) => this.numWrap = numWrap}>
                                    <TouchableOpacity style={d.uiNumM} onPress={this.sub.bind(this, detail)}>
                                        <Text style={[global.minus, c.minus, {lineHeight:25, width:40}]}>-</Text>
                                    </TouchableOpacity>
                                    <TextInput underlineColorAndroid={'rgba(0,0,0,0)'} style={[global.input, c.input, d.input]} value={this.state.num + ''} />
                                    <TouchableOpacity style={d.uiNumM} onPress={this.sum.bind(this, detail)}>
                                        <Text style={[global.plus, c.plus, {lineHeight:25, width:40, borderLeftWidth:0}]}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (<View style={{display:'none'}}></View>)}
                        </View>
                    </View>
                    {detail.item_size_m_price != null ? (
                        <View style={d.listItem}>
                            <View style={[d.col, d.listItemLeft]}>
                                <Text style={d.param}>
                                    <Text style={d.paramNum}>40</Text>{"\n"}
                                    <Text>см</Text>
                                </Text>
                            </View>
                            <Text style={[d.col, d.price]}>{Number(detail.item_price) + Number(detail.item_size_m_price)} ₽</Text>
                            <View style={[d.col, d.listItemRight]}>
                                {this.state.num40 < 1 ? (
                                    <View style={[global.uiNum, d.uiNum]}>
                                        <TouchableOpacity onPress={this.add.bind(this, detail, 40)} style={[global.addCart, d.addCart]}><Text style={d.addCartText}>В корзину</Text></TouchableOpacity>
                                    </View>
                                ) : this.state.num40 >= 1 ? (
                                    <View style={[global.uiNum, c.numItem, d.numItem]} ref={(numWrap) => this.numWrap = numWrap}>
                                        <TouchableOpacity style={d.uiNumM} onPress={this.sub40.bind(this, detail)}>
                                            <Text style={[global.minus, c.minus, {lineHeight:21, width:25}]}>-</Text>
                                        </TouchableOpacity>
                                        <TextInput underlineColorAndroid={'rgba(0,0,0,0)'} style={[global.input, c.input, d.input]} value={this.state.num40 + ''} />
                                        <TouchableOpacity style={c.uiNumM} onPress={this.sum40.bind(this, detail)}>
                                            <Text style={[global.plus, c.plus, {lineHeight:19, borderLeftWidth:0}]}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : (<View  style={{display:'none'}}></View>)}
                            </View>
                        </View>
                    ) : (<View style={{display:'none'}}></View>)}
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
    addBasket: (item) => {dispatch({type:'ADD_BASKET', payload:item})},
    more:(item) => {dispatch({type:'MORE', payload:item})},
    sub:(item) => {dispatch({type:'SUB', payload:item})},
    more40:(item) => {dispatch({type:'MORE40', payload:item})},
    sub40:(item) => {dispatch({type:'SUB40', payload:item})},
    price:(price) => {dispatch({type:'PRICE', payload:price})},
    delete:(item) => {dispatch({type:'DELETE', payload:item})},
    pushDetail:(item) => {dispatch({type:'PUSH_DETAIL', payload:item})}
  })
)(CatalogHoc(Detail))