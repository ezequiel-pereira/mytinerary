import { GET_CITIES, GET_CITY_BY_NAME, LOADING } from '../actions/types'

const initialState = {
	cities: [],
	city: {},
	itineraries: [],
	activities:[],
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
		
		case GET_CITY_BY_NAME:
		return {
			...state,
			city: action.payload,
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