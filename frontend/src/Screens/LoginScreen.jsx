import React, { useState, useEffect } from 'react'
import { Link, redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'


const LoginScreen = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = () => {
        console.log('submot')
    }




    return (
        <FormContainer>
            <h1 className='text-center fw-bold'>Sign In</h1>
            <Form onSubmit={submitHandler} className='text-light d-flex flex-column row-gap-4'>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Sign In</Button>
            </Form>
            <Row className='py-3'>
                <Col>New Customer? <Link to='/signup'>Sign Up</Link></Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
