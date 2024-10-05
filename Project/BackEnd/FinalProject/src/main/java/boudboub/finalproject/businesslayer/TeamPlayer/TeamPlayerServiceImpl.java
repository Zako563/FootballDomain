package boudboub.finalproject.businesslayer.TeamPlayer;

import boudboub.finalproject.dataaccesslayer.Player.Player;
import boudboub.finalproject.dataaccesslayer.Player.PlayerRepository;
import boudboub.finalproject.dataaccesslayer.Team.Team;
import boudboub.finalproject.dataaccesslayer.Team.TeamRepository;
import boudboub.finalproject.presentationlayer.TeamPlayer.TeamPlayerResponseDTO;
import boudboub.finalproject.presentationlayer.player.PlayerResponseDTO;
import boudboub.finalproject.presentationlayer.team.TeamResponseDTO;
import boudboub.finalproject.utils.NotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class TeamPlayerServiceImpl implements TeamPlayerService {
    private PlayerRepository playerRepository;
    private TeamRepository teamRepository;

    public TeamPlayerServiceImpl(PlayerRepository playerRepository, TeamRepository teamRepository) {
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
    }
    @Override
    public TeamPlayerResponseDTO getAllPlayersByTeamId(String teamid) {
        Team foundTeam= teamRepository.findTeamByTeamid(teamid);
        if(foundTeam==null){
            throw  new NotFoundException("unknown teamid: "  + teamid);
        }
        TeamPlayerResponseDTO teamplayerResponseDTO= new TeamPlayerResponseDTO();
        BeanUtils.copyProperties(foundTeam,teamplayerResponseDTO);

        List<Player> playerList= playerRepository.findPlayerByTeam_Teamid(teamid);
        List<PlayerResponseDTO> playerResponseDTOList= new ArrayList<>();

        for(Player player: playerList){
            PlayerResponseDTO playerResponseDTO= new PlayerResponseDTO();
            BeanUtils.copyProperties(player,playerResponseDTO);

            TeamResponseDTO teamResponseDTO = new TeamResponseDTO();
            BeanUtils.copyProperties(player.getTeam(), teamResponseDTO);
            playerResponseDTO.setTeam(teamResponseDTO);
            playerResponseDTOList.add(playerResponseDTO);
        }
        teamplayerResponseDTO.setPlayers(playerResponseDTOList);


        return teamplayerResponseDTO;
    }
}
