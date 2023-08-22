import { ADD_CART_SUCCESS, CART_FAILURE, CART_REQUEST, REMOVE_CART_SUCCESS } from "./actionTypes"


const initialState = {
    isLoading: false,
    isError: false,
    cartItems: []
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_REQUEST:
            return {
                ...state, isLoading: true, isError: false, cartItems: []
            }

        case ADD_CART_SUCCESS: {
            const item = payload;
            const exist = state.cartItems.find(product => product.id == item.id);
            if (exist) {
                return { ...state, cartItems: state.cartItems.map(data => data.product == exist.product ? item : data) }
            } else {
                return { ...state, cartItems: [...state.cartItems, item] }
            }
        }

        case CART_FAILURE:
            return {
                ...state, isLoading: false, isError: true, cartItems: []
            }


        case REMOVE_CART_SUCCESS: {
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== payload) }
        }
        default:
            return state
    }
}