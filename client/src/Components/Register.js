import React, { Component } from 'react'
import '../App.css';
import HomeButton from './HomeButton'
import Menu from './Menu'

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

	async handleSubmit() {

		/* const { username, email, password, profilePic } = this.state */

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
				<h1>Register</h1>
				<form className="form" onSubmit={this.handleSubmit}>
					<label htmlFor="userName">Username</label>
					<input type="text" name="username" value={this.state.userName} onChange={this.handleInputChange} required />
					<label htmlFor="userName">Email</label>
					<input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
					<label htmlFor="password">Password</label>
      				<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
					<label htmlFor="profilePic">Profile picture</label>
      				<input type="profilePic" name="profilePic" value={this.state.profilePic} onChange={this.handleInputChange} required />
					<input type="submit" value="Submit" required></input>
				</form>
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