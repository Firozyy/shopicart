
import { LinkContainer } from "react-router-bootstrap";
import FormContainer from '../FormContainer'
import React, { useEffect, useState, } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Row, Col, Button, Table, Container } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
import { dleteUser, userlist } from "../../redux/action/userActions";
const UserListSCreen = () => {
    const dispatch = useDispatch()
const navigate = useNavigate()
    const { users, error, loading } = useSelector(state => state.userList)
    const { userInfo} = useSelector(state => state.userLogin)
    const {success} = useSelector(state => state.userRemove)
   

    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(userlist())
        }else{
            navigate("/login")
        }
      

    }, [dispatch,success])

    const deleteHandler = (id)=>{
dispatch(dleteUser(id))
    }
    return (
        <Container><h1>USERS</h1>
            {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> : (
                <Table striped hover responsive bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td><a href="">{user.email}</a></td>
                                <td>{user.isAdmin ? "ADMIN" : "USER"}</td>
                                <td>
                                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    )
}

export default UserListSCreen