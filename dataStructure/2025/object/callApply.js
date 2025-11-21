//borrowing methods using call and apply from one object to another

//borrowing  a function using call and apply

/*
  note:  start with function or object 's method 
and then use call or apply (first argument is the object to which you want to bind 'this' keyword and the rest are the arguments to the function)
*/
// =================================================
const animal = {
	speak: function (sound) {
		console.log("Sound: ", sound);
	},
};

function animalSound(voice) {
	console.log(" Animal Sound: ", voice);
}

const dog = {
	name: "Jew Jew",
	age: 3,
	color: "white",
};

const tiger = {
	name: "Bagh Bagh",
	age: 5,
	color: "orange",
};

const cat = {
	name: "Kitty",
	age: 2,
};
animal.speak.call(dog, "Woof Woof"); // Speak Woof Woof
animal.speak.apply(tiger, ["Roar Roar"]); // Speak Roar Roar

animalSound.call(dog, "Bark Bark"); // Animal Sound: Bark Bark

animal.speak.call(tiger, "Wa WA"); // Speak Growl Growl

// Bind method
/*
usage: same as call and bind; the onlyd difference is that bind return a new function which can be invoked later
*/
const blackCat = animalSound.bind(cat, "Meow Meow");
blackCat(); // Animal Sound: Meow Meow
