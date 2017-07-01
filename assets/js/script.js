var cartcount=0;

function updateBrowsingHeader() {
    document.getElementById("browsetext");
    
}

function addToCart(){
    ++cartcount;
    document.getElementById("cart").innerHTML = "Cart("+cartcount+")";
}