import React, { Component } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import userIcon from '../img/userIcon.png';

import {Link} from 'react-router-dom'

class Menu extends Component {

  render() {
		return(
			<Navbar bg="light" expand="lg">
        <NavDropdown title={<img src={userIcon} width="30px" height="30px" alt=""user_image/>} id="basic-nav-dropdown">
              <Link to="/register"><NavDropdown.Item href="#action/3.1">Create account</NavDropdown.Item></Link>
              <Link to="/login"><NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item></Link>
        </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to="/login">Link</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
		)
  }
}

export default Menu