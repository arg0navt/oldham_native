import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    header:{
        width:'100%',
        height:60,
        paddingTop:0,
        backgroundColor:'#111111',
        position:'absolute',
        zIndex:10,
        overflow:'hidden',
    },
    buttonNav:{
        width:17,
        height:13,
        display:'flex',
    },
    buttonNavWr:{
        width:44,
        padding:30,
        marginLeft:-30,
        marginTop:-30
    },
    buttonShopWr:{
        width:44,
        height:22
    },
    logo:{
        width:44,
        height:33,
        display:'flex',
    },
    buttonShop:{
        width:22,
        height:22,
        position:'relative',
        display:'flex',
    },
    buttonShopImage:{
        height:22,
        width:22,
        display:'flex',
        marginLeft:18,
    },
    numShop:{
        width:8,
        height:8,
        borderRadius:8,
        backgroundColor:'#e74b3b',
        zIndex:3,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 4,
        shadowOpacity: 1.0,
        marginLeft:16
    }
})