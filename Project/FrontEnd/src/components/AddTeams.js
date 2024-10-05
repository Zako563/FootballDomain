import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Col,Row } from 'react-bootstrap';
import _ from 'lodash';


export default function AddTeams({addteam}){
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const years = _.range(1888, new Date().getFullYear()+ 1).reverse();


  const handleSubmit = (event)=> {
   
    event.preventDefault()
    console.log(" name is: "  + event.target[0].value)
    console.log(" manager is: "  + event.target[1].value)
    console.log("league is: "  + event.target[2].value)
    console.log("teamURL is: "  + event.target[3].value)

    const name= event.target[0].value;
    const manager= event.target[1].value;
    const league= event.target[2].value;
  
    var teamURL="https://img.freepik.com/premium-vector/football-player-abstract-shadow-art_9955-1139.jpg?w=2000"
    if(event.target[3].value && event.target[3].value !== ""){
       teamURL= event.target[3].value   
  }


    addteam(name,manager,league,teamURL)
    handleClose();

    }
return (
    <div className='mx-auto' style={{ width: '20%', paddingBottom: '2rem' }} >
    
      <Button variant="primary" onClick={handleShow} style={{width:"100%"}}>
        Add Teams
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>

    

    <Form id="addmodal" onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Real madrid" required type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formManager">
        <Form.Label>manager</Form.Label>
        <Form.Control placeholder="Pep Guardiola" type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLeague">
        <Form.Label>League</Form.Label>
        <Form.Control placeholder="La Liga" type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTeamURL">
        <Form.Label>teamURl</Form.Label>
        <Form.Control placeholder="https://ronaldo.com" type="url"/>
      </Form.Group> 
             




     
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form ="addmodal" variant="primary" type="submit" > Save</Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  );

}