const dbManager = require ('../database.config/database.manager');

function  createmensaje (req, res) {

    if (!req.body) {
        res.status(400).send({
            message: "Request body is empty!!!!"
        });
        return;
    }
}
const newmensajeObject = {
    id_emisor: req.body.iduser_emisor,
    id_reptor: req.body.id_reptor,

    creation_date: req.body.creation_date
}

dbManager.mensaje.create(newmensajeObject).then (
    data => {
        res.send (data);
    }
).catch (
    e => {
        // Print error on console
        console.log(e);
        // Send error message as a response
        res.status(500).send({
            message: "Some error occurred"
        });
    }
);