const express = require('express');
const Member = require("../models/member");
const produk = require('../models/produk');
const Sale = require('../models/sale');
const router = express.Router();

router.get('/logout', (request, response) => {
    request.session.isLoggedIn = false;
    response.redirect('/')
})

router.get('/lupa-kata-sandi-verification', (req, res) => {
  res.render('pages/lupa-kata-sandi-verification')
});

router.post('/lupa-kata-sandi-verification', async(request, response) => {
  const email = request.body.email;
  console.log(email);
 
  if(email === "abcd@gmail.com"){
    response.redirect('/lupa-kata-sandi-verification')
  }
  else{
    response.render('pages/lupa-kata-sandi', { layout: false, error: 'Email anda tidak terdaftar!' });
  }
})
  

router.post('/login', async(request, response) => {
    const phone_number = request.body.phone_number;
    const password = request.body.password;
    const value = request.body.flexRadioDefault;
    console.log(phone_number, password, value);
    if (phone_number === "628123456789" && password === "12345") {
        request.session.isLoggedIn = true;
        // redirect to member area
        response.redirect('/');
      } 
      else {
        // render the login page with error information
        request.session.isLoggedIn = false;
        response.render('pages/login', { layout: false, error: 'Nomor WhatsApp atau Kata sandi salah!' });
      }
})

router.post('/register', async(request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const phone_number = request.body.phone_number;
  const password = request.body.password;
  console.log(name, email, phone_number, password);

  var member_to_insert = new Member({
    name: name,
    email: email,
    phone_number: phone_number,
    password: password
  });

  member_to_insert.save((err, dt) => {
    if (err) console.log(err);
  });
})

//const id, name, phone_number, user_id, server, game, product, price, date, payment, status, Kode, denom, payment;

// router.post('/arena-of-valor', async(request, response) => {
//   const name = request.body.name;
//   const phone_number = request.body.phone_number;
//   const user_id = request.body.userID;
//   const server = request.body.server;
//   const denom = request.body.denom;
//   const payment = request.body.payment;
  
//   console.log(name, phone_number, user_id, server, denom, payment);

//   var sale_to_insert = new Sale({
//     name: name,
//     phone_number: phone_number,
//     user_id: user_id,
//     zone: zone,
//     product: denom,
//     payment: payment
//   });

//   sale_to_insert.save((err, dt) => {
//     if (err) console.log(err);
//   });
// })

module.exports = router;