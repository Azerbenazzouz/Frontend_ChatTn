import { LOGIN } from './authTypes'

const initialState = {
    refreshToken:""
}

const authReducer = ( state=initialState , action ) => {
    switch ( action.type ) {
        case LOGIN: return {
            ...state,
            refreshToken: action.token
        }
        default : return state
    }
}

export default authReducer