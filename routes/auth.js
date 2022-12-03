const express = require('express');
const User = require("../models/member");
const produk = require('../models/produk');
const Sale = require('../models/sale');
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

router.get('/lupa-kata-sandi-verification', (req, res) => {
  res.render('pages/lupa-kata-sandi-verification')
});

router.post('/lupa-kata-sandi-verification', async(request, response) => {
  const phone_number = request.body.phone_number;
  //console.log(phone_number);
 
  if(email === "6283123658885"){
    response.redirect('/lupa-kata-sandi-verification')
  }
  else{
    response.render('pages/lupa-kata-sandi', { layout: false, error: 'Nomor WhatsApp anda tidak terdaftar!' });
  }
})

router.post('/login', async(request, response, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(request, response, next);
})

router.post('/register', async(request, response) => {
  const name = request.body.name;
  const phone_number = request.body.phone_number;
  const password = request.body.password;

  let errors = [];

  if (!name || !phone_number || !password) {
    errors.push({ msg: "Harap data di input semua" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      phone_number,
      password,
    });
  } else {
    //validasi oke lanjut database
    User.findOne({ phone_number: phone_number }).then((user) => {
      if (user) {
        //usernya ada
        errors.push({ msg: "Nomor WhatsApp sudah terdaftar" });
        response.render("register", {
          errors,
          name,
          phone_number,
          password,
        });
      } else {
        const newUser = new User({
          name,
          phone_number,
          password,
        });
        //hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //set password jadi hash
            newUser.password = hash;

            //simpan user
            newUser
              .save()
              .then((user) => {
                request.flash(
                  "success_msg",
                  "Anda berhasil registrasi, Silahkan Login"
                );

                response.redirect("/login");
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
})

router.get("/logout", function(req, res, next) {
  req.logout(function(err) {
      if (err) {
          return next(err);
      }
      res.redirect("/");
  });
});

module.exports = router;