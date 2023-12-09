import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ products }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/${products.type}/${products._id}`}>
                {products.image ? (
                    <Card.Img
                        src={products.image}
                        variant='top'
                        height='300px'
                        className='object-fit-contain'
                    // You can add additional styles here if needed
                    />
                ) : (
                    // Placeholder while the image is loading
                    <Spinner animation='border' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </Spinner>
                )}
            </Link>
            <Card.Body>
                <Card.Title className='text-light fw-bold'>{products.brand && products.brand}</Card.Title>
                <Link to={`/${products.type}/${products._id}`}>
                    <Card.Title as='div'>
                        <strong>{products.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating value={products.rating} text={`${products.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as='h3' style={{ color: 'cyan' }}>
                    ${products.price}
                </Card.Text>

            </Card.Body>
            <Button className='btn btn-primary'>Add To WishList</Button>
        </Card>
    );
};

export default Product;
