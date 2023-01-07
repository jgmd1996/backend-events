import mongoose from "mongoose"

mongoose.connect("mongodb+srv://gabriel:gabriel123@cluster0.tbo8ty4.mongodb.net/test");

let db = mongoose.connection;

export default db;
