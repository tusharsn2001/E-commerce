
import { Col, Row } from 'react-bootstrap'
import Product from '../Components/Product'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'


const CategoryScreen = () => {
    const { category } = useParams()
    console.log(category)
    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)

    const CallApi = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3001/api/${category}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log((response.data.data));
                setData(response.data.data)
                setStatus(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        CallApi()
        console.log(data)
    }, [])



    return (
        <>
            <h1 className='text-center text-light'>
                Products
            </h1>
            <Row>
                {status ? data[category].map((item) => (
                    <Col key={item._id} sm={12} md={6} lg={4} xl={4}>
                        <Product products={item} />

                    </Col>
                )) : "Loading"}


            </Row>
        </>
    )
}

export default CategoryScreen
