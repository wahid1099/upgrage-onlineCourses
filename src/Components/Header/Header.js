import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import logo from '../../images/logo.png';
import  {Link} from "react-router-dom";
import './Menu.css';
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/home'>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="160"
                                height="140"
                                className="d-inline-block align-top img-fluid"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto me-5">
                            <Link to="/home" className="items">Home</Link>
                            <Link to="/about" className="items">About</Link>
                            <Link to="/services" className="items">Services</Link>
                            <Link to="/blog" className="items">Blog</Link>
                            <Link to="/contactus" className="items">Contact Us</Link>


                        </Nav>
                        <Nav>
                            <Link to="/singup" className="items"><AiOutlineUserAdd/>Sing up</Link>
                            <Link to="/singIn" className="items"><FaUserGraduate/>Sing In</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;