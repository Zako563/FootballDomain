package boudboub.finalproject.dataaccesslayer.Team;

import boudboub.finalproject.dataaccesslayer.Team.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Integer> {
    Team findTeamByTeamid(String teamid);
}
