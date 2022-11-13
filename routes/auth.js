const express = require('express');

const router = express.Router();

router.get('/login', async (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    res.render('pages/login', { layout: false });
  }
});

router.post('/login', async (req, res) => {
  // get user input
  const phone_number = req.body.phone_number;
  const password = req.body.password;

  if (phone_number === "6281" && password === "admin") {
    // implement sessions to check user is logged-in
    req.session.user = "admin";

    // redirect to member area
    res.redirect('/');
  } 
  else {
    // render the login page with error information
    res.render('pages/login', { layout: false, error: 'Wrong username or password.' });
  }
});

router.get('/keluar', async (req, res) => {
  // destroy all session
  req.session.destroy();

  // redirect to login
  res.redirect('/login');
});

module.exports = router;