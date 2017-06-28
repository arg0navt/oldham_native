export default function category(state = {categoryList:[], categoryActive:[]}, action) {
    if (action.type === 'CATEGORY_LIST'){
        return {...state, categoryList: action.payload}
    } else if (action.type === 'PUSH_CATEGORY_ITEMS'){
        return {...state, categoryActive: action.payload}
    }
    return state
}