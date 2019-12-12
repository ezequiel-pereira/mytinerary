import React, { Component } from 'react'
import '../styles/Start.css';
import start from '../img/start.png';
import {Link} from 'react-router-dom'

class Start extends Component {

  render() {
		return(
			<div className="start">
				{/* <p>Start Browsing</p> */}
				<p>Find your perfect trip, designed by insiders how know and love their cities.</p>
				<Link to="/cities">
					<img src={start} alt="start" />
				</Link>
			</div>
		)
  }
}

export default Start