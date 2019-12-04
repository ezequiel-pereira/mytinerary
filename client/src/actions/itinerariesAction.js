import {GET_ITINERARIES_BY_CITY, LOADING} from '../actions/types'

export const getItinerariesByCity = (city) => dispatch => {
	dispatch(setLoading())

	fetch("http://localhost:5000/itinerary/" + city)
		.then(response => response.json())
		.then(result =>
			dispatch({
				type: GET_ITINERARIES_BY_CITY,
				payload:result
			})
		)
		.catch(e => console.log(e))
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}