-- Name of puzzle game should be called "Puzzle" to stay consistant with Sidebar menu
DROP TABLE IF EXISTS player;
DROP TABLE IF EXISTS games;
CREATE TABLE games ( 
game_id
INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
game_name
VARCHAR(20),
game_lvl
INT NOT NULL,
game_images
VARCHAR(100),
Completed
BOOLEAN NOT NULL,
game_score
INT NOT NULL
);


CREATE TABLE player ( 
player_id
INT NOT NULL AUTO_INCREMENT,
player_name
VARCHAR(20),
player_age
INT NOT NULL,
game_id
INT NOT NULL,
PRIMARY KEY (player_id),
FOREIGN KEY (game_id) REFERENCES games(game_id) 
);
