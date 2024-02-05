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
    let Title1 = data.Title;
    let Store_Name1 = data.Store_Name;
    let MRP1 = data.MRP;
    let Selling1 = data.Selling;
    let Description1 = data.Description;
    let Product_Img_Url1 = data.Product_Img_Url;
    let Product_Key_Value1 = data.Product_Key_Value;

    console.log(Product_Img_Url1);


    function reverseString(str) {
        var reversed = '';
        for (var i = str.length - 1; i >= 0; i--) {reversed += str[i]}
        return reversed;
    }
    function s(S) {
        if (S.length == 3 || S.length == 2 || S.length == 1) {
            return S;            
        }
        else if (S.length >= 4){
            let D = reverseString(S);
            let element = '';
            for (let query = 0; query < D.length; query++) {
                if(query == 3 || query == 5 || query == 7 || query == 9){
                    element = element + "," +  D[query];
                }
                else{
                    element = element +  D[query];
                }
            }
            return reverseString(element);
        }

    }
    let Selling_Cal = s(Selling1);
    let MRP_Cal = s(MRP1);

    console.log("--------------------------");
    console.log(Selling_Cal);
    console.log(MRP_Cal);
    
    
    
    function name1() {
        
        let PROD = '';
        for (let p = 1; p < 11; p++) {
            const W = Product_Img_Url1[`Url${p}`];
            if (W) {
                
                PROD = PROD + `<div id="Product1_longList-B-${p}" class="Product_longList-A"><img id="Product_longList-B-${p}" class="Product_longList-B" src="${W}" alt="Product Image"></img></div>`;
            }
            else{
                PROD = PROD + `<div id="Product1_longList-B-${p}" class="Product_longList-A"><img id="Product_longList-B-${p}" class="Product_longList-B" src="" alt="Product Image"></img></div>`;
            }
            
        }

        return PROD;

    }
    let PRODUCT_IMG_1 = name1();
    console.log("--------------------------");
    console.log(PRODUCT_IMG_1);
    console.log("--------------------------");











