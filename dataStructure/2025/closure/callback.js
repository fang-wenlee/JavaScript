/*

A callback is just a function passed into another function to be executed later. 


Saving Form Data With a Callback

- Save the name
- Then run a callback that updates the UI
- The callback needs access to the original variable — this is where the closure happens



*/

function saveUser(name) {
	// This inner function is a closure
	return function callback() {
		console.log(`Saving user: ${name}`);
		// The callback still remembers "name" even after saveUser has finished
	};
}

// Usage
const onSave = saveUser("Fawn Fawn");
onSave(); // "Saving user: Fawn Fawn"
//=============================================================
/*
Shopping Cart + Callback

*/

function saveToCard(item) {
	let myCart = [];
	return function callback(product) {
		if (item !== myCart[0]) {
			myCart.push(item);
		}

		if (product) {
			myCart.push(product);
		}
		console.log("My Shooping Cart: ", myCart);
	};
}
//Usage:
const addItem = saveToCard("Tranning Shoes");
addItem();
addItem("Running Shoes"); // Note: This won't add "Running Shoes" because myCart is scoped to the closure of the first call

addItem("Socks");
