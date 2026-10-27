const inputel = document.querySelector(".input");
const btnel = document.querySelectorAll(".btn");

/*
	[btn, btn, btn]
*/

btnel.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		if (e.target.innerHTML == "=") {
			let ans = eval(inputel.value);
			inputel.value = eval(inputel.value);
			return;
		}

		inputel.value += e.target.innerHTML;
	});
});

document.addEventListener("keydown", (e) => {
	console.log(e.key);
	if (e.key == "Enter") {
		inputel.value = eval(inputel.value);
		return;
	}

	if (e.key == "Backspace") {
		inputel.value = inputel.value.slice(0, -1);
		return;
	}

	if (
		e.key == "0" ||
		e.key == "1" ||
		e.key == "2" ||
		e.key == "3" ||
		e.key == "4" ||
		e.key == "5" ||
		e.key == "6" ||
		e.key == "7" ||
		e.key == "8" ||
		e.key == "9" ||
		e.key == "+" ||
		e.key == "-" ||
		e.key == "*" ||
		e.key == "/"
	) {
		inputel.value += e.key;
	}
});
