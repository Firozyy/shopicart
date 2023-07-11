import React from 'react'
import { payOrder } from '../../redux/action/orderActions'
import { useDispatch, useSelector } from 'react-redux'

export const Test = () => {
    const dispatch = useDispatch()
    const click = (e) => {
        e.preventDefault()
        dispatch(payOrder("64aa687d1ec160f3f5c43d7a"))
    }
    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay
 console.log(orderPay);
    return (
        <div><button onClick={click}>fhgh</button></div>
    )
}
