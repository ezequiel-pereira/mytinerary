import React, { Component } from 'react'
import HomeButton from './HomeButton'
import Menu from './Menu'

import { Link } from 'react-router-dom'

import { Container, Form, Button, Row, Col} from 'react-bootstrap'

import {connect} from 'react-redux'
import { login } from '../actions/loginAction';
import PropTypes from 'prop-types'

class LoginForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			remember: false
		}
		
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInputChange(event) {
		const value = event.target.value
		console.log("handle value => " + value);
		const name = event.target.name
		console.log("name to satate => " + name);
		this.setState({[name]: value})
		console.log("state");
		console.log(this.state);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.login({"email": this.state.email, "password": this.state.password})
		
	}

	signGoogle() {
		window.location.href='http://localhost:5000/auth/google'
	}

  	render() {
		return(
			<div className="App">
				<Menu></Menu>
				<h1>Login</h1>
				<Container>
					<Form>
						<Form.Group as={Row}>
							<Form.Label column xs={3} sm={2} htmlFor="email" >Email</Form.Label>
							<Col xs={9} sm={10}>
								<Form.Control type="email" name="email" placeholder="Enter email"
								value={this.state.email}
								onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column  xs ={3}sm={2} htmlFor="password">Password</Form.Label>
							<Col xs={9} sm={10}>
								<Form.Control type="password" name ="password" placeholder="Password"
								value={this.state.password} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row} htmlFor="remember">
							<Col xs={3} sm={10} className="justify-content-center">
								<Form.Check astype="checkbox" name="remember"
									value={this.state.remember} onChange={this.handleInputChange} required />
							</Col>
							<Form.Label column xs={9} sm={2} className="text-left">Remember me</Form.Label>
						</Form.Group>
						<Button variant="primary" required className="mt-4 btn-block"
							onClick={this.handleSubmit}>
							OK
						</Button>
					</Form>
					<Button variant="primary" className="btn-block mt-4 btn-block"
						onClick={this.signGoogle.bind(this)}>
						Log in with Google
					</Button>
				</Container>
				<Link to="/register" className="">Create account</Link>
                <HomeButton></HomeButton>
			</div>
		)
  	}
}

LoginForm.propTypes = {
	login: PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state) => ({
	login: state.login.login
  })
  
  export default connect(mapStateToProps, {login})(LoginForm);