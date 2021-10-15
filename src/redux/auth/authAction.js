import { LOGIN } from './authTypes'

const login = (Token,Email,_id,username) =>{
    return {
        type: LOGIN,
        token: Token,
        email:Email,
        _id:_id,
        username:username
    }
}

export {login}