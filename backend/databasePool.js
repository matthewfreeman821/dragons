const { Pool } = reuire('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;