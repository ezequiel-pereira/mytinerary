import { GET_CITIES,  LOADING } from '../actions/types'

const initialState = {
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