import React, { Component } from 'react'
import '../App.css';
import HomeButton from './HomeButton'
import Menu from './Menu'

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
				<form className="form" onSubmit={this.handleSubmit}>
					<label for="userName">Username</label>
					<input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} required />
					<label for="password">Password</label>
      				<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
					<input type="submit" value="Submit" required />
				</form>
                <HomeButton></HomeButton>
			</div>
		)
  	}
}

export default LoginForm