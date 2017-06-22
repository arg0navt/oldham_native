import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    slideWrapList:{
        height:173,
    },
    slide:{
        overflow:'hidden',
        height:173,
        position:'relative'
    },
    center:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:45
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
        height:45,
        backgroundColor:'rgba(0,0,0,.8)',
        zIndex:2,
        marginTop:-45,
    },
    sliderText:{
        fontSize:12,
        color:'#fff',
        width:140,
    },
    sliderLink:{
        color:'#fff',
        fontSize:13,
        width:65,
    },
    leftText:{
        width:'65%',
        paddingLeft:15,
    },
    rightText:{
        width:'35%',
        paddingRight:15,
    }
})