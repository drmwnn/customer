const mongoose = require('mongoose')

    produkSchema = mongoose.Schema({
        _id: String,
        category: String,
        name: String,
        price: Number
});

module.exports = mongoose.model("Produk", produkSchema);

