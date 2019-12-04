import axios from 'axios'
import {ADD_USER, LOADING} from '../actions/types'

export const addUser = ({ username, email, password, profilePic }) => dispatch => {
	dispatch(setLoading())

	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify({ username, email, password, profilePic })

	axios.post("http://localhost:5000/user/add", config, body)
		.then(res =>  
			dispatch({
				type: ADD_USER,
				payload: res.data
			})
		.catch(err => {
			console.log(err);
		})
		)

	/* fetch("http://localhost:5000/user/add")
		.then(response => response.json())
		.then(result =>
			dispatch({
				type:ADD_USER,
				payload: result
			})
		)
		.catch(e => console.log(e)); */
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}