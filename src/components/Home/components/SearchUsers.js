import React from 'react'
import './SearchUsers.css'
import { Link } from 'react-router-dom'

function SearchUsers({ListUsers,Search}) {
    const Data=[]
    
    ListUsers?.forEach(item=>{
        if(item.username.includes(Search) || item.email.includes(Search)){
            Data.push(item)
        }
    })
    
    return (
        <div className="SearchUsers">
            {
                Data.length===0 ? <h1 style={{color: 'white',width:"90vw",textAlign: 'center'}}>No Users with this Name or this Email</h1> : Data.map((res,key) => {
                    return (
                        
                            <div className="User" key={key}>
                            <Link to={{
                                pathname: '/Chat',
                                state: { GrpId: res._id }
                              }}>
                                <h2 style={{width:"90vw"}}>{res.username}</h2>
                                <h4 style={{width:"90vw"}}>{res.email}</h4>
                                </Link>
                            </div>
                        )
                })
        }
        </div>
    )
}

export default SearchUsers
