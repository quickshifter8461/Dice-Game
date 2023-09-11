let randomNumber1 = Math.floor((Math.random()*6)+1);
console.log(randomNumber1);

let diceImage1 = "images/dice"+randomNumber1+".png";

let randomDice1 = document.getElementsByClassName("img1");
console.log(randomDice1);

randomDice1[0].setAttribute("src", diceImage1);

let randomNumber2 = Math.floor((Math.random()*6)+1);

let diceImage2 ="images/dice"+randomNumber2+".png";

let randomDice2 = document.getElementsByClassName("img2");
console.log(randomDice2);

randomDice2[0].setAttribute("src", diceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player ONE wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player TWO wins 🚩"
}else{
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩"
}