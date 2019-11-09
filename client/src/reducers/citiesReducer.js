import {GET_CITIES, ADD_CITIES} from '../actions/types'

const initialState = {
    cities: []
}

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_CITIES:
            
            break;

        case ADD_CITIES:
        
            break;
    
        default:
            return state
            break;
    }
}