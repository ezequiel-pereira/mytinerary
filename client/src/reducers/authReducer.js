import { AUTH, LOADING } from '../actions/types'

const initialState = {
	auth: false,
	loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case AUTH:
			return {
				...state,
				auth: false,
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