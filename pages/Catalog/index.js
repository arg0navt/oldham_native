import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ProgressBar } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar'
import { connect } from 'react-redux'
import CatalogHoc from '../../hoc/catalogListHoc'
import ItemList from '../../ui/catalog/itemList'
import global from '../../css/global';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import c from '../../css/catalog';

const w = Dimensions.get('window');

class Catalog extends Component{
    constructor(props){
        super(props)
        this.state = {
            n:1,
            l:0
        }
    }
    componentDidMount(){
        this.setState({
            n:Number(this.props.route.idCategory)
        })
        setTimeout(()=>{
            this.props.getType()
            this.setState({l:this.props.Store.category.categoryList.length})
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.Store.category.categoryList != this.props.Store.category.categoryList){
            this.setState({l:nextProps.Store.category.categoryList.length})
        }
    }
    onSwipeLeft() {
        let n = this.state.n + 1
        let tabId = this.state.n
        n <= this.state.l ? this.setState({n:n}) : false
        setTimeout(() => {
            this.props.getItems(this.state.n)
            this.tabView.goToPage(tabId)
        })
    }
    onSwipeRight() {
        let n = this.state.n - 1
        let tabId = n - 1
        n > 0 ? this.setState({n:n}) : false
        setTimeout(() => {
            this.props.getItems(this.state.n)
            this.tabView.goToPage(tabId)
        })
    }
    handleChangeTab(ev){
        this.props.getItems(Number(ev.i) + 1)
    }
    render(){
        const { categoryList } = this.props.Store.category
        const { category } = this.props.Store
        return(
            <View style={{flex:1}}>
                <View style={{height:45}}>
                {categoryList.length != 0 ? (
                    <ScrollableTabView 
                        ref={(tabView) => { this.tabView = tabView }} 
                        initialPage={this.state.n - 1} renderTabBar={() => <MaskTabBar someProp={'here'} showMask={true} maskMode='light' />}
                        onChangeTab={this.handleChangeTab.bind(this)}
                    >
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