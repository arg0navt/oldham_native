import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    itemCol:{
        maxWidth:'50%',
        width:'50%',
        padding:2.5,
    },
    blockImage:{
        width:'100%'
    },
    catalogRow:{
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        flexGrow:2,
        marginLeft:-2.5,
        marginRight:-2.5,
        paddingBottom:40
    },
    itemBlock:{
        width:'100%',
        height:120,
        borderRadius:5,
        overflow:'hidden',
        position:'relative'
    },
    catalogBlock:{
        paddingTop:15,
        paddingBottom:60
    },
    icon:{
        position:'absolute',
        width:'100%',
        height:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    iconWrap:{
        display:'flex',
        alignItems:'center',
        alignSelf:'center',
    },
    iconImg:{
        margin:'auto'
    },
    iconText:{
        color:'#fff',
        fontSize:12,
        margin:0,
        marginTop:10,
        minWidth:63,
        textAlign:'center',
        backgroundColor:'rgba(0,0,0,0)',
        width:50
    },
    bgItem:{

    }
})