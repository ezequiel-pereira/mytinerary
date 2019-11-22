import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeButton from './HomeButton'

import {connect} from 'react-redux'
import {getItinerariesByCity} from '../actions/itinerariesAction'
import PropTypes from 'prop-types'
import Activity from './Activity'

class Itinerary extends Component {

	state = {
		loading: false,
		activities: []
	};

	async componentDidMount() {
		let city = this.props.match.params.name
		this.props.getItinerariesByCity(city)
	}

  	render() {
		
			return( this.state.loading ?
				<div className="App">
					"Cargando"
					<HomeButton></HomeButton>
				</div> :
				<div className="App">
					<h1>City</h1>
					<p>Availeable MYtineraries:</p> 
					<Activity activities={this.props.activities}></Activity>
					<HomeButton></HomeButton>
				</div>
		)
	}
}

Itinerary.propTypes = {
	getItinerariesByCity: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	itineraries: state.itineraries.itineraries,
	activities:state.itineraries.activitys
})

export default connect(mapStateToProps, {getItinerariesByCity})(Itinerary)
