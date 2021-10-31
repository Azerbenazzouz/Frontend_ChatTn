import React from 'react'
import './chatNavBar.css'
import { XLg ,List} from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";


function ChatNavBar({props}) {
    const history = useHistory();

    return (
        <div className="ChatNavBar">
            <XLg className="Exit" onClick={() =>history.push('/')} size={32}/>
            <div className="ChatUserName">{props}</div>
            <List className="ChatEdit" onClick={() => history.push('/')}size={32}/>
        </div>
    )
}

export default ChatNavBar
