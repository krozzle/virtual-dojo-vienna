// Create the users table
exports.up = async sql => {
  sql`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      name VARCHAR NOT NULL,
      handle VARCHAR NOT NULL,
      gamesPlayed VARCHAR NOT NULL,
    )
  `;
};

// Delete the users table
exports.down = async sql => {
  sql`
    DROP TABLE products
  `;
};
