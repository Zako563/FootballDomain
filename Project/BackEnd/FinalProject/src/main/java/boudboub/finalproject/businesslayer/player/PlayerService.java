package boudboub.finalproject.businesslayer.player;

import boudboub.finalproject.presentationlayer.player.PlayerRequestDTO;
import boudboub.finalproject.presentationlayer.player.PlayerResponseDTO;

import java.util.List;

public interface PlayerService {
    List<PlayerResponseDTO> getAllPlayers();

    PlayerResponseDTO findPlayerByPlayerId(String playerid);

    PlayerResponseDTO addPlayer(PlayerRequestDTO playerRequestDTO);

    void deletePlayer(String playerid);

    PlayerResponseDTO updatePlayer(PlayerRequestDTO playerRequestDTO, String playerid);
}
