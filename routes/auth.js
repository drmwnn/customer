const express = require('express');
const User = require('../models/user')
const price = require('../models/price');
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
  //User.findOne
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
    console.log(phone_number, password);
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

module.exports = router;