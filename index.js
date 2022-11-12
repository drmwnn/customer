const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded());
//layouts

// enabling session
app.use(session({
    secret: 'some_secret_key',
    cookie: {}
}));

mongoose.connect(('mongodb://127.0.0.1:27017/AsdarrID')
    , (err,res) => {
        if(err){
            console.error(err);
        }
        else{
            console.log('Database connected')
        }
    })

//routes
const index = require('./routes/index');

app.use('/', index)

app.listen(process.env.PORT || 4000, function(){
  console.log("Server runs at port 4000...");
});


