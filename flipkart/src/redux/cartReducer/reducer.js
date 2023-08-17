import { ADD_CART_SUCCESS, REMOVE_CART_SUCCESS } from "./actionTypes"


const initialState = {
    cartItems: []
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CART_SUCCESS: {
            const item = payload;
            const exist = state.cartItems.find(product => product.id === item.id);
            if (exist) {
                return { ...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data) }
            } else {
                return { ...state, cartItems: [...state.cartItems, item] }
            }
        }


        case REMOVE_CART_SUCCESS: {
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== payload) }
        }
        default:
            return state
    }
}