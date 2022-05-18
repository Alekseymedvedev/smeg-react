import axios from "axios";
import {fetchProductAction} from "../store/fetchProductsReduser";
import {baseUrl, productUrl} from "../URL/UPL";

export const fetchProduct = () => {
    return async dispatch => {
        const response = await axios.get(baseUrl + productUrl)
        
        Object.values(response.data).forEach(val=>{
            dispatch(fetchProductAction(val))
        })
    }
}