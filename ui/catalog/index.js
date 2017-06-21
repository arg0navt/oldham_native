import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import global from '../../css/global';
import catalog from '../../css/catalog'
import CataloListHoc from '../../hoc/catalogListHoc' 

const CatalogItem = ({img, icon, text, link, width}) => (
    <div style={catalog.itemCol}>
        <Image source={require(src)} style={[catalog.itemBlock, catalog.blockImage]}></Image>
    </div>
)

class CatalogList extends Component{
    componentDidMount(){
        this.props.getType()
    }
    render(){
        return(
            <View style={[global.row, catalog.catalogBlock]}>
                <View style={catalog.catalogRow}>
                </View>
            </View>
        )
    }
}
export default CataloListHoc(CatalogList)