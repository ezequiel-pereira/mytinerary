import { GET_ITINERARIES,  LOADING } from '../actions/types'

const initialState = {
	itineraries: [],
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ITINERARIES:
			return {
				...state,
				itineraries: action.payload,
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