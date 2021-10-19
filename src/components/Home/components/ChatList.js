import React from 'react'
import './ChatList.css'
import {ButtonGroup,Button} from 'react-bootstrap';
import MsgHome from './MsgHome';

function ChatList({Msg,setMsg}) {
    return (
        <div className="ChatList">
            <ButtonGroup style={{width:"80vw"}} size="lg">
                <Button variant="primary" className="BtnSwitch" active={Msg===true ?  true : false} onClick={()=>setMsg(true)} >Messages</Button>
                <Button variant="success" className="BtnSwitch" active={!Msg===true ?  true : false} onClick={()=>setMsg(false)} >Groups</Button>
            </ButtonGroup>
            <MsgHome Img="https://scontent.ftun17-1.fna.fbcdn.net/v/t1.6435-9/244401030_946931359223575_2883914121101154460_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=zn4lS5DXATEAX9F6gGD&tn=6xk5ikyiD-NlNQ8e&_nc_ht=scontent.ftun17-1.fna&oh=4909bc3a860e42ad31a0cf72efba88c8&oe=6192C7AB" Name="AZER BEN AZZOUZ" Date="3h" Lmsg="I'm the Best"/>
            <MsgHome Img="https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ftel.2F2020.2F03.2F12.2F3a4808a6-d94e-43f2-9104-5a791d92e642.2Ejpeg/630x630/quality/80/formule-1-lewis-hamilton-choque-par-le-maintien-du-grand-prix-d-australie-video.jpg" Name="Lewis Hamilton" Date="5h" Lmsg="The way I drive, the way I handle a car, is an expression of my inner feelings." />
            <MsgHome/>
            <MsgHome/>
            <MsgHome/>
            <MsgHome/>
            <MsgHome/>
            <MsgHome/>
            <MsgHome/>

        </div>
    )
}

export default ChatList
