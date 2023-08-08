
import axios from "axios"

const URL = "http://localhost:8080/api/v1/users"
export const signupUser = async (data) => {
    try {
        return await axios.post(`${URL}/register`, data)
    } catch (error) {
        console.log('error:', error)

    }
}




export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('error:', error)
return error.response
    }
}