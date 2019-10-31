import React, { Component } from 'react'
import '../App.css';
import Header from './Header'
import HomeButton from './HomeButton'

class Register extends Component {

  render() {
		return(
			<div className="App">
				<Header></Header>
				<h1>Register</h1>
				<form className="form">
					<label for="first_name">First Name</label>
					<input type="first_name" name="first_name" required></input>
					<label for="last_name">Last Name</label>
					<input type="last_name" name="last_name" required></input>
					<label for="email">Email</label>
					<input type="email" name="email" required></input>
					<label for="uname">Username</label>
					<input  type="text" name="uname" required></input>
					<label for="password">Password</label>
					<input type="password" name="password" required></input>
				</form>
				<HomeButton></HomeButton>
			</div>
		)
  }
}

export default Register