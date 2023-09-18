const express = require("express");

// Create comments router
const commentRouter = express.Router();

const {createNewComment}=require("../controllers/comments");

module.exports = commentRouter;
commentRouter.post("/:id",createNewComment)

/*



 * Testing Object:
{
  "comment":"Nice"
}
*/
