import { LOGIN, LOGOUT, LOADING } from '../actions/types'

const initialState = {
    user: {},
    loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: action.payload,
				loading: false
			}
		
		case LOGOUT:
			return {
				...state,
				user: action.payload,
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