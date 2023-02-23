const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port : 3306,
    user: 'root',
    password: 'Sagar@154',
    waitForConnections: true,
    connectionLimit: 10,
    database: 'user_service_db',

})

module.exports = {
    pool,
}