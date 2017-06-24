import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    avtorization:{
        width:'100%',
        marginTop:45,
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:35
    },
    nav:{
        flex: 1,
        backgroundColor:'#181818',
        paddingLeft:15,
        paddingRight:15,
    },
    ul:{
        padding:0
    },
    li:{
        paddingBottom:1,
        overflow:'hidden',
        marginBottom:21,
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
    },
    iconWrap:{
       width:24,
       marginRight:20
    },
    icon:{
    },
    liText:{
        fontSize:14,
        color:'#ffffff',
        marginTop:0,
        marginBottom:0
    },
    navLogo:{
        width:70,
        display:'block',
        margin:'auto',
        position:'absolute',
        bottom:40,
        left:0,
        right:0
    }
})