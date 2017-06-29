import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import Item from '../item';
import c from '../../css/catalog';

const w = Dimensions.get('window');

export default ItemList = ({list, nav}) => {
    return (
    <View style={{width:'100%',height:w.height - 105}}>
        <ScrollView style={c.categoryWr}>
        {list.map((item, index) => <Item nav={nav} key={index} item={item} />)}
        </ScrollView>
    </View>
)
}
