import React from 'react'
import './GetStarted.css'

function GetStarted() {
    return (
        <div className="GetStarted ">
            <center className="title_JOIN">JOIN THE <span className="fun">FUN.</span></center>
            <div className="row">
                <span className="col-1"></span>
                <div className="col-4 frame">
                    
                    <div className="ms-5 mt-5 login">
                        <h1 className="frame_text pt-4 pb-4">
                            Email :
                        </h1>
                        <input type="email" placeholder="Email" className="mb-5 input"/>
                        <h1 className="frame_text pb-4">
                            Password :
                        </h1>
                        <input type="password" placeholder="Password" className="mb-5 input"/>
                        <span className='btn btn-primary mt-3'>Get Started</span>
                    </div>

                </div>
                
                <spam className="col-2"></spam>
                <div className="col-4 frame">
                    <div className="register">
                        <div className="ms-5 mt-5 ">
                            
                        </div>
                    </div>
                </div>
                <span className="col-1"></span>
            </div>
        </div>
        
    )
}

export default GetStarted
