function A1() {
    let Product_longList_B_1 = document.getElementById("Product_longList-B-1");
    let Product_longList_B_2 = document.getElementById("Product_longList-B-2");
    let Product_longList_B_3 = document.getElementById("Product_longList-B-3");
    let Product_longList_B_4 = document.getElementById("Product_longList-B-4");
    let Product_longList_B_5 = document.getElementById("Product_longList-B-5");
    let Product_longList_B_6 = document.getElementById("Product_longList-B-6");
    let Product_longList_B_7 = document.getElementById("Product_longList-B-7");
    let Product_longList_B_8 = document.getElementById("Product_longList-B-8");
    let Product_longList_B_9 = document.getElementById("Product_longList-B-9");
    let Product_longList_B_10 = document.getElementById("Product_longList-B-10");
    // let Base = Product_longList_B_1.getAttribute('src');


    let Product_longList_B_1_S = Product_longList_B_1.getAttribute("src");
    let Product_longList_B_2_S = Product_longList_B_2.getAttribute("src");
    let Product_longList_B_3_S = Product_longList_B_3.getAttribute("src");
    let Product_longList_B_4_S = Product_longList_B_4.getAttribute("src");
    let Product_longList_B_5_S = Product_longList_B_5.getAttribute("src");
    let Product_longList_B_6_S = Product_longList_B_6.getAttribute("src");
    let Product_longList_B_7_S = Product_longList_B_7.getAttribute("src");
    let Product_longList_B_8_S = Product_longList_B_8.getAttribute("src");
    let Product_longList_B_9_S = Product_longList_B_9.getAttribute("src");
    let Product_longList_B_10_S = Product_longList_B_10.getAttribute("src");

    // console.log(Product_longList_B_1_S);
    // console.log(Product_longList_B_4_S);
    // console.log(Product_longList_B_5_S);


    let ProperImg_A_1 = document.getElementById("ProperImg-A-1");
    ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_1_S}">`;
    // let ProperImg_A_1_Img = document.getElementById("ProperImg-A-1-Img");
    // ProperImg_A_1.setAttribute("src", Base);

    Product_longList_B_1.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_1_S}">`;
    });
    Product_longList_B_2.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_2_S}">`;
    });
    Product_longList_B_3.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_3_S}">`;
    });
    Product_longList_B_4.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_4_S}">`;
    });
    Product_longList_B_5.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_5_S}">`;
    });
    Product_longList_B_6.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_6_S}">`;
    });
    Product_longList_B_7.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_7_S}">`;
    });
    Product_longList_B_8.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_8_S}">`;
    });
    Product_longList_B_9.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_9_S}">`;
    });
    Product_longList_B_10.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_10_S}">`;
    });
}

A1();


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


    // console.log(MRP_Price_Fun);
    // console.log(Selling_Price_Fun);
    
    let OFF_Value = ((MRP_Price_Fun - Selling_Price_Fun)/MRP_Price_Fun)*100;
    
    let g = "-" + String(Math.floor(OFF_Value)) + "%";
    
    // console.log(g);

    document.getElementsByClassName("MRP_OFF")[0].innerHTML = g;
}

Percentage_Off('999', '1999') 





function ADD_TO_CART_MAIN(){
    window.location.href = "https://wa.me/8436431656?text=Kettle+product+I+WANT+TO+PURCHASE";
};




// console.log(aj);


function Hide_Img5() {
    document.getElementById("Product1_longList-B-1").style.display = "inline-block";
    document.getElementById("Product1_longList-B-2").style.display = "inline-block";
    document.getElementById("Product1_longList-B-3").style.display = "inline-block";
    document.getElementById("Product1_longList-B-4").style.display = "inline-block";
    document.getElementById("Product1_longList-B-5").style.display = "inline-block";
    document.getElementById("Product1_longList-B-6").style.display = "none";
    document.getElementById("Product1_longList-B-7").style.display = "none";
    document.getElementById("Product1_longList-B-8").style.display = "none";
    document.getElementById("Product1_longList-B-9").style.display = "none";
    document.getElementById("Product1_longList-B-10").style.display = "none";
    ki();    
}

