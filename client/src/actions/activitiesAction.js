import {GET_ACTIVITIES_BY_ITINERARY_ID, LOADING} from '../actions/types'

export const getActivitiesByItineraryId = (itineraryId) => dispatch => {
	dispatch(setLoading())

	fetch("http://localhost:5000/activity/" + itineraryId)
		.then(response => response.json())
		.then(result =>
			dispatch({
				type: GET_ACTIVITIES_BY_ITINERARY_ID,
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