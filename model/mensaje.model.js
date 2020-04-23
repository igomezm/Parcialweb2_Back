module.exports = (sequelize, Sequelize) =>{
    const mensaje  = sequelize.define ("mensaje",{

        idUser_receptor: {
            type: Sequelize.INTEGER
        },
        idUser_emisor : {
            type: Sequelize.INTEGER
        },
        message: Sequelize.STRING

    }, {
        tableName: "mensaje"
    });
    return mensaje;
}


