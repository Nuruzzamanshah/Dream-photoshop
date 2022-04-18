import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
      <>
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
        <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={35} src={logo} alt=''/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="home#services">Services</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dream PhotoShoot" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#our services/3.1">Our Services</NavDropdown.Item>
                      <NavDropdown.Item href="#expert team">Expert Team</NavDropdown.Item>
                      <NavDropdown.Item href="#latest news">Latest News</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#services">Services</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link as={Link} to="about">About</Nav.Link>
                    {
                      user ?
                      <button onClick={handleSignOut}>Sign Out </button>
                      :
                      <Nav.Link as={Link} to="login">
                      Login
                    </Nav.Link>}
                  </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
      </>
    );
};

export default Header;