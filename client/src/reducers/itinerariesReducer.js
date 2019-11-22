import { GET_ITINERARIES_BY_CITY, LOADING } from '../actions/types'

const initialState = {
	itineraries: [],
	activitys:[],
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ITINERARIES_BY_CITY:
			return {
				...state,
				activitys: action.payload,
				loading: true
			}
			break;

		case LOADING:
			return {
				...state,
				loading: true
			}

		default:
			return {
				...state
			}
			break;
	}
}