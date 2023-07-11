import { React, useEffect, useState } from 'react'
import Products from "../../compenents/Products"
import { Col, Container, Nav, Row } from 'react-bootstrap'

import { listProducts } from '../../redux/action/productAction.js';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';
import Message from '../Message';
import { useNavigate, useParams } from 'react-router-dom';
import Paginate from '../Paginate';
const Home = () => {
    const dispatch = useDispatch()

    const { pageNumber } = useParams()
    const productList = useSelector(state => state.productList)
    const { loading, error, products: data, } = productList
    const { products, page, pages } = data


    useEffect(() => {
        dispatch(listProducts(pageNumber))
    }, [dispatch,pageNumber])


    return (
        <main className='py-3'>

            <Container>
                <h1>Latest Products</h1>
                {loading ? <Loader /> :
                    error ? <Message variant={'danger'}>{error}</Message> :
                        <Row>
                            {products && products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Products product={product} />
                                </Col>

                            ))}
                        </Row>}
           
                <Paginate
                    pages={pages}
                    page={page}

                />
            </Container>
        </main>

    )
}

export default Home