import { LOGIN } from './authTypes'


const initialState = {
    refreshToken:localStorage.getItem('refreshToken')||"",
    email:localStorage.getItem('email')||"",
    _id: localStorage.getItem('_id')||"",
    username: localStorage.getItem('username')||"",
}


const authReducer = ( state=initialState , action ) => {
    switch ( action.type ) {
        case LOGIN:
            localStorage.setItem("refreshToken", action.token);  
            localStorage.setItem("email", action.email);  
            localStorage.setItem("_id", action._id);  
            localStorage.setItem("username", action.username);  
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