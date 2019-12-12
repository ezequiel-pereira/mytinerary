import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import userIcon from '../img/userIcon.png';

import {LinkContainer} from 'react-router-bootstrap'

class Menu extends Component {

  render() {
		return(
			<Navbar bg="light" expand="lg">
        <NavDropdown title={<img src={userIcon} width="30px" height="30px" alt="user_image" />} id="basic-nav-dropdown">
              <LinkContainer to="/register"><NavDropdown.Item href="#action/3.1">Create account</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/login"><NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item></LinkContainer>
        </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home"><Nav.Link href="#home">Home</Nav.Link></LinkContainer>
            <LinkContainer to="/cities"><Nav.Link href="#home">Cities</Nav.Link></LinkContainer>
            <LinkContainer to="/login"><Nav.Link href="#home">Login</Nav.Link></LinkContainer>
            <LinkContainer to="/register"><Nav.Link href="#home">Create account</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
		)
  }
}

export default Menu