import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Rating from '../Components/Rating'
import Form from 'react-bootstrap/Form';
import { Card, Container, Row } from 'react-bootstrap'

const ProductScreen = () => {

    const { category, id } = useParams();
    let item = category.substring(0, category.length - 1)

    const [data, setData] = useState({});
    const [status, setStatus] = useState(false);
    const [qty, setQty] = useState(1)

    const callApiProduct = () => {
        console.log(category, id, item)
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `/api/${category}/${id}`,
            headers: {}
        };


        axios.request(config)
            .then((response) => {

                setData(response.data.data)
                console.log(data)
                setStatus(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        callApiProduct()
        console.log(category, id)
    }, [])


    const addToCartHandler = () => {

    }

    return (
        <>




            <Container>
                <Row><span className='p-3'>
                    <Link className='fw-semibold text-decoration-none' to={`/${category}`}>Go Back</Link>
                </span></Row>
                <Row>
                    <div className='col-12 col-md-4 col-lg-4 col-xl-6 p-2' >
                        <Card style={{ height: '400px' }} className='p-3'>
                            <Card.Img src={data.image} varient='top' height="300px" className='object-fit-contain h-100' />
                        </Card>

                    </div>
                    <div className='col-12 col-md-4 col-lg-4 col-xl-2 p-2' >
                        <h3>{data.brand}</h3>
                        <h1>{data.name}</h1>
                        <Rating value={data.rating} text={`${data.numReviews} reviews`} />
                        <span>Price : {data.price}</span>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 col-xl-4 p-2' >
                        <Card className='p-3 fw-bold '>
                            <Card.Text>Price : {(data.price * qty).toFixed(2)}</Card.Text>
                            <Card.Text>Status : {data.countInStock > 0 ? "In Stock" : "Out of Stock"}</Card.Text>
                            <div className='d-flex align-items-center py-2'>
                                <span className='fw-bold mx-3'>Qty</span>

                                <div>
                                    <Form.Select aria-label="Default select example"
                                        onChange={(e) => setQty(e.target.value)}
                                    >
                                        {[...Array(data.countInStock).keys()].map(x => (

                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>


                                        ))}
                                    </Form.Select>
                                </div>


                            </div>
                            <button className='btn btn-dark my-2' onClick={addToCartHandler}>Add To Cart</button>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>

    )
}

export default ProductScreen
