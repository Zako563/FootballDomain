package boudboub.finalproject.presentationlayer.TeamPlayer;

import boudboub.finalproject.presentationlayer.player.PlayerResponseDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
public class TeamPlayerResponseDTO {
    private String teamid;

    private String name;


    private String manager;


    private String league;


    private String teamURl;

    private List<PlayerResponseDTO> players;
}
