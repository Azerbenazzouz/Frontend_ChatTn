import React from 'react'
import './LandingPage.css'
import img from './asset/1.png'
import logo from './asset/logo.png'

function LandingPage() {
    return (
        <div className='LandingPage'>

        <div className='row pt-3'>
                <span className="col-1"></span>
                <span className=' logo col-1'>
                    <img src={logo} alt='' className='logo col'/>
                </span>
            </div>

            <div className="row">
                <span className="col-2"></span>
                <span className="col-3"><img className='img' src={img} alt=""/></span>
                <span className="col-1"></span>
                <span className="col-1">
                    <h1 className='title'>Chat and enjoy</h1>
                    <h4 className='sub_title'>Free and secure and 100% made in Tunisia</h4>
                    <span className='btn btn-primary mt-5'>Get Started</span>
                </span>
            </div>
        </div>
    )
}

export default LandingPage
