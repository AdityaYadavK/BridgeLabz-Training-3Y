// // objects

// let student = {
// 	id: 101,
// 	name: "Rahul",
// 	marks: 40,
// 	display() {
// 		console.log(`My Name is ${this.name}`);
// 	},
// };

// console.log(student.name);

// // bracket notation
// console.log(student["name"]);

// student.display();

// // functional constructor
// function Student(id, name, marks) {
// 	this.id = id;
// 	this.name = name;
// 	this.marks = marks;

// 	function display() {
// 		console.log("This is Method");
// 	}
// }

// let s1 = new Student(101, "Virat", 54);
// console.log(s1);

// class Student {
// 	// constructor method
// 	constructor(id, name, marks) {
// 		this.id = id;
// 		this.name = name;
// 		this.marks = marks;
// 	}

// 	// class method (no 'function' keyword)
// 	display() {
// 		console.log(`id: ${this.id}, name: ${this.name}, marks: ${this.marks}`);
// 	}
// 	getMarks = () => {
// 		console.log(`Marks : ${this.marks}`);
// 	}
// }

// // usage
// const st1 = new Student(101, "alice", 95);
// st1.display();

let students = [
	{ id: 101, name: "Raj", marks: "A", gender: "Male" },
	{ id: 104, name: "Ram", marks: "C", gender: "Male" },
	{ id: 102, name: "Diya", marks: "F", gender: "Female" },
	{ id: 105, name: "Yash", marks: "O", gender: "Male" },
	{ id: 106, name: "Disha", marks: "E", gender: "Female" },
];

let sn = students.map((x) => {
	return x.name;
});


let change = students.map((x) => {
	if (x.gender == "Male") {
		x.name = "Mr" + " " + x.name;
	} else {
		x.name = "Mrs" + " " + x.name;
    }
})


