const obj = { a: 1, b: 2, c: 3 };

// for...in
/*

• 	Used for: Iterating over enumerable property names of an object (including inherited ones).
• 	Works on: Objects, arrays, and anything with enumerable properties.
• 	Returns: Keys (as strings).
• 	Caution: Includes inherited properties unless filtered with -  hasOwnProperty


*/
for (let key in obj) {
	console.log(key, ": ", obj[key]);
}

// for ..of     Object.entries
/*
- Used for: Iterating over iterable values (like arrays, strings, Maps, Sets).
- Works on: Anything that implements the iterable protocol.
- Returns: Values directly.
- Does NOT work on plain objects unless you use Object.entries, Object.values, etc.

*/

console.log("Using Object.entries with for...of:");

for (let [key, value] of Object.entries(obj)) {
	console.log(key, ": ", value);
}

console.log("Using Object.values with for...of:");

for (let value of Object.values(obj)) {
	console.log(value);
}

// Object.keys
// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key]);
// });

// // Object.entries
// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// });

const objWithoutProto = Object.create(null);

console.log("objWithoutProto:", objWithoutProto);

const animal = {
	speak() {
		console.log("Roar!");
	},
};

const tiger = { type: "Bengal" };

// Object.setPrototypeOf(tiger, animal);

// tiger.speak(); // "Roar!" — inherited from animal

// console.log(tiger)
animal.speak.call(tiger);
animal.speak.apply(tiger);

//Object.assign(target, ...sources )
/*

 Limitations
• 	Doesn’t copy non-enumerable or symbol properties
• 	Doesn’t preserve prototype chain
• 	Doesn’t deep clone nested objects

*/

const target = { a: 1 };
const source = { b: 2 };

Object.assign(target, source);
console.log("Target: ", target); // { a: 1, b: 2 }

console.log("============================== ");

//console.log("data:", data); // ReferenceError: Cannot access 'data' before initialization

let data;
console.log("data:", data); // undefined
