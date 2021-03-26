var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/users", async (req, res) => {
  try {
    let results = await db("SELECT * FROM player ORDER BY ord_date ASC");
    if (results.data.length) {
      //check
      console.log("RESULTS", results);
      //send back the full list of users with status
      res.status(200).send(results.data); 
      } else { 
      res.status(404).send({ error: "Db is inaccesible or empty." });
      }
      //Catch any errors
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

//Get user by id
router.get("/users:id", async (req, res) => {
//Get id from URL
let player_id = req.params.id;
//Tells MYSQL to select all rows from items
  //where the id matches the req.params.id
  //Has to be in MYSQL syntax
  let sql = `
  SELECT *
  FROM player
  WHERE player_id = ${player_id}
`;
try {
  let results = await db(sql);
  //send back the user by id with status
  res.send(results.data[0]);
   //Catch any errors
} catch (err) {
  res.status(500).send({ error: err.message });
}
});


// //Post user data 
// router.post("/", async (req, res) => {
//   // The request's body is available in req.body
//   let { player_name, player_age, game_id }
//    //check values
//    console.log('BACKEND POST', player_name, player_age, game_id)

//    let sql = `INSERT INTO
//    (player_name,
//     player_age,
//     game_id
//    ) VALUES (
//      "${player_name}",
//      ${player_age},
//      ${game_id}
//    );
//    `;
//    try {
//     //inserts the data
//     let results = await db(sql);
//     results = await db("SELECT * from player ORDER BY ord_date ASC;");
//     //you should send back the full list of for player
//     //console.log(results.data);
//     res.status(201).send(results.data);
//    } catch (err) {
//   }





  module.exports = router;

