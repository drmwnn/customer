const mongoose = require("mongoose"),
    saleSchema = mongoose.Schema({
        no: Number,
        name: String,
        phone_number: Number,
        user_id: String,
        server: String,
        game: String,
        publisher: String,
        product: String,
        price: String,
        payment: String,
        retail: String,
        date: String,
        stat_pembayaran: String,
        stat_transaksi: String,
        kode: Array,
        image: String
    });
    module.exports = mongoose.model("Sale", saleSchema);