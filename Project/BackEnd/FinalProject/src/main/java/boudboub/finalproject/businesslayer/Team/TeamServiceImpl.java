package boudboub.finalproject.businesslayer.Team;

import boudboub.finalproject.dataaccesslayer.Team.Team;
import boudboub.finalproject.dataaccesslayer.Team.TeamRepository;
import boudboub.finalproject.presentationlayer.team.TeamRequestDTO;
import boudboub.finalproject.presentationlayer.team.TeamResponseDTO;
import boudboub.finalproject.utils.InUseException;
import boudboub.finalproject.utils.NotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class TeamServiceImpl implements TeamService {

    private TeamRepository teamRepository;

    public TeamServiceImpl(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @Override
    public List<TeamResponseDTO> getAllTeams() {
        List<Team> teamEntities= teamRepository.findAll();
        List<TeamResponseDTO> teamResponseDTOS= new ArrayList<>();

        for(Team team: teamEntities){
            TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
            BeanUtils.copyProperties(team, teamResponseDTO);
            teamResponseDTOS.add(teamResponseDTO);
        }

        return teamResponseDTOS;

    }

    @Override
    public TeamResponseDTO findTeamByTeamID(String teamid) {
        Team team= teamRepository.findTeamByTeamid(teamid);
        if(team== null){
            throw new NotFoundException("unknown teamid: " + teamid);
        }
        TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
        BeanUtils.copyProperties(team, teamResponseDTO);
        return teamResponseDTO;
    }

    @Override
    public TeamResponseDTO addTeam(TeamRequestDTO teamRequestDTO) {
        Team team= new Team();
        BeanUtils.copyProperties(teamRequestDTO, team);
        team.setTeamid(UUID.randomUUID().toString());

        Team savedTeam= teamRepository.save(team);
        TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
        BeanUtils.copyProperties(savedTeam, teamResponseDTO);
        return teamResponseDTO;
    }

    @Override
    public void deleteTeam(String teamid) {
        Team foundteam= teamRepository.findTeamByTeamid(teamid);
        if(foundteam== null){
            throw new NotFoundException("unknown teamid: " + teamid);
        }
        try{
            teamRepository.delete(foundteam);

        }catch (DataIntegrityViolationException ex){
            throw new InUseException("cannot delete team with teamid  : " + teamid + " as it is currently " +
                    " assigned to one or many players");
        }


    }

    @Override
    public TeamResponseDTO updateteam(TeamRequestDTO teamRequestDTO, String teamid) {
        Team foundteam=teamRepository.findTeamByTeamid(teamid);
        if(foundteam== null){
            throw new NotFoundException("unknown teamid: " + teamid);
        }
       Team team= new Team();

        BeanUtils.copyProperties(teamRequestDTO, team);
        team.setTeamid(foundteam.getTeamid());
        team.setId(foundteam.getId());

        Team savedteam= teamRepository.save(team);

        TeamResponseDTO teamResponseDTO= new TeamResponseDTO();
        BeanUtils.copyProperties(savedteam,teamResponseDTO);
        return teamResponseDTO;

    }
}
