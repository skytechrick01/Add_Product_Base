const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Add_Product_Base');

const db = mongoose.connection;
db.on('error',(error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open',() => {
    console.log('Connected to MongoDB database.');
});


const Pro_Schema = new mongoose.Schema({
    Product_Id: Number,
    Title: String,
    Store_Name: String,
    MRP: Number,
    Selling: Number,
    Offer_Details: Object,
    Description: String,
    Rating: Number,
    Product_Img_Url: Object,


});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Photos');
    },
    filename: (req, file, cb) => {
        cb(null, a + "_" +file.fieldname + '-' + b + path.extname(file.originalname));
    }
});



app.get("/", (req, res) => {
    res.status(200).send("Yes")

})
app.listen(8928,() => {
    console.log("Server connected to http://192.168.0.44:8928/")
})
