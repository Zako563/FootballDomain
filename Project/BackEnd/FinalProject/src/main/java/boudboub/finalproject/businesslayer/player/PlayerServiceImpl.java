package boudboub.finalproject.businesslayer.player;

import boudboub.finalproject.dataaccesslayer.Player.Player;
import boudboub.finalproject.dataaccesslayer.Player.PlayerRepository;
import boudboub.finalproject.dataaccesslayer.Team.Team;
import boudboub.finalproject.dataaccesslayer.Team.TeamRepository;
import boudboub.finalproject.presentationlayer.player.PlayerRequestDTO;
import boudboub.finalproject.presentationlayer.player.PlayerResponseDTO;
import boudboub.finalproject.presentationlayer.team.TeamResponseDTO;
import boudboub.finalproject.utils.NotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class PlayerServiceImpl implements PlayerService {

    private PlayerRepository playerRepository;
    private TeamRepository teamRepository;

    public PlayerServiceImpl(PlayerRepository playerRepository, TeamRepository teamRepository) {
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
    }

    @Override
    public List<PlayerResponseDTO> getAllPlayers() {
        List<Player> playerEntities= playerRepository.findAll();
        List<PlayerResponseDTO> playerResponseDTOS= new ArrayList<>();

        for(Player player: playerEntities){
            PlayerResponseDTO playerResponseDTO= new PlayerResponseDTO();
            BeanUtils.copyProperties(player, playerResponseDTO);

            TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
            BeanUtils.copyProperties(player.getTeam(), teamResponseDTO);
            playerResponseDTO.setTeam(teamResponseDTO);
            playerResponseDTOS.add(playerResponseDTO);
        }

        return playerResponseDTOS;
    }

    @Override
    public PlayerResponseDTO findPlayerByPlayerId(String playerid) {
    Player players= playerRepository.findPlayerByPlayerid(playerid);
    if(players ==null) {
        throw new NotFoundException("unknown playerid: " + playerid);

    }

    PlayerResponseDTO playerResponseDTO= new PlayerResponseDTO();
    BeanUtils.copyProperties(players,playerResponseDTO);

        TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
        BeanUtils.copyProperties(players.getTeam(), teamResponseDTO);
        playerResponseDTO.setTeam(teamResponseDTO);

        return playerResponseDTO;
    }

    @Override
    public PlayerResponseDTO addPlayer(PlayerRequestDTO playerRequestDTO) {
        Team team= teamRepository.findTeamByTeamid(playerRequestDTO.getTeamid());
        if(team==null){
            throw new NotFoundException("unknown team id: " + playerRequestDTO.getTeamid());
        }



        Player player= new Player();
        BeanUtils.copyProperties(playerRequestDTO, player);
        player.setPlayerid(UUID.randomUUID().toString());

        player.setTeam(team);
        //save movie entity to database via repository
        Player savedplayer= playerRepository.save(player);

        //Convert savedMovie (entity) to movieResponseDTO
        PlayerResponseDTO playerResponseDTO= new PlayerResponseDTO();
        BeanUtils.copyProperties(savedplayer, playerResponseDTO);

        TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
        BeanUtils.copyProperties(player.getTeam(), teamResponseDTO);
        playerResponseDTO.setTeam(teamResponseDTO);

        return playerResponseDTO;

    }

    @Override
    public void deletePlayer(String playerid) {
        Player foundplayer= playerRepository.findPlayerByPlayerid(playerid);
        if(foundplayer==null){
            throw new NotFoundException("unknown playerid " + playerid);
        }


        playerRepository.delete(foundplayer);

    }

    @Override
    public PlayerResponseDTO updatePlayer(PlayerRequestDTO playerRequestDTO, String playerid) {
        Player foundplayer=playerRepository.findPlayerByPlayerid(playerid);
        if(foundplayer==null){
            throw new NotFoundException("unknown player id: " + playerid);
        }


        Player player = new Player();

        BeanUtils.copyProperties(playerRequestDTO, player);
        player.setPlayerid(foundplayer.getPlayerid());
        player.setId(foundplayer.getId());


        Team team= teamRepository.findTeamByTeamid(playerRequestDTO.getTeamid());
        player.setTeam(team);

        Player savedplayer= playerRepository.save(player);

        PlayerResponseDTO playerResponseDTO= new PlayerResponseDTO();

        TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
        BeanUtils.copyProperties(player.getTeam(), teamResponseDTO);
        playerResponseDTO.setTeam(teamResponseDTO);

        BeanUtils.copyProperties(savedplayer,playerResponseDTO);
        return playerResponseDTO;
    }
}
