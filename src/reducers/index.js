import { combineReducers } from 'redux'
import shelterReducer from './shelterReducer'
import petsReducer from './petsReducer'

const rootReducer = combineReducers({
    shelterReducer,
    petsReducer
})

export default rootReducer