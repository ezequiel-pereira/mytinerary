import { ADD_FAVOURITE } from '../actions/types'

const initialState = {
	favourites: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_FAVOURITE:
			return {
				...state,
				favourites: action.payload
			}

		default:
			return {
				...state
			}
	}
}