import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content:{
        paddingTop:75,
        paddingLeft:15,
        paddingRight:15,
        width:'100%',
        minHeight:'100%',
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
    },
    uiNum:{
        width: 125,
        height: 30,
        borderRadius:4,
        borderWidth:1,
        borderColor:'#fff',
        marginTop:15
    },
    minus:{
        width:31,
        height:28,
    },
    plus:{
        width:31,
        height:28,
    },
    input:{
        borderWidth:0,
        height:28,
        width:'100%',
        backgroundColor:'rgba(0,0,0,0)',
    },
    addCart:{
        width:'100%',
        height:28,
        backgroundColor:'#e64b3b',
        borderWidth:0,
    }
})