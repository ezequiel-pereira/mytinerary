import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeButton from './HomeButton'
//import start from '../img/start.png'

class Cities extends Component {

  render() {
		return(
			<div className="App">
				<h1>Cities</h1>
				<HomeButton></HomeButton>
			</div>
		)
  }
}

export default Cities