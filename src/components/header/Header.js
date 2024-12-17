import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Playground</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/game/menu">Game</Nav.Link>
                    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Nav>
                    {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                    <Nav.Link eventKey={2} href="/login">
                        Sign in
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    </>
  )
}

export default Header;