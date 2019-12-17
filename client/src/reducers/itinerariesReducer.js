import { GET_ITINERARIES_BY_CITY, LOADING } from '../actions/types'

const initialState = {
	city: {},
	itineraries: [],
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ITINERARIES_BY_CITY:
			return {
				...state,
				itineraries: action.payload,
				loading: true
			}

		case LOADING:
			return {
				...state,
				loading: true
			}

		default:
			return {
				...state
			}
	}
}