const defaultState = {
    categories: []
}
const FILTER_CATEGORIES = "FILTER_CATEGORIES"
const REMOVE_CATEGORIES = "REMOVE_CATEGORIES"

export const categoriesReduser = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_CATEGORIES:
            return {...state, categories: [...state.categories, action.payload]}
        default:
            return defaultState
    }
}

export const filterCategories = (payload) => ({type:FILTER_CATEGORIES,payload})
export const removefilterCategories = (payload) => ({type:REMOVE_CATEGORIES,payload})