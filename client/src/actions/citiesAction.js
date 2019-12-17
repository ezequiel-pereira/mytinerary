import axios from 'axios'
import {GET_CITIES, GET_CITY_BY_ID, LOADING} from '../actions/types'

var config = {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `bearer ${localStorage.getItem('token')}`
	}
}

export const getCities = () => dispatch => {	
	dispatch(setLoading())
	
	axios.get("http://localhost:5000/city/all", config)
		.then(data =>
			dispatch({
				type:GET_CITIES,
				payload: data.data
			})
		)
		.catch(e => console.log(e));
}

export const getCityById = (cityId) => dispatch => {
	dispatch(setLoading())
	
	axios.get("http://localhost:5000/city/" + cityId, config)
		.then(data =>
			dispatch({
				type:GET_CITY_BY_ID,
				payload: data.data
			})
		)
		.catch(e => console.log(e));
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}