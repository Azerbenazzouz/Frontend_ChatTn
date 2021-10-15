import React from 'react'
import './NavHome.css'
import { Plus ,Person} from 'react-bootstrap-icons';

function NavHome() {
    return (
        <div>
            <div className="NavHome">
                <Plus className="IconNav" size={32}/>
                <span className="MakeGroup">Make Group</span>
                <input type="text" placeholder="Search" className="Search"/>
                <span className="UserName">Azer Ben Azzouz</span>
                <Person className="IconNav" size={32}/>
            </div>
        </div>
    )
}

export default NavHome
