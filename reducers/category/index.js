export default function category(state = {categoryList:[]}, action) {
    if (action.type === 'CATEGORY_LIST'){
        return {...state, categoryList:action.payload}
    }
    return state
}