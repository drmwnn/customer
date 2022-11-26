const express = require('express');
const Member = require("../models/member");
const Produk = require('../models/produk');
const Sale = require('../models/sale');
const router = express.Router();

var id, name, phone_number, user_id, server, game, product, price, date, payment, date, kode, denom, payment;

router.post('/arena-of-valor', async(request, response) => {
  user_id = request.body.userID;
  server = request.body.server;
  denom = request.body.denom;
  payment = request.body.payment;
  name = request.body.name;
  phone_number = request.body.phone_number;
  
  //console.log(name, phone_number, user_id, server, denom, payment);

  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  price = doc.price;
  date = new Date();
  query.getFilter();

  var sale_to_insert = new Sale({
    name: name,
    phone_number: phone_number,
    user_id: user_id,
    server: server,
    payment: payment,
    price: price,
    game: game,
    product: product,
    date: date,
    stat_pembayaran: "Belum Dibayar",
    stat_transaksi: "Belum Diproses",
  });
  sale_to_insert.save((err, dt) => {
    if (err) console.log(err);
  });
  response.redirect('/pembayaran');
})

module.exports = router;