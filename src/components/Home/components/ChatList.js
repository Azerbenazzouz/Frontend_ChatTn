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
    const [DataP2P,setDataP2P]=useState([])
    const [user , setUser]=useState([])

    const GetGroups =async ( ) =>{
        var config = {
            method: 'get',
            url: process.env.REACT_APP_URL+'/messenger/group/GetAllGroups',
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
            setData(response.data)
        })
    }


    const GetP2P =async ( ) =>{
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
            setDataP2P(response.data)
        })
    }


    useEffect(()=>{
        GetGroups()
        GetP2P()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[Msg])

    // *Get User Data *
    const userData=async(Email)=>{
    
        var config = {
        method: 'get',
        url: process.env.REACT_APP_URL+'/user/getuser',
        headers: { 
            'x-api-key': process.env.REACT_APP_X_API_KEY, 
            'Authorization': 'Bearer '+refreshToken, 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        params :{ "email": Email }
        };
        
        await axios(config)
        .then(function (response) {
            setUser(response.data[0])
        })
          
    }

    
    return (
        <div className="ChatList">
            <ButtonGroup style={{width:"80vw"}} size="lg">
                <Button variant="primary" className="BtnSwitch" active={Msg===true ?  true : false} onClick={()=>setMsg(true)} >Messages</Button>
                <Button variant="success" className="BtnSwitch" active={!Msg===true ?  true : false} onClick={()=>setMsg(false)} >Groups</Button>
            </ButtonGroup>
            {
                
                Msg ? DataP2P.length===0 ? <h1 style={{color: 'white',width:"90vw",textAlign: 'center'}}>No {Msg ? "messages":"groups"}</h1>:DataP2P?.map((data)=>{

                    var DateN = new Date(data.lastTime)
                    var date = DateN.getDate()+"/"+DateN.getMonth()+"/"+DateN.getFullYear()+"  "
                    var time3 =new Date(Date.now()-DateN).getDay()+" j"
                    var time1 =new Date(Date.now()-DateN).getHours()+" h"
                    var time2 =new Date(Date.now()-DateN).getMinutes()+" min"
                    var timeT =""
                    

                    userData(data.users_Emails[0]!==email? data.users_Emails[0]:data.users_Emails[1])

                    if(new Date(Date.now()-DateN).getDay()<28){
                        timeT=time3
                    }else if(date !== (new Date(Date()).getDate()+"/"+ new Date(Date()).getMonth()+"/"+new Date(Date()).getFullYear()+"  ")){
                        timeT=date
                    }else if(new Date(Date.now()-DateN).getHours()>1){
                        timeT=time1
                    }else{
                        timeT=time2
                    }
                    return <MsgHome Img={data.img} Name={data.name==="" ? user.username : data.name} Date={timeT} Lmsg={data.lastMessage ? data.lastMessage : "New Group"} GrpId={data._id} key={data._id} />
                    
                }) : Data.length===0 ? <h1 style={{color: 'white',width:"90vw",textAlign: 'center'}}>No {Msg ? "messages":"groups"}</h1>:Data?.map((data)=>{

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

                    return <MsgHome Img={data.img} Name={data.name} Date={timeT} Lmsg={data.lastMessage ? data.lastMessage : "New Group"} GrpId={data._id} key={data._id} />
                    
                })
            }

        </div>
    )
}

export default ChatList
