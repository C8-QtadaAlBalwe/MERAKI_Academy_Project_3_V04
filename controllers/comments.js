const { pool } = require("../models/db");
// This function creates a new comment for a specific article
const createNewComment = (req, res) => {

  const id =req.params.id;
  const author_id = req.token.author_id;
  const comment = req.body ;
  const placeholder = [ author_id ,id, comment];

  pool
    .query(
      `INSERT INTO comments (commenter_id,article_id,comment) VALUES ($1,$2,$3) RETURNING *;`,placeholder
    )
    .then((results) => {
      res.status(201).json({
        success: true,
        message: "Comment created successfully",
        results: results.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};
// This function returns the comments
const getCommentsByArticle = (req, res) => {
  const id =req.params.id;
  const placeholder=[id]
  pool.query(`SELECT Comment FROM comments WHERE article_id = ($1)`,placeholder)
  .then((results) => {
    if(!results.rows){
     res.status(404).json({
      success:false,
      massage:"no comments on this articles"
     })
    }
    res.status(201).json({
      success: true,
      message: `All comments for article: ${article_id}`,
      results: results.rows,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: "Server error",
      err: err.message,
    });
  });
};
module.exports = {createNewComment,getCommentsByArticle};
