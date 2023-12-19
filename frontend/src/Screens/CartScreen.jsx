import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Form, Button, Card, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'



const CartScreen = () => {

    const cartItems = useSelector((state) => state.cartItems.cartItems);

    // Calculate total price based on quantity and price of each item
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };


    return (
        <div>
            <Row>

                {cartItems.map((item) => (
                    <Col sm={12} md={6} lg={4} xl={4}>
                        <li key={item.product.id}>
                            {item.product.name} - Quantity: {item.quantity} - Price: ${(item.product.price * item.quantity).toFixed(2)}
                        </li>
                    </Col>
                ))}

            </Row>
        </div>
    )
}

export default CartScreen
