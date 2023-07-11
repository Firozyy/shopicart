import React from 'react'
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Products = ({ product }) => {

    return (
        <Card className='my-3 p-3 rounded' >
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image.image_url} variant='top' />
            </Link>

            <Card.Body>
                <Link id='link' to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {product.name}
                        </strong>

                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating
                        color={"red"}
                        value={product.rating}
                        text={`${product.numReviews} rewiews`}
                    />

                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Products