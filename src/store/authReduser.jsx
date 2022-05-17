const defaultState = {
    auth: false
}
const AUTH = "FETCH_PRODUCT"

export const authReduser = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH:
            return {...state, auth:action.payload}

        default:
            return defaultState
    }
}
export const authAction = (payload) => ({type: AUTH, payload})