var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.query("select * from tab_show", (err, results) => {
        res.render('user', { data: results });
    })

});


module.exports = router;
