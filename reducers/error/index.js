export default function shares(state = {errorText:'', errorStatus:false}, action) {
    if (action.type === 'ERROR'){
        return {errorText: action.payload, errorStatus:true}
    } else if (action.type == 'DROP_ERROR'){
        return {errorText:'', errorStatus:false}
    }
    return state
}