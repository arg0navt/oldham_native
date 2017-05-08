import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content:{
        paddingTop:75,
        paddingLeft:15,
        paddingRight:15,
        width:'100%',
        overflow:'hidden',
        position:'relative'
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
        alignSelf:'center',
    },
    left:{
        
    },
    center:{
        
    },
    right:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
    }
})