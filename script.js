    console.log("Running");

/********
Varibles:
********/

//User related varibles:

let userName;

let userMoney;

let userCart = [];

/*******************************************************************
Ids for HTML elements:
They arn't constants becuase some of the elements get created later.
*******************************************************************/

let nameInput;

let nameFormDiv;

//Constants:

const BODY = document.getElementById("body");

//Menu:

const COOKIEMENU = [
    {
        name:"plain cookie",
        price:0.1
    },
    {
        name:"chocolate chip cookie",
        price:0.2
    },
    {
        name:"double chocolate chip cookie",
        price:0.4
    },
    {
        name:"triple chocolate chip cookie",
        price:0.8
    },
    {
        name:"quadruple chocolate chip cookie",
        price:1.6
    },
    {
        name:"quintuple chocolate chip cookie",
        price:3.2
    },
    {
        name:"sextuple chocolate chip cookie",
        price:6.4
    },
    {
        name:"septuple chocolate chip cookie",
        price:12.8
    },
    {
        name:"octuple chocolate chip cookie",
        price:25.6
    },
    {
        name:"nonuple chocolate chip cookie",
        price:51.2
    },
    {
        name:"decuple chocolate chip cookie",
        price:102.4
    },
    {
        name:"dark chocolate chip cookie",
        price:0.3
    },
    {
        name:"white chocolate chip cookie",
        price:0.3
    },
    {
        name:"dark chocolate cookie with choclate chips",
        price:0.4
    },
    {
        name:"dark chocolate cookie with white choclate chips",
        price:0.4
    },
    {
        name:"white chocolate cookie with white choclate chips",
        price:0.4
    },
    {
        name:"chocolate chunk cookie",
        price:0.3
    },
    {
        name:"double chocolate chunk cookie",
        price:0.6
    },
    {
        name:"macadamia nut cookie",
        price:0.5
    },
    {
        name:"macadamia nut and white chocolate chip cookie",
        price:0.7
    },
    {
        name:"oatmeal raisin cookie",
        price:0.4
    },
    {
        name:"cranberry cookie",
        price:0.5
    },
    {
        name:"cranberry and white chocolate chip cookie",
        price:0.75
    },
    {
        name:"peanut butter cookie",
        price:0.3
    },
    {
        name:"peanut butter and choclate chip cookie",
        price:0.5
    },
    {
        name:"walnut cookie",
        price:0.45
    },
    {
        name:"walnut and choclate chip cookie",
        price:0.6
    },
    {
        name:"monster cookie",
        price:0.8
    },
    {
        name:"cookies and cream cookie",
        price:0.5
    },
    {
        name:"red velvet cookie",
        price:0.7
    },
    {
        name:"eclipse cookie",
        price:0.3
    },
    {
        name:"ginger bread cookie",
        price:0.9
    },
    {
        name:"walnut cookie",
        price:0.4
    },
    {
        name:"fortune cookie",
        price:0.8
    },
    {
        name:"cookie cookie",
        price:1
    }, 
    {
        name:"cookie dough",
        price:2.5
    },
    {
        name:"mini belgium biscuit",
        price:0.25
    },
    {
        name:"belgium biscuit",
        price:0.9
    },
];

/*********************************************************************************************
to add a new item add this to the end of the array with the name and price of the item changed
    {
        name:"cookie name",
        price:(cookie price)
    },
*********************************************************************************************/

/************
Main code:
Runs on start
************/

//unfortunatly there is not much here

start();

/*********
Functions:
*********/

//start function becauuse it gets called latter by my back button

function start(){
    displayHeadder();
    BODY.style.backgroundColor = "#0b5394";
    BODY.style.backgroundImage = null;
    displayNameForm();
}

function nameSubmit(){
    if(nameInput.value == 0){
        console.log("Nothing or 0 was submited");
        displayHeadder();
        displayNameForm();
        document.getElementById("nameFormDiv").innerHTML += "<p>You have to enter something for your name and it can't be zero sorry.</p>";
    }else{
        userName = nameInput.value;
        displayMenu()
    };
};

function displayMenu(){
    BODY.style.backgroundImage = "url(Background.jpg)";
    displayHeadder();
    BODY.innerHTML += "<div id='fancyMenuDiv' class='fancymenu'><button onclick='start()'>back</button><button onclick='displayCart()'>To checkout</button></div>";
    let currentCookie;
    for(let i = 0; i < COOKIEMENU.length; i = (i+1)){
        currentCookie = COOKIEMENU[i];
        console.log(currentCookie.name);
        BODY.innerHTML += "<div class='menuitem' id='" + i +"' onclick='chooseNumberOfCookies(" + i + ")'><img src='cookies/" + i + ".png' alt='A picture of a " + currentCookie.name + ".'></img><h2>" + currentCookie.name + "</h2></div>";
    };
};

