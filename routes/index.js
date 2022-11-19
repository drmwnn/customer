const { request, response } = require('express');
const express = require('express');
const user = require('../models/user');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/index')
});

router.get('/tentang-kami', (req, res) => {
    res.render('pages/tentang-kami')
});

router.get('/kebijakan-privasi', (req, res) => {
    res.render('pages/kebijakan-privasi')
});

//
router.get('/login', (req, res) => {
    res.render('pages/login')
});

router.get('/daftar', (req, res) => {
    res.render('pages/daftar')
});

router.get('/lupa-kata-sandi', (req, res) => {
    res.render('pages/lupa-kata-sandi')
});

router.get('/lupa-kata-sandi-verification', (req, res) => {
    res.render('pages/lupa-kata-sandi-verification')
});


router.get('/profil', (req, res) => {
    res.render('pages/profil')
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

router.get('/free-fire', (req, res) => {
    res.render('pages/free-fire')
});

router.get('/genshin-impact', (req, res) => {
    res.render('pages/genshin-impact')
});

router.get('/hyper-front', (req, res) => {
    res.render('pages/hyper-front')
});

router.get('/laplace', (req, res) => {
    res.render('pages/laplace')
});

router.get('/lifeafter', (req, res) => {
    res.render('pages/lifeafter')
});

router.get('/lokapala', (req, res) => {
    res.render('pages/lokapala')
});

router.get('/lords-mobile', (req, res) => {
    res.render('pages/lords-mobile')
});

router.get('/mobile-legends', (req, res) => {
    res.render('pages/mobile-legends')
});

router.get('/omega-legends', (req, res) => {
    res.render('pages/omega-legends')
});

router.get('/point-blank', (req, res) => {
    res.render('pages/point-blank')
});

router.get('/pubg-mobile', (req, res) => {
    res.render('pages/pubg-mobile')
});

router.get('/speed-drifters', (req, res) => {
    res.render('pages/speed-drifters')
});

router.get('/tom-and-jerry-chase', (req, res) => {
    res.render('pages/tom-and-jerry-chase')
});

router.get('/tower-of-fantasy', (req, res) => {
    res.render('pages/tower-of-fantasy')
});

router.get('/werewolf', (req, res) => {
    res.render('pages/werewolf')
});

router.get('/garena-shell', (req, res) => {
    res.render('pages/garena-shell')
});

router.get('/minecraft', (req, res) => {
    res.render('pages/minecraft')
});

router.get('/smile-one', (req, res) => {
    res.render('pages/smile-one')
});

router.get('/youtube-premium', (req, res) => {
    res.render('pages/youtube-premium')
});

router.get('/pembayaran', (req, res) => {
    res.render('pages/pembayaran')
});

module.exports = router;