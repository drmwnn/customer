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

//produk
router.get('/arena-of-valor', (req, res) => {
    res.render('pages/arena-of-valor')
});

router.get('/au2-mobile', (req, res) => {
    res.render('pages/au2-mobile')
});

router.get('/call-of-duty-mobile', (req, res) => {
    res.render('pages/call-of-duty-mobile')
});

router.get('/cloud-song', (req, res) => {
    res.render('pages/cloud-song')
});

router.get('/football-master-2', (req, res) => {
    res.render('pages/football-master-2')
});



module.exports = router;