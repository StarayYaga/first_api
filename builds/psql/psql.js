const {Client} = require('pg');
const config = require('../config.js')

function db(){
    const db = new Client({
        user: config.user_db,
        host: config.host_db,
        database: config.database,
        password: config.password_db,
        port: config.port_db
    });

    db.connect();
    return db

};

module.exports = db()
//пример запроса
// DB.query("select bc.*, u.tg_id from briefcases bc left join users u on u.id=bc.case_id where tg_id = '1';", (err, data) => {
//     const rows = data.rows
//     // console.log(rows);
//     DB.end();
//     // return rows
// });