import { GET_CITIES, GET_CITY_BY_ID, LOADING } from '../actions/types'

const initialState = {
	city: {},
	cities: [],
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CITIES:
			return {
				...state,
				cities: action.payload,
				loading: false
			}
		
		case GET_CITY_BY_ID:
			return {
				...state,
				city: action.payload,
				loading: false
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