//<tbody>
//   <tr>
//       <td>Color</td>
//       <td>Steel, Black</td>
//   </tr>
//   <tr>
//       <td>Type</td>
//       <td>Electric</td>
//   </tr>
//</tbody>
      

    let TT = "";
    for (let I = 1; I < 21; I++) {
        const element = Product_Key_Value1[`Item_${I}`];
        if (element) {
            
            let K = element.Key;
            let V = element.Value;
            TT = TT + `<tr><td>${K}</td><td>${V}</td></tr>`;
        }
        else{
            break;
        }
    }
    let Table1 = `<tbody>${TT}</tbody>`;

    console.log(Table1);

    let htmlContent;
    setTimeout(() => {
            htmlContent = `
            <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${Title1}</title><link rel="shortcut icon" href="https://lh3.googleusercontent.com/fife/AK0iWDwJiJ7QlMOoRsdt_001AVc5nlN-aQKMw-Z5oEKlXkiL8tRbG2ttuheBTtHm7_l0LvrsG0kMhs-DW2E3tWRSaFlU0IPZm0HqgZ6u8UrM5KMPV7-reLCFA0NfZozPtHPV0l48tcRHCV8EO3F5RfLyl7MHZ3oSZiASZohiFT4XFEJrAsKsCo2CL60IhJ8DsejYNNAWHFx_QaBiIwBJOyU8YWHeY4WnnuyPUoPbEgJ0-gzKyZJgPPFxpk5umGR92VUn1lDbXdxFYRkV2gZE_mOtpMP9xrgpazWkQetd9dkd9QbwN3h9__cde6aeJF7YODIfK48TH8J8CqiHCa2LKivOvMHX1-DJ8wV5f-fUMYnzcfyA3RnkVn97nvtptDIt2t8_4JdJ60CkYPQmWoOec0uRGUcQzvfCqb0fyUDGvy3tsVKDselj49nK7oT6oFPdwqvufv3Msiia6HtFWD4QOIjgnW6-2IiX_BiynpA-fj42NkejB0Jq5YUoYcmm0LYcfU6R9jLFq5fHP5pxUaFS240uf2jQCMcDJ1CRFUy3XGDuE6-nE6JYo1kuptVKszVGwzrzU8q_nXzA5irJbE7P9IPS0XW8wEyrtmcYf_1GMiDIXICNMMEsGaesbYL9WyS2gQ3cmzxyFH760BRMbbNamddLTbYpGNXRdsOmZ0_Zr3LxQmoyqw6Rvz-u7hHjOUJbRGXbxNHRix645mCgXUpjjU4uuHH4dswS0QxNlF3cPrrgH2ZkiNhic_RoGX2CdpsJ7OYNvNbCZTXnQdhaSSPJqpVWHMoaEYIHTsyOt1vQ04fi7mn6gzq1ehjCROFuFJS8wj19oFPRoRgsvMHp-QIy29NP9QebIaIOs62M8E9v8KU0WbovuN4xWoe-415C9HT3E2nqPeO0zYkySQjV8utzp4pF1_KmrC9BiTJrwE0iiaG5__Ty7uobXixUD8OLMGRhmCF1lCE8v9Q95vEIlM7mK-g461yExMEHDd-NDgN51GKq36R6xudI2GCfmUqL4NZmj6v13IqqvzLhQDW-nuub1bY1JyZX0bIEFQnli2x0qlk-uxDfVPrGgAcTc-W2UaCZL0Xm6tNf3SQM3pT-xQoLVw4iZa71gTTZMNGnrDqxyY828NQZyNflpfG9fiAcK-6s2UYgmVxd0A-ZPvzZXV5KjmwnmFe7FkmWqNHyScVjMXrIsvd1ZDzxTOBdgolPU37GNnyPfincwvvOoKf7Humc69YEI4Crd1wulQmcTXLRJZJlG4Wb8iTx6dGm6-d57NpYTOwMXxBf6C98b0y8v_RXFdLK2gNvXjmxplrAM8tw9Xwl2AAUPeSlC5EqHd4iLA8_DUB8wOtdZ7PugeElPVMQEp1RtSugCBNXL3iLLiVB3ittL3bnvFjPIYOLVShYk7QZ8HCTKq_PQfbOW8tRaWm5v1IoIwuqd41hlCzXBn__02tQHcqWQ5y8-ngE4Zp0flAmiZlxl8MF2Qew3kWToB9qVoDFeDNlVWmvf2JO-kgUoFTjc4m2EZGLdQoYdWvqNW4Dn-BOkYP1Y3asdGMzHy_9A-6BVcd-gzB7gmiLEi2aicGALbPnrB9hr30CIIi2r5MUFcTHxwoBkvaMVMjUjpUNDWBP_s1Zf262UhuixDQ=w1920-h945" 
            type="image/x-icon"><link rel="stylesheet" href="https://getskybuy.shop/style-js/style.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"><link rel="shortcut icon" href="https://lh3.googleusercontent.com/fife/AK0iWDwJiJ7QlMOoRsdt_001AVc5nlN-aQKMw-Z5oEKlXkiL8tRbG2ttuheBTtHm7_l0LvrsG0kMhs-DW2E3tWRSaFlU0IPZm0HqgZ6u8UrM5KMPV7-reLCFA0NfZozPtHPV0l48tcRHCV8EO3F5RfLyl7MHZ3oSZiASZohiFT4XFEJrAsKsCo2CL60IhJ8DsejYNNAWHFx_QaBiIwBJOyU8YWHeY4WnnuyPUoPbEgJ0-gzKyZJgPPFxpk5umGR92VUn1lDbXdxFYRkV2gZE_mOtpMP9xrgpazWkQetd9dkd9QbwN3h9__cde6aeJF7YODIfK48TH8J8CqiHCa2LKivOvMHX1-DJ8wV5f-fUMYnzcfyA3RnkVn97nvtptDIt2t8_4JdJ60CkYPQmWoOec0uRGUcQzvfCqb0fyUDGvy3tsVKDselj49nK7oT6oFPdwqvufv3Msiia6HtFWD4QOIjgnW6-2IiX_BiynpA-fj42NkejB0Jq5YUoYcmm0LYcfU6R9jLFq5fHP5pxUaFS240uf2jQCMcDJ1CRFUy3XGDuE6-nE6JYo1kuptVKszVGwzrzU8q_nXzA5irJbE7P9IPS0XW8wEyrtmcYf_1GMiDIXICNMMEsGaesbYL9WyS2gQ3cmzxyFH760BRMbbNamddLTbYpGNXRdsOmZ0_Zr3LxQmoyqw6Rvz-u7hHjOUJbRGXbxNHRix645mCgXUpjjU4uuHH4dswS0QxNlF3cPrrgH2ZkiNhic_RoGX2CdpsJ7OYNvNbCZTXnQdhaSSPJqpVWHMoaEYIHTsyOt1vQ04fi7mn6gzq1ehjCROFuFJS8wj19oFPRoRgsvMHp-QIy29NP9QebIaIOs62M8E9v8KU0WbovuN4xWoe-415C9HT3E2nqPeO0zYkySQjV8utzp4pF1_KmrC9BiTJrwE0iiaG5__Ty7uobXixUD8OLMGRhmCF1lCE8v9Q95vEIlM7mK-g461yExMEHDd-NDgN51GKq36R6xudI2GCfmUqL4NZmj6v13IqqvzLhQDW-nuub1bY1JyZX0bIEFQnli2x0qlk-uxDfVPrGgAcTc-W2UaCZL0Xm6tNf3SQM3pT-xQoLVw4iZa71gTTZMNGnrDqxyY828NQZyNflpfG9fiAcK-6s2UYgmVxd0A-ZPvzZXV5KjmwnmFe7FkmWqNHyScVjMXrIsvd1ZDzxTOBdgolPU37GNnyPfincwvvOoKf7Humc69YEI4Crd1wulQmcTXLRJZJlG4Wb8iTx6dGm6-d57NpYTOwMXxBf6C98b0y8v_RXFdLK2gNvXjmxplrAM8tw9Xwl2AAUPeSlC5EqHd4iLA8_DUB8wOtdZ7PugeElPVMQEp1RtSugCBNXL3iLLiVB3ittL3bnvFjPIYOLVShYk7QZ8HCTKq_PQfbOW8tRaWm5v1IoIwuqd41hlCzXBn__02tQHcqWQ5y8-ngE4Zp0flAmiZlxl8MF2Qew3kWToB9qVoDFeDNlVWmvf2JO-kgUoFTjc4m2EZGLdQoYdWvqNW4Dn-BOkYP1Y3asdGMzHy_9A-6BVcd-gzB7gmiLEi2aicGALbPnrB9hr30CIIi2r5MUFcTHxwoBkvaMVMjUjpUNDWBP_s1Zf262UhuixDQ=w1920-h945"
            type="image/x-icon"><meta name="author" content="Rick Sarkar, getskybuy@gmail.com"><meta name="keywords" content="getskybuy, GET-SKY-BUY, Get-Sky-Buy, gsb, sky tech rick, "><meta name="description" content="This is a online shopping site for all types of products, we are mainly focused on local shopkeepers. We are now launching this platform for India in coming months just follow us on Instagram: @get_sky_buy, facebook: @getskybuy, contact no: 8436431656, and many more for latest update, and for detailed information please WhatsApp us: 8436431656. Thank you Team GET SKY BUY."><meta http-equiv="Content-Type" content="html"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="Content-Style-Type" content="text/css"><meta name="url" content="https://getskybuy.shop"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="copyright" content="GET-SKY-BUY"><meta name="robots" content="Index, Follow"><meta name='date' content='01-Dec-2023'><meta name='revised' content='December 31st, 2023, 12:00 pm'><meta name='language' content='en'><meta name='coverage' content='India'><meta name='Classification' content='Business'><meta name='distribution' content='India'><meta name='reply-to' content='getskybuy@gmail.com'><meta name='category' content='ecommerce'> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap" rel="stylesheet"></head><body dir="ltr"><div id="Background_Blur_50"></div><header><div class="Header_center"><div class="Head-1"><h1 id="H2"><a href="/">GET SKY BUY</a></h1><a id="Head-1A" href="/"><img id="Logo_Img"
            src="https://lh3.googleusercontent.com/fife/AK0iWDwJiJ7QlMOoRsdt_001AVc5nlN-aQKMw-Z5oEKlXkiL8tRbG2ttuheBTtHm7_l0LvrsG0kMhs-DW2E3tWRSaFlU0IPZm0HqgZ6u8UrM5KMPV7-reLCFA0NfZozPtHPV0l48tcRHCV8EO3F5RfLyl7MHZ3oSZiASZohiFT4XFEJrAsKsCo2CL60IhJ8DsejYNNAWHFx_QaBiIwBJOyU8YWHeY4WnnuyPUoPbEgJ0-gzKyZJgPPFxpk5umGR92VUn1lDbXdxFYRkV2gZE_mOtpMP9xrgpazWkQetd9dkd9QbwN3h9__cde6aeJF7YODIfK48TH8J8CqiHCa2LKivOvMHX1-DJ8wV5f-fUMYnzcfyA3RnkVn97nvtptDIt2t8_4JdJ60CkYPQmWoOec0uRGUcQzvfCqb0fyUDGvy3tsVKDselj49nK7oT6oFPdwqvufv3Msiia6HtFWD4QOIjgnW6-2IiX_BiynpA-fj42NkejB0Jq5YUoYcmm0LYcfU6R9jLFq5fHP5pxUaFS240uf2jQCMcDJ1CRFUy3XGDuE6-nE6JYo1kuptVKszVGwzrzU8q_nXzA5irJbE7P9IPS0XW8wEyrtmcYf_1GMiDIXICNMMEsGaesbYL9WyS2gQ3cmzxyFH760BRMbbNamddLTbYpGNXRdsOmZ0_Zr3LxQmoyqw6Rvz-u7hHjOUJbRGXbxNHRix645mCgXUpjjU4uuHH4dswS0QxNlF3cPrrgH2ZkiNhic_RoGX2CdpsJ7OYNvNbCZTXnQdhaSSPJqpVWHMoaEYIHTsyOt1vQ04fi7mn6gzq1ehjCROFuFJS8wj19oFPRoRgsvMHp-QIy29NP9QebIaIOs62M8E9v8KU0WbovuN4xWoe-415C9HT3E2nqPeO0zYkySQjV8utzp4pF1_KmrC9BiTJrwE0iiaG5__Ty7uobXixUD8OLMGRhmCF1lCE8v9Q95vEIlM7mK-g461yExMEHDd-NDgN51GKq36R6xudI2GCfmUqL4NZmj6v13IqqvzLhQDW-nuub1bY1JyZX0bIEFQnli2x0qlk-uxDfVPrGgAcTc-W2UaCZL0Xm6tNf3SQM3pT-xQoLVw4iZa71gTTZMNGnrDqxyY828NQZyNflpfG9fiAcK-6s2UYgmVxd0A-ZPvzZXV5KjmwnmFe7FkmWqNHyScVjMXrIsvd1ZDzxTOBdgolPU37GNnyPfincwvvOoKf7Humc69YEI4Crd1wulQmcTXLRJZJlG4Wb8iTx6dGm6-d57NpYTOwMXxBf6C98b0y8v_RXFdLK2gNvXjmxplrAM8tw9Xwl2AAUPeSlC5EqHd4iLA8_DUB8wOtdZ7PugeElPVMQEp1RtSugCBNXL3iLLiVB3ittL3bnvFjPIYOLVShYk7QZ8HCTKq_PQfbOW8tRaWm5v1IoIwuqd41hlCzXBn__02tQHcqWQ5y8-ngE4Zp0flAmiZlxl8MF2Qew3kWToB9qVoDFeDNlVWmvf2JO-kgUoFTjc4m2EZGLdQoYdWvqNW4Dn-BOkYP1Y3asdGMzHy_9A-6BVcd-gzB7gmiLEi2aicGALbPnrB9hr30CIIi2r5MUFcTHxwoBkvaMVMjUjpUNDWBP_s1Zf262UhuixDQ=w1920-h945"alt="Logo">
            </a><h1 id="H22"><a href="/">GET SKY BUY</a></h1><span id="MENU_W" class="material-symbols-outlined MENU_W">menu</span><div id="Background_Menu"><div id="Background_Menu_BG"></div><div id="Aside"><div id="MENU_W_DIV"><span class="material-symbols-outlined">close</span>
            </div><div id="HII"><h2>GET SKY BUY</h2></div><div id="list"><ul><li><a title="Home" href="/">Home</a></li><li><a title="Form" target="_blank" href="https://forms.gle/nwVJWEx3m2QU8WgaA">Form</a></li><li><a title="Mail us" href="mailto:getskybuy@gmail.com">Mail</a></li><li><a title="Instagra, Follow us" target="_blank"href="https://www.instagram.com/get_sky_buy">Instagram</a></li><li><a title="Facebook, Follow us" target="_blank"href="https://www.facebook.com/getskybuy">Facebook</a></li><li><a title="WhatsApp" target="_blank" href="https://wa.me/8436431656?text=*Hello*,%0aMessaged+you+from+*GET-SKY-BUY*.%0aI+have+messaged+you+for+a+query.%0a_Reply+me+when+you+are+free._%0a*Thank+you*">Contact</a></li></ul><p id="MenuPara">Hello, my name is Rick. We have ambitious plans to develop a platform that aims to outshine others in the coming months or years. Currently, we are in the early stages of development, with the launch tentatively scheduled for April or May. We are actively collaborating with several startups, distributors, and sellers to ensure a robust offering.<br>We are keenly interested in your feedback on our products and services. Although the work is still in progress, we would appreciate any insights youcan provide. Thank you for your time.<br>Best regards,<br>Team GSB</p></div></div></div></div><div class="Head-1"><nav><ul> <li class="List"><a title="Home" href="/">Home</a></li> <li class="List"><a title="Form" target="_blank" href="https://forms.gle/nwVJWEx3m2QU8WgaA">Form</a></li><li class="List"><a title="Mail us" href="mailto:getskybuy@gmail.com">Mail</a></li> <li class="List"><a title="Instagra, Follow us" target="_blank" href="https://www.instagram.com/get_sky_buy">Instagram</a></li> <li class="List"><a title="Facebook, Follow us" target="_blank" href="https://www.facebook.com/getskybuy">Facebook</a></li> <li class="List"><a title="WhatsApp" target="_blank" href="https://wa.me/8436431656?text=*Hello*,%0aMessaged+you+from+*GET-SKY-BUY*.%0aI+have+messaged+you+for+a+query.%0a_Reply+me+when+you+are+free._%0a*Thank+you*">Contact</a></li> </ul> </nav> </div> </div></header><main> <div id="GF"> <section class="Section1"> <div class="Section_In1"> <div class="Product_Main"> <div class="Product_Img_Sec"> <div class="Product_Img_Sec_1">
            <div class="Product_longList">${PRODUCT_IMG_1}</div><div id="ProperImg-A-1" class="ProperImg"><img id="ProperImg-A-1-Img" class="ProperImg-A" src="" alt="Big Image showed"></div></div></div><div class="Product_Img_Details_T"><div id="Double_Split"><div id="First_Split"><h2 id="Title_Heading">${Title1}</h2><div class="Under_Title_Div"><span id="SHOP_NAME">${Store_Name1}</span> <span class="Under_Title"></span></div><div class="Rating_Under_Title_Div"> <span class="Rating_Under_Title"> <span id="Rating_Title">5.0</span> <img id="Rating_Title_Icon" src="https://lh3.googleusercontent.com/u/2/drive-viewer/AEYmBYSZwLGQKzdpfrAk8E1iYWzvB64djgDs-L8ZeH20ew00uVc0k8aIuXGNWHyQvM15GgA_C9fv3AQ22sFwy7PL0VloTCOP=w1920-h911" alt=""> </span> <span class="Rating_Member"> <span class="Rating_Member_Number">0</span> <span> Rating & </span> <span class="Reviews_Member_Number">0</span> <span>Reviews</span> </span> </div> <div class="Order_Offer"> <hr> <p>✅ Place order more then Rs.999 and get free delivery.</p> <p>✅ Refer this product to other and get points. <a href="/knowmore">Know more</a> </p> <p>✅ Purchase more than three product at once and get extra points.</p> <hr> </div><div class="Product_Price"> <div class="Product_Price_Price"> <span class="Rupee_Sumbol">₹</span><span class="Rupee_Sumbol_Price">${Selling_Cal}</span> </div> <div class="MRP_Word_Div"> <span class="MRP_Word">MRP: </span><span class="MRP_Price">${MRP_Cal}</span> </div> <div class="MRP_OFF_Div"> <span class="MRP_OFF"></span> <span class="MRP_OFF">off</span> </div> </div> <div class="ADD_BUY_DIV">


            <!-- OUT OF STOCK  -->
            <!-- OUT OF STOCK  -->



            <div id="h1_st"> <button class="ADD_BUY" title="BUY NOW" type="button" onclick="ADD_TO_CART_MAIN()"> <span class="ADD_BUY_Add_To_Cart"> BUY NOW </span> </button> <button class="ADD_BUY" title="Add to cart" type="button" onclick="ADD_TO_CART_MAIN()"> <span class="ADD_BUY_Add_To_Cart"> CONTACT US </span></button>
            </div>



            <!-- <h2 id="h2_st">OUT OF STOCK</h2> -->




            </div> <div id="Description"> <h3> Description </h3><p>${Description1}</p></div> <div id="Key_V"> <h3> More details </h3><table id="Table1">${Table1}</table></div> </div> <div class="Second_Split"><div class="Second_Split_Box"><div class="SS_Start"><h3>✅ How to place order?</h3><p>&rarr; <strong>How to place order,</strong> For placing an order, simply click on the button <strong>BUY NOW</strong>. You will be redirected to WhatsApp (<strong>+91 84364 31656</strong>). After confirming your order, I will ask for your details for further processes. You will be provided with a short password, which will be required for any contact or additional details.<!-- <a href="Knowmore">Know more</a></p> --><h3>✅ How to place more than one products at once?</h3><p>&rarr;<strong>How to place more than one product at once?</strong> For placing an order, simply click on the button <strong>BUY NOW</strong>. You will be redirected to a small form, and then to WhatsApp (+91 84364 31656). After confirming your order, I will ask for your details. If you have additional products, please send screenshots or links. I will generate an ID for further processing.<a href="Knowmore">Know more</a></p><p>Orders may be packed together or separately, and you will be notified according to your order. You will be provided with a short password, which will be required for any contact or additional details.</p></div></div></div> </div></div></div></div><hr></section></div></main><div class="FOOT"><center><a href="/">Home</a></center><center><a href="https://forms.gle/nwVJWEx3m2QU8WgaA">Form</a></center><center><a href="mailto:getskybuy@gmail.com">Mail us</a></center><center><a title="Instagram, Follow us" target="_blank" href="https://www.instagram.com/get_sky_buy">Instagram</a></center><center><a title="Facebook, Follow us" target="_blank" href="https://www.facebook.com/getskybuy">Facebook</a></center><center><a title="WhatsApp" target="_blank"href="https://wa.me/8436431656?text=*Hello*,%0aMessaged+you+from+*GET-SKY-BUY*.%0aI+have+messaged+you+for+a+query.%0a_Reply+me+when+you+are+free._%0a*Thank+you*">Contact</a></center></div><footer><span id="copyrightt">GET-SKY-BUY &copy; All rights reserved</span></footer><script src="https://getskybuy.shop/style-js/script.js"></script>


            <script>
                function Percentage_Off(a, aa) {

                    let el = "";
                    if(a.length > 3){
                        let d = a.split(",")
                        d.forEach(element => {
                            el = el + element;
                        });
                    }else{
                        el = el + a
                    }
                    let Selling_Price_Fun = eval(el);
                    let news = '';
                    if(aa.length >3){
                        let dd = aa.split(",");
                        dd.forEach(element => {
                            news = news + element
                        });
                    }else{
                        news = news + aa
                    }
                    let MRP_Price_Fun = eval(news);
                    let OFF_Value = ((MRP_Price_Fun - Selling_Price_Fun)/MRP_Price_Fun)*100;
                    let g = "-" + String(Math.floor(OFF_Value)) + "%";
                    document.getElementsByClassName("MRP_OFF")[0].innerHTML = g;
                }
                Percentage_Off(${new String(Selling1)}, ${new String(MRP1)}) 
            </script></body></html>
        `;
    }, 50);



    setTimeout(() => {
        
        
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
        
    }, 1000);
});
app.listen(8928, () => console.log("Server connected to http://192.168.0.44:8928/"));