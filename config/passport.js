const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/member");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({
            usernameField: "phone_number"
        }, (phone_number, password, done) => {
            //user cocok
            User.findOne({
                phone_number: phone_number
                })
                .then((user) => {
                    if (!user) {
                        return done(null, false, {
                            message: "Nomor WhatsApp tidak terdaftar"
                        });
                    }

                    //cek password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {
                                message: "password salah"
                            });
                        }
                    });
                })
                .catch((err) => console.log(err));
        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    
};