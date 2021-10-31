import React from 'react'
import './Chat.css'
import ChatNavBar from './components/chatNavBar'

function Chat(props) {
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

        </div>
    )
}

export default Chat
