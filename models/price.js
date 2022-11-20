const mongoose = require('mongoose')

const produkSchema = {
    id: String,
    category: String,
    name: String,
    price: Number
}

const produk = mongoose.model('produk', produkSchema);

