const defaultState = {
    addProducts: []
}
const ADD_TO_CARD = "ADD_TO_CARD"
const ADD_TO_COUNT = "ADD_TO_COUNT"

export const addToCardReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            return {...state, addProducts: [...state.addProducts, action.payload]}
        case ADD_TO_COUNT:
            return {...state, addProducts: [state.addProducts.count + 1]}
        default:
            return defaultState
    }
}
export const addToCardAction = (payload) => ({type: ADD_TO_CARD, payload})
export const isCountAction = (payload) => ({type: ADD_TO_COUNT, payload})