function displayHeadder(){
    BODY.innerHTML="<div id='titleDiv' class='header'><h1>Ethan's bakery</h1></div>";
};

function displayNameForm(){
    if(userName == undefined){
        BODY.innerHTML+="<div class='nameformdiv' id='nameFormDiv'><form onsubmit='return false;' id='nameForm'><label for='nameInput'>Order name:</label><input type='text' id='nameInput' name='nameInput' placeholder='Jhon Doe'><br><input type='submit' onclick='nameSubmit()'></form></div>";
    }else{
        BODY.innerHTML+="<div class='nameformdiv' id='nameFormDiv'><form onsubmit='return false;' id='nameForm'><label for='nameInput'>Order name:</label><input type='text' id='nameInput' name='nameInput' value='" + userName + "'><br><input type='submit' onclick='nameSubmit()'></form></div>";
    };
    nameFormDiv = document.getElementById("nameFormDiv");
    nameInput = document.getElementById("nameInput");
};

function chooseNumberOfCookies(_i){
    console.log(COOKIEMENU[_i].name + "was clicked.");
    document.getElementById(_i).onclick = (null);
    let evilVarible = false;
    for(let x = 0; x < userCart.length; x = (x+1)){
        if(userCart[x].item == _i){
            document.getElementById(_i).innerHTML = ("<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + "</h2><button onclick='closeChooseCookies(" + _i + ", event)'><img alt='close'></button><form onsubmit='return false;' id='amountOfCookiesForm" + _i + "'><label for='amountInput'>How many " + COOKIEMENU[_i].name + "s do you want?</label><input type='number' id='amountInput" + _i + "' name='amountInput' min='0' value='" + userCart[x].amount + "'><br><input type='submit' onclick='amountOfCookiesSubmit(" + _i + ")'></form>");
            evilVarible = true;
        };
    };
    if(evilVarible == false){
        document.getElementById(_i).innerHTML = ("<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + "</h2><button onclick='closeChooseCookies(" + _i + ", event)'><img alt='close'></button><form onsubmit='return false;' id='amountOfCookiesForm" + _i + "'><label for='amountInput'>How many " + COOKIEMENU[_i].name + "s do you want?</label><input type='number' id='amountInput" + _i + "' name='amountInput' min='0' value='0'><br><input type='submit' onclick='amountOfCookiesSubmit(" + _i + ")'></form>");
    };
};

function amountOfCookiesSubmit(_i){
    document.getElementById("amountInput" + _i).value
    console.log("user wants" + document.getElementById("amountInput" + _i).value + COOKIEMENU[_i].name);
    let evilVarible = false;
    for(let x = 0; x < userCart.length; x = (x+1)){
        if(userCart[x].item == _i){
            userCart[x].amount = document.getElementById("amountInput" + _i).value;
            evilVarible = true;
        };
    };
    if(evilVarible == false){
        userCart.push({item: _i, amount: document.getElementById("amountInput" + _i).value});
    };
    console.log(userCart);
    closeChooseCookies(_i, event);
};

function closeChooseCookies(_i, event){
    event.stopPropagation();
    document.getElementById(_i).onclick = () => chooseNumberOfCookies(_i);
    document.getElementById(_i).innerHTML = ("<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + "</h2>");
};

function displayCart(){
    displayHeadder();
    BODY.innerHTML += "<div id='fancyCartDiv' class='fancycart'><h2>This is your order:</h2></div>";
    for(let i = 0; i < userCart.length; i = (i+1)){
        console.log("bor");
        document.getElementById("fancyCartDiv").innerHTML += "<p>" + userCart[i].amount + " - "+ COOKIEMENU[userCart[i].item].name + "'s</p>"
    };
    document.getElementById("fancyCartDiv").innerHTML += "<button onclick='displayMenu()'>Change order</button><button onclick='displayPayForm()'>Pay</button>";
};

function displayPayForm(){
    displayHeadder();
    BODY.innerHTML += "<div class='paymentdiv'><form onsubmit='return false;' id='payForm'><label for='moneyInput'>Money:</label><input type='text' id='nameInput' name='nameInput' placeholder='Jhon Doe'><br><input type='submit' onclick='nameSubmit()'></form></div>";
};