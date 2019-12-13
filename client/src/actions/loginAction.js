import {LOGIN, LOGOUT, LOADING} from '../actions/types'
var jwtDecode = require('jwt-decode');

export const login = () => dispatch => {	
    console.log('login action');
    /* console.log(token); */
    let token = localStorage.getItem('token')
    let user = jwtDecode(token)
    console.log(user);
    
    dispatch({
        type:LOGIN,
        payload: user
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem('token')
    console.log('token borrado localstorage');
    let user = {}
    
    dispatch({
        type: LOGOUT,
        payload: user
    })
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}