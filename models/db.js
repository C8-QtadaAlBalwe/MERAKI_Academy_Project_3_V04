// connecting to PostgreSQL
const { Pool } = require("pg");

const connectionString = process.env.DB_URL;

const pool = new Pool({
  // the line below is equivalent to connectionString: connectionString,
  connectionString,
});
pool.connect((err, pool) => {
  if (err) {
    console.error("Pool error: ", err.message, err.stack);
    return;
  }
  console.error("Pool connected on: ", pool.user);
});

// export the pool to be able to use it to run Queries
module.exports = {
  pool,
};