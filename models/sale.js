const mongoose = require("mongoose"),
    saleSchema = mongoose.Schema({
        no: Number,
        name: String,
        phone_number: Number,
        user_id: String,
        server: String,
        game: String,
        product: String,
        price: Number,
        payment: String,
        date: Date,
        stat_pembayaran: String,
        stat_transaksi: String,
        Kode: String
    });
    module.exports = mongoose.model("Sale", saleSchema);