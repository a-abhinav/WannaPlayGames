var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1source="./images/dice"+randomNumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImage1source);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2source="./images/dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImage2source);

var h1=document.querySelector("h1");
if(randomNumber1<randomNumber2){
    h1.innerText="Player two wins!🎉";
}
else if(randomNumber1>randomNumber2){
    h1.innerText="🎉Player one wins!";
}else{
    h1.innerText="Draw!";
}