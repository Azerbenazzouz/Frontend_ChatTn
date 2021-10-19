import React,{useState,useEffect} from 'react'
import './ChatList.css'
import {ButtonGroup,Button} from 'react-bootstrap';
import MsgHome from './MsgHome';
import { useSelector } from 'react-redux'
var axios = require('axios');

function ChatList({Msg,setMsg}) {

    const email = useSelector(state => state.email)
    const refreshToken = useSelector(state => state.refreshToken)
    const [Data,setData]=useState([])

    const GetGroups =async ( ) =>{
        var config = {
            method: 'get',
            url: process.env.REACT_APP_URL+'/messenger/group/GetAllGroups',
            headers: { 
                'x-api-key': process.env.REACT_APP_X_API_KEY, 
                'Authorization': 'Bearer '+refreshToken, 
                'Content-Type': 'application/json'
            },
            data : {email: email}
        };
    
        await axios(config)
        .then(function (response) {
            setData(response.data)
        })
    }

    useEffect(()=>{
        GetGroups()
    })

    return (
        <div className="ChatList">
            <ButtonGroup style={{width:"80vw"}} size="lg">
                <Button variant="primary" className="BtnSwitch" active={Msg===true ?  true : false} onClick={()=>setMsg(true)} >Messages</Button>
                <Button variant="success" className="BtnSwitch" active={!Msg===true ?  true : false} onClick={()=>setMsg(false)} >Groups</Button>
            </ButtonGroup>
            {
                
                Data?.map((data)=>{

                    var DateN = new Date(data.lastTime)
                    var date = DateN.getDate()+"/"+DateN.getMonth()+"/"+DateN.getFullYear()+"  "
                    var time1 =new Date(Date.now()-DateN).getHours()+" h"
                    var time2 =new Date(Date.now()-DateN).getMinutes()+" min"
                    var timeT =""

                    if(date !== (new Date(Date()).getDate()+"/"+ new Date(Date()).getMonth()+"/"+new Date(Date()).getFullYear()+"  ")){
                        timeT=date
                    }else if(new Date(Date.now()-DateN).getHours()>1){
                        timeT=time1
                    }else{
                        timeT=time2
                    }

                    return <MsgHome Img={data.img} Name={data.name} Date={timeT} Lmsg={data.lastMessage ? data.lastMessage : "New Group"} GrpId={data._id} />
                    
                })
                
            }

        </div>
    )
}

export default ChatList
