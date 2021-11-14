import React,{useState} from 'react'
import "./Conversation.css"
import { useSelector } from 'react-redux'
var axios = require('axios');

function Conversation(props) {
    const refreshToken = useSelector(state => state.refreshToken)
    const email = useSelector(state => state.email)
    const [data,setData]=useState(Array)

    const grp = () =>{
        console.log("grp")
    }

    const msg =async ( ) =>{
        var config = {
            method: 'get',
            url: process.env.REACT_APP_URL+'/messenger/p2p/GetAllP2P',
            headers: { 
                'x-api-key': process.env.REACT_APP_X_API_KEY, 
                'Authorization': 'Bearer '+refreshToken, 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            data : {email: email}
        };
    
        await axios(config)
        .then(function (response) {
            setData(response.data.filter(Data=>Data._id===props.GrpId))
            
        })
    }

    props.Type==="msg" ? msg() : grp()

    return (
        <div>
            {
                data[0]?.conversation.map((Data)=>{
                    return <h1>{Data.message}</h1> 
                })
            }
        </div>
    )
}

export default Conversation
