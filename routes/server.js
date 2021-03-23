var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.send({ message: "Hello world!" });
});

// GET
router.get("/server", async (req, res) => {
  try {
    let results = await db("SELECT * FROM games");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}); 

router.get("/server/:difficulty_level", async (req, res) => {
  let difficulty_level = req.params.difficulty_level;
  try {
    let sql = `SELECT * FROM image_puzzle WHERE difficulty_level = ${difficulty_level}`;
    let results = await db(sql);
    if (results.data.length === 1) {
      res.send(results.data[0]);
    } else {
      res.status(404).send({ error: "Not Found" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//POST
router.post("/server", async (req, res) => {
  let {game_name, game_lvl, game_images, completed} = req.body;
  let sql = `
        INSERT INTO games (game_name, game_lvl, game_images, completed) 
        VALUES ('${game_name}', ${game_lvl},'${game_images}',${completed})
    `;
  try {
    let results = await db(sql);
    // Return *all* 
    results = await db("SELECT * FROM games");
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// DELETE
router.delete("/server/:image_id", async (req, res) => {
  let image_id = req.params.image_id;
  try {
    let sql = `SELECT * FROM image_puzzle WHERE image_id = ${image_id}`;
    let results = await db(sql);
    if (results.data.length === 1) {
      sql = `DELETE FROM image_puzzle WHERE image_id = ${image_id}`;
      // Delete 
      await db(sql);
      // Return *all*
      results = await db("SELECT * FROM image_puzzle");
      res.send(results.data);
    } else {
      res.status(404).send({ error: "Not Found" });
    }
  } catch (err) {y
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
