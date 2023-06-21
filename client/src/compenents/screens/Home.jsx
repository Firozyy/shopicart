import { React, useEffect, useState } from 'react'
import Products from "../../compenents/Products"
import { Col, Container, Row } from 'react-bootstrap'

import { listProducts } from '../../redux/action/productAction.js';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
const Home = () => {
    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <main className='py-3'>

            <Container>
                <h1>Latest Products</h1>
                {loading ? <Loader/> :
                 error ?<Message variant={'danger'}>{error}</Message> :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Products product={product} />
                            </Col>

                        ))}
                    </Row>}

            </Container>
        </main>

    )
}

export default Home