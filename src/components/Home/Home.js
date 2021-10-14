import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="HomePage">
            <div className="Nav">
                <span className="MakeGroup">Make Group</span>
                <input type="text" placeholder="Search" className="Search"/>
                <span className="UserName">Azer Ben Azzouz</span>

            </div>
        </div>
    )
}

export default Home
