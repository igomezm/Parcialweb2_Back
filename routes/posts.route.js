var express = require('express');
var router = express.Router();
const postController=require ('../controllers/post.controller');

router.get('/', postController.findAllPosts);
/**
 * GET Route to find post by id
 */
router.get('/:idPost', postController.findOnePost);
/**
 * POST Route to create post
 */
router.post ('/',postController.createPost);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idPost',postController.updatePost);
/**

 * DELETE Route to delete an user by username
 */
router.delete ('/:idPost',postController.deletePost);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',postController.deleteAllPosts);




/**
 * TASK:
 * ADD THE MISSING ROUTES ______________________________________________________
 */

// Export router
module.exports = router;
