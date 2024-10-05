package boudboub.finalproject.presentationlayer.player;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PlayerRequestDTO {

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

    private String teamid;
}
