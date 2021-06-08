let express = require('express');
let router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node'
})
connection.connect();


router.get('/', function (req, res) {
    res.render('login');
});
router.post('/', (req, res) => {


    var selectSQL = "SELECT name , pass FROM  register WHERE name = '" + req.body.name + " ' AND pass= " + req.body.pass +" "

    // "select name,pass from user where name = '" + req.body.name + "' and pass = " + req.body.pass + "";
    connection.query(selectSQL, function (err, result, fields) {
        if (err) {
            console.log('err', err);
            return;
        } else {

            if (result == '') {
                res.send('登录失败');
            }

            else {
                if (req.body.name == '汤子扬' && req.body.pass == 123456) {
                    res.redirect('/admin');
                } else {
                    res.redirect('/user');
                }
            }
        }
    });
});

module.exports = router;
