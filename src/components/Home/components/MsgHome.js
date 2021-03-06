import React,{useState} from 'react'
import { PersonFill} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

import './MsgHome.css'
function MsgHome({Img,Name,Date,Lmsg="",GrpId,Type}) {
    const lastSmg =Lmsg.slice(0, 21) + (Lmsg.length >=21 ? "..." : "")
    const [ImgV,setImgV]= useState(false)

    
    return (
        <Link to={{
            pathname: '/Chat',
            state: { GrpId: GrpId ,Type:Type}
          }}  key={GrpId}>
            <div className="MsgHome">
                <div className="ImgAndInfoMsgHome">

                    {Img&&!ImgV ? <img onError={()=>setImgV(true)} src={Img} alt="mdo" width="60" height="60" className="rounded-circle"/>:<PersonFill size={60}/>}
                    
                    <div style={{paddingLeft:"2vw"}}>
                        <h4>{Name}</h4>
                        <h5 style={{color:"gray",width:"60vw",paddingLeft:"1vw"}}>{lastSmg}<span style={{paddingLeft:"1vw"}}>{Date}</span></h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MsgHome
