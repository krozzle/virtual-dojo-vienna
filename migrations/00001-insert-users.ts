// migrate up -> insert users to database
exports.up = async sql => {
  sql`
    INSERT INTO users (handle) VALUES
      ('Tigra'),
      ('nozarex'),
      ('k.brownie'),
      ('Rele')
  `;
};

// migrate down => remove users from database
exports.down = async sql => {
  sql`
    DELETE FROM products
      WHERE name IN ('Tigra', 'nozarex', 'k.brownie', 'Rele')
  `;
};
