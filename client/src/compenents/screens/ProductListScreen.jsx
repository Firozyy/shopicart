
import { LinkContainer } from "react-router-bootstrap";

import React, { useEffect, } from 'react'
import { useNavigate } from "react-router-dom"
import { Row, Col, Button, Table, Container, } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
import { listProducts, productCreate, productDelete } from "../../redux/action/productAction";

const ProductListScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { products, error, loading } = useSelector(state => state.productList)
    const { userInfo } = useSelector(state => state.userLogin)
    const { success: successDelete, error: errorDelete, loading: loadingDelete } = useSelector(state => state.productDelete)
    const { success: successCreate, error: errorCreate, loading: loadingCreate, product: cretedProduct } = useSelector(state => state.productCreate)

    useEffect(() => {
        dispatch({ type: "PRODUCT_Create_RESET" })
        if (!userInfo.isAdmin) {
            navigate("/login")

        }
        if (successDelete) {
            navigate(`/admin/product${cretedProduct._id}/edit`)
        } else {
            dispatch(listProducts())
        }

    }, [dispatch, navigate, userInfo, successDelete, cretedProduct])

    const deleteHandler = (id) => {
        dispatch(productDelete(id))
    }

    const createProductHandler = () => {
        dispatch(productCreate())
    }

    return (
        <Container>
            <Row className='align-items-center'>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                        <i className='fas fa-plus'></i> Create Product
                    </Button>
                </Col>
            </Row>
            {loadingDelete && <Loader />}
            {errorDelete && <Message variant={'danger'}>{errorDelete}</Message>}
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant={'danger'}>{errorCreate}</Message>}
            {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> : (
                <Table striped hover responsive bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATAGORY</th>
                            <th>BRAND</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map(item => (
                            <tr key={item._id}>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.catagory}</td>
                                <td>{item.brand}</td>
                                <td>
                                    <LinkContainer to={`/admin/product/${item._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button
                                        variant='danger'
                                        className='btn-sm'
                                        onClick={() => deleteHandler(item._id)}
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



export default ProductListScreen