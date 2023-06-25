
import FormContainer from '../FormContainer'
import React, { useEffect, useState, } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Row, Col, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
import { register } from '../../redux/action/userActions';


const RegisterScreen = () => {
    const { loading, error, userInfo } = useSelector(state => state.userRegister)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setpassword] = useState(null)
    const [confirmPassword, setConfirmpassword] = useState(null)
    const [message, setMessage] = useState(null)
    // const redirect = location.search ? location.search.split("=")[1]:"/"

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            return navigate("/")
        }
    }, [userInfo, navigate])



    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }
    return (
        <FormContainer >
            <h1>sign in</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={formSubmitHandler}>
                <FormGroup controlId='name'>
                    <FormLabel>Name</FormLabel>
                    <FormControl type='text' placeholder='Enter your name' value={name}
                        onChange={(e) => setName(e.target.value)}  >
                    </FormControl>
                </FormGroup>
                <FormGroup controlId='email'>
                    <FormLabel>Email</FormLabel>
                    <FormControl type='email' placeholder='Enter your email' value={email}
                        onChange={(e) => setEmail(e.target.value)}  >
                    </FormControl>
                </FormGroup>
                <FormGroup controlId='password'>
                    <FormLabel>Password</FormLabel>
                    <FormControl type='password' placeholder='Enter your password' value={password}
                        onChange={(e) => setpassword(e.target.value)}  >
                    </FormControl>
                </FormGroup>
                <FormGroup controlId='confirmPassword'>
                    <FormLabel>confirm Password</FormLabel>
                    <FormControl type='confirmPassword' placeholder='confirmPassword your password' value={confirmPassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}  >
                    </FormControl>
                </FormGroup>
                <Button type='submit' variant='primary'>Sign In</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer ? <Link to={'/register'}>Regiter</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}



export default RegisterScreen

