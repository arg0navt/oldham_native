import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content:{
        paddingTop:75,
        paddingLeft:15,
        paddingRight:15,
        width:'100%',
        flex:1,
        position:'relative',
    },
    center:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
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