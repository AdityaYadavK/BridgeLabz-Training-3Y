let student = {
	id: 101,
	name: "Rahul",
	isPresent: false,
	address: {
		city: "Mathura",
        pincode : 230011
	},
	display: () => {
        console.log(`My Name is ${this.name}`)
    }
}

let data = JSON.stringify(student);
console.log(data)

let obj = JSON.parse(data)
console.log(obj)


