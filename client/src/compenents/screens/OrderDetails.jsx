
import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useSearchParams } from "react-router-dom"
import { deliverOrder, getorderDetails } from '../../redux/action/orderActions'
import Message from '../Message'
import Loader from '../Loader'


const OrderDetails = () => {
    const dispatch = useDispatch()

    const { id } = useParams()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, loading, error } = orderDetails
    const { userInfo } = useSelector(state => state.userLogin)

    const { loading: loadingDeliver, error: deliverError, success } = useSelector(state => state.orderDelivary)


    useEffect(() => {
        if (success) {
            dispatch({ type: "ORDER_DELIVERY_RESET" })
        }

        dispatch(getorderDetails(id))




    }, [dispatch, id, success])



    const deliverHandler = (e) => {
        e.preventDefault()
        dispatch(deliverOrder(id))
    };




    return (
        <Container className='screenSize'>
            {loading ? <Loader /> : error ? <Message variant="dander">{error}</Message> :

                <>
                    <h1>Order{order._id}</h1>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <h2>shipping</h2>
                                    <p>
                                        <strong>Name: </strong> {order.user.name}
                                    </p>
                                    <p>
                                        <strong>Email: </strong>{' '}
                                        <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                                    </p>
                                    <p>
                                        <strong>
                                            Address
                                        </strong>
                                        {order.shippingAddress.address},
                                        {order.shippingAddress.city},
                                        {order.shippingAddress.postalCode},
                                        {order.shippingAddress.country},
                                    </p>
                                    {order.isDelivered ? (
                                        <Message variant='success'>
                                            Delivered on {order.deliveredAt}
                                        </Message>
                                    ) : (
                                        <Message variant='danger'>Not Delivered</Message>
                                    )}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h2>Payment Method</h2>
                                    <p>
                                        <strong>Method: </strong>
                                        {order.paymentMethod}
                                    </p>
                                    {order.isPaid ? (
                                        <Message variant='success'>Paid on {order.paidAt}</Message>
                                    ) : (
                                        <Message variant='danger'>Not Paid</Message>
                                    )}
                                </ListGroupItem>

                                <ListGroupItem>
                                    <h2>Order items</h2>

                                    {order.orderItems.length === 0 ? <Message>Order is empty</Message> :
                                        <ListGroup variant='flush'>
                                            {order.orderItems.map((item, index) => (
                                                <ListGroupItem key={index}>
                                                    <Row>
                                                        <Col md={1}>
                                                            <Image src={item.image.image_url} alt={item.name} fluid rounded />
                                                        </Col>
                                                        <Col >
                                                            <Link id='link' to={`/product/${item.product}`}>
                                                                {item.name}
                                                            </Link>
                                                        </Col>
                                                        <Col md={4} >
                                                            {item.qty} * ${item.price} = {item.qty * item.price}
                                                        </Col>



                                                    </Row>
                                                </ListGroupItem>
                                            ))}
                                        </ListGroup>
                                    }

                                </ListGroupItem>
                            </ListGroup>

                        </Col>
                        <Col md={4}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h2>Order Summary</h2>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Items</Col>
                                            <Col>₹{order.totalPrice - order.shippingPrice - order.taxPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Shipping</Col>
                                            <Col>₹{order.shippingPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Tax</Col>
                                            <Col>₹{order.taxPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Total</Col>
                                            <Col>₹{order.totalPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {loadingDeliver && <Loader />}
                                    {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                        <ListGroup.Item>
                                            <Button
                                                type='button'
                                                className='btn-block'

                                                onClick={deliverHandler}
                                            >
                                                Marked as Delivered
                                            </Button>
                                        </ListGroup.Item>
                                    )

                                    }

                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </>
            }
     
        </Container>
    )
}






export default OrderDetails