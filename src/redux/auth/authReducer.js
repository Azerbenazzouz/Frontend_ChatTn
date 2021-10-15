import { LOGIN } from './authTypes'


const initialState = {
    refreshToken:"",
    email:"",
    _id: "",
    username: "",
}


const authReducer = ( state=initialState , action ) => {
    switch ( action.type ) {
        case LOGIN:
            return {
                ...state,
                refreshToken: action.token,
                email:action.email,
                _id:action._id,
                username:action.username
            }
        default : return state
    }
}

export default authReducer