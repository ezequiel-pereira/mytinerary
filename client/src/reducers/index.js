import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import userReducer from 'react'
import loginReducer from './loginReducer'
import favouritesReducer from './favouritesReducer'

export default combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    user: userReducer,
    login: loginReducer,
    favourites: favouritesReducer
})