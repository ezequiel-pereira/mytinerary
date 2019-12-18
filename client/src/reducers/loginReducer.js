import { LOGIN, LOGOUT, LOADING } from '../actions/types'

const initialState = {
	user: {
		'id': localStorage.getItem('id')||'',
		'username': localStorage.getItem('username')||'',
		'profilePic': localStorage.getItem('profilePic')||'',
	},
    loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem('id', action.payload.id)
			localStorage.setItem('username', action.payload.username)
			localStorage.setItem('profilePic', action.payload.profilePic)
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