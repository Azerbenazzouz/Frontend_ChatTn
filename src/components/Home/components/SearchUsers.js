import React from 'react'
import './SearchUsers.css'
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
                        <div className="User" onClick={()=>console.log(res)} key={key}>
                            <h2>{res.username}</h2>
                            <h4>{res.email}</h4>
                        </div>)
                })
        }
        </div>
    )
}

export default SearchUsers
