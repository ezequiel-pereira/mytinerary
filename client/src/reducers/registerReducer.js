import { ADD_USER } from '../actions/types'

const initialState = {
    user: null,
    loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				user: action.payload,
				loading: false
			}
		
		case GET_USER:
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