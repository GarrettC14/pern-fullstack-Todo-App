const Pool = require('pg').Pool;

const pool = new Pool({
    // user: "postgres",
    user: "daiyan",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.export = pool;

