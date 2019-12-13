import React, { Component } from 'react'
import HomeButton from './HomeButton'
import Menu from './Menu'

import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class LoginForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: ''
		}
		
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(event) {
		const value = event.target.value
		console.log("handle value => " + value);
		const name = event.target.name
		console.log("name to satate => " + name);
		this.setState({
			[name]: value
		})
		console.log("state");
		console.log(this.state);
	}

	handleSubmit(event) {
		alert('state submit ' + this.state);
    	event.preventDefault();
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
							<Form.Label column xs={3} sm={2} htmlFor="username" >Username</Form.Label>
							<Col xs={9} sm={10}>
								<Form.Control type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column  xs ={3}sm={2} htmlFor="password">Password</Form.Label>
							<Col xs={9} sm={10}>
								<Form.Control type="password" name ="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row} htmlFor="remember">
							<Col xs={3} sm={10} className="justify-content-center">
								<Form.Check astype="checkbox" name="remember" value={this.state.remember} onChange={this.handleInputChange} required />
							</Col>
							<Form.Label column xs={9} sm={2} className="text-left">Remember me</Form.Label>
						</Form.Group>
						<Button variant="primary" type="submit" required className="mt-4 btn-block">
							OK
						</Button>
					</Form>
					<Button variant="primary" className="btn-block mt-4 btn-block" onClick={this.signGoogle.bind(this)}>
						Log in with Google
					</Button>
				</Container>
				<Link to="/register" className="">Create account</Link>
                <HomeButton></HomeButton>
			</div>
		)
  	}
}

export default LoginForm 