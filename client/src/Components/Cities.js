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
		loading: true,
		cities: null
	};
 
	/* async componentDidMount() {
		fetch("http://localhost:5000/city/all")
			.then(response => response.json())
			.then(result => {
				this.setState( {cities: result , isFetching: false} );
				//console.log(this.state.cities);
				//console.log(this.state.isFetching);
			})
			.catch(e => console.log(e));
	} */

	async componentDidMount() {
		this.props.getCities();
		//console.log(this.props.cities);
		
	}

  	render() { 
			return( this.state.loading ? <div>
																			"Cargando"
																			<HomeButton></HomeButton>
																			</div> :
																			<div>
																				<CitiesList cities={this.props.cities}></CitiesList>
																				<HomeButton></HomeButton>
																			</div>
			)
		}
	}

Cities.propTypes = {
	getCities: PropTypes.func.isRequired,
	city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	cities: state.city.cities
})

export default connect(mapStateToProps, {getCities})(Cities)