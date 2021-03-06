import axios from 'axios'
import {ADD_FAVOURITE, GET_FAVOURITES} from '../actions/types'
/* 
var config = {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `bearer ${localStorage.getItem('token')}`
	}
} */

export const addFavourite = (itineraryId, userId) => dispatch => {
    
	let data ={
        itineraryId,
        userId
    }
	axios.post("http://localhost:5000/favourite/add", data /* , config */)
		.then(data =>
			dispatch({
				type:ADD_FAVOURITE,
				payload: data.data
			})
		)
		.catch(e => console.log(e));
}

export const getFavourites = (userId) => dispatch => {
	
	axios.get("http://localhost:5000/favourites", userId /* , config */)
		.then(data =>
			dispatch({
				type:GET_FAVOURITES,
				payload: data.data
			})
		)
		.catch(e => console.log(e));
}