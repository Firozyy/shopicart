import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Row, Col, Image, Container, ListGroup, Card, Button, Form } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux';

import Rating from '../Rating'
import { listProductsDetails } from '../../redux/action/productAction'
import Loader from '../Loader';
import Message from '../Message';

const ProductScreen = () => {
  const [qty, setQty] = useState(0)
  const { id } = useParams()
  const dispatch = useDispatch()
  const { loading, product, error } = useSelector(state => state.productDetails)

  useEffect(() => {
    dispatch(listProductsDetails(id))
  }, [dispatch])

  const addToCartHandler = ()=>{
    
  };




  return (
    <Container>
      <Link to={'/'} className='btn btn-lighy my-3'>
        GoBack
      </Link>
      {loading ? <Loader /> :
        error ? <Message variant={'danger'}>{error}</Message> :
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush' >
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    color={"red"}
                    value={product.rating}
                    text={`${product.numReviews} rewiews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price:${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description:${product.description
                  }
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant='flush' >
                  <ListGroup.Item>
                    <Row>

                      <Col>
                        Price:
                      </Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>

                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>

                      <Col>
                        Status:
                      </Col>
                      <Col>
                        {product.countInStock > 0 ? "IN stcok" : "Out of stock"}
                      </Col>

                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                    
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                      onClick={()=>addToCartHandler}>
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>

            </Col>
          </Row>
      }


    </Container>

  )
}

export default ProductScreen