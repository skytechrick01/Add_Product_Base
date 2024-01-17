const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

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
    };
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

    const fileName = `../Created Files/${Title}"@"${MRP}.html`;

    let htmlContent = "htmlContent";

    fs.writeFile(fileName, htmlContent, (err) => {
        if (err) {
            console.error('Error creating HTML file:', err);
        } else {
            console.log('HTML file created successfully!');
        }
    });
// __________________________________________________________





    fs.appendFile("./g.txt", fg + "\n", 'utf8', (err) => {
        if (err) {
            console.error('Error appending to the file:', err);
            return;
        }
    });
    res.status(200).send(`<h1 style="text-align: center"><a href="/">HOMEs</a></h1>`);
});
app.listen(8928, () => console.log("Server connected to http://192.168.0.44:8928/"));