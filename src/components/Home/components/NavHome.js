import React,{useState,useEffect} from 'react'
import './NavHome.css'
import { Plus ,Person} from 'react-bootstrap-icons';
import axios from 'axios';  
import { useSelector } from 'react-redux'

function NavHome({userName}) {
    
    const refreshToken = useSelector(state => state.refreshToken)
    const [username, setUseName] =useState("") 
    const [namesL,setNamesL]=useState([])
    useEffect(()=> {
        getUsers()
        //eslint-disable-next-line
      },[username])
      

    // * Get Users Name from Data Base*
    const getUsers=()=>{

        var data = JSON.stringify({
            "username": username
        });
    
        var config = {
            method: 'get',
            url: process.env.REACT_APP_URL+'/user/getall',
            headers: { 
                'x-api-key': process.env.REACT_APP_X_API_KEY, 
                'Authorization': 'Bearer '+refreshToken, 
                'Content-Type': 'application/json'
            },
            data : data
        };
    
        axios(config)
        .then(function (response) {
            setNamesL(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    
    return (
        <div>
            <div className="NavHome">
                <Plus className="IconNav" size={32}/>
                <span className="MakeGroup">Make Group</span>
                <input type="text" list="jobroles" onChange={(e)=>setUseName(e.target.value)} placeholder="Search" className="Search"/>
                <datalist id="jobroles">
                
                    {
                        namesL.map((res,key)=>{
                            return <option disabled={username==="" ? true :false } key={key} value={res.username}/>
                        })
                    }

                </datalist>
                <span className="UserName">{userName}</span>
                <Person className="IconNav" size={32}/>
            </div>
        </div>
    )
}

export default NavHome
