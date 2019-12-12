import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import activitiesReducer from './activitiesReducer'
import userReducer from 'react'
import loginReducer from './loginReducer'

export default combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    activities: activitiesReducer,
    user: userReducer,
    login: loginReducer
})