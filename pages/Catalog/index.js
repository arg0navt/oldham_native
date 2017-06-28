import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar'
import { connect } from 'react-redux'
import CatalogHoc from '../../hoc/catalogListHoc'
import ItemList from '../../ui/catalog/itemList'
import global from '../../css/global';

class Catalog extends Component{
    constructor(props){
        super(props)
        this.state = {page:'second'}
    }
    componentDidMount(){
        this.props.getType()
        this.props.getItems(1)
        console.log(this)
    }
    render(){
        const { categoryList } = this.props.Store.category
        const { category } = this.props.Store
        return(
            <View>
                {categoryList.length != 0 ? (
                    <ScrollableTabView initialPage={0} renderTabBar={() => <MaskTabBar someProp={'here'} showMask={true} maskMode='light' />}>
                        {categoryList.map((item, index) => (
                            <ScrollView key={index} tabLabel={item.category_name} style={{height:300}}>
                                
                            </ScrollView>
                        ))}
                    </ScrollableTabView>
                ) : (<View></View>)}
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