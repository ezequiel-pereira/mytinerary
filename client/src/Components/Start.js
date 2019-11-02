import React, { Component } from 'react'
import '../App.css';
import start from '../img/start.png';
import {Link} from 'react-router-dom'

class Start extends Component {

  render() {
		return(
			<div className="App-start">
				{/* <p>Start Browsing</p> */}
				<Link to="/cities">
					<img src={start} alt="start" />
				</Link>
			</div>
		)
  }
}

export default Start