const express = require('express')
const config = require('./builds/config')
const router = require('./builds/routes/router')
const {exec} = require('child_process')
const db = require('./builds/psql/psql')


const app = express()
const port = config.port

// exec('ls', (err, stdout, stderr)=>{
//     console.log(stdout);
// })

app.use(router)
express.json()
const urlencodedParser = express.urlencoded({extended: false});
app.post('/', urlencodedParser, (req, res)=>{
    
})


app.listen(port, ()=>console.log(`Server was started on ${port} port.`))