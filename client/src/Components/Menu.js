import React, { Component } from 'react'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import userIcon from '../img/userIcon.png';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class Menu extends Component {

  logout() {
    this.props.logout()
  }

  render() {
    if (this.props.user === null) {
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
    } else {
      return(
        <Navbar bg="light" expand="lg">
          <NavDropdown title={<img src={userIcon} width="30px" height="30px" alt="user_image" />} id="basic-nav-dropdown">
            <p>{this.props.user}</p>
            <LinkContainer to="/register"><NavDropdown.Item href="#action/3.1">Create account</NavDropdown.Item></LinkContainer>
            <NavDropdown.Item href="#action/3.2" onClick={this.logout.bind(this)}>Logout</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/home"><Nav.Link href="#home">Home</Nav.Link></LinkContainer>
              <LinkContainer to="/cities"><Nav.Link href="#home">Cities</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}

export default Menu