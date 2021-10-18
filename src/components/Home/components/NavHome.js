import React,{useState,useEffect} from 'react'
import './NavHome.css'
import { Plus ,Person} from 'react-bootstrap-icons';
import axios from 'axios';  
import { useSelector } from 'react-redux'
import {Form,Modal,Button,Col,Row} from 'react-bootstrap';


function NavHome({userName,setListUsers,setSearch}) {
    
    const refreshToken = useSelector(state => state.refreshToken)
    const email = useSelector(state => state.email)
    const [username, setUseName] =useState("") 
    const [namesL,setNamesL]=useState([])
    const [modalShow, setModalShow] = useState(false);
    const [grpName,setGrpName] = useState("");
    const [grpUrl,setGrpUrl] = useState("");
    const [GrpError,setGrpError] = useState("");

    useEffect(()=> {

        getUsers()
        setSearch(username)
        setListUsers(namesL)
        //eslint-disable-next-line
      },[username])
      

    // * Get Users Name from Data Base*
    const getUsers=()=>{

        var data = JSON.stringify({
            "username": username
        });
    
        var config = {
            method: 'get',
            url: process.env.REACT_APP_URL+'/user/getall',
            headers: { 
                'x-api-key': process.env.REACT_APP_X_API_KEY, 
                'Authorization': 'Bearer '+refreshToken, 
                'Content-Type': 'application/json'
            },
            data : data
        };
    
        axios(config)
        .then(function (response) {
            setNamesL(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

      const MakeGroup = () =>{
        var axios = require('axios');
        var data = JSON.stringify({
          "name": grpName,
          "usersEmail": [email],
          "img": grpUrl ,
          "lastSender": "",
          "lastMessage": "",
          "adminsEmail": [email],
          "conversation": []
        });
        
        var config = {
          method: 'post',
          url:  process.env.REACT_APP_URL+'/messenger/group/make',
          headers: { 
            'x-api-key': process.env.REACT_APP_X_API_KEY, 
            'Authorization': 'Bearer '+refreshToken, 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          if(response.status===299){
            setGrpError(response.data.details[0].message)
          }else{
            setGrpError("")
            setModalShow(false)
            setGrpName("")
            setGrpUrl("")
          }
          

        })
        .catch(function (error) {
          console.log(error);
        });
        
      }

    return (
        <div>
            <div className="NavHome">
                <Plus onClick={()=>setModalShow(true)} className="IconNav" size={32}/>
                <span onClick={()=>setModalShow(true)} className="MakeGroup">Make Group</span>
                <input type="text" onChange={(e)=>setUseName(e.target.value)} placeholder="Search" className="Search"/>
                <span className="UserName">{userName}</span>
                <Person className="IconNav" size={32}/>
            </div>
            
            <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header >
              <Modal.Title id="contained-modal-title-vcenter">
                Make Group
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Group Name
                </Form.Label>
                <Col sm="10">
                <Form.Control value={grpName} onChange={(e)=>{setGrpName(e.target.value)}} type="text" required/>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Image Url
                </Form.Label>
                <Col sm="10">
                <Form.Control value={grpUrl} onChange={(e)=>{setGrpUrl(e.target.value)}} type="text"/>
                </Col>
            </Form.Group>

            <center><h4 style={{color:"red"}}>{GrpError}</h4></center>
            </Modal.Body>

            <Modal.Footer>
              <Button bg="secondary" onClick={() => setModalShow(false)}>Close</Button>
              <Button bg="primary" onClick={MakeGroup}>Create</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

export default NavHome
