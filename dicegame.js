// alert("working");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png

var  randomImageSource= randomDiceImage; //image/dice1/png -image/dice6/png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

// //sortform//
// document.querySelectorAll("img")(1).setAttribute("src","dice" + (Math.floor(Math.random()*6)+1)+".png")

 randomNumber2 = Math.floor(Math.random() *6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; 

var  randomImageSource2 = randomDiceImage2; 


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Play 1 Wins ! ";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins ! "
}
else{
    document.querySelector("h1").innerHTML="Draw ! ";
}