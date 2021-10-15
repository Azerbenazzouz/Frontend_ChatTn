import React from 'react'
import './Home.css'
import NavHome from './components/NavHome';
import { useSelector } from 'react-redux'

function Home() {
    const userName = useSelector(state => state.username)
    console.log(userName)
    return (
        <div className="HomePage">
            <NavHome userName={userName} />    
        </div>
        
    )
}

export default Home
