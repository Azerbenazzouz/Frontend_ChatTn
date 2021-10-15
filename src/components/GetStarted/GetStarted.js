import React,{useState} from 'react'
import './GetStarted.css'
import axios from 'axios';  
import { login } from '../../redux'
import { useSelector , useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";


function GetStarted() {
    const Token = useSelector(state => state.refreshToken)
    const history = useHistory();

    const [emailL, setEmailL] =useState("")
    const [passwordL, setPasswordL] =useState("")
    const [nameR, setNameR] =useState("")
    const [emailR, setEmailR] =useState("")
    const [passwordR, setPasswordR] =useState("")
    const [errorL, setErrorL] =useState("")
    const [errorR, setErrorR] =useState("")
    
    const dispatch = useDispatch()

    function Login ( email , password) {
        var data = JSON.stringify({
            "email": email,
            "password": password
          });
    
          var config = {
            method: 'post',
            url: process.env.REACT_APP_URL+'/user/Login',
            headers: { 
              'x-api-key': process.env.REACT_APP_X_API_KEY, 
              'Content-Type': 'application/json'
            },
            data : data
          };
    
          axios(config)
          .then(function (response) {
            if (response.status===299) {
                setErrorL(response.data)
            }else {
              accessToken(response.data.refreshToken)
              history.push('/')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    
    function Register ( name , email , password ) {
    
        var data = JSON.stringify({
          "username": name,
          "email": email,
          "password": password
        });
        
        var config = {
          method: 'post',
          url: process.env.REACT_APP_URL+'/user/Regester',
          headers: { 
            'x-api-key': process.env.REACT_APP_X_API_KEY, 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          if (response.status===299) {
            console.log(response.data.details[0].message)
            setErrorR(response.data.details[0].message)
          }else {
            Login(response.data.email,response.data.password);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        
    }

    function accessToken(token){
      var data = JSON.stringify({
        "token": token
      });
      
      var config = {
        method: 'post',
        url: process.env.REACT_APP_URL+'/user/Token',
        headers: { 
          'x-api-key': process.env.REACT_APP_X_API_KEY, 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        dispatch(login(response.data.accessToken,response.data.email))
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
    

    return (
        <div className="GetStarted">
            <center className="center">
                <span className="title_JOIN" >
                    JOIN THE 
                    <span className="fun">FUN.</span>
                </span>
            </center>
            {Token}
            <div className="GetStarted_r">
                <div className="GetStarted_r1">
                    <div className="frame">
                        <div className="inputComp">
                            <h1 className="input_title">Email :</h1>
                            <input type="email" value={emailL} onChange={(e)=>setEmailL(e.target.value)} style={{paddingLeft:"1vh"}} className="input" placeholder="Email"/>
                            <h1 className="input_title">Password :</h1>
                            <input type="password" value={passwordL} onChange={(e)=>setPasswordL(e.target.value)} style={{paddingLeft:"1vh"}} className="input" placeholder="Password"/>
                            <span className="btn_center" onClick={()=>setErrorL(Login(emailL,passwordL))}>
                                    <span className='btn btn-primary mt-5' >Login</span>
                            </span>
                            <br />
                            <span style={{color:"red"}}>{errorL}</span>
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
                            <span className="btn_center" onClick={()=>setErrorR(Register(nameR,emailR,passwordR))}>
                                <span className='btn btn-primary mt-5'>Register</span>
                            </span>
                            <br />
                            <span style={{color:"red"}}> {errorR}</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
    
}

export default GetStarted
