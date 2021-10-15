import { LOGIN } from './authTypes'
var axios = require('axios');

const initialState = {
    refreshToken:"",
    email:"",
    _id: "",
    username: "",
}

const userData=async(refreshToken,email)=>{
    var config = {
    method: 'get',
    url: process.env.REACT_APP_URL+'/user/getuser',
    headers: { 
        'x-api-key': process.env.REACT_APP_X_API_KEY, 
        'Authorization': 'Bearer '+refreshToken, 
        'Content-Type': 'application/json'
    },
    data : {"email": email}
    };
    
    await axios(config)
    .then(function (response) {
    console.log(response)
    return response.data
    })
      
}

const authReducer = ( state=initialState , action ) => {
    switch ( action.type ) {
        case LOGIN: {
            userData(action.token,action.email)
            return {
            ...state,
            refreshToken: action.token,
            email:action.email,
        }}
        default : return state
    }
}

export default authReducer