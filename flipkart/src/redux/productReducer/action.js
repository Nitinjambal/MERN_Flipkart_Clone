import axios from "axios"
import { GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./acitonTypes.js"


const URL = "http://localhost:8080/api/v1/products"

export const getProducts = () => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_REQUEST })
    try {
        const { data } = await axios.get(`${URL}/products`);
        console.log(data)
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        console.log('error:', error)
        dispatch({ type: GET_PRODUCT_FAILURE })
    }
}





export const getProductDetails = (id) => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_REQUEST })
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);
        console.log('data:', data.product)
        dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS,payload:data.product })

    } catch (error) {
        console.log('error:', error)
        dispatch({ type: GET_PRODUCT_FAILURE })

    }
}