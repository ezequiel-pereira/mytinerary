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
		isFetching: true,
		cities: null
	};

	async componentDidMount() {
		fetch("http://localhost:5000/city/all")
			.then(response => response.json())
			.then(result => {
				this.setState( {cities: result , isFetching: false} );
				//console.log(this.state.cities);
				//console.log(this.state.isFetching);
			})
			.catch(e => console.log(e));
	}

  	render() {
		if(this.state.isFetching) 
			return( <div>
						"Cargando" 
						<HomeButton></HomeButton>
					</div>
			)

			return(
				<div>
					<CitiesList cities={this.state.cities}></CitiesList>
					<HomeButton></HomeButton>
				</div>
				// <div> {this.state.cities}</div>
				//<div> {this.state.cities.map(( ciudad, i) => {
				//	return(
				//		<div>
				//			<CitiesList cities={ciudad.cities} />
				//			{/* <h1> {ciudad.city}</h1> */}
				//			{/* <h1> {ciudad.country}</h1> */}
				//			</div>
				//	)})} </div>
			)
	}
		// return(
		// 	<div className="App">
		// 		<h1>Cities</h1>
		// 		{ 
		// 			(!this.isFetching) "cargando" : "asd"
		// 			}
		// 		{/* <h1>	{console.log(this.state.cities.map( asd => asd.city))}</h1> */}
		// 		{/* <CitiesList cities={this.state.cities} /> */}
		// 		<HomeButton></HomeButton>
		// 	</div>
		// )
	}
	
	
		// await this.fetchCities()
	

	//  fetchCities = async () => {
	// 	await fetch('http://localhost:5000/city/all')
	// 	.then(response => response.json())
	// 	.then(result => {
	// 		this.setState({cities: result});
	// 		console.log(this.state.cities);
	// 	})
	// 	.catch(e => console.log(e));
	// }
// }

Cities.propTypes = {
	getCities: PropTypes.func.isRequired,
	city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	cities: state.city
})

export default connect(mapStateToProps, {getCities})(Cities)