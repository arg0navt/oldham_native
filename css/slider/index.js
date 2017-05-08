import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    slide:{
        overflow:'hidden',
        width:'100%',
        height:173,
        position:'relative'
    },
    blockImg:{
        borderRadius:10,
        zIndex:2,
        flex:1,
        height:undefined,
        width: undefined
    },
    blockText:{
        position:'relative',
        height:70,
        backgroundColor:'rgba(0,0,0,.8)',
        zIndex:2,
        marginTop:-70
    },
    sliderText:{
        fontSize:12,
        color:'#fff',
        width:140,
    },
    sliderLink:{
        color:'#fff',
        fontSize:13,
        marginRight:0,
        paddingRight:0,
        width:65
    },
    leftText:{
        width:'65%',
        paddingLeft:15,
        paddingTop:20
    },
    rightText:{
        width:'35%',
        paddingRight:15,
        paddingTop:25
    }
})