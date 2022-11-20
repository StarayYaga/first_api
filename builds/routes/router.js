const { database } = require("../config");
const db = require('../psql/psql')

const
    express = require("express"),
    router = express.Router();

express.json()
const urlencodedParser = express.urlencoded({extended: false});

router.post('/user', urlencodedParser, (req, res)=>{
    db.query(`insert into users (tg_id) values (${req.body.tid})`)
    db.query(`select * from users where tg_id = '${req.body.tid}';`, (err, data) => {
        res.send(data.rows)
    })
})

router.get('/users', (req, res)=>{
    console.log('connect')
    db.query("select * from users;", (err, data) => {
        res.send(data.rows)
    })
    console.log(req.body);
})

router.delete('/user', urlencodedParser, (req, res)=>{
    db.query(`delete from users where tg_id =  '${req.body.tid};'`)
    db.query(`select * from users where tg_id = '${req.body.tid}';`, (err, data) => {
        res.send(data.rows)
    })
})
        
module.exports = router