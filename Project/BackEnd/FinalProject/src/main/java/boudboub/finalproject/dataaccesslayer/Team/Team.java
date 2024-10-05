package boudboub.finalproject.dataaccesslayer.Team;

import boudboub.finalproject.dataaccesslayer.Player.Player;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Table(name= "teams")
@Data
@NoArgsConstructor
@Entity

public class Team {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Integer id;

    @Column(name="teamid")
    private String teamid;

    private String name;

    @Column(name="manager")
    private String manager;

    @Column(name="league")
    private String league;

    @Column(name="teamurl")
    private String teamURL;

    @OneToMany(mappedBy = "team")
    private Set<Player> players;
}
