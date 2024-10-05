package boudboub.finalproject.businesslayer.Team;

import boudboub.finalproject.presentationlayer.team.TeamRequestDTO;
import boudboub.finalproject.presentationlayer.team.TeamResponseDTO;

import java.util.List;

public interface TeamService {

    List<TeamResponseDTO> getAllTeams();

    TeamResponseDTO findTeamByTeamID(String teamid);

    TeamResponseDTO addTeam(TeamRequestDTO teamRequestDTO);

    void deleteTeam(String teamid);

    TeamResponseDTO updateteam(TeamRequestDTO teamRequestDTO, String teamid);
}
