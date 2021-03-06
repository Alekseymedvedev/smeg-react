import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReduser} from "./fetchProductsReduser";
import {categoriesReduser} from "./categoriesReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {filterProductReduser} from "./filterProduct";
import {addToCardReduser} from "./addToCardReduser";

const rootReduser= combineReducers({
    productReduser,
    categoriesReduser,
    filterProductReduser,
    addToCardReduser
})


export const store= createStore(rootReduser,composeWithDevTools(applyMiddleware(thunk)))