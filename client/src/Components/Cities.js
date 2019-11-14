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
		filteresCities: [],
		search: ''
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
		this.props.cities.filter(
			city => {
				return city.city.indexOf(
						this.state.search) !== -1
			}
		)
		
	}

	updateSearch(event) {
		this.setState({search: event.target.value})
	}

  	render() { 
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
				<CitiesList cities={this.state.filteredCities}></CitiesList>
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