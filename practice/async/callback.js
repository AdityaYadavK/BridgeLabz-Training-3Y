console.log("start");

/*
	setTimeout(() => {
		console.log("hello");
	}, 1000);
*/

function getUser(callback) {
	setTimeout(() => {
		console.log("User data");
		callback();
	}, 3000);
}

function getUserBank(callback) {
	setTimeout(() => {
		console.log("User bank");
		callback();
	}, 1000);
}

function getUserEmploye(callback) {
	setTimeout(() => {
		console.log("User employee detail");
		callback();
	}, 1000);
}

function getUserSalary() {
	setTimeout(() => {
		console.log("User Salary");
	}, 1000);
}

// callback hell
getUser(() => {
	getUserBank(() => {
		getUserEmploye(() => {
			getUserSalary();
		});
	});
});

console.log("end");
