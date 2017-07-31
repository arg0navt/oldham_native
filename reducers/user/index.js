export default function user(state = {token:'', profile:{}, loyalty:{}, logging: false}, action) {
    if (action.type === 'TOKEN'){
        return {...state, token: action.payload}
    } else if (action.type === 'PROFILE'){
        return {...state, profile: action.payload, logging: true}
    } else if (action.type === 'LOYALITY'){
        return {...state, loyalty: action.payload}
    } else if (action.type === 'PUSH_USER'){
        return {...state, profile: action.payload, logging: true}
    } else if (action.type === 'DELETE_USER'){
        return {token:'', profile:{}, loyalty:{}, logging: false}
    }
    return state
}