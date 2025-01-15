const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const info = document.createElement("p");
info.classList.add("info");
info.textContent = "This text is red!!!";
info.style.color = "red";

container.appendChild(info);

const head = document.createElement("h3");
head.classList.add("head");
head.textContent ="im blue";
head.style.color = "blue";

container.appendChild(head);

const div = document.createElement("div");
div.style.border = "solid black"
div.style.backgroundColor = "pink"

const p = document.createElement("p");
p.textContent = "ME TOO!"

const h1 = document.createElement("h1");
h1.textContent = "Im a div";

div.appendChild(h1);
div.appendChild(p)
container.appendChild(div);

// Below are different ways of displaying buttons with
// alerts. Some btns are using the functions in hmtl 
// or using the functions for the btn only in js

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("hello yada");
});

function alertFunction() {
    alert("alert funcion");
}

function alertfunc() {
    alert("alert funcion jsbtn");
}


const jsbtn = document.querySelector("#jsbtn");
jsbtn.onclick = alertfunc;

btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.backgroundColor = "green";
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("keydown", function(e) {
    e.target.style.backgroundColor = "green";
    alertFunction;
  });

});






/*a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue 
h3!”

a <div> with a black border and pink background
 color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”

Hint for this one: after creating the <div> with
 createElement, append the <h1> and <p> to it 
 before adding it to the container.*/