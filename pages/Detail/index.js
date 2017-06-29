import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import CatalogHoc from '../../hoc/catalogListHoc'
import global from '../../css/global';
import c from '../../css/catalog';

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:'',
            num:0,
            num40:0,
            width:30,
            item:{}
        }
    }
    componentDidMount(){
        this.props.getDetail(this.props.route.itemId)
    }
    render(){
        return(
            <View style={detail.detailPage}></View>
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