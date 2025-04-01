const pool = require('../config/db');

const getMerchants = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
      if (error) return reject(error);
      resolve(results.rows);
    });
  });
};

const createMerchant = (body) => {
  return new Promise((resolve, reject) => {
    const { name, email } = body;
    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) return reject(error);
      resolve(`A new merchant has been added: ${results.rows[0]}`);
    });
  });
};

const deleteMerchant = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) return reject(error);
      resolve(`Merchant deleted with ID: ${id}`);
    });
  });
};

module.exports = { getMerchants, createMerchant, deleteMerchant };
