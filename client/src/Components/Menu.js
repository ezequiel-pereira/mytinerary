import React, { Component } from 'react'
import '../App.css';
import userIcon from '../img/userIcon.png';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import {connect} from 'react-redux'
import {logout} from '../actions/loginAction'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

class Menu extends Component {

  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.props.logout()
      return <Redirect to='/login' />
    }
  }

  /* logout() {
    this.props.logout()
  } */

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
            {this.renderRedirect()}
            <NavDropdown.Item onClick={this.setRedirect}>Logout</NavDropdown.Item>
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

Menu.propTypes = {
	logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	login: state.login.login
})

export default connect(mapStateToProps, {logout})(Menu)