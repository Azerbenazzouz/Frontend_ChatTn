import React from 'react'
import './ChatList.css'
import {ButtonGroup,Button} from 'react-bootstrap';

function ChatList({Msg,setMsg}) {
    return (
        <div className="ChatList">
            <ButtonGroup size="lg">
                <Button variant="primary" active={Msg===true ?  true : false} onClick={()=>setMsg(true)} >Messages</Button>
                <Button variant="success" active={!Msg===true ?  true : false} onClick={()=>setMsg(false)} >Groups</Button>
            </ButtonGroup>
        </div>
    )
}

export default ChatList
