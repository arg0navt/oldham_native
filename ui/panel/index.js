import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import global from '../../css/global';
import c from '../../css/catalog';
const w = Dimensions.get('window');

class CatalogPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            length:0
        }
    }
    componentWillReceiveProps(nextProps){
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
        })
    }
    render(){
        return(
            <View>
            {this.props.Store.basket.length > 0 && (this.props.route.name == `Catalog` || this.props.route.name == `Detail`) ? (                
            <View style={[c.bottomPanel, {overflow:'hidden'}]}>
                <Image source={require('../../img/bottom.jpg')} style={{width:'100%', height:63,position:'absolute', top:0,left:0}} />
                <View style={c.bottom}>
                    <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Basket',name: 'Basket'})} style={[c.col, c.colLeft]}>
                        <Image source={require('../../img/icon/korz.png')} style={{width:23, height:23}} />
                        <View style={c.iconKorz}>
                            <Text style={c.bottomTextOne}>В корзине</Text>
                            <Text style={c.bottomTextTwo}>
                                <Text style={c.bottomTextTwoSpan}>{this.state.length}</Text> позиций
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigator.push({id: 'Basket',name: 'Basket'})} style={[c.col, c.colRight, c.border]}>
                        <View style={[c.bottomItem]}>
                            <Text style={c.bottomTextOne}>На сумму</Text>
                            <Text style={[c.bottomTextTwo, c.textRight]}>
                                <Text style={c.bottomTextTwoSpan}>{this.props.Store.price} ₽</Text>
                            </Text>
                        </View>
                        <Image source={require('../../img/icon/up.png')} style={{marginLeft:15, width:16, height:16}} />
                    </TouchableOpacity>
                </View>
            </View>
            ) : (<View></View>)}
                
            </View>
        )
    }
}
export default connect(
  state => ({
    Store: state
  }),
  dispatch =>({})
)(CatalogPanel)