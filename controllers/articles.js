const { pool } = require("../models/db");
// This function creates new article
const createNewArticle = (req, res) => {
  const { title, description } = req.body;
  const author_id = req.token.author_id;
  const placeholder = [title, description, author_id];
  pool
    .query(
      `INSERT INTO articles (title,description,author_id) VALUES ($1,$2,$3) RETURNING *;`,
      placeholder
    )
    .then((resutls) => {
      res.status(201).json({
        success: true,
        massege: "Article created successfully",
        result: resutls.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massege: "Server error",
        err: err.massege,
      });
    });
};

// This function returns the articles
const getAllArticles = (req, res) => {
  pool.query(`SELECT * FROM articles ;`).then((resutls) => {
    res.status(200).json({
      success: true,
      massege: "All the articles",
      result: resutls.rows,
    });
  }).catch((err)=>{
    res.status(500).json({
    success: false,
    message: "Server error",
    err: err.message
    })
  });
};

//This function returns articles by author
const getArticlesByAuthor = (req, res) => {
  const author_id = req.token.author_id;
  placeholder=[author_id]
  pool.query(`SELECT title FROM articles FULL OUTER JOIN users
  ON articles.author_id=users.id ;`).then((resutls)=>{
    if(!resutls.rows){
      res.status(404).json({
        success:false,
        massege:`The author: ${author_id} has no articles`})}
        else{
   res.status(200).json({
    success:true,
    message: `All articles for the author: ${author_id}`,
    articles: resutls.rows
   })}
  }).catch((err)=>{
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err.message
      })
  })
};

// This function returns article by its id
const getArticleById = (req, res) => {
  const id =req.params.id;
  const placeholder=[id]
  pool.query(`SELECT title FROM articles WHERE id= $1`,placeholder).then((results)=>{
    res.status(200).json({
      success:true,
      massege: `The article with id: ${id}`,
      article:results.rows
    })
  }).catch((err)=>{
    res.status(500).json({ 
      success: false,
      message: "Server error",
      err: err.message
    })
   
  })
};

// This function updates article by its id
const updateArticleById = (req, res) => {
 const id =req.params.id;
 const description= req.body.description
 const title= req.body.title
 const placeholder=[id,title,description];

 pool.query(`UPDATE articles
 SET title = $2, description = $3 WHERE id= $1 RETURNING title,description;` ,placeholder).then((results)=>{
  console.log(results)
  res.status(200).json({
    success: true,
    message: `Article with id: ${id} updated successfully`,
    article: results.rows
  })
 }).catch((err)=>{
  res.status(500).json({
    success: false,
    message: "Server error",
    err: err.message,
  })
 }) 

};

// This function deletes a specific article by its id
const deleteArticleById = (req, res) => {
  //TODO: write your code here
};

// This function deletes all the articles for a specific author
const deleteArticlesByAuthor = (req, res) => {
  //TODO: write your code here
};

module.exports = {
  createNewArticle,getAllArticles,getArticlesByAuthor,getArticleById,updateArticleById
};
