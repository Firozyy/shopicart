import { server } from "../store.js";
import axios from "axios"

export const listProducts = () => async (dispatch) => {


    try {
        dispatch({ type: "PRODUCT_LIST_REQUEST" });
        const { data } = await axios.get(`${server}/products`, {

            withCredentials: true,

        });
        dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data })

    } catch (error) {
        dispatch({
            type: "PRODUCT_LIST_FAIL",
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message

        })
    }
};
export const listProductsDetails = (id) => async (dispatch) => {


    try {
        dispatch({ type: "PRODUCT_DETAILS_REQUEST" });
        const { data } = await axios.get(`${server}/${id}`, {

            withCredentials: true,

        });
        dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data })

    } catch (error) {
        dispatch({
            type: "PRODUCT_DETAILS_FAIL",
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message

        })
    }
};




export const productDelete = (id) => async (dispatch, getState) => {


    try {
        dispatch({ type: "PRODUCT_DELETE_REQUEST" });

        const { userLogin: { userInfo } } = getState()
        await axios.delete(`${server}/${id}`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({
            type: "PRODUCT_DELETE_SUCCESS",
        })

    } catch (error) {
        dispatch({
            type: "PRODUCT_DELETE_FAIL",
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};


export const productCreate = () => async (dispatch, getState) => {


    try {
        dispatch({ type: "PRODUCT_Create_REQUEST" });

        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.post(`${server}/products`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });
        dispatch({
            type: "PRODUCT_Create_SUCCESS", payload: data
        })

    } catch (error) {
        dispatch({
            type: "PRODUCT_Create_FAIL",
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};


export const productUpdate = (product) => async (dispatch, getState) => {
console.log(product);

    try {
        dispatch({ type: "PRODUCT_UPDATE_REQUEST" });

        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.put(`${server}/${product._id}`, product, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({ type: "PRODUCT_UPDATE_SUCCESS", payload: data })

    } catch (error) {
        dispatch({
            type: "PRODUCT_UPDATE_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};