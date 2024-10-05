import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import EditPlayers from "./EditPlayer";
import { Button } from "react-bootstrap";

export default function PlayerCard({ player, updateplayer, onDeletePlayerHandler, teamOptions}) {

  const onDelete=()=>{
    onDeletePlayerHandler(player.playerid);
  }
  
  const teamClass = player.teams === "Manchester City" ? "MancityBackground" : "RealMadridBackground";

  const cardStyle = {
    width: '200px', // Adjust the width as needed
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    marginTop: '20px', // Add your desired margin-top value
  };

  const cardImageStyle = {
  width: '100%',
  height: 'auto',
  marginTop: '20px', // Add your desired space between the top of the card and the image
  alignSelf: 'center', // Center the image within the flex container
};

  return (
    <Card className={`mx-1 my-3 ${teamClass}`} style={cardStyle}>
      <LinkContainer to={"/playerteam"} state={player} style={{ height: '250px', width: '200px',  borderRadius: '1rem',  }}>
        <Card.Img src={player.playerURL} className="rounded-5" style={cardImageStyle} />
      </LinkContainer>
      <Card.Body>
        <Card.Title>{player.name} </Card.Title>
        <Card.Text>
          <strong>Age</strong> {player.age}
        </Card.Text>
        {window.location.pathname === "/players" && (
          <>
            <EditPlayers player={player} updateplayer={updateplayer} teamOptions={teamOptions} />
            <Button variant="danger" onClick={onDelete}>
              Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
