import axios from 'axios'
import {ADD_USER, LOADING} from '../actions/types'

export const addUser = (newUser) => dispatch => {
	dispatch(setLoading())
	console.log('add user action');
		
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	axios.post("http://localhost:5000/user/add", newUser, config)
		.then(res =>  
			dispatch({
				type: ADD_USER,
				payload: res.data
			})
		)
		.catch(err => { console.log(err) })
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}