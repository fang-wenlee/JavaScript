/*

Async code (timeouts, promises, fetch calls, event handlers) often runs after the outer function has finished.
Closures allow that async callback to remember state from when it was created.
This is essential for:
- API requests
- Debouncing
- Throttling
- Timers
- React event handlers
- Background tasks


/* Example: Keeping State in a Timer (Classic Closure Example)

- Create a timer that counts seconds
- Use a closure to keep track of the elapsed time
- Log the elapsed time every second
*/

function startCounter() {
	let count = 0;

	setInterval(() => {
		count++;
		console.log("Count:", count);
	}, 1000);
}

//startCounter();

/*
2. Maintaining State During an API Cal
*/

function fetchUser(username) {
	const startTime = Date.now(); // state we want to keep

	return fetch(`https://api.github.com//users/{username}`)
		.then((res) => res.json())
		.then((data) => {
			console.log("Request took:", Date.now() - startTime, "ms");
			return data;
		});
}

fetchUser("fang-wenlee");

/*
 3. Debounce Function (Real‑World Frontend Example)
Debouncing is used in search bars, input fields, etc.


*/

function debounce(fn, delay) {
	let timer = null;

	return function (...args) {
		clearTimeout(timer);

		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

const saveInput = debounce((value) => {
	console.log("Saving:", value);
}, 500);
