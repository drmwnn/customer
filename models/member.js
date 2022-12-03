const mongoose = require("mongoose"),
    memberSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        phone_number: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        }
    });
module.exports = mongoose.model("Member", memberSchema);