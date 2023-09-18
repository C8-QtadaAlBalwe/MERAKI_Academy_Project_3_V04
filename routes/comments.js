const express = require("express");

// Create comments router
const commentRouter = express.Router();

const {createNewComment ,getCommentsByArticle}=require("../controllers/comments");
const authentication = require("../middleware/authentication")
module.exports = commentRouter;
commentRouter.post("/:id",authentication,createNewComment)
commentRouter.get("/:id",authentication,getCommentsByArticle)


/*
 * Testing Object:
{
  "comment":"Nice"
}
*/
