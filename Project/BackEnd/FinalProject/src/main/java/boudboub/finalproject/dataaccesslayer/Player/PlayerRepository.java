package boudboub.finalproject.dataaccesslayer.Player;

import boudboub.finalproject.dataaccesslayer.Player.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Integer> {
    Player findPlayerByPlayerid(String playerid);

    List<Player> findPlayerByTeam_Teamid(String teamid);
}
