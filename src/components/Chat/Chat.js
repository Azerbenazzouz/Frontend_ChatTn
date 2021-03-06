import React,{useState} from 'react'
import './Chat.css'
import ChatNavBar from './components/chatNavBar'

import { useSelector } from 'react-redux'
import Conversation from './components/conversation';
var axios = require('axios');

function Chat(props) {
    const refreshToken = useSelector(state => state.refreshToken)
    const email = useSelector(state => state.email)

    const [data,setData]=useState(Array)

    console.log(data)
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
            setData(response.data.filter(Data=>Data._id===props.location.state.GrpId))
        })
    }
    props.location.state.Type==="msg" ? msg() : grp() ;
    return (
        <div className="Chat">
            <ChatNavBar props={props.location.state.GrpId}/>
            {
                // TODO*: Create Nav Bar for chat component
                    // TODO:Make return to home component Button
                    // TODO:Name of ather user
                    // TODO:Settings of conversation
                // ! NAVBAR component created 🚀✅
                // TODO*: Create conversation component
                // TODO*: Create message input component
            }
            <Conversation GrpId={props.location.state.GrpId} Type={props.location.state.Type}/>
        </div>
    )
}

export default Chat
