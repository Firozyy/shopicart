
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case "CART_ADD_ITEM":

            const item = action.payload

            const itemExist = state.cartItems.find(e => e.product === item.product);
            if (itemExist) {
                return {
                    ...state,
                     cartItems: state.cartItems.map(e => e.product === itemExist.product ? item : e)
                }
            }
            return {
                ...state, cartItems: [...state.cartItems, item]
            }
            case "REMOVE_ITEM":
                return {
                    ...state,
                     cartItems: state.cartItems.filter( x => x.product !== action.payload )
                }
        default:
            return state
    }
};