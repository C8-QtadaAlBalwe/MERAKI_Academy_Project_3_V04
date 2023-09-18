const express = require("express");
const articleRouter = express.Router();
// Import articles controllers

const {createNewArticle,getAllArticles,getArticlesByAuthor}=require("../controllers/articles");
module.exports = articleRouter;
const authentication = require("../middleware/authentication");
articleRouter.post("/",authentication,createNewArticle);
articleRouter.get("/",authentication,getAllArticles);
articleRouter.get("/search_1",authentication,getArticlesByAuthor);





/*
 * Testing Objects:
 * Article: 
 {
    "title":"Hello World",
    "description":"This is for testing",
}
*/
