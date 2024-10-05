package boudboub.finalproject.presentationlayer.TeamPlayer;

import boudboub.finalproject.businesslayer.TeamPlayer.TeamPlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/teams/{teamid}/players")
public class TeamPlayerController {
    TeamPlayerService teamPlayerService;

    public TeamPlayerController(TeamPlayerService teamPlayerService) {
        this.teamPlayerService = teamPlayerService;
    }

    @GetMapping()
    public ResponseEntity<TeamPlayerResponseDTO> getAllPlayersbyTeamId(@PathVariable String teamid){
        return ResponseEntity.status(HttpStatus.OK).body(teamPlayerService.getAllPlayersByTeamId(teamid));
    }
}
