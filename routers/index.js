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

router.get('/kategori/entertainment', (req, res) => {
    res.render('pages/kategori/entertainment')
});

router.get('/kategori/game', (req, res) => {
    res.render('pages/kategori/game')
});

router.get('/kategori/voucher', (req, res) => {
    res.render('pages/kategori/voucher')
});

module.exports = router;