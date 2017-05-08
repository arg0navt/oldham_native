import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Slider from '../../ui/slider'
import Catalog from '../../ui/catalog'
import Card from '../../ui/card'

export default class Home extends Component{
    render(){
        return (
            <View>
                <Slider />
                <Card />
                <Catalog />
            </View>
        )
    }
}