var MongoDB = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017",
    dbName = "AsdarrID";

MongoDB.connect(url, function(err, client) {
    if (err) throw err;
    var db = client.db(dbName);
    db.collection("data")
    .insertOne({
        menu: "Nasi Goreng",
        description: "Nasi Goreng is a popular Indonesian fried rice dish.",
        price: 10000,
        isavailable: true
    }, (error, db) => {
        if (error) throw error;
        console.log(db);
    })
});
