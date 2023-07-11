import { React, useEffect, useState } from 'react'
import Products from "../../compenents/Products"
import { Col, Container, Row } from 'react-bootstrap'

import { searchProducts } from '../../redux/action/productAction.js';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
import { useParams } from 'react-router-dom';
const SearchEngine = () => {
    const { keyword } = useParams()

    const dispatch = useDispatch()
    const { loading, products, error } = useSelector(state => state.productSearcht)

    useEffect(() => {

        dispatch(searchProducts(keyword))


    }, [dispatch, keyword])


    return (
        <main className='py-3'>

            <Container>
                <h1>SEARCHED Products</h1>
                {loading ? <Loader /> :
                    error ? <Message variant={'danger'}>{error}</Message> :
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


export default SearchEngine
