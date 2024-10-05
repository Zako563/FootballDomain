-- Teams
INSERT INTO teams (teamid, name, manager, league, teamURL)  values
    ('501', 'Real madrid', 'Carlo Ancelotti', 'La Liga', 'https://i.pinimg.com/originals/fa/4f/0d/fa4f0db883d36fbfcfe76c06d9012be0.jpg'),
    ('502', 'Manchester City', 'Pep Guardiola', 'Premier League', 'https://i.pinimg.com/originals/12/ea/bd/12eabdf42507e0f9a046691624dccd33.jpg');


-- Insert Real Madrid players and their stats for the 2023-2024 season
INSERT INTO players (playerid, name, age, team, position, goals, assists, gameplayed, redcard, yellowcard, playerURL, teamid)
VALUES
    ('004', 'David Alaba', 31, 'Real Madrid', 'Defender', 0, 1, 7, 0, 2, 'https://i.pinimg.com/originals/93/79/4e/93794ebfc3adf03bf31d04bc3578b62b.jpg', '501'),
    ('010', 'Jude Bellingham', 20, 'Real Madrid', 'Midfielder', 6, 1, 7, 0, 1, 'https://i.pinimg.com/originals/2c/78/54/2c785466da72c4453b75860ba5af6d38.jpg', '501'),
    ('007', 'Rodrygo Goes', 22, 'Real Madrid', 'Forward', 1, 0, 7, 0, 0, 'https://i.pinimg.com/originals/be/f6/9e/bef69e61a09d6c6f3536d43551ee0d17.jpg', '501'),
    ('022', 'Antonio Rüdiger', 30, 'Real Madrid', 'Defender', 0, 0, 7, 0, 2, 'https://i.pinimg.com/originals/ac/f5/92/acf592ac8d7f13a5b5c33a8484645f75.jpg', '501'),
    ('008', 'Federico Valverde', 25, 'Real Madrid', 'Midfielder', 1, 0, 7, 0, 0, 'https://i.pinimg.com/originals/4a/b9/7d/4ab97dea02ce4d6932dcaaf40bd3de2a.jpg', '501'),
    ('019', 'Aurélien Tchouaméni', 23, 'Real Madrid', 'Midfielder', 0, 0, 7, 0, 0, 'https://i.pinimg.com/originals/be/aa/b2/beaab2752cbe3e1a2847878733145b78.jpg', '501'),
    ('014', 'Fran García', 24, 'Real Madrid', 'Defender', 0, 2, 7, 0, 1, 'https://i.pinimg.com/originals/49/89/a6/4989a693e4f290e1a8d9283a51ea2b92.jpg', '501'),
    ('026', 'Kepa Arrizabalaga', 28, 'Real Madrid', 'Goalkeeper', 0, 0, 5, 0, 0, 'https://i.pinimg.com/originals/72/7d/2f/727d2fa88306e9ce8c8c98d8baa5a3c0.png', '501'),
    ('002', 'Dani Carvajal', 31, 'Real Madrid', 'Defender', 0, 1, 5, 0, 0, 'https://i.pinimg.com/originals/f1/be/e2/f1bee2a9ec0d54a36b65eb6afb637a46.jpg', '501'),
    ('005', 'Joselu', 33, 'Real Madrid', 'Forward', 2, 1, 7, 0, 0, 'https://i.pinimg.com/originals/7c/34/7a/7c347afb7b7211be21df3fc60adeba96.jpg', '501'),
    ('011', 'Toni Kroos', 33, 'Real Madrid', 'Midfielder', 1, 1, 7, 0, 0, 'https://i.pinimg.com/originals/0a/e1/44/0ae144911da69ed5d8d49b0f8957ba8a.jpg', '501'),
    ('012', 'Eduardo Camavinga', 20, 'Real Madrid', 'Midfielder', 0, 0, 7, 0, 0, 'https://i.pinimg.com/originals/08/31/5f/08315feaad5a4a1b852f0c1540704eb0.jpg', '501'),
    ('006', 'Luka Modrić', 38, 'Real Madrid', 'Midfielder', 0, 0, 7, 0, 0, 'https://i.pinimg.com/originals/e5/88/9b/e5889b8942246b58e30b6d4cd0fe2908.jpg', '501'),
    ('003', 'Vinicius Júnior', 23, 'Real Madrid', 'Forward', 1, 0, 3, 0, 0, 'https://i.pinimg.com/originals/ec/3d/ad/ec3dade38d3c84ce60f9436e26289860.jpg', '501'),
    ('023', 'Nacho', 33, 'Real Madrid', 'Defender', 0, 0, 5, 0, 0, 'https://i.pinimg.com/originals/d0/5b/7a/d05b7a0c2a7d63c235804e6bff579a8d.jpg', '501');


