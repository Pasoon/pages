var cartcount=0;

function updateBrowsingHeader() {
    document.getElementById("browsetext");
    
}

function addToCart(){
    ++cartcount;
    document.getElementById("cart").innerHTML = "Cart("+cartcount+")";
    localStorage.setItem("Cart Count", cartcount);
}

function scienceFictionClicked(){
    
    document.getElementById("numberofitems").innerHTML="3 items"
    document.getElementById("browsetext").innerHTML="Science Fiction"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/germangirl.jpeg";
    document.getElementById("book1name").innerHTML = "The German Girl"
    document.getElementById("book1author").innerHTML = "Armando Lucas Correa"
    document.getElementById("book1price").innerHTML = "9.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/sevenstones.jpg";
    document.getElementById("book2img").style.height = "250px";
    document.getElementById("book2name").innerHTML = "Seven Stones to Stand or Fall"
    document.getElementById("book2author").innerHTML = "Diana Gabaldon"
    document.getElementById("book2price").innerHTML = "15.99$"
    
    document.getElementById("book3img").src="assets/ItemSlider/images/magpiemurders.jpeg";
    document.getElementById("book3name").innerHTML = "Magpie Murders"
    document.getElementById("book3author").innerHTML = "Anthony Horrowitz"
    document.getElementById("book3price").innerHTML = "13.99$"
}

function satireClicked(){
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Satire"
}

function artClicked(){
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Art"
}

function fantasyClicked(){
    
    document.getElementById("numberofitems").innerHTML="2 items"
    document.getElementById("browsetext").innerHTML="Fantasy"
}

function biographyClicked(){
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Biography"
}

function selfhelpClicked(){
    
    document.getElementById("numberofitems").innerHTML="4 items"
    document.getElementById("browsetext").innerHTML="Self Help"
}

function historyClicked(){
    document.getElementById("numberofitems").innerHTML="4 items"
    document.getElementById("browsetext").innerHTML="History"
}

function actionClicked(){
    
    document.getElementById("numberofitems").innerHTML="3 items"
    document.getElementById("browsetext").innerHTML="Action & Adventure"
}

function mysteryClicked(){
    document.getElementById("numberofitems").innerHTML="3 items"
    document.getElementById("browsetext").innerHTML="Mystery"
}

function horrorClicked(){
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Horror"
}

function guideClicked(){
    
    document.getElementById("numberofitems").innerHTML="2 items"
    document.getElementById("browsetext").innerHTML="Guide & Travel"
}

function childrenClicked(){
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Childrens"
}