package boudboub.finalproject.presentationlayer.player;

import boudboub.finalproject.presentationlayer.team.TeamResponseDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PlayerResponseDTO {
    private String playerid;

    private String name;

    private int age;


    private String teams;


    private String position;


    private int goals;


    private int assists;


    private int gameplayed;


    private int redcard;


    private int yellowcard;

    private String playerURL;

    private TeamResponseDTO team;
}
