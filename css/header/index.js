import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header:{
        width:'100%',
        height:70,
        paddingTop:25,
        backgroundColor:'#111111',
        paddingLeft:15,
        paddingRight:12,
        position:'absolute',
        zIndex:10,
        overflow:'visible',
    },
    buttonNav:{
        width:17,
        height:13,
        display:'block',
    },
    buttonNavWr:{
        width:44
    },
    buttonShopWr:{
        width:44,
        height:22
    },
    logo:{
        width:44,
        height:33,
        display:'block',
    },
    buttonShop:{
        width:22,
        height:22,
        position:'relative',
        display:'block',
    },
    buttonShopImage:{
        height:22,
        width:22,
        display:'block',
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