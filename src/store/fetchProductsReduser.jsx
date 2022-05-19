const defaultState = {
    product: []
}
const FETCH_PRODUCT = "FETCH_PRODUCT"

export const productReduser = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {...state, product: [ ...action.payload]}

        default:
            return defaultState
    }
}
export const fetchProductAction = (payload) => ({type: FETCH_PRODUCT, payload})
