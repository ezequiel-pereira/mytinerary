import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeButton from './HomeButton'

import {connect} from 'react-redux'
import {getItineraries} from '../actions/itinerariesAction'
import PropTypes from 'prop-types'
import Activity from './Activity'

class Itinerary extends Component {

	state = {
		loading: null,
		itineraries: null
	};

	async componentDidMount() {
		this.props.getItineraries();
	}

  	render() {
		
		return( this.state.loading ?
			<div className="App">
				"Cargando"
				<HomeButton></HomeButton>
			</div> :
			<div className="App">
				<h1>Ciudad</h1>
                <p>Availeable MYtineraries:</p>
				<Activity activities={this.props.itineraries}></Activity>
				<HomeButton></HomeButton>
			</div>
		)
	}
}

Itinerary.propTypes = {
	getItineraries: PropTypes.func.isRequired,
	//city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	itineraries: state.itineraries.itineraries
})

export default connect(mapStateToProps, {getItineraries})(Itinerary)