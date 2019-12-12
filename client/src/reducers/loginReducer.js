import { LOGIN, LOADING } from '../actions/types'

const initialState = {
    login: {},
    loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				login: action.payload,
				loading: false
			}
		
		/* case GET_LOGIN:
			return {
				...state,
				user: action.payload,
				loading: false
			} */

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