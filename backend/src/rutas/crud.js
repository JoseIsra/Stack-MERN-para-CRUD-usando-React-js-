const router = require("express").Router();
const {Juego} = require('../dbconfig/dbconfig');

router.post("/add", async(req, res )=>{

    await Juego.create(req.body);  
res.end();
});

module.exports = router;