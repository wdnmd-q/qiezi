var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.query("select * from tab_show", (err, result) => {
        res.render('admin', { data: result });
    })

});
router.post('/', (req, res) => {
    db.queryParam("select * from tab_show where name = ? or title=?", [req.body.search, req.body.search], (err, result) => {
        res.render('admin', { data: result });
    });
})

router.get('/add', (req, res) => {
    res.render('add')
})
router.post('/add', (req, res) => {
    db.queryParam("insert into tab_show(name,title) value (?,?)", [req.body.name, req.body.title], (err, result) => {
        res.redirect('/admin');
    })
});
router.get('/update/:id', (req, res) => {
    db.queryParam("select * from tab_show where id=?", [req.params.id], (err, result) => {
        res.render('update', { obj: result[0] })
    })
    router.post('/update/', (req, res) => {
        db.queryParam("update tab_show set name = ? , title = ? where id = ?", [req.body.name, req.body.title, req.body.id], (err, result) => {
            res.redirect('/admin');
        })
    });
})

router.get('/del/:id', (req, res) => {

    db.queryParam("delete from tab_show where id='" + req.params.id + "'", function () {
        res.redirect('/admin')
    })
});
module.exports = router;