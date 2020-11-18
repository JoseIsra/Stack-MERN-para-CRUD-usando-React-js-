

module.exports = (sequelize , type)=>{
    return sequelize.define('games', {

        nombre:{
            type:type.STRING
        },
        genero:{
            type:type.STRING
        },
        consola:{
            type:type.STRING
        }
    },{
        timestamps:false
    }
    )
}