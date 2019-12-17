import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import authReducer from './authReducer'
import userReducer from 'react'
import loginReducer from './loginReducer'

export default combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    activities: authReducer,
    user: userReducer,
    login: loginReducer
})