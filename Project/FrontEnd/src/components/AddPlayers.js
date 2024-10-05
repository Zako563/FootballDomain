import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Col,Row } from 'react-bootstrap';
import _ from 'lodash';


export default function AddPlayers({addplayer, teamOptions}){
  const [show, setShow] = useState(false);
  const[teamOption, setTeamOptions]= useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const years = _.range(1888, new Date().getFullYear()+ 1).reverse();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/api/v1/teams", {
        method: "GET",
      });
      
      const teams = await response.json();
      setTeamOptions(teams);
    })();
  }, []);

  const handleSubmit = (event)=> {
    console.log("hellow");
    event.preventDefault()
    console.log(" name is: "  + event.target[0].value)
    console.log(" age is: "  + event.target[1].value)
    console.log("team is: "  + event.target[2].value)
    console.log("position is: "  + event.target[3].value)
    console.log("goals is: "  + event.target[4].value)
    console.log("assists is: "  + event.target[5].value)
    console.log("gameplayed is: "  + event.target[6].value)
    console.log("redcard is: "  + event.target[7].value)
    console.log("yellowcard is: "  + event.target[8].value)
    console.log("playerurl is: "  + event.target[9].value)
    console.log("team is: "  + event.target[10].value)

    var url="https://img.freepik.com/premium-vector/football-player-abstract-shadow-art_9955-1139.jpg?w=2000"
    if(event.target[9].value && event.target[9].value !== ""){
       url= event.target[9].value   
  }
  var team= teamOptions.find(team=>
    team.name === event.target[10].value)

    addplayer(event.target[0].value, event.target[1].value,  event.target[2].value,  
      event.target[3].value,  event.target[4].value,  event.target[5].value,
      event.target[6].value,  event.target[7].value,  event.target[8].value, url, team.teamid)
    handleClose();

    }
    return (
      <div className='mx-auto' style={{ width: '50%', paddingBottom: '2rem' }}>
        <Button variant="primary" onClick={handleShow}>
          Add Players
        </Button>
    
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="addmodal" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formPlayerName">
                    <Form.Label>Player name</Form.Label>
                    <Form.Control
                      placeholder="Jude Bellingham"
                      required
                      type="text"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control placeholder="21" type="number" />
                  </Form.Group>
                </Col>
              </Row>
    
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formTeamName">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control placeholder="Real Madrid" type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formposition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      as="select"
                      placeholder="Forward"
                      onChange={(e) => {}}
                    >
                      <option value="">Choose...</option>
                      <option value="Goalkeeper">Goalkeeper</option>
                      <option value="Defender">Defender</option>
                      <option value="Midfielder">Midfielder</option>
                      <option value="Forward">Forward</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
    
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formgoals">
                    <Form.Label>Number of Goals</Form.Label>
                    <Form.Control placeholder="10" type="number" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formassists">
                    <Form.Label>Number of assists</Form.Label>
                    <Form.Control placeholder="10" type="number" />
                  </Form.Group>
                </Col>
              </Row>
    
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formgameplayed">
                    <Form.Label>Game Played</Form.Label>
                    <Form.Control placeholder="10" type="number" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formRedCard">
                    <Form.Label>Number of red card</Form.Label>
                    <Form.Control placeholder="1" type="number" />
                  </Form.Group>
                </Col>
              </Row>
    
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formYellowCard">
                    <Form.Label>Number of yellow card</Form.Label>
                    <Form.Control placeholder="1" type="number" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formPlayerURL">
                    <Form.Label>PlayerURl</Form.Label>
                    <Form.Control placeholder="https://ronaldo.com" type="url" />
                  </Form.Group>
                </Col>
              </Row>
    
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formTeam">
                    <Form.Label>Team</Form.Label>
                    <Form.Select required defaultValue="Choose...">
                      <option value="">Choose... </option>
                      {teamOption &&
                        teamOption.map((team, i) => {
                          return (
                            <option key={i} value={team.name}>
                              {team.name}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button form="addmodal" variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    

}