import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

import EditTeam from "./EditTeam";
import { CardText } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function TeamCard({ team, updateTeam, OnDeleteTeamHandler }) {
  const onDelete=()=>{
    OnDeleteTeamHandler(team.teamid)
  }
  

  const cardImageStyle = {
    width: '100%',
    height: 'auto',
  };

  const teamClass = team.manager === "Pep Guardiola" ? "MancityBackground" : "RealMadridBackground";


  return (
    
      <Card className={`mx-1 my-3 ${teamClass}`}>
        <LinkContainer to={"/teamplayer"} state={{teamid: team.teamid}} style={{ height: '350px'}} >
        <Card.Img src={team.teamURL } style={{ height: '100%', marginTop: '1rem', paddingRight: '0.5rem', borderRadius: '2rem' }} className="rounded-5" />
        </LinkContainer>
        <Card.Body>
          <Card.Title>{team.name} </Card.Title>
          <Card.Text>
            <p><strong>Manager:</strong> {team.manager}</p> 
          </Card.Text>
          
          <Card.Text>
            <p><strong>League:</strong> {team.league}</p> 
          </Card.Text>

           
            <CardText>
           <EditTeam team={team} updateTeam={updateTeam}/>
           <Button variant='danger' onClick={onDelete}> delete </Button>
           </CardText>
          
        </Card.Body>
      </Card>
   
    
  );
}
