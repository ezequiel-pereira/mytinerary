import React, { Component } from 'react'
import '../styles/HomeButton.css'
import homeIcon from '../img/homeIcon.png';
import {Link} from 'react-router-dom'

class HomeButton extends Component {

  render() {
		return(
			<div className="Home-button">
				<Link to="/">
					<img src={homeIcon} alt="home" />
				</Link>
			</div>
		)
  }
}

export default HomeButton