DROP TABLE IF EXISTS teams;

CREATE TABLE teams(
    id      INT     NOT NULL AUTO_INCREMENT,
    teamid  VARCHAR(36) NOT NULL UNIQUE,
    name    VARCHAR(36) NOT NULL ,
    manager VARCHAR(36) NOT NULL ,
    league  VARCHAR(36) NOT NULL ,
    teamURL   VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)

);






DROP TABLE IF EXISTS players;

CREATE TABLE players
(
    id          INT     NOT NULL AUTO_INCREMENT,
    playerid    VARCHAR(36) NOT NULL UNIQUE,
    name        VARCHAR(36) NOT NULL,
    age         INT   NOT NULL,
    team        VARCHAR(255)  NOT NULL,
    position    VARCHAR(255) NOT NULL,
    goals       INT NOT NULL,
    assists     INT NOT NULL,
    gameplayed  INT NOT NULL ,
    redcard     INT NOT NULL,
    yellowcard  INT NOT NULL,
    playerURL   VARCHAR(255) NOT NULL,
    teamid      VARCHAR(36) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (teamid) REFERENCES teams(teamid)

);