const express = require('express');
const ejs = require('ejs');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index')
});

router.get('/tentang-kami', (req, res) => {
    res.render('pages/tentang-kami')
});

router.get('/kebijakan-privasi', (req, res) => {
    res.render('pages/kebijakan-privasi')
});

//kategori
router.get('/game', (req, res) => {
    res.render('pages/game')
});

router.get('/entertainment', (req, res) => {
    res.render('pages/entertainment')
});

router.get('/voucher', (req, res) => {
    res.render('pages/voucher')
});

//

module.exports = router;