import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator  } from 'react-native';
import Drawer from 'react-native-drawer'
import AppCss from '../../css/AppStyle';
import global from '../../css/global';
import { connect } from 'react-redux'
import { url } from '../../config'
import UserHoc from '../../hoc/userHoc'
import Slider from '../../ui/slider'
import Catalog from '../../ui/catalog'
import Card from '../../ui/card'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            loadCard:false
        }
    }
    componentDidMount(){
        this.props.getToken()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.Store.user != this.props.Store.user){
            this.setState({loadCard:true})
            setTimeout(()=>{
                this.setState({load:false})
            },5000)
        }
    }
    render(){
        return (
            <ScrollView style={{flex:1, paddingLeft:15, paddingRight:15}}>
                <Slider nav={this.props.navigator} />
                {this.state.loadCard == true ? (
                    <Card nav={this.props.navigator} />
                ) : (
                    <View style={{height:200, display:'flex',flexWrap: 'wrap',justifyContent:'center',alignItems:'center',flexDirection:'row'}}><ActivityIndicator/></View>
                )}
                <Catalog nav={this.props.navigator} />
            </ScrollView>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({
        pushToken: (token) => {dispatch({type:'TOKEN', payload:token})},
    })
)(UserHoc(Home))