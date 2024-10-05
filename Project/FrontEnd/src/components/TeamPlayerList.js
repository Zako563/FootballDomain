import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import PlayerCard from "./PlayerCard"

export  default function TeamPlayerList(){

    const{ state } = useLocation()
    const [players, setPlayers]= useState(null)
    const[isloading, setIsLoading]= useState(true)

    useEffect(() => {
        (async () => {
          const response = await fetch(`http://localhost:8080/api/v1/teams/${state.teamid}/players`, {
            method: "GET",
          });
          
          const result = await response.json();
          const players= result.players
          setPlayers(players);
          setIsLoading(false);
        })();
      }, []);

if(isloading){
    return <div>
        <h1> Loading...</h1>
    </div>
}

    return (
        <Container fluid>
            <Row sm={2} lg={4} className="justify-content-evenly"> 
                {players && players.map((player)=>
                    <PlayerCard key={player.playerid}  player={player}/>
                )}
            </Row>
        </Container>
    )
}