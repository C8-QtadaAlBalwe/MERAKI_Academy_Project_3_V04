const express = require("express");
const articleRouter = express.Router();
// Import articles controllers

const {createNewArticle}=require("../controllers/articles");
module.exports = articleRouter;
const authentication = require("../middleware/authentication");
articleRouter.post("/",authentication,createNewArticle);







/*
 * Testing Objects:
 * Article: 
 {
    "title":"Hello World",
    "description":"This is for testing",
}
*/
