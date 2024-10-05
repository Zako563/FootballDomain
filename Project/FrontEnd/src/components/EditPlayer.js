import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Col,Row } from 'react-bootstrap';
import _ from 'lodash';


export default function EditPlayers({player, updateplayer, teamOptions}){
  const [show, setShow] = useState(false);
  const[teamOption, setTeamOptions]= useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [name, setName] = useState(player.name)
  const [age, setAge] = useState(player.age)
  const [team, setTeam] = useState(player.teams)
  const [position, setPosition] = useState(player.position)
  const [goals, setGoals] = useState(player.goals)
  const [assists, setAssists] = useState(player.assists)
  const [gameplayed, setGamePlayed] = useState(player.gameplayed)
  const [redcard, setRedCard] = useState(player.redcard)
  const [yellowcard, setYellowCard] = useState(player.yellowcard)
  const [playerurl, setPlayerURL] = useState(player.playerURL)
  const [teamName, setTeamName] = useState(player.team.name)


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
    console.log(" name is: "  + name)
    console.log(" age is: "  + age)
    console.log("team is: "  + team)
    console.log("position is: "  +position)
    console.log("goals is: "  + goals)
    console.log("assists is: "  + assists)
    console.log("gameplayed is: "  + gameplayed)
    console.log("redcard is: "  + redcard)
    console.log("yellowcard is: "  + yellowcard)
    console.log("playerurl is: "  + playerurl)
    console.log("team is: "  + teamName)

   
  var teaming= teamOptions.find(team=>
    team.name === teamName)

    updateplayer({playerid: player.playerid, name: name, age:age, teams: team, position: position, goals: goals, assists:assists,
                 gameplayed: gameplayed, redcard: redcard, yellowcard: yellowcard, playerURL: playerurl, team: teaming})
    handleClose();

    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit Players
        </Button>
  
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="editmodal" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formPlayerName">
                    <Form.Label>Player name</Form.Label>
                    <Form.Control
                      value={name}
                      required
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      value={age}
                      required
                      type="number"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
  
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formTeamName">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control
                      value={team}
                      required
                      type="text"
                      onChange={(e) => {
                        setTeam(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formposition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      value={position}
                      as="select"
                      required
                      onChange={(e) => {
                        setPosition(e.target.value);
                      }}
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
                    <Form.Control
                      value={goals}
                      required
                      type="number"
                      onChange={(e) => {
                        setGoals(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formassists">
                    <Form.Label>Number of assists</Form.Label>
                    <Form.Control
                      value={assists}
                      required
                      type="number"
                      onChange={(e) => {
                        setAssists(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
  
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formgameplayed">
                    <Form.Label>Game Played</Form.Label>
                    <Form.Control
                      value={gameplayed}
                      required
                      type="number"
                      onChange={(e) => {
                        setGamePlayed(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formRedCard">
                    <Form.Label>Number of red card</Form.Label>
                    <Form.Control
                      value={redcard}
                      required
                      type="number"
                      onChange={(e) => {
                        setRedCard(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
  
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formYellowCard">
                    <Form.Label>Number of yellow card</Form.Label>
                    <Form.Control
                      value={yellowcard}
                      required
                      type="number"
                      onChange={(e) => {
                        setYellowCard(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formPlayerURL">
                    <Form.Label>PlayerURl</Form.Label>
                    <Form.Control
                      value={playerurl}
                      required
                      type="url"
                      onChange={(e) => {
                        setPlayerURL(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
  
              <Row className="mb-3">
                <Col>
                  <Form.Group as={Col} controlId="formTeam">
                    <Form.Label>Team</Form.Label>
                    <Form.Select
                      required
                      value={teamName}
                      onChange={(e) => {
                        setTeamName(e.target.value);
                      }}
                    >
                      <option value="">Choose... </option>
                      {teamOption &&
                        teamOption.map((team, i) => (
                          <option key={i} value={team.name}>
                            {team.name}
                          </option>
                        ))}
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
            <Button form="editmodal" variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }