const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.MONGO_ATLAS_DB
    mongoose.connect(DB_URI,(err, res) => {
        if (!err) {
            console.log("****** DATABASE CONNECTED ******");
        } else {
            console.log("****** CONNECTION ERROR ******");
        }
    })
}

module.exports = dbConnect; 