import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    page:{
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        overflow:'hidden'
    },
    item:{
        position:'relative',
        paddingTop:20,
        paddingBottom:20,
        borderBottomWidth:1,
        borderColor:'rgba(255,255,255,.1)'
    },
    itemTop:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        width:'100%'
    },
    itemName:{
        fontSize:17,
        color:'#fff',
        lineHeight:26,
    },
    icon:{
        width:31,
        height:31,
        borderRadius:31,
        borderWidth:1,
        borderColor:'#404040',
        marginRight:15,
    },
    itemLink:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    data:{
        width:'100%',
        overflow:'hidden',
        paddingLeft:45,
    },
    name:{
        fontSize:24,
        color:'#fff',
    },
    address:{
        fontSize:11,
        color:'#fff',
        paddingTop:5
    },
    tools:{
        width:'100%',
        height:50,
        borderWidth:1,
        borderColor:'#606060',
        borderRadius:7,
        marginTop:13,
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    inputBlock:{
        paddingTop: 15,
        width: '100%',
        height:52,
        marginBottom: 15,
        borderBottomWidth:1,
        borderColor:'#585b60',
    },
    inputInput:{
        width: '100%',
        height:52,
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#fff',
        fontSize: 15
    },
    wrapItemInput:{
        paddingLeft:15,
        paddingBottom:15
    },
    tollSettings:{
        textAlign:'center',
        fontSize:14,
        color:'#fff'
    },
    formInput:{
        color:'#fff'
    },
    toolsText:{
        textAlign:'center',
        fontSize:14,
        color:'#fff'
    },
    toolsSub:{
        backgroundColor:'rgba(0,0,0,0)',
        marginTop:40
    },
    tollsImg:{
        width:21,
        height:21,
        marginRight:15
    },
    text:{
        fontSize:12,
        color:'#fff',
        margin:0,
        lineHeight:12,
        paddingRight:40,
        marginTop:7,
        marginBottom:7
    },
    dataPoint:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'flex-start',
        flexDirection:'row',
    },
    point:{
        color:'#fff',
        fontSize:14,
        marginRight:20
    },
    span1:{
        fontSize:24
    },
    span2:{
        fontSize:29
    },
    pointBlock:{
        width:174,
    },
    leftStr:{
        height:70,
    },
    topStr:{
        height:80,
        paddingTop:10,
    },
    pointBlockText:{
        color:'#fff',
        fontSize:14,
        textAlign:'center',
        margin:0,
        lineHeight:28,
        paddingTop:2
    },
    pageWr:{
        paddingLeft:15,
        paddingRight:15
    },
    itemLinkText:{
        color:'#fff',
        marginRight:15
    },
    iconBlockWrap:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    iconWrap:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:31,
        height:31,
        borderRadius:31,
        borderWidth:1,
        borderColor:'#404040',
        marginRight:15
    }
})