
const express = require("express");
const cors = require("cors");
const app = express();
require('./dbconfig/dbconfig');

app.use(cors());
app.use(express.json());


app.use('/crud',require("./rutas/crud"));
app.use('/juegos',require("./rutas/juegos"));




app.listen(3001, console.log("iam ur father"));