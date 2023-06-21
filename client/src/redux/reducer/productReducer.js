
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case "PRODUCT_LIST_REQUEST":
            return { loading: true, products: [] }
        case "PRODUCT_LIST_SUCCESS":
            return { loading: false, products: action.payload }
        case "PRODUCT_LIST_FAIL":
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const productDetailsReducer = (state = { product: {reviews:[]} }, action) => {
    switch (action.type) {
        case "PRODUCT_PRODUCT_REQUEST":
            return { loading: true, ...state }
        case "PRODUCT_PRODUCT_SUCCESS":
            return { loading: false, product: action.payload }
        case "PRODUCT_PRODUCT_FAIL":
            return { loading: false, error: action.payload }
        default:
            return state
    }
};