export default function category(state = {categoryList:[], categoryActive:[], detail:{}}, action) {
    if (action.type === 'CATEGORY_LIST'){
        return {...state, categoryList: action.payload}
    } else if (action.type === 'PUSH_CATEGORY_ITEMS'){
        return {...state, categoryActive: action.payload}
    } else if (action.type === 'PUSH_DETAIL'){
        return {...state, detail: action.payload}
    }
    return state
}