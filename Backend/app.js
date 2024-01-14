const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Add_Product_Base');
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB database.'));


const Pro_Schema = new mongoose.Schema({
    Title: String,
    Store_Name: String,
    MRP: Number,
    Selling: Number,
    Offer_Details: Object,
    Description: String,

    Product_Img_Url: Object,
    Product_Key_Value: Object,
    Rating: Number,


});
const Pro_Model = mongoose.model("Product_Details", Pro_Schema);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Photos');
    },
    filename: (req, file, cb) => {
        cb(null, a + "_" + file.fieldname + '-' + b + path.extname(file.originalname));
    }
});


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

    let reqBody = req.body;
    let jsson = {
        Title: reqBody.Title,
        Store_Name: reqBody.Store_Name,
        MRP: reqBody.MRP,
        Selling: reqBody.Selling,
        Description: reqBody.Description,

        Offer_Details: {
            Offer_1: reqBody.Offer_1,
            Offer_2: reqBody.Offer_2,
            Offer_3: reqBody.Offer_3,
            Offer_4: reqBody.Offer_4,
        },
        Product_Img_Url: {
            Url1: reqBody.Url1,
            Url2: reqBody.Url2,
            Url3: reqBody.Url3,
            Url4: reqBody.Url4,
            Url5: reqBody.Url5,
            Url6: reqBody.Url6,
            Url7: reqBody.Url7,
        },
        Product_Key_Value: {
            Item_1: {
                key: reqBody.Item_1.key,
                value: reqBody.Item_1.value
            },
            Item_2: {
                key: reqBody.Item_2.key,
                value: reqBody.Item_2.value
            },
            Item_3: {
                key: reqBody.Item_3.key,
                value: reqBody.Item_3.value
            },
            Item_4: {
                key: reqBody.Item_4.key,
                value: reqBody.Item_4.value
            },
            Item_5: {
                key: reqBody.Item_5.key,
                value: reqBody.Item_5.value
            },
            Item_6: {
                key: reqBody.Item_6.key,
                value: reqBody.Item_6.value
            },
            Item_7: {
                key: reqBody.Item_7.key,
                value: reqBody.Item_7.value
            },
            Item_8: {
                key: reqBody.Item_8.key,
                value: reqBody.Item_8.value
            },
            Item_9: {
                key: reqBody.Item_9.key,
                value: reqBody.Item_9.value
            },
            Item_10: {
                key: reqBody.Item_10.key,
                value: reqBody.Item_10.value
            },
            Item_11: {
                key: reqBody.Item_11.key,
                value: reqBody.Item_11.value
            },
            Item_12: {
                key: reqBody.Item_12.key,
                value: reqBody.Item_12.value
            },
            Item_13: {
                key: reqBody.Item_13.key,
                value: reqBody.Item_13.value
            },
            Item_14: {
                key: reqBody.Item_14.key,
                value: reqBody.Item_14.value
            },
            Item_15: {
                key: reqBody.Item_15.key,
                value: reqBody.Item_15.value
            },
            Item_16: {
                key: reqBody.Item_16.key,
                value: reqBody.Item_16.value
            },
            Item_17: {
                key: reqBody.Item_17.key,
                value: reqBody.Item_17.value
            },
            Item_18: {
                key: reqBody.Item_18.key,
                value: reqBody.Item_18.value
            },
            Item_19: {
                key: reqBody.Item_19.key,
                value: reqBody.Item_19.value
            },
            Item_20: {
                key: reqBody.Item_20.key,
                value: reqBody.Item_20.value
            },
        },

    }
})


app.listen(8928, () => {
    console.log("Server connected to http://192.168.0.44:8928/")
})
