import { GET_ACTIVITIES, LOADING } from '../actions/types'

const initialState = {
	cities: [],
	city: {},
	itineraries: [],
	activities:[],
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ACTIVITIES:
			return {
				...state,
				activities: action.payload,
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