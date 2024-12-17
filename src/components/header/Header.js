import React, { useEffect, useState } from 'react';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, [setLoggedInUser]);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('Log out succesfull');
        setLoggedInUser('');
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Playground</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/game/menu">Game</Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            {loggedInUser === null ?  
                                <Nav.Link eventKey={2} href="/login">
                                    Sign in
                                </Nav.Link>
                            : 
                                <NavDropdown title={'Logged in as: ' + loggedInUser} id="basic-nav-dropdown">
                                    <Nav.Link eventKey={2} onClick={logout}>
                                        Sign Out
                                    </Nav.Link>
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <ToastContainer />

        </>
    )
}

export default Header;