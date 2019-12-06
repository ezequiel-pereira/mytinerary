import React, { Component } from 'react'
import '../App.css';
import HomeButton from './HomeButton'
import Menu from './Menu'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

  	render() {
		return(
			<div className="App">
				<Menu></Menu>
				<h1>Login</h1>
				<Container>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
							We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Container>
				{/* <form className="form" onSubmit={this.handleSubmit}>
					<label htmlFor="userName">Username</label>
					<input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} required />
					<label htmlFor="password">Password</label>
      				<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
					<input type="submit" value="Submit" required />
				</form> */}
                <HomeButton></HomeButton>
			</div>
		)
  	}
}

export default LoginForm