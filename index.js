const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
const flash = require("connect-flash");
const passport = require("passport");
const multer = require('multer');
require("./config/passport")(passport);
const port = process.env.PORT || 3000;

const fileStorage = multer.diskStorage ({
    destination: (request, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (request, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
});

const fileFilter = (request, file, cb) => {
    if (file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));

// express session middleware
app.use(
    session({
        secret: "rahasia",
        resave: true,
        saveUninitialized: true,
    })
);
 
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

// global var
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.isLoggedIn = req.isAuthenticated();
    res.locals.user = req.user;
    res.locals.gambar = req.session.gambar;
    req.session.user = req.user;
    next();
});

mongoose.connect(('mongodb://127.0.0.1:27017/AsdarrID'), (err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Sudah terhubung')
    }
})

const index = require('./routes/index');
const user = require('./routes/auth');
const sale = require('./routes/sale');



app.use('/', index);
app.use('/auth', user);
app.use('/sale', sale);

//port 
app.listen(port, ()=> {
    console.log(`Server sudah berjalan di port ${port}`);
})