import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import global from '../../css/global';
import catalog from '../../css/catalog'
import CatalogHoc from '../../hoc/catalogListHoc'
import { connect } from 'react-redux' 
import { transliterate } from '../../config'

const CatalogItem = ({id, img, icon, text, link, width, go}) => (
    <TouchableOpacity style={catalog.itemCol} onPress={() => go.push({id: 'Catalog',name: 'Catalog', idCategory:`${id}`})}>
        <Image source={{uri: img}} style={catalog.itemBlock} />
    </TouchableOpacity>
)

class CatalogList extends Component{
    componentDidMount(){
        this.props.getType()
    }
    render(){
        const { props } = this
        const { Store } = this.props
        return(
            <View style={[global.row, catalog.catalogBlock]}>
                <View style={catalog.catalogRow}>
                    {Store.category.categoryList.length != 0 ? 
                        Store.category.categoryList.map((item, index) => <CatalogItem id={item.category_id} go={this.props.nav} icon={`http://dev.kaerus.ru/uploads/${item.catalog_image_icon}`} key={index} img={`http://dev.kaerus.ru/uploads/${item.catalog_image_340x240}`} text={item.category_name} link={transliterate(item.category_name)} />)
                    : (<View></View>)}
                </View>
            </View>
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({
        pushCategory:(item) => {dispatch({type:'CATEGORY_LIST', payload:item})}
    })
)(CatalogHoc(CatalogList))