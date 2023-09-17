const express = require("express");
const articleRouter = express.Router();
// Import articles controllers

const {createNewArticle,getAllArticles}=require("../controllers/articles");
module.exports = articleRouter;
const authentication = require("../middleware/authentication");
articleRouter.post("/",authentication,createNewArticle);
articleRouter.get("/",authentication,getAllArticles);






/*
 * Testing Objects:
 * Article: 
 {
    "title":"Hello World",
    "description":"This is for testing",
}
*/
