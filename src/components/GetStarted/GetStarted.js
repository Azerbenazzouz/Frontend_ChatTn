import React from 'react'
import './GetStarted.css'
import { Link } from 'react-router-dom'

function GetStarted() {
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
                            <input type="email" style={{paddingLeft:"1vh"}} className="input" placeholder="Email"/>
                            <h1 className="input_title">Password :</h1>
                            <input type="password" style={{paddingLeft:"1vh"}} className="input" placeholder="Password"/>
                            <span className="btn_center">
                                <Link to='/GetStarted'>
                                    <span className='btn btn-primary mt-5'>Login</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                <span className="or">OR</span>

                <div className="GetStarted_r1">
                    <div className="frame">
                        <div className="inputComp">
                            <h1 className="input_title">Name :</h1>
                            <input type="text" style={{paddingLeft:"1vh"}} className="input" placeholder="Name"/>
                            <h1 className="input_title">Email :</h1>
                            <input type="email" style={{paddingLeft:"1vh"}} className="input" placeholder="Email"/>
                            <h1 className="input_title">Password :</h1>
                            <input type="password" style={{paddingLeft:"1vh"}} className="input" placeholder="Password"/>
                            <span className="btn_center">
                                <Link to='/GetStarted'>
                                    <span className='btn btn-primary mt-5'>Register</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default GetStarted
