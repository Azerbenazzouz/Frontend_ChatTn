import React from 'react'
import { PersonFill} from 'react-bootstrap-icons';

import './MsgHome.css'
function MsgHome({Img,Name,Date,Lmsg=""}) {
    const lastSmg =Lmsg.slice(0, 21) + (Lmsg.length >=21 ? "..." : "")
    return (
        <div>
            <div className="MsgHome">
                <div className="ImgAndInfoMsgHome">
                    {Img ? <img src={Img} alt="mdo" width="60" height="60" class="rounded-circle"/>:<PersonFill size={60}/>}
                    
                    <div style={{paddingLeft:"2vw"}}>
                        <h4>{Name}</h4>
                        <h5 style={{color:"gray",width:"60vw",paddingLeft:"1vw"}}>{lastSmg}<span style={{paddingLeft:"1vw"}}>{Date}</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MsgHome
