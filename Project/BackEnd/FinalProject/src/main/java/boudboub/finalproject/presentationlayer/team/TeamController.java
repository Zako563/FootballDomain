package boudboub.finalproject.presentationlayer.team;

import boudboub.finalproject.businesslayer.Team.TeamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/teams")
public class TeamController {

    private TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping()
    public ResponseEntity<List<TeamResponseDTO>> getallTeams(){
       return ResponseEntity.status(HttpStatus.OK).body(teamService.getAllTeams());
    }

    @GetMapping("/{teamid}")
    public ResponseEntity<TeamResponseDTO> getoneplayer(@PathVariable String teamid){
        return ResponseEntity.status(HttpStatus.OK).body(teamService.findTeamByTeamID(teamid));
    }

    @PostMapping()
    public ResponseEntity<TeamResponseDTO>  addplayer(@RequestBody TeamRequestDTO teamRequestDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(teamService.addTeam(teamRequestDTO));
    }

    @DeleteMapping("/{teamid}")
    public ResponseEntity<Void> deleteteam(@PathVariable String teamid){
        teamService.deleteTeam(teamid);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @PutMapping("/{teamid}")
    public ResponseEntity<TeamResponseDTO> updateteam(@RequestBody TeamRequestDTO teamRequestDTO,
                                      @PathVariable String teamid){
        return ResponseEntity.status(HttpStatus.OK).body(teamService.updateteam(teamRequestDTO,teamid));
    }
}
