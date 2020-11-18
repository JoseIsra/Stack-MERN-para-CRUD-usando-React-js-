const router = require("express").Router();
const {Juego} = require("../dbconfig/dbconfig");



router.get("/", async(req, res )=>{
const resultados = await Juego.findAll();

const resultadosParaServer = JSON.stringify(resultados);
    res.send(resultadosParaServer);
    res.end();
});

router.delete('/:id/delete', async(req, res)=>{
    const {id} = req.params;
    await Juego.destroy({
        where:{
            id
        }
    });
    console.log("done destro");
    
});


router.get("/ver/:id", async(req, res )=>{
    const {id} = req.params;
    const resultados = await Juego.findByPk(id);
    
    const resultadosParaServer = JSON.stringify(resultados);
        res.send(resultadosParaServer);
        res.end();
    });
    
router.post('/edit/:id',async(req,res)=>{
    const {id} = req.params;
    const {nombre, genero, consola} = req.body;
        await Juego.update({
            nombre:nombre,
            genero:genero,
            consola:consola
        },{
            where:{
                id:id
            }
        });
    });


module.exports = router;