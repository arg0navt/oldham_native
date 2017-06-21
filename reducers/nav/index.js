export default function nav (state = true, action){
    if (action.type === 'GO'){
        return !state
    }
    return state
}