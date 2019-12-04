import { GET_ACTIVITIES_BY_ITINERARY_ID, LOADING } from '../actions/types'

const initialState = {
	activities:[],
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ACTIVITIES_BY_ITINERARY_ID:
			return {
				...state,
				activities: action.payload,
				loading: true
			}
			/* break; */

		case LOADING:
			return {
				...state,
				loading: true
			}

		default:
			return {
				...state
			}
			/* break; */
	}
}