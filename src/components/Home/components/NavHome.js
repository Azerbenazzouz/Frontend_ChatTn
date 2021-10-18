import React,{useState,useEffect} from 'react'
import './NavHome.css'
import { Plus ,Person} from 'react-bootstrap-icons';
import axios from 'axios';  
import { useSelector } from 'react-redux'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import {Form,Modal,Button,Col,Row} from 'react-bootstrap';





function NavHome({userName,setListUsers,setSearch}) {
    
    const refreshToken = useSelector(state => state.refreshToken)
    const [username, setUseName] =useState("") 
    const [namesL,setNamesL]=useState([])
    const [modalShow, setModalShow] = useState(false);

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

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
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
                <Form.Control type="text" required/>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                Image Url
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text"/>
                </Col>
            </Form.Group>


            </Modal.Body>

            <Modal.Footer>
              <Button bg="secondary" onClick={props.onHide}>Close</Button>
              <Button bg="primary">Create</Button>
            </Modal.Footer>
          </Modal>
        );
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
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default NavHome
