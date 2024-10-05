import { Container, Row } from "react-bootstrap"
import TeamCard from "./TeamCard"
import{useState, useEffect, useRef} from 'react'
import AddTeams from "./AddTeams"
import { errorToast, successToast } from "../Utils/toasts"

export default function TeamList(){
    const [teams, setTeams]= useState(null)
    const[isloading, setIsLoading]= useState(true)

    const initialized= useRef(false)

    useEffect(() => {
        if(!initialized.current){
            initialized.current= true
        
       getAllTeams();
        }
      }, []);

function getAllTeams(){
      (async () => {
        const response = await fetch("http://localhost:8080/api/v1/teams", {
          method: "GET",
        });
        
        const teams = await response.json();
        
        setTeams(teams);
        console.log(teams);
        setIsLoading(false);
      })();
    }

if(isloading){
    return <div>
        <h1> Loading...</h1>
    </div>
}

function addTeam(name, manager,league, teamURL){
    var teamRequestDTO={
        name:name,
        manager:manager,
        league:league,
        teamURL:teamURL,
    }
    fetch("http://localhost:8080/api/v1/teams",{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(teamRequestDTO)
    })
    .then(async response=>{
        const isJson= response.headers.get('content-type')?.includes('application/json'); 
        const data= isJson && await response.json();
        console.log("data is: " + data.teamURL)
        if(!response.ok){
            const error= (data && data.message) ||
            response.status
            console.log("post error occured")
            return Promise.reject(error);
        }
        successToast("Add Successful")
        getAllTeams();
    })
}

function updateTeam(updateTeam){
    var teamRequestDTO={
    name: updateTeam.name,
    manager:updateTeam.manager,
    league:updateTeam.league,
    teamURL:updateTeam.teamURL,
    }
    fetch(`http://localhost:8080/api/v1/teams/${updateTeam.teamid}`,{
        method:'PUT',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(teamRequestDTO)
    })
    .then(async response=>{
        const isJson= response.headers.get('content-type')?.includes('application/json'); 
        const data= isJson && await response.json();
        console.log("data is: " + data.teamURL)
        if(!response.ok){
            const error= (data && data.message) ||
            response.status
            console.log("post error occured")
            return Promise.reject(error);
        }
        successToast("Update Successful")
        getAllTeams();
    })
}

async function deleteTeamHandler(teamid){
    const response = await fetch(`http://localhost:8080/api/v1/teams/${teamid}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response=>{
        const isJson= response.headers.get('content-type')?.includes('application/json'); 
        if(response.status===204){
            getAllTeams();
          
        }else if(response.status===422){
            errorToast("Cannot delete the team")
        }
    })
        .catch(function(error){
            console.log("an unknown error occured")
            return Promise.reject(error)
        })
    }


    return (
        
        <Container fluid className="containerbg2">
            
            <AddTeams addteam={addTeam} />
            
            <Row sm={2} lg={4} className="justify-content-evenly"> 
                {teams.map((team)=>
                    <TeamCard key={team.teamid}  
                              team={team}
                              updateTeam={updateTeam}
                              OnDeleteTeamHandler={deleteTeamHandler}/>
                )}
            </Row>
        </Container>
       
    )
}
