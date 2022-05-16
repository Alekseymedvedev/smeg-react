
const defaultState = {
    filterProduct: []
}
const FILTER_MIN_PRICE_PRODUCT = "FILTER_MIN_PRICE_PRODUCT"
const RESET_FILTER_PRODUCT = "RESET_FILTER_PRODUCT"

export const filterProductReduser = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_MIN_PRICE_PRODUCT:
            return {...state, filterProduct: [...action.payload.products.filter(
                product =>
                    product.price > action.payload.minPrice
                    &&
                    product.price < action.payload.maxPrice
                )]}
        case RESET_FILTER_PRODUCT:
            return {...state, filterProduct: [action.payload]}
        default:
            return defaultState
    }
}
export const filterMinPriceProductAction = (payload) => ({type: FILTER_MIN_PRICE_PRODUCT, payload})
export const resetFilterProductAction = (payload) => ({type: RESET_FILTER_PRODUCT, payload})