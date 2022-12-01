const express = require('express');
const { get } = require('mongoose');
const Member = require("../models/member");
const Produk = require('../models/produk');
const Sale = require('../models/sale');
const router = express.Router();
const passport = require("passport");

function angka(num){
  if(num < 10){
    return "0" + num;
  }else{
    return num;
  }
}

function dateTime(){
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "October", "November", "December"];
  var today = new Date();
  var date = +today.getDate() + ' ' + months[today.getMonth()]+ ', ' + today.getFullYear()
  var time = angka(today.getHours()) + ":" + angka(today.getMinutes()) + ":" + angka(today.getSeconds());
  var dateTime = date+'  '+time + ' WIB';
  return dateTime;
}
function getNo() {
  Sale.find({}, (err, data) => {
    if (err) console.log(err);
    no = (10000 + data.length) + 1;
  });
}

function input() {
  var sale_to_insert = new Sale({
    no: no,
    name: name,
    phone_number: phone_number,
    user_id: user_id,
    server: server,
    payment: payment,
    price: price,
    game: game,
    publisher: publisher,
    product: product,
    date: date,
    stat_pembayaran: "Belum Dibayar",
    stat_transaksi: "Belum Diproses"
  });
  sale_to_insert.save((err, dt) => {
    if (err) console.log(err);
  });
}

router.post('/arena-of-valor', async(request, response) => {
  user_id = request.body.userID;
  server = request.body.server;
  denom = request.body.denom;
  payment = request.body.payment;
  no = getNo();
  if(request.session.user){
    if (request.isAuthenticated()) {
      name = request.session.user.name;
      phone_number = request.session.user.phone_number;
    }
  }else{
    name = request.body.name;
    phone_number = request.body.phone_number;
  }

  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  response.redirect('/pembayaran');
});

module.exports = router;