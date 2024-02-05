const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/Add_Product_Base');

const db = mongoose.connection;
db.on('error',(error) => {
    console.error('MongoDB connection error:', error);
});
db.once('open',() => {
    console.log('Connected to MongoDB database.');
});

const Signup_Schema = new mongoose.Schema(
    {
        Title:     String,
        Store_Name:String,
        MRP:       String,
        Selling:   String,
        Description: String,
        In_Stock:  String,
        Offer_Details: Object,
        Product_Img_Url: Object,
        Product_Key_Value: Object,
        Rating_Reviews: Object
      }
    
);

const Product_Model = mongoose.model("product_details", Signup_Schema);


// const HTML_NEW = require("./Function.js")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    fs.readFile("../Files/index.html", 'utf8', (err, dataa) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        res.status(200).send(dataa);
    });
});

app.post('/', (req, res) => {
    let Rating_Reviews1 = {
        "User1": "Good product",
    }
    let reqBody = req.body;
    console.log(reqBody);
    let data = {
        Title: reqBody.Title,
        Store_Name: reqBody.Store_Name,
        MRP: reqBody.MRP,
        Selling: reqBody.Selling,
        Description: reqBody.Description,
        In_Stock: reqBody.In_Stock,
        Offer_Details: reqBody.Offer_Details,
        Product_Img_Url: reqBody.Product_Img_Url,
        Product_Key_Value: reqBody.Product_Key_Value,
        Rating_Reviews: Rating_Reviews1
    };
    console.log(data);
    let fg = JSON.stringify(data);
// __________________________________________________________
    let Title = data.Title;
    let Store_Name = data.Store_Name;
    let MRP = data.MRP;
    let Selling = data.Selling;
    let Description = data.Description;
    let In_Stock = data.In_Stock;
    let Offer_Details = data.Offer_Details;
    let Product_Img_Url = data.Product_Img_Url;
    let Product_Key_Value = data.Product_Key_Value;

    let htmlContent = "<h1>htmlContent</h1>";







    fs.writeFile("../Created_Files/index.html" , htmlContent, (err) => {
        if (err) {
            console.error('Error creating HTML file:', err);
        } else {
            console.log('HTML file created successfully!');
            const p = new Product_Model(data);
            p.save().then(()=>{
                console.log("Save to database successfully")
            })
        }
    });
// __________________________________________________________





    fs.appendFile("./g.txt", fg + "\n", 'utf8', (err) => {
        if (err) {
            console.error('Error appending to the file:', err);
            return;
        }
    });

});
app.listen(8928, () => console.log("Server connected to http://192.168.0.44:8928/"));