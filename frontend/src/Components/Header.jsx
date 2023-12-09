import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCart, User, Grip } from 'lucide-react'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../assets/logo.png'
const Header = () => {

    const Categories = [{
        name: "Processors",
        route: "/processors"
    }, {
        name: "Motherboard",
        route: "/mb"
    }, {
        name: "Ram",
        route: "/rams"
    }, {
        name: "Graphics Cards",
        route: "/graphiccards"
    }, {
        name: "Storage",
        route: "/storage"
    }]

    // const { category } = useParams()


    return (
        <header>
            <Navbar expand="lg" bg='dark' varient='light' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='text-light' href="/">
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={logo} height={'45px'} alt="image" className='m-1' />
                                Gamer's Valhalla
                            </div>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown
                            title="CATEGORIES"
                            id="basic-nav-dropdown"
                        >
                            {Categories.map((item) => (<NavDropdown.Item href={item.route}>{item.name}</NavDropdown.Item>))}


                        </NavDropdown>

                        <Nav className="ms-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link className='text-light' >{<ShoppingCart size={20} />}  Cart</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>

                                <Nav.Link className='text-light' href="/login">{<User size={20} />} Sign In</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
