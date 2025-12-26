let count = 0;

function getData() {
	// call API and fetch data
	console.log("Fetching Data...", count++);
}

function debounce(fn, delay) {
	let timer;

	return function (...args) {
		let context = this;
		clearTimeout(timer);
		timer = setTimeout(() => {
			getData.apply(context, args);
		}, delay);
	};
}

// solution with better function which can reduce the api call on each key stroke
// only call the appi when the difference between two key storkes is more than specified delay
/*	 */
//===============================================================================
const betterDebounce = debounce(getData, 300);

//
