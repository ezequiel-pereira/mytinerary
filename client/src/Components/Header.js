import React, { Component } from 'react'
import '../App.css';
import logo from '../img/MYtineraryLogo.png';

class Header extends Component {

  render() {
		return(
			<header className="App-header">
				<img src={logo} alt="logo" />
			</header>
		)
  }
}

export default Header