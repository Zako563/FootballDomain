package boudboub.finalproject.businesslayer.TeamPlayer;

import boudboub.finalproject.presentationlayer.TeamPlayer.TeamPlayerResponseDTO;

public interface TeamPlayerService  {
    TeamPlayerResponseDTO getAllPlayersByTeamId(String teamid);
}
