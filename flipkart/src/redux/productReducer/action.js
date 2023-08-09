import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./acitonTypes"


const URL = "http://localhost:8080/api/v1/products"

export const getProducts =()=> async (dispatch) => {
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