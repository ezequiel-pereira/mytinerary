import React, { Component } from 'react'
import '../App.css';
import Header from './Header'
import HomeButton from './HomeButton'


class LoginForm extends Component {

  render() {
		return(
			<div className="App">
				<Header></Header>
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