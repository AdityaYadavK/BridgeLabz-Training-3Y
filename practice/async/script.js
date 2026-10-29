console.log("start");

/*
	setTimeout(() => {
		console.log("hello");
	}, 1000);
*/

function getUser() {
	setTimeout(() => {
		console.log("User data");
	}, 3000)
}

function getUserBank() {
	setTimeout(() => {
		console.log("User bank");
	}, 1000)
}

getUser()
getUserBank()

console.log("end");
