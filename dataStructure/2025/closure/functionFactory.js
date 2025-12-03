// Function Factory with Closure Example (JavaScript)
/*
• 	A function factory uses closures to generate specialized functions.
• 	Closures allow the inner function to retain access to variables from the outer scope.
• 	This pattern is powerful for configuration, encapsulation, and avoiding repetitive code.


*/

function multiplier(number) {
	return function (value) {
		return number * value;
	};
}

const double = multiplier(2);

console.log(double(5));

/*
An e-commerce company wants to apply different types of discounts depending on customer segments (e.g., students, holiday shoppers, loyal members). 
Instead of hardcoding separate discount functions, they want a function factory that generates discount calculators dynamicall


Requirements
- Factory Name: discountFactory
- Inputs (to the factory):
- Accept a discount rate (e.g., 0.10 for 10%, 0.25 for 25%).
- Optionally accept a label (e.g., "Student Discount", "Holiday Sale").
- Outputs (from the factory):
- Return a function that accepts a price as input.
- The returned function should calculate the final price after applying the discount.
- It should also be able to log or return the discount label for clarity.


- Behavior:
- Each generated function must “remember” its discount rate and label via closure.
- Demonstrate at least two different discount calculators (e.g., student vs holiday).
- Show sample calls with prices and outputs.
- Constraints:
- Must handle edge cases:
- If the discount rate is invalid (negative or > 1), return the original price.
- If the price is not a number, handle gracefully (e.g., return NaN or an error message).
- Keep the implementation simple and reusable.


*/

function discountFactory(customerType) {
	//1. 	Use a lookup object instead of if-else statements for better scalability.

	const discountRates = {
		Students: 0.18,
		Holiday: 0.15,
		LoyalMembers: 0.12,
	};

	const discount = discountRates[customerType] || 0;

	return function (price) {
		let finalPrice;
		finalPrice = price - price * discount;

		return `Final price for ${customerType} after ${
			discount * 100
		}% discount is ${finalPrice.toFixed(2)}`;
	};
}

const collegeStudent = discountFactory("Students");
console.log(collegeStudent(100));

const hollidayShopper = discountFactory("Holiday");
console.log(hollidayShopper(200));
