const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()


app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'som3_secret_keys',
    cookie: {}
}))

app.use((request, response, next) => { 
    response.locals.isLoggedIn = request.session.isLoggedIn;
    next();
})

mongoose.connect(('mongodb://127.0.0.1:27017/AsdarrID'), (err,res) => {
        if(err){
            console.error(err);
        }
        else{
            console.log('Database Sudah terhubung')
        }
    })
    
const indexRouter = require('./routes/index');
const userRouter = require('./routes/auth');
const { request, response } = require('express');
const port = process.env.PORT || 3000;
app.use('/', indexRouter);
app.use('/auth', userRouter);
//port 
app.listen(port, ()=> {
    console.log(`Server sudah berjalan di port ${port}`);
})