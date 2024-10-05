import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';


export default function EditTeam({team, updateTeam}){
  const [show, setShow] = useState(false);

const[name,setName]= useState(team.name);
const[manager, setManager]= useState(team.manager);
const[league, setLeague] = useState(team.league);
const [teamURL, setTeamURL]= useState(team.teamURL);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 


  const handleSubmit = (event)=> {
    event.preventDefault()
    console.log(" name is: "  + name)
    console.log(" manager is: "  + manager)
    console.log("league is: "  + league)
    console.log("teamURL is: "  + teamURL)

   
  

    updateTeam({teamid: team.teamid, name:name,manager:manager,league:league,teamURL:teamURL})
    handleClose();

    }
return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Teams
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>

    

    <Form id="editmodal" onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name}
                       required type="text"
                       onChange={(e)=>{
                        setName(e.target.value)
                       }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formManager">
        <Form.Label>manager</Form.Label>
        <Form.Control value={manager}
                       required type="text"
                       onChange={(e)=>{
                        setManager(e.target.value)
                       }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLeague">
        <Form.Label>League</Form.Label>
        <Form.Control value={league}
                       required type="text"
                       onChange={(e)=>{
                        setLeague(e.target.value)
                       }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTeamURL">
        <Form.Label>teamURl</Form.Label>
        <Form.Control value={teamURL}
                       required type="text"
                       onChange={(e)=>{
                        setTeamURL(e.target.value)
                       }}/>
      </Form.Group> 
             




     
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button form ="editmodal" variant="primary" type="submit" > Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}