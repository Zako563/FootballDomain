package boudboub.finalproject.presentationlayer.player;

import boudboub.finalproject.businesslayer.player.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/players")
public class PlayerController {
  private  PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public ResponseEntity<List<PlayerResponseDTO>> GetAllPlayers(){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.getAllPlayers());
    }

    @GetMapping("/{playerid}")
    public ResponseEntity<PlayerResponseDTO>  GetPlayerById(@PathVariable String playerid){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.findPlayerByPlayerId(playerid));
    }

    @PostMapping
    public ResponseEntity<PlayerResponseDTO>  Addplayer(@RequestBody PlayerRequestDTO playerRequestDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(playerService.addPlayer(playerRequestDTO));
    }

    @DeleteMapping("/{playerid}")
    public ResponseEntity<Void> deleteplayer(@PathVariable String playerid){
        playerService.deletePlayer(playerid);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @PutMapping("/{playerid}")
    public ResponseEntity<PlayerResponseDTO> updateplayer(@RequestBody PlayerRequestDTO playerRequestDTO,
                                          @PathVariable String playerid ){
        return  ResponseEntity.status(HttpStatus.OK).body(playerService.updatePlayer(playerRequestDTO,playerid));

    }

}