function UnHide_Img5() {
    document.getElementById("Product1_longList-B-10").style.display = "inline-block";
    document.getElementById("Product1_longList-B-9").style.display = "inline-block";
    document.getElementById("Product1_longList-B-8").style.display = "inline-block";
    document.getElementById("Product1_longList-B-7").style.display = "inline-block";
    document.getElementById("Product1_longList-B-6").style.display = "inline-block";
    document.getElementById("Product1_longList-B-5").style.display = "none";
    document.getElementById("Product1_longList-B-4").style.display = "none";
    document.getElementById("Product1_longList-B-3").style.display = "none";
    document.getElementById("Product1_longList-B-2").style.display = "none";
    document.getElementById("Product1_longList-B-1").style.display = "none";
    ki()
}
Hide_Img5()
// Product_longList_B_2 = 
// Product_longList_B_3 = 
// Product_longList_B_4 = 
// Product_longList_B_5 = 

function tt() {
    let morebtnn = document.getElementById("morebtnn");
    let morebtn = document.getElementById("morebtn");

    if (morebtnn.innerHTML == "Down") {
        UnHide_Img5();
        morebtnn.innerHTML = "Up";
    }
    else if (morebtnn.innerHTML == "Up") {
        Hide_Img5();
        morebtnn.innerHTML = "Down";
        
    }
}






function ki() {
    let Product_longList_B_1 = document.getElementById("Product_longList-B-1");
    let Product_longList_B_2 = document.getElementById("Product_longList-B-2");
    let Product_longList_B_3 = document.getElementById("Product_longList-B-3");
    let Product_longList_B_4 = document.getElementById("Product_longList-B-4");
    let Product_longList_B_5 = document.getElementById("Product_longList-B-5");
    let Product_longList_B_6 = document.getElementById("Product_longList-B-6");
    let Product_longList_B_7 = document.getElementById("Product_longList-B-7");
    let Product_longList_B_8 = document.getElementById("Product_longList-B-8");
    let Product_longList_B_9 = document.getElementById("Product_longList-B-9");
    let Product_longList_B_10 = document.getElementById("Product_longList-B-10");
    if(Product_longList_B_10.getAttribute("src") == ""){
        console.log(1)
    }else{
        console.log(2)

    };
    let Product1_longList_B_1 = document.getElementById("Product1_longList-B-1");
    let Product1_longList_B_2 = document.getElementById("Product1_longList-B-2");
    let Product1_longList_B_3 = document.getElementById("Product1_longList-B-3");
    let Product1_longList_B_4 = document.getElementById("Product1_longList-B-4");
    let Product1_longList_B_5 = document.getElementById("Product1_longList-B-5");
    let Product1_longList_B_6 = document.getElementById("Product1_longList-B-6");
    let Product1_longList_B_7 = document.getElementById("Product1_longList-B-7");
    let Product1_longList_B_8 = document.getElementById("Product1_longList-B-8");
    let Product1_longList_B_9 = document.getElementById("Product1_longList-B-9");
    let Product1_longList_B_10 = document.getElementById("Product1_longList-B-10");

    if (Product_longList_B_1.getAttribute("src") == null || Product_longList_B_1.getAttribute("src") == ""){
        Product1_longList_B_1.style.display = "none";
        
    };
    if (Product_longList_B_2.getAttribute("src") == null || Product_longList_B_2.getAttribute("src") == ""){
        Product1_longList_B_2.style.display = "none";
        
    };
    if (Product_longList_B_3.getAttribute("src") == null || Product_longList_B_3.getAttribute("src") == ""){
        Product1_longList_B_3.style.display = "none";
    };
    
    if (Product_longList_B_4.getAttribute("src") == null || Product_longList_B_4.getAttribute("src") == ""){
        Product1_longList_B_4.style.display = "none";
        
    };
    if (Product_longList_B_5.getAttribute("src") == null || Product_longList_B_5.getAttribute("src") == ""){
        Product1_longList_B_5.style.display = "none";
        
    };
    if (Product_longList_B_6.getAttribute("src") == null || Product_longList_B_6.getAttribute("src") == ""){
        Product1_longList_B_6.style.display = "none";
        
    };
    if (Product_longList_B_7.getAttribute("src") == null || Product_longList_B_7.getAttribute("src") == ""){
        Product1_longList_B_7.style.display = "none";
        
    };
    if (Product_longList_B_8.getAttribute("src") == null || Product_longList_B_8.getAttribute("src") == ""){
        Product1_longList_B_8.style.display = "none";
        
    };
    if (Product_longList_B_9.getAttribute("src") == null || Product_longList_B_9.getAttribute("src") == ""){
        Product1_longList_B_9.style.display = "none";
        console.log(22)
        
    };
    if (Product_longList_B_10.getAttribute("src") == null || Product_longList_B_10.getAttribute("src") == ""){
        Product1_longList_B_10.style.display = "none";

    };
}
ki();