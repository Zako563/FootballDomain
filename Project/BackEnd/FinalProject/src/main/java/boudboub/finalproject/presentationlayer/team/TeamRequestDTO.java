package boudboub.finalproject.presentationlayer.team;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TeamRequestDTO {
    private String name;


    private String manager;


    private String league;


    private String teamURL;
}
