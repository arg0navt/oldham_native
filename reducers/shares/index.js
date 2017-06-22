export default function shares(state = {sharesList:[], detail:{}}, action) {
    if (action.type === 'SHARES_LIST'){
        return {...state, sharesList:action.payload}
    }
    return state
}