import {GET_CITIES, GET_CITY_BY_NAME, LOADING} from '../actions/types'

export const getCities = () => dispatch => {	
	dispatch(setLoading())
	
	fetch("http://localhost:5000/city/all")
		.then(response => response.json())
		.then(result =>
			dispatch({
				type:GET_CITIES,
				payload: result
			})
		)
		.catch(e => console.log(e));
}

export const getCitiesByName = (req, res) => dispatch => {
	dispatch(setLoading())
	
	fetch("http://localhost:5000/city/:name")
		.then(response => response.json())
		.then(result =>
			dispatch({
				type:GET_CITY_BY_NAME,
				payload: result
			})
		)
		.catch(e => console.log(e));
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}