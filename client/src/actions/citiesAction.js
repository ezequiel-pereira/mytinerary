import {GET_CITIES, GET_CITY_BY_ID, LOADING} from '../actions/types'

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

export const getCityById = (cityId) => dispatch => {
	dispatch(setLoading())
	
	fetch("http://localhost:5000/city/" + cityId)
		.then(response => response.json())
		.then(result =>
			dispatch({
				type:GET_CITY_BY_ID,
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