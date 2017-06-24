import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrap:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    comeinCenter:{
        width:'100%',
        overflow:'hidden',
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    comeinText:{
        color:'#fff',
        fontSize:14,
        width:240,
        marginBottom:45,
        textAlign:'center',
    },
    comeinButtons:{
        width:'100%'
    },
    button:{
        width:'100%',
        height:50,
        borderRadius:7,
        borderWidth:2,
        borderColor:'#d14638',
        borderStyle:'solid',
    },
    comeinButtonLogin:{
        backgroundColor:'#d14638'
    },
    comeinButtonRegistration:{
        marginTop:15,
        borderWidth:2,
        borderColor:'#5d6063',
        borderStyle:'solid',
        marginBottom:60
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:14,
        lineHeight:32
    }
})