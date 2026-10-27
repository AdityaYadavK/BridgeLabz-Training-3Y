const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const cnt = document.getElementById("count");

let count = 0;

function increment() {
	count++;
	cnt.textContent = count;
}
function decrement() {
	count--;
	cnt.textContent = count;
}

inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);

console.log("");
