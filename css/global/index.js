import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content:{
        paddingTop:75,
        paddingLeft:15,
        paddingRight:15,
        width:'100%',
        position:'relative',
        flex:1
    },
    row:{
        width:'100%',
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    col4:{
        position:'relative',
        display:'flex',
        alignItems:'flex-start',
    },
    left:{
        paddingTop:3
    },
    center:{
        width:100,
        height:30
    },
    right:{
        justifyContent:'flex-end',
        alignItems:'flex-start',
    },
    noPadding:{
        paddingLeft:0,
        paddingRight:0,
        width:'100%'
    }
})