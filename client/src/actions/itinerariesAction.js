import axios from 'axios'
import {GET_ITINERARIES_BY_CITY, LOADING} from '../actions/types'

var config = {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `bearer ${localStorage.getItem('token')}`
	}
}

export const getItinerariesByCity = (cityId) => dispatch => {
	dispatch(setLoading())

	axios.get("http://localhost:5000/itinerary/" + cityId, config)
		.then(data =>
			dispatch({
				type: GET_ITINERARIES_BY_CITY,
				payload: data.data
			})
		)
		.catch(e => console.log(e))
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}