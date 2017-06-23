import React, {Component} from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import global from '../../css/global';
import nav from '../../css/navigation';
import { connect } from 'react-redux'
import { url } from '../../config'

class Navigation extends Component{
    render(){
        return(
            <Navigator
                barTintColor="#000" 
                style={[nav.navWrap, nav.activeShadow]}
                initialRoute={{}}
                renderScene={(route, navigator) => (
                    <View>
                        <View style={[nav.navWrap, nav.activeShadow]}></View>
                        <View style={[nav.nav, nav.navActive]}>
                            <View style={[global.center, nav.avtorization]}>
                                <Image source={require('../../img/icon/nav/logo_nav.png')} style={{width:70, height:52}}/>
                            </View>
                            <View className={nav.ul}>
                            </View>
                        </View>
                    </View>
                )}
            >
            </Navigator>
            
        )
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch =>({
        
    })
)(Navigation)