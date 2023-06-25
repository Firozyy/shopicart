

import FormContainer from '../FormContainer'
import React, { useState, } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Form, Container, FormGroup, FormLabel, Col,  } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import CheckoutSteps from '../CheckoutSteps';
import { savePaymentMethod } from '../../redux/action/cartAction';



const PaymentScreen = () => {
    const navigate = useNavigate()
    const { shippingAddress } = useSelector(state => state.cart)
    if (!shippingAddress) {
        navigate("shipping")
    }
    const dispatch = useDispatch()


    const [paymentMethod, setpaymentMethod] = useState("Razorpay")


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeOrder')
    }
    return (
        <Container className='screenSize'>
            <FormContainer>
                <CheckoutSteps step1 step2 step3 />
                <h1>Shipping</h1>

                <Form onSubmit={submitHandler}>
                    <FormGroup controlId='address'>

                    </FormGroup>

                    <FormLabel as="legend">Select Method</FormLabel>

                    <Col>

                        <Form.Check
                            type='radio'
                            label="Razorpay"
                            id='razorpay'
                            name='paymentMethod'
                            value="razorpay"
                            checked
                            onChange={(e) => setpaymentMethod(e.target.value)}
                        ></Form.Check>


                    </Col>
                    <Button type='submit' variant='primary'>
                        continue
                    </Button>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default PaymentScreen