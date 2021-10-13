import { createStore } from 'redux'
import authReducer from './auth/authReducer'
const store = createStore(authReducer)

export default store