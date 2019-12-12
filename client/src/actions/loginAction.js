import {LOGIN, LOADING} from '../actions/types'
import jwtDecode from 'jwt-decode'

export const login = (token) => dispatch => {	
    console.log('login action');
    
    console.log(token);
    let user = jwtDecode(token)
    console.log(user);
    
    dispatch({
        type:LOGIN,
        payload: user
    })
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}