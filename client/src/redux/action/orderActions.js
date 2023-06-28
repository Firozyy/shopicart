import { server } from "../store.js";
import axios from "axios"
export const createOrder = (order) => async (dispatch, getState) => {


  try {
    dispatch({ type: "ORDER_CREATE_REQUEST" });

    const { userLogin: { userInfo } } = getState()
    const { data } = await axios.post(`${server}/orders`, order, {
      headers: {
        "Content-Type": 'application/json',
        authrization: `Bearer ${userInfo.token}  `
      },
      withCredentials: true,

    });

    dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data })

  } catch (error) {
    dispatch({
      type: "ORDER_CREATE_FAIL", payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
  }
};

export const getorderDetails = (id) => async (dispatch, getState) => {


  try {
    dispatch({ type: "ORDER_DETAILS_REQUEST" });

    const { userLogin: { userInfo } } = getState()
    const { data } = await axios.get(`${server}/order/${id}`, {
      headers: {

        authrization: `Bearer ${userInfo.token}  `
      },
      withCredentials: true,

    });

    dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data })

  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS_FAIL", payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
  }
};


export const payOrder = (orderId) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: "ORDER_PAY_REQUEST",
    })



    // const { data } = await axios.put(
    //   `${server}/order/${orderId}/pay`, {
    //   headers: {
    //     "Content-Type": 'application/json',
    //     authrization: `Bearer  ${userInfo.token}  `
    //   },
    //   withCredentials: true,

    // })
    console.log(orderId);
    const order={ 
      orderId
    }
    const {userLogin :{userInfo}} = getState()
    const { data } = await axios.put(`${server}/orderupdate`,order,{
        headers: {
            "Content-Type": 'application/json',
            authrization:`Bearer ${userInfo.token}  `
        },
        withCredentials: true,

    });

    dispatch({
      type: "ORDER_PAY_SUCCESS",
      payload: data,
    })
  } catch (error) {

    dispatch({
      type: "ORDER_PAY_FAIL",
      payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
  }
}