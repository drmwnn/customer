const express = require('express');
const { get } = require('mongoose');
const Member = require("../models/member");
const Produk = require('../models/produk');
const Sale = require('../models/sale');
const router = express.Router();
const passport = require("passport");
const multer = require('multer');


function angka(num){
  if(num < 10){
    return "0" + num;
  }else{
    return num;
  }
}

function dateTime(){
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
  if (payment === "alfamart" || payment === "indomaret" || payment === "alfamidi") {
    retail = "yes";
  } else {
    retail = "no";
  }
  var sale_to_insert = new Sale({
    no: no,
    name: name,
    phone_number: phone_number,
    user_id: user_id,
    server: server,
    payment: payment,
    retail: retail,
    price: price,
    game: game,
    publisher: publisher,
    product: product,
    date: date,
    stat_pembayaran: "Belum Dibayar",
    stat_transaksi: "Belum Diproses",
    kode: "-"
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.img = product;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/au2-mobile', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/call-of-duty-mobile', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/cloud-song', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/football-master-2', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/free-fire', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/genshin-impact', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/hyper-front', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/laplace', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/lifeafter', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/lokapala', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/lords-mobile', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/mobile-legends', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/omega-legends', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/point-blank', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/pubg-mobile', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/speed-drifters', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/tom-and-jerry-chase', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/tower-of-fantasy', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/werewolf', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/garena-shell', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/minecraft', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/smile-one', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/youtube-premium', async(request, response) => {
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
  request.session.cekNomor = phone_number;
  const query = Produk.findOne({ _id: denom });
  const doc = await query.exec();
  product = doc.name;
  game = doc.category;
  publisher = doc.publisher;
  price = doc.price;
  date = dateTime();
  //console.log(date);
  query.getFilter();

  input();
  request.session.no = no;
  request.session.gambar = true;
  response.redirect('/pembayaran');
});

router.post('/pembayaran', async(request, response) => {
  if (!request.file) {
      const error = new Error('Please upload a file');
      error.errorStatus = 400;
      throw error;
  }

  const image = request.file.path;
  const query = Sale.findOne({ no: request.session.no });
  query.exec((error, data) => {
    data.updateOne({
      stat_pembayaran: "Sedang di Verifikasi", image : image}, (err, raw) => {
      if (err) console.log(err);
    });
    
  });
  
  request.session.gambar = false;
  response.redirect('/pembayaran');
});

module.exports = router;