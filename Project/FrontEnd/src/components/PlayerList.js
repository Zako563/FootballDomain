import { Container, Row } from "react-bootstrap"
import PlayerCard from "./PlayerCard"
import{useState, useEffect, useRef} from 'react'
import AddPlayers from "./AddPlayers"
import { successToast } from "../Utils/toasts"
import { LinkContainer } from "react-router-bootstrap"



export default function PlayerList(){
    
    const [players, setPlayers]= useState(null)
    const[isloading, setIsLoading]= useState(true)
    const [teamOptions, setTeamOptions]= useState(null)

    const initialized= useRef(false);


    useEffect(() => {
        if(!initialized.current){
            initialized.current= true
        
        getAllPlayers();
        getTeamsOptions();
        }
    },[]);

    function getAllPlayers(){
        (async () => {
          const response = await fetch("http://localhost:8080/api/v1/players", {
            method: "GET",
          });
          
          const players = await response.json();
          console.log(players);
          setPlayers(players);
          setIsLoading(false);
        })();
    }

    function getTeamsOptions(){
        (async()=>{
            const response = await fetch("http://localhost:8080/api/v1/teams",{
                method:"GET",
            });
            const teams= await response.json();
            setTeamOptions(teams);
        })();
    }

if(isloading){
    return <div>
        <h1> Loading...</h1>
    </div>
}

function updateplayer(updateplayer){
    console.log("update player in the player list")
    console.log(updateplayer)
  
    var playerRequestDTO={
        name:       updateplayer.name,
        age:        updateplayer.age,
        teams:      updateplayer.teams,
        position:   updateplayer.position,
        goals:      updateplayer.goals,
        assists:    updateplayer.assists,
        gameplayed: updateplayer.gameplayed,
        redcard:    updateplayer.redcard,
        yellowcard: updateplayer.yellowcard,
        playerURL:  updateplayer.playerURL,
        teamid:     updateplayer.team.teamid
    }

    fetch(`http://localhost:8080/api/v1/players/${updateplayer.playerid}`, {
        method:'PUT',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'

    },

        body: JSON.stringify(playerRequestDTO)
    })
    .then(async response=>{
        const isJson= response.headers.get('content-type')?.includes('application/json'); 
        const data= isJson && await response.json();
        console.log("data is: " + data.playerURL)
        if(!response.ok){
            const error= (data && data.message) ||
            response.status
            console.log("post error occured")
            return Promise.reject(error);
        }
        successToast("Update Successful")
        getAllPlayers();
    })
}

function addplayer(name,age,team,position,goals,assists,gameplayed,redcard,yellowcard,playerURL,teamid){
  
    var playerRequestDTO={
        name: name,
        age: age,
        teams:team,
        position:position,
        goals:goals,
        assists:assists,
        gameplayed:gameplayed,
        redcard:redcard,
        yellowcard:yellowcard,
        playerURL:playerURL,
        teamid:teamid
    }

    fetch("http://localhost:8080/api/v1/players", {
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'

    },

        body: JSON.stringify(playerRequestDTO)
    })
    .then(async response=>{
        const isJson= response.headers.get('content-type')?.includes('application/json'); 
        const data= isJson && await response.json();
        console.log("data is: " + data.playerURL)
        if(!response.ok){
            const error= (data && data.message) ||
            response.status
            console.log("post error occured")
            return Promise.reject(error);
        }
        successToast("Add Successful")
        getAllPlayers();
    })
}

async function deletePlayerHandler(playerid){
    const response= await fetch(`http://localhost:8080/api/v1/players/${playerid}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },       
    })
    .then(response=>{
        const isJson= response.headers.get('content-type')?.includes('application/json')
        if(response.status===204){
            getAllPlayers();
            successToast("Delete Successful")
            
        }
    })
    .catch(function(error){
        return Promise.reject(error);
    })
}


const groupPlayersByTeamAndPosition = () => {
    const groupedPlayers = {};
  
    // Check if players array is available
    if (players) {
      // Iterate through each player
      players.forEach((player) => {
        const teamName = player.teams;
  
        // Create a nested object for each team
        if (!groupedPlayers[teamName]) {
          groupedPlayers[teamName] = {};
        }
  
        const position = player.position;
  
        // Create an array for each position within each team
        if (!groupedPlayers[teamName][position]) {
          groupedPlayers[teamName][position] = [];
        }
  
        // Push the player to the corresponding team and position
        groupedPlayers[teamName][position].push(player);
      });
    }
  
    return groupedPlayers;
  };
  
  // Get grouped players
  const groupedPlayers = groupPlayersByTeamAndPosition();
  
  return (
    <Container fluid className="containerbg">
     
      <AddPlayers addplayer={addplayer} teamOptions={teamOptions} />
  
      {/* Render players by team and position */}
      {Object.keys(groupedPlayers).map((teamName) => (
        <div key={teamName}>
          {/* Display team name */}
          <LinkContainer to={"/teams"} style={{ color: "Blue", textAlign: "Center" }}>
          <h1 >{teamName}</h1>
          </LinkContainer>
  
          {/* Render players by position within each team */}
          {Object.keys(groupedPlayers[teamName]).map((position) => (
          <div key={position}>
          {/* Display position */}
          <h3 style={{ color: '#336699', fontFamily: 'Arial, sans-serif', fontSize: '2.5em', textAlign:"center" }}>
            {position}
          </h3>
  
              {/* Render individual player cards */}
              <Row sm={2} lg={4} className="justify-content-evenly">
                {groupedPlayers[teamName][position].map((player) => (
                  <PlayerCard
                    key={player.playerid}
                    player={player}
                    updateplayer={updateplayer}
                    teamOptions={teamOptions}
                    onDeletePlayerHandler={deletePlayerHandler}
                  />
                ))}
              </Row>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
                }