var mysql = require('mysql');

var db = {};

db.query = function(sql,callback){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'work'
    })
    con.query(sql,(err,results) => {
        callback(err,results);
    });

    con.end();
}
db.queryParam = function (sql,param, callback) {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'work'
    })
    con.query(sql, param,(err, results) => {
        callback(err, results);
    });

    con.end();
}


module.exports = db;