import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {

  render() {
		return(
			<div className="App-login">
				<p>Want to build your own MYtinerary?</p>
				<Link to="/login">Login in</Link>
				<Link to="/register">Create account</Link>		
			</div>
		)
  }
}

export default Login