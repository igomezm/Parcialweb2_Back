const dbManager = require ('../database.config/database.manager');


function createPost (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newPostObject = {
        idUser : req.body.idUser,
        message: req.body.message,
        published_date : req.body.published_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Post.create(newPostObject).then (
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
async function findAllPost (req, res){
    try {
        //Execute query
        const posts = await dbManager.Post.findAll ();
        
        //Send response
        res.json({
                data: posts
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
async function findOnePost (req, res){
    try {
        const { idPost } = req.params;
        console.log(idPost);

        //Execute query
        const user = await dbManager.Post.findOne({
            where: {
                idPost : idPost
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
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
function deletePostByidPost (req, res){ 
    dbManager.Post.destroy(
        {where : {idPost : req.params.idPost}}
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
exports.createPost = createPost; 
exports.findAllPost = findAllPost; 
exports.findOnePost = findOnePost; 
exports.deletePostByidPost = deletePostByidPost;