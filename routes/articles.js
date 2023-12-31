const express = require("express");
const articleRouter = express.Router();
// Import articles controllers

const {createNewArticle,getAllArticles,getArticlesByAuthor,getArticleById,updateArticleById,deleteArticleById,deleteArticlesByAuthor}=require("../controllers/articles");
module.exports = articleRouter;
const authentication = require("../middleware/authentication");
articleRouter.post("/",authentication,createNewArticle);
articleRouter.get("/",authentication,getAllArticles);
articleRouter.get("/search_1",authentication,getArticlesByAuthor);
articleRouter.get("/search_2/:id",authentication,getArticleById);
articleRouter.put("/:id",authentication,updateArticleById);
articleRouter.delete("/:id",authentication,deleteArticleById);
articleRouter.delete("/:id/author",authentication,deleteArticlesByAuthor);


/*
 * Testing Objects:
 * Article: 
 {
    "title":"Hello World",
    "description":"This is for testing",
}
*/
