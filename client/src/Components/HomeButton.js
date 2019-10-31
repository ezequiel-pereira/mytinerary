import React, { Component } from 'react'
import homeIcon from '../img/homeIcon.png';
import {Link} from 'react-router-dom'

class HomeButton extends Component {

  render() {
		return(
			<div className="App-home">
				<Link to="/home">
					<img src={homeIcon} alt="home" />
				</Link>
			</div>
		)
  }
}

export default HomeButton