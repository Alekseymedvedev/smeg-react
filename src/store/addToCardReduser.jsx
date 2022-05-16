const defaultState = {
    addProducts: []
}
const ADD_TO_CARD = "ADD_TO_CARD"

export const addToCardReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            return {...state, addProducts: [...state.addProducts, action.payload]}
        default:
            return defaultState
    }
}
export const addToCardAction = (payload) => ({type: ADD_TO_CARD, payload})