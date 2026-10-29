/*
	Promise is js object that takes callback as args
*/
/*
	let p = new Promise((resolve, reject) => {
		let age = 20;
		if (age > 19) {
			resolve(age);
		} else {
			reject(age);
		}
	});
	
	p.then((msg) => {
		console.log(msg, "Age Valid");
	}).catch((msg) => {
		console.log(msg, "Age Invalid");
	});
*/

function getUser() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("User Data");
			resolve();
		}, 5000);
	});
}
function getUserBank() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("User Bank");
			resolve();
		}, 3000);
	});
}

function getUserEmployee() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("User Employee detail");
			resolve();
		}, 2000);
	});
}

getUser()
	.then(() => {
		// return tell js to wait for this function promise to execture before moving forward
		return getUserBank();
	})
	.then(() => {
		return getUserEmployee();
	})
	.catch((err) => {
		console.log(err);
	});
