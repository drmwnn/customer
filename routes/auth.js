const express = require('express');
const User = require('../models/user')
const router = express.Router();

router.get('/login', async (request, response) => {
    response.render('pages/login')
})
router.get('/logout', (request, response) => {
    request.session.isLoggedIn = false;
    response.redirect('/')
})
router.post('/login', async(request, response) => {
    const phone_number = request.body.phone_number;
    const password = request.body.password;
    console.log(phone_number, password);
    if (phone_number === "6281" && password === "admin") {
        // implement sessions to check user is logged-in
        
        request.session.isLoggedIn = true;
        // redirect to member area
        response.redirect('/');
      } 
      else {
        // render the login page with error information
        request.session.isLoggedIn = false;
        response.render('pages/login', { layout: false, error: 'Wrong username or password.' });
      }
      
    
})

module.exports = router;