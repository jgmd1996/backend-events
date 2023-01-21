const mongoose = require( "mongoose");

function db() {

mongoose.connect("mongodb+srv://gabriel:gabriel123@cluster0.tbo8ty4.mongodb.net/test");

let db = mongoose.connection;
}
exports = db;
