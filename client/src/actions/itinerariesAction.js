import {GET_ITINERARIES, LOADING} from '../actions/types'


export const getItineraries = () => dispatch => {
	dispatch(setLoading())

	fetch("http://localhost:5000/itinerary/all")
		.then(response => response.json())
		.then(result =>
			dispatch({
				type: GET_ITINERARIES,
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