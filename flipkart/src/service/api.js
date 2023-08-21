
import axios from "axios"

const URL = "http://localhost:8080/api/v1"
export const signupUser = async (data) => {
    try {
        return await axios.post(`${URL}/users/register`, data)
    } catch (error) {
        console.log('error:', error)

    }
}




export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/users/login`, data)
    } catch (error) {
        console.log('error:', error)
        return error.response
    }
}

export const payUsingPaytm = async (data) => {
    try {
        let res = await axios.post(`${URL}/payment/payment`, data)
        return res.data
    } catch (error) {
        console.log('error:', error)

    }
}