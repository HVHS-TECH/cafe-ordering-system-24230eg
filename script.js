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

displayHeadder();

BODY.style.backgroundColor = "#0b5394";

displayNameForm();

/*********
Functions:
*********/

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
    BODY.style.backgroundImage = "Background.jpg";
    displayHeadder();
    let currentCookie;
    for(let i = 0; i < COOKIEMENU.length; i = (i+1)){
        currentCookie = COOKIEMENU[i];
        console.log(currentCookie.name);
        BODY.innerHTML += "<div class='menuitem'><img src='cookies/" + i + ".png' alt='A picture of a " + currentCookie.name + ".'></img><h2>" + currentCookie.name + "</h2></div>";
    };
};

function displayHeadder(){
    BODY.innerHTML="<div id='titleDiv' class='header'><h1>Ethan's bakery</h1></div>";
};

function displayNameForm(){
    BODY.innerHTML+="<div class='nameformdiv' id='nameFormDiv'><form onsubmit='return false;' id='nameForm'><label for='nameInput'>Order name:</label><input type='text' id='nameInput' name='nameInput'><br><input type='submit' onclick='nameSubmit()'></form></div>";
    nameFormDiv = document.getElementById("nameFormDiv");
    nameInput = document.getElementById("nameInput");
};