-- Insert Manchester City players and their stats for the 2023-2024 season
INSERT INTO players (playerid, name, age, team, position, goals, assists, gameplayed, redcard, yellowcard, playerURL, teamid)
VALUES
    ('101', 'Ederson Morales', 30, 'Manchester City', 'Goalkeeper', 0, 0, 6, 1, 0, 'https://i.pinimg.com/originals/c5/90/56/c590565dd0eca9f928b3e92c11942354.jpg', '502'),
    ('102', 'Kyle Walker', 33, 'Manchester City', 'Defender', 0, 1, 6, 0, 0, 'https://i.pinimg.com/originals/52/51/69/52516931864d9445f70e537908fab24c.jpg', '502'),
    ('103', 'Erling Haaland', 23, 'Manchester City', 'Forward', 8, 1, 6, 0, 2, 'https://i.pinimg.com/originals/6f/5e/4a/6f5e4a3005937f8815de6bbca613a28e.jpg', '502'),
    ('104', 'Julián Álvarez', 23, 'Manchester City', 'Midfielder', 2, 3, 6, 1, 0, 'https://i.pinimg.com/originals/88/08/27/880827c6378faf72e4defeb0f167c593.jpg', '502'),
    ('105', 'Rodri', 27, 'Manchester City', 'Midfielder', 2, 1, 6, 2, 1, 'https://i.pinimg.com/originals/b9/8f/5b/b98f5b6ce61548531340f1fb26f47082.jpg', '502'),
    ('106', 'Manuel Akanji', 28, 'Manchester City', 'Defender', 0, 0, 5, 0, 1, 'https://i.pinimg.com/originals/0e/89/cc/0e89ccc9cfda64f97ec399d63bdde204.jpg', '502'),
    ('107', 'Rúben Dias', 26, 'Manchester City', 'Defender', 0, 0, 5, 0, 0, 'https://i.pinimg.com/originals/ec/b1/2d/ecb12de3c64402b23c3f9dac11cf6f4f.jpg', '502'),
    ('108', 'Phil Foden', 23, 'Manchester City', 'Midfielder', 1, 3, 6, 0, 0, 'https://i.pinimg.com/originals/c4/e0/da/c4e0daaf57ff0dbb98f39f5fe8d72e73.jpg', '502'),
    ('109', 'Joško Gvardiol', 21, 'Manchester City', 'Defender', 0, 0, 5, 1, 0, 'https://i.pinimg.com/originals/6c/61/2c/6c612cda056003300cd8bb0f64f4b6d0.jpg', '502'),
    ('110', 'Mateo Kovačić', 29, 'Manchester City', 'Midfielder', 0, 0, 4, 0, 0, 'https://i.pinimg.com/originals/9a/58/bc/9a58bcea5d10a148798050453af73e6b.jpg', '502'),
    ('111', 'Nathan Aké', 28, 'Manchester City', 'Defender', 1, 0, 5, 0, 0, 'https://i.pinimg.com/originals/b0/f1/d6/b0f1d6046065bc5f3396b6fa939929f4.jpg', '502'),
    ('112', 'Bernardo Silva', 29, 'Manchester City', 'Midfielder', 1, 1, 4, 0, 0, 'https://i.pinimg.com/originals/4f/12/d2/4f12d2a00ed85b60fb68c5f1a98c9810.jpg', '502'),
    ('113', 'Jeremy Doku', 21, 'Manchester City', 'Forward', 1, 0, 3, 0, 0, 'https://i.pinimg.com/originals/70/ff/50/70ff50d050eac436b2f831a1bc479805.jpg', '502'),
    ('114', 'Jack Grealish', 28, 'Manchester City', 'Forward', 0, 1, 3, 1, 0, 'https://i.pinimg.com/originals/76/5f/a1/765fa10c6fdfef065a87fa58bf7856c7.jpg', '502'),
    ('117', 'Kevin De Bruyne', 32, 'Manchester City', 'Midfielder', 0, 0, 1, 0, 0, 'https://i.pinimg.com/originals/a8/e0/14/a8e014a329ec51efac64edc9f3c7d933.jpg', '502');










