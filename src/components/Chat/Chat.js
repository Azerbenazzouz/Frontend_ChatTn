import React from 'react'
import './Chat.css'

function Chat(props) {
    console.log(props.location.state.GrpId)
    return (
        <div className="Chat">
            <div className="ChatNavBar">
                {props.location.state.GrpId}
            </div>
        </div>
    )
}

export default Chat
