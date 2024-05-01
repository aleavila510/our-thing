let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let buttonOne = document.querySelector(".option-one");
let buttontwo = document.querySelector(".option-two");
let buttontthree = document.querySelector(".option-three");
let optionOne = document.querySelector(".option-one-screen");
let optiontwo = document.querySelector(".option-two-screen");
let optiontwoImg = document.querySelector(".option-two-img");
let optionOneImg = document.querySelector(".option-one-img");
let optionOneEnd = document.querySelector(".option-one-end");

buttonOne.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOne.style.display = "block";

};

buttontwo.onclick = function() {
  opening.style.display = "none"; 
  buttons.style.display = "none";
   optiontwo.style.display = "block";
};






/*
   

        INSERT_VARIABLE.onclick = function() {

        };
        */