import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'
const Home = () => {

    // ______ GET Api Call for fetching data _______ //

    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)

    const CallApi = async () => {
        //     var requestOptions = {
        //         method: 'GET',
        //         redirect: 'follow'
        //     };

        //     fetch("/api/rams", requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             setData(result.data.rams)
        //             setStatus(true)

        //         })
        //         .catch(error => console.log('error', error));


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/api/graphiccards',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log((response.data.data));
                setData(response.data.data.graphiccards)
                setStatus(true)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        CallApi()
    }, [])


    return (
        <>
            <h1>
                Prducts
            </h1>
            <Row>
                {status ? data.map((item, key) => (
                    <Col key={key} sm={12} md={6} lg={4} xl={4}>
                        <Product products={item} />
                    </Col>
                )) : "Loading"}
            </Row>
        </>
    )
}

export default Home
