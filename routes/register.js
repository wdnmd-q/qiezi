let express = require('express');
let router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node"
});
connection.connect();

router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', (req, res) => {

    var insertSql = 'INSERT INTO register(name, pass, cpass, phone) VALUES(?,?,?,?)';
    connection.query(insertSql, [req.body.name, req.body.pass, req.body.cpass, req.body.phone], function (err, result, fields) {

        if (req.body.pass != req.body.cpass) {
            res.send('两次密码输入不相同')
            
        } else {
            res.redirect('/login');
            return
        }





        if (err) {
            console.log('err', err);
            return;
        } else {

            res.redirect('/login');
        }
    });
});

module.exports = router;