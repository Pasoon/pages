var cartcount=0;

window.onload = function(){
    var checkboxes = document.getElementsByTagName('input');

    for (var i=0; i<checkboxes.length; i++)  {
        if (checkboxes[i].type == 'checkbox')   {
            checkboxes[i].checked = false;
        } 
    }
}


function addToCart(){
    ++cartcount;
    document.getElementById("cart").innerHTML = "Cart("+cartcount+")";
    alert("Added to cart.");
}


function scienceFictionClicked(){

    console.log(document.getElementById("book1"));
    console.log(document.getElementById("book1"));
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='hidden'){
        document.getElementById("book2").style.visibility = 'visible';
    }
    else{
        document.getElementById("book2").style.visibility = 'visible'
    }
    if(document.getElementById("book3").style.visibility==='hidden'){
        document.getElementById("book3").style.visibility = 'visible';
    }
    else{
        document.getElementById("book3").style.visibility = 'visible'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="3 items"
    document.getElementById("browsetext").innerHTML="Science Fiction"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/germangirl.jpeg";
    document.getElementById("book1name").innerHTML = "The German Girl"
    document.getElementById("book1author").innerHTML = "Armando Lucas Correa"
    document.getElementById("book1price").innerHTML = "9.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/sevenstones.jpg";
    document.getElementById("book2img").style.height = "200px";
    document.getElementById("book2name").innerHTML = "Seven Stones to Stand or Fall"
    document.getElementById("book2author").innerHTML = "Diana Gabaldon"
    document.getElementById("book2price").innerHTML = "15.99$"
    
    document.getElementById("book3img").src="assets/ItemSlider/images/magpiemurders.jpeg";
    document.getElementById("book3name").innerHTML = "Magpie Murders"
    document.getElementById("book3author").innerHTML = "Anthony Horrowitz"
    document.getElementById("book3price").innerHTML = "13.99$"
}

function satireClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='visible'){
        document.getElementById("book2").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book2").style.visibility = 'hidden'
    }
    if(document.getElementById("book3").style.visibility==='visible'){
        document.getElementById("book3").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book3").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Satire"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/perfectlife.jpg";
    document.getElementById("book1img").style.height = "250px";
    document.getElementById("book1name").innerHTML = "My (Not So) Perfect Life"
    document.getElementById("book1author").innerHTML = "Sophie Kinsella"
    document.getElementById("book1price").innerHTML = "16.99$"
}

function artClicked(){
    
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='visible'){
        document.getElementById("book2").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book2").style.visibility = 'hidden'
    }
    if(document.getElementById("book3").style.visibility==='visible'){
        document.getElementById("book3").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book3").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Art"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/thereminders.jpg";
    document.getElementById("book1name").innerHTML = "The Reminders"
    document.getElementById("book1author").innerHTML = "Val Emmich"
    document.getElementById("book1price").innerHTML = "17.99$"
}

function fantasyClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='hidden'){
        document.getElementById("book2").style.visibility = 'visible';
    }
    else{
        document.getElementById("book2").style.visibility = 'visible'
    }
    if(document.getElementById("book3").style.visibility==='visible'){
        document.getElementById("book3").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book3").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="2 items"
    document.getElementById("browsetext").innerHTML="Fantasy"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/gameofthronesboxset.jpg";
    document.getElementById("book1name").innerHTML = "Game of Thrones 5-Book Box Set"
    document.getElementById("book1author").innerHTML = "George R.R. Martin"
    document.getElementById("book1price").innerHTML = "45.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/sevenstones.jpg";
    document.getElementById("book2img").style.height = "250px";
    document.getElementById("book2name").innerHTML = "Seven Stones to Stand or Fall"
    document.getElementById("book2author").innerHTML = "Diana Gabaldon"
    document.getElementById("book2price").innerHTML = "15.99$"
}

function biographyClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='visible'){
        document.getElementById("book2").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book2").style.visibility = 'hidden'
    }
    if(document.getElementById("book3").style.visibility==='visible'){
        document.getElementById("book3").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book3").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Biography"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/hunger.jpg";
    document.getElementById("book1name").innerHTML = "Hunger: A Memoir of My Body"
    document.getElementById("book1author").innerHTML = "Roxanne Gay"
    document.getElementById("book1price").innerHTML = "13.99$"
}

function selfhelpClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='hidden'){
        document.getElementById("book2").style.visibility = 'visible';
    }
    else{
        document.getElementById("book2").style.visibility = 'visible'
    }
    if(document.getElementById("book3").style.visibility==='hidden'){
        document.getElementById("book3").style.visibility = 'visible';
    }
    else{
        document.getElementById("book3").style.visibility = 'visible'
    }
    
    if(document.getElementById("book4").style.visibility==='hidden'){
        document.getElementById("book4").style.visibility = 'visible';
    }
    else{
        document.getElementById("book4").style.visibility = 'visible'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    
    document.getElementById("numberofitems").innerHTML="4 items"
    document.getElementById("browsetext").innerHTML="Self Help"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/deepwork.jpg";
    document.getElementById("book1img").style.height = "250px";
    document.getElementById("book1name").innerHTML = "Deep Work: Rules for Focused Success in a Distracted World"
    document.getElementById("book1author").innerHTML = "Cal Newport"
    document.getElementById("book1price").innerHTML = "19.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/noisnotenuf.jpg";
    document.getElementById("book2img").style.height = "200px";
    document.getElementById("book2name").innerHTML = "No Is Not Enough: Resisting the New Shock Politics and Winning the World We Need"
    document.getElementById("book2author").innerHTML = "Naomi Klein"
    document.getElementById("book2price").innerHTML = "13.99$"
    
    document.getElementById("book3img").src="assets/ItemSlider/images/5disfunctions.jpg";
    document.getElementById("book3img").style.height = "250px";
    document.getElementById("book3name").innerHTML = "The Five Dysfunctions of a Team: A Leadership Fable"
    document.getElementById("book3author").innerHTML = "Patrick Lencioni"
    document.getElementById("book3price").innerHTML = "29.99$"
    
    document.getElementById("book4img").src="assets/ItemSlider/images/5secondrule.jpg";
    document.getElementById("book4img").style.height = "250px";
    document.getElementById("book4name").innerHTML = "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage"
    document.getElementById("book4author").innerHTML = "Mel Robbins"
    document.getElementById("book4price").innerHTML = "9.99$"
}

function historyClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='hidden'){
        document.getElementById("book2").style.visibility = 'visible';
    }
    else{
        document.getElementById("book2").style.visibility = 'visible'
    }
    if(document.getElementById("book3").style.visibility==='hidden'){
        document.getElementById("book3").style.visibility = 'visible';
    }
    else{
        document.getElementById("book3").style.visibility = 'visible'
    }
    
    if(document.getElementById("book4").style.visibility==='hidden'){
        document.getElementById("book4").style.visibility = 'visible';
    }
    else{
        document.getElementById("book4").style.visibility = 'visible'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="4 items"
    document.getElementById("browsetext").innerHTML="History"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/germangirl.jpeg";
    document.getElementById("book1name").innerHTML = "The German Girl"
    document.getElementById("book1author").innerHTML = "Armando Lucas Correa"
    document.getElementById("book1price").innerHTML = "9.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/theorphanstale.jpg";
    document.getElementById("book2name").innerHTML = "The Orphan's Tale: A Novel"
     document.getElementById("book2img").style.height = "250px";
    document.getElementById("book2author").innerHTML = "Pam Jenoff"
    document.getElementById("book2price").innerHTML = "9.99$"
    
    document.getElementById("book3img").src="assets/ItemSlider/images/strangedeath.jpg";
    document.getElementById("book3name").innerHTML = "The Strange Death of Europe: Immigration, Identity, Islam"
    document.getElementById("book3author").innerHTML = "Douglas Murray"
    document.getElementById("book3price").innerHTML = "9.99$"
    
    document.getElementById("book4img").src="assets/ItemSlider/images/weightofink.jpeg";
    document.getElementById("book4name").innerHTML = "The Weight of Ink"
    document.getElementById("book4author").innerHTML = "Rachel Kadish"
    document.getElementById("book4price").innerHTML = "18.99$"
}

function actionClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='hidden'){
        document.getElementById("book2").style.visibility = 'visible';
    }
    else{
        document.getElementById("book2").style.visibility = 'visible'
    }
    if(document.getElementById("book3").style.visibility==='hidden'){
        document.getElementById("book3").style.visibility = 'visible';
    }
    else{
        document.getElementById("book3").style.visibility = 'visible'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="3 items"
    document.getElementById("browsetext").innerHTML="Action & Adventure"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/gameofthronesboxset.jpg";
    document.getElementById("book1img").style.height = "250px";
    document.getElementById("book1name").innerHTML = "Game of Thrones 5-Book Box Set"
    document.getElementById("book1author").innerHTML = "George R.R. Martin"
    document.getElementById("book1price").innerHTML = "45.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/clockworkorange.jpg";
    document.getElementById("book2img").style.height = "250px";
    document.getElementById("book2name").innerHTML = "A Clockwork Orange"
    document.getElementById("book2author").innerHTML = "Anthony Burgess"
    document.getElementById("book2price").innerHTML = "9.99$"
    
    document.getElementById("book3img").src="assets/ItemSlider/images/three%20day%20road.jpg";
    document.getElementById("book3img").style.height = "250px";
    document.getElementById("book3name").innerHTML = "Three Day Road"
    document.getElementById("book3author").innerHTML = "Joseph Boyden"
    document.getElementById("book3price").innerHTML = "12.99$"
}

function mysteryClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='hidden'){
        document.getElementById("book2").style.visibility = 'visible';
    }
    else{
        document.getElementById("book2").style.visibility = 'visible'
    }
    if(document.getElementById("book3").style.visibility==='hidden'){
        document.getElementById("book3").style.visibility = 'visible';
    }
    else{
        document.getElementById("book3").style.visibility = 'visible'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="3 items"
    document.getElementById("browsetext").innerHTML="Mystery"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/strangedeath.jpg";
    document.getElementById("book1name").innerHTML = "The Strange Death of Europe: Immigration, Identity, Islam"
    document.getElementById("book1img").style.height = "200px";
    document.getElementById("book1author").innerHTML = "Douglas Murray"
    document.getElementById("book1price").innerHTML = "9.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/magpiemurders.jpeg";
    document.getElementById("book2name").innerHTML = "Magpie Murders"
    document.getElementById("book2author").innerHTML = "Anthony Horrowitz"
    document.getElementById("book2price").innerHTML = "13.99$"
    
    document.getElementById("book3img").src="assets/ItemSlider/images/thewomanincabin.jpg";
    document.getElementById("book3img").style.height = "250px";
    document.getElementById("book3name").innerHTML = "Woman in Cabin 10"
    document.getElementById("book3author").innerHTML = "Ruth Ware"
    document.getElementById("book3price").innerHTML = "15.99$"
}

function guideClicked(){
    
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='hidden'){
        document.getElementById("book2").style.visibility = 'visible';
    }
    else{
        document.getElementById("book2").style.visibility = 'visible'
    }
    if(document.getElementById("book3").style.visibility==='visible'){
        document.getElementById("book3").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book3").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="2 items"
    document.getElementById("browsetext").innerHTML="Guide & Travel"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/bluecastle.jpg";
    document.getElementById("book1name").innerHTML = "The Blue Castle"
    document.getElementById("book1img").style.height = "250px";
    document.getElementById("book1author").innerHTML = "Lucy M. Montgomery"
    document.getElementById("book1price").innerHTML = "6.99$"
    
    document.getElementById("book2img").src="assets/ItemSlider/images/earlscookbook.jpg";
    document.getElementById("book2name").innerHTML = "Earls The Cookbook: Eat a Little. Eat a Lot. 110 of Your Favourite Recipes"
    document.getElementById("book2img").style.height = "200px";
    document.getElementById("book2author").innerHTML = "Jim Sutherland"
    document.getElementById("book2price").innerHTML = "16.99$"
}

function childrenClicked(){
    
    if(document.getElementById("book1").style.visibility==='hidden'){
        document.getElementById("book1").style.visibility = 'visible';
    }
    else{
        document.getElementById("book1").style.visibility = 'visible'
    }
    if(document.getElementById("book2").style.visibility==='visible'){
        document.getElementById("book2").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book2").style.visibility = 'hidden'
    }
    if(document.getElementById("book3").style.visibility==='visible'){
        document.getElementById("book3").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book3").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book4").style.visibility==='visible'){
        document.getElementById("book4").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book4").style.visibility = 'hidden'
    }
    
    if(document.getElementById("book5").style.visibility==='visible'){
        document.getElementById("book5").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book5").style.visibility = 'hidden'
    }
    if(document.getElementById("book6").style.visibility==='visible'){
        document.getElementById("book6").style.visibility = 'hidden';
    }
    else{
        document.getElementById("book6").style.visibility = 'hidden'
    }
    
    document.getElementById("numberofitems").innerHTML="1 item"
    document.getElementById("browsetext").innerHTML="Childrens"
    
    document.getElementById("book1img").src="assets/ItemSlider/images/turtles%20all%20the%20way%20down.jpg";
    document.getElementById("book1name").innerHTML = "Turtles All the Way Down"
    document.getElementById("book1img").style.height = "250px";
    document.getElementById("book1author").innerHTML = "John Green"
    document.getElementById("book1price").innerHTML = "13.99$"
}