import React, { Component } from 'react'
import '../App.css';
import HomeButton from './HomeButton'
import Menu from './Menu'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
				<Container>
					<h1>Crate account</h1>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group as={Row}>
							<Form.Label column xs={4} htmlFor="profilePic">Add photo</Form.Label>
							<Col xs={8}>
								<Form.Control type="text" name="profilePic" placeholder="Enter image url" value={this.state.profilePic} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column xs={4} htmlFor="username" >Username</Form.Label>
							<Col xs={8}>
								<Form.Control type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column xs={4} htmlFor="password">Password</Form.Label>
							<Col xs={8}>
								<Form.Control type="password" name ="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column xs={4} htmlFor="email">Email address</Form.Label>
							<Col xs={8}>
								<Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column xs={4} htmlFor="country" >Select country</Form.Label>
							<Col xs={8}>
								<Form.Control as="select" name="country" value={this.state.country} onChange={this.handleInputChange} required>
									<option>England</option>
									<option>France</option>
									<option>Germany</option>
									<option>Holland</option>
									<option>Ireland</option>
									<option>Spain</option>
									<option>United States</option>
								</Form.Control>
							</Col>
  						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column xs={4} htmlFor="firstName">First Name</Form.Label>
							<Col xs={8}>
								<Form.Control type="text" name ="firstName" placeholder="Enter name" value={this.state.firstName} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column xs={4} htmlFor="lastName">Last Name</Form.Label>
							<Col xs={8}>
								<Form.Control type="text" name="lastName" placeholder="Enter last name" value={this.state.lastName} onChange={this.handleInputChange} required />
							</Col>
						</Form.Group>
							<Form.Group as={Row} htmlFor="terms">
								<Col xs={2}>
									<Form.Check astype="checkbox" name="terms" value={this.state.tos} onChange={this.handleInputChange} required />
								</Col>
							<Form.Label column xs={10}>I agree to MYtinerarie´s Terms & Conditions</Form.Label>
						</Form.Group>
						<Button variant="primary" type="submit" required className="mt-4 btn-block">
							OK
						</Button>
					</Form>
				</Container>
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