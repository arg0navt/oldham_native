import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar } from 'react-native';
import global from '../../css/global';
import basket from '../../css/basket';
import catalog from '../../css/catalog';
import ItemBasket from '../../ui/itemBasket'
import { connect } from 'react-redux'

const w = Dimensions.get('window');

class Basket extends Component{
    constructor(props){
        super(props)
        this.state = {
            length:0
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
    componentDidMount(){
        setTimeout(()=>{
            let n = 0;
            this.props.Store.basket.map((item, index) => {
                if (item.call == undefined){
                    n = parseFloat(n) + 1
                } else {
                    n = parseFloat(n) + parseFloat(item.call)
                }
            })
            this.setState({length:n})
        },10)
    }
    componentWillReceiveProps(nextProps){
        setTimeout(()=>{
            let n = 0;
            nextProps.Store.basket.map((item, index) => {
                if (item.call == undefined){
                    n = parseFloat(n) + 1
                } else {
                    n = parseFloat(n) + parseFloat(item.call)
                }
            })
            this.setState({length:n})
            let price = 0
            nextProps.Store.basket.map((item, index) => {
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
            nextProps.price(price)
        },10)
    }
    render(){
        return(
            <ScrollView style={{paddingTop:45}}>
            {this.state.length != 0 ? (
                <View style={basket.basketPage}>
                <View style={basket.items}>
                    {this.props.Store.basket.map((item, index) => {
                        return(
                            <ItemBasket key={index} item={item} />
                        )
                    })}
                    <View style={basket.total}>
                        <Text style={basket.totalTextOne}>Итого {this.state.length} блюда на <Text style={basket.totalSpan}>{this.props.Store.price != 0 ? this.props.Store.price : '0'} ₽</Text></Text>
                        <Text style={basket.totalTextTwo}>Предварительная стоимость заказа без учета{"\n"}скидки и доставки</Text>
                    </View>
                </View>
                </View>
            ) : (
                <Text style={{textAlign:'center', color:'#fff'}}>Корзина пуста</Text>
            )}
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
    price:(price) => {dispatch({type:'PRICE', payload:price})}
  })
)(Basket)

