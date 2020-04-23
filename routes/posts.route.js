var express = require('express');
var router = express.Router();

const postController = require ('../controllers/post.controller'); 


router.get('/', postController.findAllPost);
/**
 * GET Route to find user by id
 */
router.get('/:idPost', postController.findOnePost);
/**
 * POST Route to create user
 */
router.post ('/',postController.createPost);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idPost',postController.deletePostByidPost);


/**
 * TASK:
 * ADD THE MISSING ROUTES ______________________________________________________ 
 */

// Export router
module.exports = router;
  