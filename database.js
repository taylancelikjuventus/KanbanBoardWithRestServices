const mysql = require("./express_modules/node_modules/mysql2");

module.exports = mysql.createConnection({
    
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'kanban_db'
    
});
