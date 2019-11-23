import {GET_ACTIVITIES, LOADING} from '../actions/types'

export const getActivities = (activity) => dispatch => {
	dispatch(setLoading())

	fetch("http://localhost:5000/itinerary/" + city)
		.then(response => response.json())
		.then(result =>
			dispatch({
				type: GET_ACTIVITIES,
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