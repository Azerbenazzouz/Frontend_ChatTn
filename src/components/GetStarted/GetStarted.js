import React,{useState} from 'react'
import './GetStarted.css'
import {login,Register} from './GetStartedFunc'
function GetStarted() {

    const [emailL, setEmailL] =useState("")
    const [passwordL, setPasswordL] =useState("")
    const [nameR, setNameR] =useState("")
    const [emailR, setEmailR] =useState("")
    const [passwordR, setPasswordR] =useState("")

    return (
        <div className="GetStarted ">
            <center className="center">
                <span className="title_JOIN">
                    JOIN THE 
                    <span className="fun">FUN.</span>
                </span>
            </center>
            
            <div className="GetStarted_r">
                <div className="GetStarted_r1">
                    <div className="frame">
                        <div className="inputComp">
                            <h1 className="input_title">Email :</h1>
                            <input type="email" value={emailL} onChange={(e)=>setEmailL(e.target.value)} style={{paddingLeft:"1vh"}} className="input" placeholder="Email"/>
                            <h1 className="input_title">Password :</h1>
                            <input type="password" value={passwordL} onChange={(e)=>setPasswordL(e.target.value)} style={{paddingLeft:"1vh"}} className="input" placeholder="Password"/>
                            <span className="btn_center" onClick={()=>login(emailL,passwordL)}>
                                    <span className='btn btn-primary mt-5' >Login</span>
                            </span>
                        </div>
                    </div>
                </div>

                <span className="or">OR</span>

                <div className="GetStarted_r1">
                    <div className="frame">
                        <div className="inputComp">
                            <h1 className="input_title">Name :</h1>
                            <input type="text" value={nameR} onChange={(e)=>setNameR(e.target.value)} style={{paddingLeft:"1vh"}} className="input" placeholder="Name"/>
                            <h1 className="input_title">Email :</h1>
                            <input type="email" value={emailR} onChange={(e)=>setEmailR(e.target.value)} style={{paddingLeft:"1vh"}} className="input" placeholder="Email"/>
                            <h1 className="input_title">Password :</h1>
                            <input type="password" value={passwordR} onChange={(e)=>setPasswordR(e.target.value)} style={{paddingLeft:"1vh"}} className="input" placeholder="Password"/>
                            <span className="btn_center" onClick={()=>Register(nameR,emailR,passwordR)}>
                                <span className='btn btn-primary mt-5'>Register</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default GetStarted
