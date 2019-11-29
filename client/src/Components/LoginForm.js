import React, { Component } from 'react'
import '../App.css';
import HomeButton from './HomeButton'
import Menu from './Menu'

class LoginForm extends Component {

  render() {
		return(
			<div className="App">
				<Menu></Menu>
				<h1>Login</h1>
				<form className="form">
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

export default LoginForm