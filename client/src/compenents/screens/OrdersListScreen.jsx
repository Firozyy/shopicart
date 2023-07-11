
import { LinkContainer } from "react-router-bootstrap";

import React, { useEffect, } from 'react'
import {  useNavigate } from "react-router-dom"
import {  Button, Table, Container } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
import { listAllOrders } from "../../redux/action/orderActions";

const OrdersListScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { orders, error, loading } = useSelector(state => state.orderList)
    const { userInfo } = useSelector(state => state.userLogin)



    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listAllOrders())
        } else {
            navigate("/login")
        }


    }, [dispatch, userInfo,navigate])


    return (
        <Container><h1>ORDERS</h1>
            {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> : (
                <Table striped hover responsive bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>

                                <td>{order.createdAt}</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    {order.isPaid ? (
                                        order.paidAt
                                    ) : (
                                        <i className='fas fa-times' style={{ color: 'red' }}></i>
                                    )}
                                </td>
                                <td>
                                    {order.isDelivered ? (
                                        order.deliveredAt
                                    ) : (
                                        <i className='fas fa-times' style={{ color: 'red' }}></i>
                                    )}
                                </td>
                                <td>
                                    <LinkContainer to={`/admin/orderdetails/${order._id}`}>
                                        <Button variant='light' className='btn-sm'>
                                            Details
                                        </Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    )
}



export default OrdersListScreen