// let h1el = document.getElementById("heading");

let h1el = document.querySelector("#heading");
let btnel = document.querySelector("#btn");
let btnel2 = document.querySelector("#btn2");
let boxel = document.querySelector(".box");

h1el.style.color = "red";
h1el.style.backgroundColor = "blue";
h1el.textContent = "hello, world!";
h1el.innerHTML = "<h2>welcome</h2>";

let fun = () => {
	h1el.style.color = "white";
	h1el.style.backgroundColor = "red";
};

let fun2 = () => {
	h1el.style.color = "blue";
	h1el.body.backgroundColor = "purple";
};

let fun3 = () => {
	boxel.style.backgroundColor = "red";
	
}

btnel.addEventListener("click", fun);
btnel2.addEventListener("dblclick", fun2);


console.log(h1el);
