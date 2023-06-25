
import React, { useEffect, useState, } from 'react'
import { useNavigate } from "react-router-dom"
import { Row, Col, Button, Form, FormGroup, FormLabel, FormControl, Container } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
import { getUserDeatils ,UserProfileUpdate} from '../../redux/action/userActions';


const ProfileScreen = () => {
    const { loading, error, user } = useSelector(state => state.userDetails)
    const { userInfo } = useSelector(state => state.userLogin)
    const { success } = useSelector(state => state.userupdate)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setConfirmpassword] = useState("")
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            return navigate("/login")
        } else {
            if (!user.name) {
                dispatch(getUserDeatils("profile"))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [userInfo, dispatch, navigate,user])



    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
           dispatch(UserProfileUpdate({id:user._id,name,email,password}))
        }
    }
    return (
        <Container className='screenSize'>
            <Row>
                <Col md={3}>
                    <h1>User profile</h1>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {success && <Message variant='success'>Updated Successfull</Message>}
                    
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
                        <Button type='submit' variant='primary'>Update</Button>
                    </Form>


                </Col>
                <Col md={9}>
                    <h2>My orders</h2>
                </Col>
            </Row>
        </Container>

    )
}






export default ProfileScreen