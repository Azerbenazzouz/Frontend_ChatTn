import { LOGIN } from './authTypes'

const login = (Token,Email) =>{
    return {
        type: LOGIN,
        token: Token,
        email:Email
    }
}

export {login}