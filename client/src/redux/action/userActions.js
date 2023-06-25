
import { server } from "../store.js";
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {


    try {
        dispatch({ type: "USER_LOGIN_REQUEST" });
        const { data } = await axios.post(`${server}/user/login`, { email, password }, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials: true,

        });

        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: "USER_LOGIN_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};

export const logout = () => async (dispatch) => {

    dispatch({ type: "USER_LOGOUT" })
    localStorage.removeItem('userInfo')


};

export const register = (name,email, password) => async (dispatch) => {


    try {
        dispatch({ type: "USER_REGISTER_REQUEST" });
        const { data } = await axios.post(`${server}/user`, {name, email, password }, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials: true,

        });

        dispatch({ type: "USER_REGISTER_SUCCESS", payload: data })
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: "USER_REGISTER_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};


export const getUserDeatils = (id) => async (dispatch,getState) => {


    try {
        dispatch({ type: "USER_DETAILSE_REQUEST" });

       const {userLogin :{userInfo}} = getState()
        const { data } = await axios.get(`${server}/user/profile`,{
            headers: {
                "Content-Type": 'application/json',
                authrization:`Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({ type: "USER_DETAILSE_SUCCESS", payload: data })

    } catch (error) {
        dispatch({
            type: "USER_DETAILSE_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};


export const UserProfileUpdate = (user) => async (dispatch,getState) => {
  

    try {
        dispatch({ type: "USER_UPDATE_PROFILE_REQUEST" });

       const {userLogin :{userInfo}} = getState()
        const { data } = await axios.put(`${server}/user/profile`,user,{
            headers: {
                "Content-Type": 'application/json',
                authrization:`Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({ type: "USER_UPDATE_PROFILE_SUCCESS", payload: data })

    } catch (error) {
        dispatch({
            type: "USER_DETAILSE_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};