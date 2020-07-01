// Create the users table
exports.up = async sql => {
  sql`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username VARCHAR NOT NULL,
      password_hash VARCHAR NOT NULL,
      name VARCHAR NOT NULL,
      role VARCHAR NOT NULL,
      gamesPlayed VARCHAR NOT NULL,
      created_on TIMESTAMP NOT NULL,
      last_login TIMESTAMP
    )
  `;
};

// Delete the users table
exports.down = async sql => {
  sql`
    DROP TABLE users
  `;
};
