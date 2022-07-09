// let heading = document.getElementById('heading-one');
// heading.textContent = "Hello World!";

// let paragraph = document.getElementsByTagName('p')[0]
// paragraph.textContent = "This was written with embedded JS";

// document.write('<h1>Hello from the script!</h1>');

function stay(){
    console.log("stay");
}

function hit(){
    console.log("hit");
}

function doubleDown(){
    console.log("double down");
}

let stayButton = document.getElementById("stay");
let hitButton = document.getElementById("hit");
let doubleDownButton = document.getElementById("double-down");

stayButton.addEventListener("click", stay);
hitButton.addEventListener("click", hit);
doubleDownButton.addEventListener("click", doubleDown);