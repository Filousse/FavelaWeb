import React from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'

const Navigation = () => {
    return (
    <Navbar bg="white" fixed='top' expand={false}>
    <Container fluid>
        <NavLink exact to = "/">
            <img src="./img/logo.png" className="logo" alt="logo" />
        </NavLink>
        <Navbar.Toggle id="navbar-toggler" aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        >
            <Offcanvas.Header closeButton>
           
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink exact to = "/" className="navLink" >
                        Acceuil
                    </NavLink>
                    <NavLink to = "/service" className="navLink" >
                        Services
                    </NavLink>
                    <NavLink exact to = "/price"  className="navLink" >
                        Prix
                    </NavLink>
                    <NavLink exact to = "/favela-web-school" className="navLink" >
                        Favela Web School
                    </NavLink>
                    <NavLink exact to = "/quote"  className="navLink" >
                        Devis
                    </NavLink>
                    <NavLink exact to = "/contact"  className="navLink" >
                        Contact
                    </NavLink>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
    </Navbar>
        
    );
};

export default Navigation;