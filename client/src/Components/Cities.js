import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeButton from './HomeButton'
import CitiesList from './CitiesList'

import {connect} from 'react-redux'
import {getCities} from '../actions/citiesAction'
import PropTypes from 'prop-types'

class Cities extends Component {

	state = {
		loading: null,
		cities: null,
		search: ''
	};

	async componentDidMount() {
		this.props.getCities();
	}

	updateSearch(event) {
		this.setState({search: event.target.value})
	}

  	render() {

		let filteredCities = this.props.cities.filter(
			(city) => {
				return city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
			}
		)
		
		return( this.state.loading ?
			<div className="App">
				"Cargando"
				<HomeButton></HomeButton>
			</div> :
			<div className="App">
				<form className="form">
					Buscar
					<input  type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}></input>
				</form>
				<CitiesList cities={filteredCities}></CitiesList>
				<HomeButton></HomeButton>
			</div>
		)
	}
}

Cities.propTypes = {
	getCities: PropTypes.func.isRequired,
	//city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	cities: state.city.cities
})

export default connect(mapStateToProps, {getCities})(Cities)