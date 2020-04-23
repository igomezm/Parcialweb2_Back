const dbManager = require ('../database.config/database.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
function createUser (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        username: req.body.username,
        password: req.body.password,
        creation_date: req.body.creation_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
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
}

/**
 * GEt all users
 */
async function findAllUsers (req, res){
    try {
        //Execute query
        const users = await dbManager.User.findAll ();
        
        //Send response
        res.json({
                data: users
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Get user by id
 */
async function findOneUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        //Send response
        res.json(user);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

async function findOneUserByUsername (req, res){
    try {
        const { username } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                username: username
            }
        });
        //Send response
        res.json(user);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Update user
 */
async function updateUser (req, res){
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const updateUserObject = {
        username: req.body.username,
        creation_date: req.body.creation_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.updateUser(updateUserObject,
        {where : {idUser : req.params.idUser}})
    .then (
        data => {
            console.log(data);
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
}

/**
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
function deleteUserByUsername (req, res){ 
    dbManager.User.destroy(
        {where : {username : req.params.username}}
        ).then (
        data => {
            console.log(data);
            res.json(data);
            
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
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function deleteAllUsers (req, res){
    dbManager.User.destroy(
        {where : {}}
        ).then (
        data => {
            console.log(data);
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

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function findAllUsersByCreatedDate (req, res){
 
    try {
        const fecha = new Date(req.params.creation_date);

        //Execute query
        const users = await dbManager.User.findAll (
            {where : {create_date : fecha}}
            );
        
        //Send response
        res.json({
                data: users
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

async function login(req, res){
    try {
        const { username , password } = req.body;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                username: username
            }
        });

        if(user.password == password){
            res.json({
                data: user
        });
        }else{
            res.json(null);
        }
        //Send response
        res.json(user);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}


exports.login = login;
exports.createUser = createUser; 
exports.findAllUsers = findAllUsers; 
exports.findOneUser = findOneUser; 
exports.updateUser = updateUser;
exports.deleteUserByUsername = deleteUserByUsername;
exports.deleteAllUsers = deleteAllUsers;
exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;
exports.findOneUserByUsername = findOneUserByUsername;