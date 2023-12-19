import { Col, Row } from 'react-bootstrap';
import Product from '../Components/Product';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productListRequest, productListSuccess, productListFail } from '../redux/productSlice';
import Loader from '../Components/Loader';
import axios from 'axios';

const CategoryScreen = () => {
    const { category } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productListRequest());

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://localhost:3001/api/${category}`,
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response.data.data);
                dispatch(productListSuccess(response.data.data[category])); // Assuming the data is nested under the category
            })
            .catch((error) => {
                console.log(error);
                dispatch(productListFail(error.message));
            });
    }, [dispatch, category]);

    const { loading, products, error } = useSelector((state) => state.productList);

    return (
        <>
            <h1 className='text-center text-light'>Products</h1>
            <Row>
                {loading ? (
                    <Loader />
                ) : error ? (
                    `Error: ${error}`
                ) : (
                    products.map((item) => (
                        <Col key={item._id} sm={12} md={6} lg={4} xl={4}>
                            <Product products={item} />
                        </Col>
                    ))
                )}
            </Row>
        </>
    );
};

export default CategoryScreen;


// import { Col, Row } from 'react-bootstrap'
// import Product from '../Components/Product'
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react'
// import axios from 'axios'


// const CategoryScreen = () => {
//     const { category } = useParams()
//     console.log(category)
//     const [data, setData] = useState([])
//     const [status, setStatus] = useState(false)

//     const CallApi = () => {
//         let config = {
//             method: 'get',
//             maxBodyLength: Infinity,
//             url: `http://localhost:3001/api/${category}`,
//             headers: {}
//         };

//         axios.request(config)
//             .then((response) => {
//                 console.log((response.data.data));
//                 setData(response.data.data)
//                 setStatus(true)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     useEffect(() => {
//         CallApi()
//         console.log(data)
//     }, [])



//     return (
//         <>
//             <h1 className='text-center text-light'>
//                 Products
//             </h1>
//             <Row>
//                 {status ? data[category].map((item) => (
//                     <Col key={item._id} sm={12} md={6} lg={4} xl={4}>
//                         <Product products={item} />

//                     </Col>
//                 )) : "Loading"}


//             </Row>
//         </>
//     )
// }

// export default CategoryScreen

