import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducer/productReducer.js';

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer
    }
});


export default store;


// export const server = 'http://13.233.198.225:4000/api/v1'
export const server = 'http://localhost:8080/api/v1'
