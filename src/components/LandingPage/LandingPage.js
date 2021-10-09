import React from 'react'
import './LandingPage.css'
import img from './asset/1.png'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className='LandingPage '>
            <div className="r">
                <div className="r1">
                <img className='img' src={img} alt=""/>
                </div>
                <div className="r2">
                    <div className="c">
                        <h1 className='title'>Chat and enjoy</h1>
                        <h4 className='sub_title'>Free and secure and 100% made in Tunisia</h4>
                        <Link to='/GetStarted'>
                            <span className='btn btn-primary mt-5'>Get Started</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage