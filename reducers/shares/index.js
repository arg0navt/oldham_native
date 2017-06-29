export default function shares(state = {sharesList:[], detail:{}}, action) {
    if (action.type === 'SHARES_LIST'){
        return {...state, sharesList:action.payload}
    } else if (action.type === 'SHARES_DETAIL'){
        return {...state, detail:action.payload[0]}
    }
    return state
}