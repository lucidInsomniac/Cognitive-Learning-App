DROP TABLE IF EXISTS image_puzzle;
CREATE TABLE image_puzzle ( 
image_id
INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
image_set
VARCHAR(10) NOT NULL,
difficulty_level
INT NOT NULL,
player_name
VARCHAR(20) NOT NULL,
player_age
INT NOT NULL,
player_score
INT NOT NULL,
puzzle_completed
varchar(10)  
);