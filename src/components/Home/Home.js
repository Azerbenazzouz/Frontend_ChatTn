import React from 'react'
import './Home.css'
import NavHome from './components/NavHome';
import { useSelector } from 'react-redux'

function Home() {
    const userName = useSelector(state => state.username)
    return (
        <div className="HomePage">
            <NavHome userName={userName}/>
            {
            
                // TODO! chat list component initially works
                // TODO! if you start searching a person in the NavHome the chat list component will be removed and placed by search users component 
                // TODO: search users component
                // TODO: chat list component

            }
        </div>
        
    )
}

export default Home
