import axios from 'axios'
import {LOGIN, LOGOUT, LOADING} from '../actions/types'
var jwtDecode = require('jwt-decode');

export const googleLogin = () => dispatch => {
    let token = localStorage.getItem('token')
    let user = jwtDecode(token)
    localStorage.setItem('token', token)
    localStorage.setItem('id', user.id)
    localStorage.setItem('profilePic', user.profilePic)
    localStorage.setItem('auth', true)
    
    dispatch({
        type:LOGIN,
        payload: user
    })
}

export const login = (user) => dispatch => {

    console.log('login action user ' + user);

    axios.post("http://localhost:5000/user/login", user)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('token',`${token}`)
            localStorage.setItem('auth',true)
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
    localStorage.clear()
    console.log('clear localstorage');
    let user = null
    
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