const mongoose = require("mongoose"),
    memberSchema = mongoose.Schema({
        name: String,
        email: String,
        phone_number: Number,
        password: String
    });
module.exports = mongoose.model("Member", memberSchema);