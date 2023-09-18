const express = require("express");

// Create comments router
const commentRouter = express.Router();

const {createNewComment ,getCommentsByArticle}=require("../controllers/comments");

module.exports = commentRouter;
commentRouter.post("/:id",createNewComment)
commentRouter.get("/:id",getCommentsByArticle)


/*
 * Testing Object:
{
  "comment":"Nice"
}
*/
