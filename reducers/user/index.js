export default function user(state = {token:'', profile:{}, loyalty:{}}, action) {
    if (action.type === '@user.TOKEN'){
        return {...state, token:action.payload}
    } else if (action.payload === '@user.PROFILE'){
        return {...state, profile:action.payload}
    } else if (action.payload === '@user.LOYALITY'){
        return {...state, loyalty:action.payload}
    }
    return state
}