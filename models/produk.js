const mongoose = require('mongoose')

    produkSchema = mongoose.Schema({
        _id: String,
        category: String,
        publisher: String,
        name: String,
        price: String,
        image: String
});

module.exports = mongoose.model("Produk", produkSchema);

