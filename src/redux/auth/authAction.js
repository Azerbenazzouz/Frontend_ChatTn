import { LOGIN } from './authTypes'

const login = (Token) =>{
    return {
        type: LOGIN,
        token: Token
    }
}

export {login}