import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar'
import { connect } from 'react-redux'
import CatalogHoc from '../../hoc/catalogListHoc'
import ItemList from '../../ui/catalog/itemList'
import global from '../../css/global';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import c from '../../css/catalog';

class Catalog extends Component{
    constructor(props){
        super(props)
        this.state = {
            n:1,
            l:0
        }
    }
    componentDidMount(){
        this.props.getType()
        this.props.getItems(this.state.n)
        this.setState({l:this.props.Store.category.categoryList.length})
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.Store.category.categoryList != this.props.Store.category.categoryList){
            this.setState({l:nextProps.Store.category.categoryList.length})
        }
    }
    onSwipeLeft() {
        this.state.n < this.state.l ? this.setState({n:this.state.n+1}) : false
        this.props.getItems(this.state.n)
    }
    onSwipeLRight() {
        this.state.n == 1 ? this.setState({n:this.state.n-1}) : false
        this.props.getItems(this.state.n)
    }
    render(){
        const { categoryList } = this.props.Store.category
        const { category } = this.props.Store
        return(
            <View style={{flex:1}}>
                <View style={{height:45}}>
                {categoryList.length != 0 ? (
                    <ScrollableTabView initialPage={0} renderTabBar={() => <MaskTabBar someProp={'here'} showMask={true} maskMode='light' />}>
                        {categoryList.map((item, index) => (
                            <View key={index} tabLabel={item.category_name}></View>
                        ))}
                    </ScrollableTabView>
                ) : (<View></View>)}
                </View>
                <GestureRecognizer onSwipeLeft={(state) => this.onSwipeLeft(state)} onSwipeRight={(state) => this.onSwipeRight(state)}>
                    <ItemList list={category.categoryActive} />
                </GestureRecognizer>
            </View>
        )
    }
}

export default connect(
    state => ({Store: state}),
    dispatch =>({
        pushCategory:(item) => {dispatch({type:'CATEGORY_LIST', payload:item})},
        pushItems:(item) => {dispatch({type:'PUSH_CATEGORY_ITEMS', payload:item})},
    })
)(CatalogHoc(Catalog))