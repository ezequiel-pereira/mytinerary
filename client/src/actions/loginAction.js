import axios from 'axios'
import {LOGIN, GOOGLE_LOGIN, LOGOUT, LOADING} from '../actions/types'
var jwtDecode = require('jwt-decode');

export const googleLogin = () => dispatch => {	
    console.log('login action');
    /* console.log(token); */
    let token = localStorage.getItem('token')
    let user = jwtDecode(token)
    console.log(user);
    
    dispatch({
        type:GOOGLE_LOGIN,
        payload: user
    })
}

export const login = (user) => dispatch => {

    console.log('login action user ' + user);

    axios.post("http://localhost:5000/user/login", user)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('token',`${token}`)
            let decodedUser = jwtDecode(token)
            console.log(decodedUser);
            
                dispatch({
                    type: LOGIN,
                    payload: decodedUser
                })
            }
        )
		.catch(err => { console.log(err) })
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