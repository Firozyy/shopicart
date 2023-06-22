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