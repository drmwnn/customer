const { request, response } = require('express');
const express = require('express');
const user = require('../models/member');
const Produk = require('../models/produk');
const Sale = require('../models/sale');
const router = express.Router();

router.get('/', (req, res) => {
    req.session.gambar = true;
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

router.get('/register', (req, res) => {
    res.render('pages/register')
});

router.get('/lupa-kata-sandi', (req, res) => {
    res.render('pages/lupa-kata-sandi')
});

router.get('/lupa-kata-sandi-verification', (req, res) => {
    res.render('pages/lupa-kata-sandi-verification')
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

router.get("/pembayaran",(request, response) => {
    var metode_img, norek, cabang, img;
    const query2 = Sale.findOne({ no: request.session.no });
        query2.exec((error, data) => {
            //console.log(data);
            nomor = data.no;
            category = data.game,
            publisher = data.publisher,
            harga = data.price;
            pembayaran = data.stat_pembayaran;
            transaksi = data.stat_transaksi;
            biaya_layanan = "0";
            total = harga;
            metode = data.payment;
            user_id = data.user_id;
            item = data.product;
            waktu = data.date;
            kode = data.kode;
            tagihan = "Nomor Rekening";
            norek = data.kode;
            cabang = "-"

            if(pembayaran == "Belum Dibayar"){
                request.session.gambar = true;
            }else{
                request.session.gambar = false;
            }
            //console.log(request.session.gambar);
            
            if (metode === "gopay") {
                metode_img = "gopay.svg";
                norek = "083123658885";
                cabang = "-";
            } else if (metode === "ovo") {
                metode_img = "ovo.svg";
                norek = "083123658885";
                cabang = "-";
            } else if (metode === "dana") {
                metode_img = "dana.svg";
                norek = "083123658885";
                cabang = "-";
            } else if (metode === "linkaja") {
                metode_img = "linkaja.svg";
                norek = "083123658885";
                cabang = "-";
            } else if (metode === "shopeepay") {
                metode_img = "shopeepay.svg";
                norek = "083123658885";
                cabang = "-";
            } else if (metode === "bca") {
                metode_img = "bca.svg";
                norek = "5930655386";
                cabang = "-";
            } else if (metode === "bni") {
                metode_img = "bni.svg";
                norek = "1153293947";
                cabang = "-";
            } else if (metode === "bri") {
                metode_img = "bri.svg";
                norek = "416101033757531";
                cabang = "-";
            } else if (metode === "mandiri") {
                metode_img = "mandiri.svg";
                norek = "1650002006337";
                cabang = "-";
            } else if (metode === "alfamart"){
                metode_img = "alfamart.svg";
                norek = kode;
                cabang = "-";
                tagihan = "Kode Pembayaran";
                biaya_layanan = "2.500";
            } else if (metode === "alfamidi"){
                metode_img = "alfamidi.svg";
                norek = kode;
                cabang = "-";
                tagihan = "Kode Pembayaran";
                biaya_layanan = "2.500";
            } else if (metode === "indomaret"){
                metode_img = "indomaret.svg";
                norek = kode;
                cabang = "-";
                tagihan = "Kode Pembayaran";
                biaya_layanan = "2.500";
            }
            //console.log(metode_img);
            const query3 = Produk.findOne({name: item});
            query3.exec((err, data) => {
                img = data.image;
                //console.log(data.image);
            });

        
        query2.getFilter();
        response.render('pages/pembayaran', {
            category: category, 
            publisher: publisher,
            user_id: user_id,
            product: item, 
            date:waktu, 
            price: harga, 
            id: nomor, 
            stat_pembayaran: pembayaran,
            stat_transaksi: transaksi,
            total: total,
            biaya_layanan: biaya_layanan,
            metode_img : metode_img,
            norek: norek,
            cabang: cabang,
            kode: kode,
            tagihan: tagihan,
            logoGame: img
        });
        //console.log(request.session.gambar);
    });
});

router.get('/profil', (request, response) => {
    const query2 = Sale.find({ phone_number: request.session.user.phone_number });
        query2.exec((error, data) => {
        query2.getFilter();
        response.render('pages/profil', {
            data: data
        });
    });
});

module.exports = router;