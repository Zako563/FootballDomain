package boudboub.finalproject.presentationlayer.team;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TeamResponseDTO {

    private String teamid;

    private String name;


    private String manager;


    private String league;


    private String teamURL;
}
