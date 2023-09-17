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
  //TODO: write your code here
};

// This function returns article by its id
const getArticleById = (req, res) => {
  //TODO: write your code here
};

// This function updates article by its id
const updateArticleById = (req, res) => {
  //TODO: write your code here
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
  createNewArticle,getAllArticles
};
