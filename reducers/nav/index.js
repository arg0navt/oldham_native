export default function nav (state = false, action){
    if (action.type === 'TOOFLE_NAV'){
        return !state
    }
    return state
}