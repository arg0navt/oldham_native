export default function user(state = {token:'', profile:{}, loyalty:{}, logging: false}, action) {
    if (action.type === 'TOKEN'){
        return {...state, token: action.payload}
    } else if (action.type === 'PROFILE'){
        return {...state, profile: action.payload, logging: true}
    } else if (action.type === 'LOYALITY'){
        return {...state, loyalty: action.payload}
    }
    return state
}