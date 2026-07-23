console.log("Running");

/********
Varibles:
********/

let totalCost;

//User related varibles:

let userName;

let userMoney;

let userCart = [];

/*******************************************************************
Ids for HTML elements:
They arn't constants becuase some of the elements get created later.
I may not acualy use them anymore.
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
        name:"dark chocolate cookie with chocolate chips",
        price:0.4
    },
    {
        name:"dark chocolate cookie with white chocolate chips",
        price:0.4
    },
    {
        name:"white chocolate cookie with white chocolate chips",
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
        name:"peanut butter and chocolate chip cookie",
        price:0.5
    },
    {
        name:"walnut cookie",
        price:0.45
    },
    {
        name:"walnut and chocolate chip cookie",
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
        name:"afghan cookie",
        price:0.7
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
    if(document.getElementById("nameInput").value == 0){
        console.log("Nothing or 0 was submited");
        displayHeadder();
        displayNameForm();
        document.getElementById("nameFormDiv").innerHTML += "<p>You have to enter something for your name and it can't be zero sorry.</p>";
    }else{
        if(document.getElementById("nameInput").value.length < 100){
            userName = document.getElementById("nameInput").value;
            displayMenu();
        }else{
            displayHeadder();
            displayNameForm();
            document.getElementById("nameFormDiv").innerHTML += "<p>Sorry you have to submit a name with less that 100 characters.</p>";
        };
    };
};

function displayMenu(){
    BODY.style.backgroundImage = "url(Background.jpg)";
    displayHeadder();
    BODY.innerHTML += "<div id='fancyMenuDiv' class='fancymenu'><button onclick='start()'>back</button><button onclick='displayCart()'>To checkout</button><p>Make shure to submit the forms befor continueing.</p></div>";
    let currentCookie;
    for(let i = 0; i < COOKIEMENU.length; i = (i+1)){
        currentCookie = COOKIEMENU[i];
        console.log(currentCookie.name);
        BODY.innerHTML += "<div class='menuitem' id='" + i +"' onclick='chooseNumberOfCookies(" + i + ")'><img src='cookies/" + i + ".png' alt='A picture of a " + currentCookie.name + ".'></img><h2>" + currentCookie.name + " $" + currentCookie.price + "</h2></div>";
    };
};

function displayHeadder(){
    BODY.innerHTML="<div id='titleDiv' class='header'><h1>Ethan's bakery</h1></div>";
};

function displayNameForm(){
    if(userName == undefined){
        BODY.innerHTML+="<div class='nameformdiv' id='nameFormDiv'><form onsubmit='return false;' id='nameForm'><label for='nameInput'>Order name: </label><input type='text' id='nameInput' name='nameInput' placeholder='Jhon Doe'><br><input type='submit' onclick='nameSubmit()'></form></div>";
    }else{
        BODY.innerHTML+="<div class='nameformdiv' id='nameFormDiv'><form onsubmit='return false;' id='nameForm'><label for='nameInput'>Order name: </label><input type='text' id='nameInput' name='nameInput' value='" + userName + "'><br><input type='submit' onclick='nameSubmit()'></form></div>";
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
            document.getElementById(_i).innerHTML = ("<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + " $" + COOKIEMENU[_i].price + "</h2><button onclick='closeChooseCookies(" + _i + ", event)'><img alt='close' src='close.png'></button><form onsubmit='return false;' id='amountOfCookiesForm" + _i + "'><label for='amountInput'>How many " + COOKIEMENU[_i].name + "s do you want?</label><input type='number' id='amountInput" + _i + "' name='amountInput' min='0' value='" + userCart[x].amount + "'><br><input type='submit' onclick='amountOfCookiesSubmit(" + _i + ")'></form>");
            evilVarible = true;
        };
    };
    if(evilVarible == false){
        document.getElementById(_i).innerHTML = ("<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + " $" + COOKIEMENU[_i].price + "</h2><button onclick='closeChooseCookies(" + _i + ", event)'><img alt='close' src='close.png'></button><form onsubmit='return false;' id='amountOfCookiesForm" + _i + "'><label for='amountInput'>How many " + COOKIEMENU[_i].name + "s do you want?</label><input type='number' id='amountInput" + _i + "' name='amountInput' min='0' value='0'><br><input type='submit' onclick='amountOfCookiesSubmit(" + _i + ")'></form>");
    };
};

function amountOfCookiesSubmit(_i){
    let amountx = document.getElementById("amountInput" + _i).value;
    let evilVarible = false;
    if(Math.round(amountx) == amountx && amountx > 0){
        // I have to whrite it out fully because it wasn't working when I whroete 10^59
        if(amountx < 100000000000000000000000000000000000000000000000000000000000){
            console.log("user wants" + amountx + COOKIEMENU[_i].name);
            for(let x = 0; x < userCart.length; x = (x+1)){
                if(userCart[x].item == _i){
                    userCart[x].amount = amountx;
                    evilVarible = true;
                };
            };
            if(evilVarible == false){
                userCart.push({item: _i, amount: amountx});
            };
            closeChooseCookies(_i, event);
        }else{
            document.getElementById(_i).innerHTML = "<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + " $" + COOKIEMENU[_i].price + "</h2><button onclick='closeChooseCookies(" + _i + ", event)'><img alt='close' src='close.png'></button><form onsubmit='return false;' id='amountOfCookiesForm" + _i + "'><label for='amountInput'>How many " + COOKIEMENU[_i].name + "s do you want?</label><input type='number' id='amountInput" + _i + "' name='amountInput' min='0' value='0'><br><input type='submit' onclick='amountOfCookiesSubmit(" + _i + ")'></form><p>Sorry we don't have that many cookies.</p>";
        };
    }else{
        console.log("hi");
        document.getElementById(_i).innerHTML = "<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + " $" + COOKIEMENU[_i].price + "</h2><button onclick='closeChooseCookies(" + _i + ", event)'><img alt='close' src='close.png'></button><form onsubmit='return false;' id='amountOfCookiesForm" + _i + "'><label for='amountInput'>How many " + COOKIEMENU[_i].name + "s do you want?</label><input type='number' id='amountInput" + _i + "' name='amountInput' min='0' value='0'><br><input type='submit' onclick='amountOfCookiesSubmit(" + _i + ")'></form><p>That is not a valid amount.</p>";
    };
    console.log(userCart);
};

function closeChooseCookies(_i, event){
    event.stopPropagation();
    document.getElementById(_i).onclick = () => chooseNumberOfCookies(_i);
    document.getElementById(_i).innerHTML = ("<img src='cookies/" + _i + ".png' alt='A picture of a " + COOKIEMENU[_i].name + ".'></img><h2>" + COOKIEMENU[_i].name + " $" + COOKIEMENU[_i].price + "</h2>");
};

function displayCart(){
    displayHeadder();
    BODY.innerHTML += "<div id='fancyCartDiv' class='fancycart'><h2>This is your order:</h2></div>";
    for(let i = 0; i < userCart.length; i = (i+1)){
        console.log("bor");
        document.getElementById("fancyCartDiv").innerHTML += "<p>" + userCart[i].amount + " - "+ COOKIEMENU[userCart[i].item].name + "s</p>"
    };
    document.getElementById("fancyCartDiv").innerHTML += "<button onclick='displayMenu()'>Change order</button><button onclick='displayPayForm()'>Pay</button>";
};

function displayPayForm(){
    displayHeadder();
    BODY.innerHTML += "<div class='paymentdiv' id='paymentDiv'><form onsubmit='return false;' id='payForm'><label for='moneyInput'>Money:</label><input type='number' id='moneyInput' name='moneyInput'><br><input type='submit' onclick='paySubmit()'></form></div>";
};

//this function checks if the amunt of money submited is 
function paySubmit(){
    userMoney = document.getElementById("moneyInput").value;
    totalCost = 0;
    for(let i = 0; i < userCart.length; i = (i+1)){
        totalCost = (totalCost + (COOKIEMENU[userCart[i].item].price*userCart[i].amount));
    };
    console.log(totalCost);
    if(userMoney < totalCost){
        console.log("they can't pay");
        document.getElementById("paymentDiv").innerHTML = "<form onsubmit='return false;' id='payForm'><label for='moneyInput'>Money:</label><input type='number' id='moneyInput' name='moneyInput'><br><input type='submit' onclick='paySubmit()'></form><p>You don't have enought money</p>"
    }else{
        console.log("they can pay");
        displayRecipt();
    };
};

//This function displays the recipt
function displayRecipt(){
    displayHeadder();
    BODY.style.backgroundImage = null;
    BODY.innerHTML += "<div class='reciptdiv' id ='reciptDiv'><h2>Ethan's bakery</h2><div><div>Name:</div><div class='gototheotherside'>" + userName + "</div></div></div>";
    for(let i = 0; i < userCart.length; i = (i+1)){
        document.getElementById("reciptDiv").innerHTML += "<br><div><div>" + userCart[i].amount + " - "+ COOKIEMENU[userCart[i].item].name  + "</div><div class='gototheotherside'>$" + (COOKIEMENU[userCart[i].item].price*userCart[i].amount) + "</div></div>"
    };
    document.getElementById("reciptDiv").innerHTML += "<br><div><div>Total:</div><div class='gototheotherside'>$" + totalCost + "</div></div><br><div><div>Money:</div><div class='gototheotherside'>$" + userMoney + "</div></div><br><div><div>Change:</div><div class='gototheotherside'>$" + (userMoney-totalCost) + "</div></div>";
    //this shows the atributions for the media i used in the website.
    BODY.innerHTML += "<div class='refrences'><p>Refrences:</p><p>I think all the media that isn't mine on this website is under some sort of creative commons licens or something.</p><ul><li>https://commons.wikimedia.org/wiki/File:Mrs_Fields_Sugar_Cookie_(19375317008).jpg</li><li>https://commons.wikimedia.org/wiki/File:Toffee_Chocolate_Chip_Cookies_(26157119681).jpg</li><li>https://commons.wikimedia.org/wiki/File:Vegan_Chocolate_Chip_Cookie.jpg</li><li>https://commons.wikimedia.org/wiki/File:Single_Belgian_biscuit_Edmonds_Cookery_book_1998.jpg</li><li>https://commons.wikimedia.org/wiki/File:Fortune_cookie_broken_20040628_223252_1.jpg</li><li>https://www.flickr.com/photos/reid-bee/41536442364/</li><li>https://www.coffeetreat.com.au/wp-content/uploads/2023/11/Cookies.png</li><li>https://source.roboflow.com/U3dDy9eZ7JVllV8dmfqPtSABw0s1/3jBneZvx2fXsZQikEJoQ/original.jpg</li><li>https://picryl.com/media/cookies-chocolate-cookies-dark-cookies-food-drink-0ad087?__cf_chl_f_tk=ydrJ2WMHs5WQN7CaMyzrlhkt1SvJ0_sP07MygzK5qj8-1783307103-1.0.1.1-bfhRn8g.wJ4Z93Tk7YYbH2VZ9CcruJh_8l97HTDWgZs</li><li>https://commons.wikimedia.org/wiki/File:White_Chocolate_and_Orange_Cookies,_March_2008.jpg</li><li>https://www.flickr.com/photos/vegan-baking/5025157154</li><li>https://www.publicdomainpictures.net/en/view-image.php?image=371598&picture=chocolate-chip-cookies-and-milk-2</li><li>https://tonyfitzgeraldphotography.com/the-master-pantry/master-cookie-recipe/#Macadamia-Nut-Cookies</li><li>https://www.flickr.com/photos/toni-genberg/50670087591</li><li>https://commons.wikimedia.org/wiki/File:Oatmeal_Raisin_cookie.jpg</li><li>https://bakesbybrownsugar.com/wp-content/uploads/2025/12/Cranberry-White-Chocolate-Oatmeal-Cookies-23.jpg</li><li>https://es.pinterest.com/pin/23151385576746471/</li><li>https://commons.wikimedia.org/wiki/File:Scored_Cookies.jpg</li><li>https://commons.wikimedia.org/wiki/File:2018.12.30_Low_Carbohydrate_Cookies,_Rehoboth_Beach_DE,_USA_09394_(39822587633).jpg</li><li>https://commons.wikimedia.org/wiki/File:Weihnachtspl%C3%A4tzchen_2008_Walnusstaler_(Alter_Fritz)_03.JPG</li><li>https://commons.wikimedia.org/wiki/File:Afghan_II_MRD.jpg</li><li>https://www.flickr.com/photos/neilconway/5048762799</li><li>https://www.publicdomainpictures.net/en/view-image.php?image=269154&picture=chocolate-chip-cookies</li><li>https://www.flickr.com/photos/jamiejamison/5788162651</li><li>https://commons.wikimedia.org/wiki/File:New_Hartford_NY_Hannaford_-_Half_Moon_vs_Black_and_White_cookies.jpg</li><li>https://www.flickr.com/photos/babeinthecitykl/130837279/</li><li>https://bakesbybrownsugar.com/wp-content/uploads/2023/05/Brown-Sugar-Pecan-Cookies-11.jpg</li><li>https://cookieclicker.wiki.gg/wiki/File:PerfectCookie.png#Licensing</li><li>https://pixnio.com/space/earth-universe-space-planet-continent-solar-system</li><li>https://picryl.com/media/solar-system-planets-space-171298</li><li>https://www.bonedryservices.com/services/storm-damage-restoration</li></ul></div>";
};