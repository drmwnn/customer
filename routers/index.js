const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
    });

    module.exports = router;