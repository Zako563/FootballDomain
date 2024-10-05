package boudboub.finalproject.dataaccesslayer.Player;

import boudboub.finalproject.dataaccesslayer.Team.Team;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name= "players")
@Data
@NoArgsConstructor
@Entity

public class Player {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Integer id;

    @Column(name="playerid")
    private String playerid;

    private String name;

    @Column(name="age")
    private int age;

    @Column(name="team")
    private String teams;

    @Column(name= "position")
    private String position;

    @Column(name="goals")
    private int goals;

    @Column(name="assists")
    private int assists;

    @Column(name="gameplayed")
    private int gameplayed;

    @Column(name="redcard")
    private int redcard;

    @Column(name="yellowcard")
    private int yellowcard;

    @Column(name="playerurl")
    private String playerURL;

    @ManyToOne
    @JoinColumn(name="teamid", referencedColumnName = "teamid")
    private Team team;
}