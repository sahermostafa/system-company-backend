const express = require('express')
require('express-async-errors')
const app = express()
const db = require('./config/database')
const bodyParser = require('body-parser')
const logge = require('./config/logg')



//bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//router
const events = require('./routes/event-router');
const users = require('./routes/user');
const auths = require('./routes/auth');

app.get('/',(req,res) => {
    res.send('Hello Node')
});


app.use('/event',events);
app.use('/user',users);
app.use('/auth',auths);
app.all('*',(req,res,next) => {
    res.status(404).json({
        status:'false',
        message:'page not found'
    })
})

app.listen(5000, () => {
    logge.info('server running');
})
