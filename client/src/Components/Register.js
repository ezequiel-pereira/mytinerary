import React, { Component } from 'react'
import '../App.css';
import HomeButton from './HomeButton'
import Menu from './Menu'

/* import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' */

import {connect} from 'react-redux'
import {addUser} from '../actions/userAction'
import PropTypes from 'prop-types'

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			email: '',
			password: '',
			profilePic:''
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
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

	async handleSubmit(event) {
		event.preventDefault()

		const newUser = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			profilePic: this.state.profilePic
		}

		this.props.addUser(newUser)
	}

  	render() {
		return(
			<div className="App">
				<Menu></Menu>
				{/* <Container> */}
					<h1>Crate account</h1>

				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required />

					<label htmlFor="email">Email</label>
					<input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />

					<label htmlFor="password">Password</label>
					<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />

					<label htmlFor="profilePic">Profile picture</label>
					<input type="profilePic" name="profilePic" value={this.state.profilePic} onChange={this.handleInputChange} required />

					{/* <label htmlFor="firstName">First Name</label>
					<input type="text" name="first_name" value={this.state.userName} onChange={this.handleInputChange} required />
					
					<label htmlFor="lastName">Last Name</label>
					<input type="text" name="last_name" value={this.state.userName} onChange={this.handleInputChange} required /> */}

					<input type="submit" value="Submit" required></input>

					
				</form>
					{/* <Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="formBasicUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" placeholder="Enter username" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlSelect2">
							<Form.Label>Select country</Form.Label>
							<Form.Control as="select">
								<option>England</option>
								<option>France</option>
								<option>Germany</option>
								<option>Holland</option>
								<option>Ireland</option>
								<option>Spain</option>
								<option>United States</option>
							</Form.Control>
  						</Form.Group>
						<Form.Group controlId="formBasicName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Enter name" />
						</Form.Group>
						<Form.Group controlId="formBasicLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Enter last name" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="I agree to MYtinerarie´s" />
						</Form.Group>
						<Button variant="primary" type="submit">
							OK
						</Button>
					</Form>
				</Container> */}
				<HomeButton></HomeButton>
			</div>
		)
  	}
}

Register.propTypes = {
	addUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps, {addUser})(Register)