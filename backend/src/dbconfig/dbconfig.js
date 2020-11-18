const {Sequelize} = require('sequelize');
const juegoModelo = require('../modelos/juego');


const sequelize = new Sequelize('DB_NAME','DB_USER','DB_PASSWORD',{
    host:'localhost',
    dialect:'mysql'
});

const Juego = juegoModelo(sequelize, Sequelize);

sequelize
.sync({force:false})
.then(()=>console.log("tablas sincronizadas"))
.catch((error)=>console.log(error));

module.exports= {
    Juego
}

