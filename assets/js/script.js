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
    
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden';
    document.getElementById("book3").style.visibility='visible';
    document.getElementById("book2").style.visibility='visible';
    document.getElementById("book1").style.visibility='visible';
    
    document.getElement
}

function satireClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden';
    document.getElementById("book3").style.visibility='hidden';
    document.getElementById("book2").style.visibility='hidden';
    document.getElementById("book1").style.visibility='visible';
}

function artClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden';
    document.getElementById("book3").style.visibility='hidden';
    document.getElementById("book2").style.visibility='hidden';
    document.getElementById("book1").style.visibility='visible';
}

function fantasyClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden'; 
    document.getElementById("book3").style.visibility='hidden';
    document.getElementById("book2").style.visibility='visible';
    document.getElementById("book1").style.visibility='visible';
}

function biographyClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden';
    document.getElementById("book3").style.visibility='hidden';
    document.getElementById("book2").style.visibility='hidden';
    document.getElementById("book1").style.visibility='visible';
}

function selfhelpClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='visible';
    document.getElementById("book3").style.visibility='visible';
    document.getElementById("book2").style.visibility='visible';
    document.getElementById("book1").style.visibility='visible';
}

function historyClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='visible';
    document.getElementById("book3").style.visibility='visible';
    document.getElementById("book2").style.visibility='visible';
    document.getElementById("book1").style.visibility='visible';
}

function actionClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden';
    document.getElementById("book3").style.visibility='visible';
    document.getElementById("book2").style.visibility='visible';
    document.getElementById("book1").style.visibility='visible';
}

function mysteryClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden';
    document.getElementById("book3").style.visibility='visible';
    document.getElementById("book2").style.visibility='visible';
    document.getElementById("book1").style.visibility='visible';
}

function horrorClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden';
    document.getElementById("book3").style.visibility='hidden';
    document.getElementById("book2").style.visibility='hidden';
    document.getElementById("book1").style.visibility='visible';
}

function guideClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden';
    document.getElementById("book4").style.visibility='hidden'; 
    document.getElementById("book3").style.visibility='hidden';
    document.getElementById("book2").style.visibility='visible';
    document.getElementById("book1").style.visibility='visible';
}

function childrenClicked(){
    document.getElementById("book6").style.visibility='hidden';
    document.getElementById("book5").style.visibility='hidden'; 
    document.getElementById("book4").style.visibility='hidden'; 
    document.getElementById("book3").style.visibility='hidden';
    document.getElementById("book2").style.visibility='hidden';
    document.getElementById("book1").style.visibility='visible';
}