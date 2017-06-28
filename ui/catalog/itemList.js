import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import Item from '../item';
import c from '../../css/catalog';

const w = Dimensions.get('window');

export default ItemList = (list) => {
    return (
    <ScrollView style={[c.categoryWr, {width:'100%',height:w.height - 102}]}>
        {list.list.map((item, index) => <Item key={index} item={item} />)}
    </ScrollView>
)
}
