import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Item from '../item';
import c from '../../css/catalog';

export default ItemList = (list) => (
    <View style={c.categoryWr}>
        {list.map((item, index)=> <Item key={index} item={item} />)}
    </View>
)
