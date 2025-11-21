/*

closure: function is defined inside another function, it has access to the outer function's variables even after the outer function has finished executing.
Function boundled with its lexical scope forms a closure.

In practice, closures are most commonly used for state management without exposing variables directly, creating reusable function factories, 
and handling async/event-driven code.

common use cases of closures:
1:  Data Privacy/ Encapsulation

example:   Counter with Private Variable

example:   Bank Account with Private Balanc
2: - Function Factories

3: Callbacks and Event Handlers
4: - Maintaining State in Async Code


5: Partial Application and Currying

*/

//===============================================

function counter() {
	let count = 0;

	return {
		increment: () => {
			count = count + 1;
		},
		decrement: () => {
			count = count - 1;
		},
		getCount: () => {
			return count;
		},
	};
}

const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());

myCounter.decrement();
console.log(myCounter.getCount());

//============================================================

/*
Build a JavaScript module that simulates a simple bank account. The account balance must remain private
and only be accessible through controlled functions.
1: deposit(amount): Adds money to the account.
2: withdraw(amount): Removes money from the account if sufficient funds exist.
3: balance(): Returns the current account balance.
4: 

*/

function account(initialBalance = 0) {
	let balance = initialBalance;
	let transactionHistory = [];

	return {
		deposit: (money) => {
			if (money > 0) {
				balance = balance + money;
				transactionHistory.push({
					type: "deposit",
					amount: money,
					date: new Date(),
				});
				return balance;
			} else console.log("Deposit amount must be positive");
		},
		withdraw: (money) => {
			if (balance > 0 && money > 0 && money <= balance) {
				balance = balance - money;
				transactionHistory.push({
					type: "withdraw",
					amount: money,
					date: new Date(),
				});
				return balance;
			} else console.log(`Insufficient funds. Balance: $${balance}`);
			return null;
		},
		balance: () => {
			console.log("Account Balance:", balance);
			return balance;
		},
		transactionHistory: () => {
			return transactionHistory;
		},
	};
}
const myAccount = account(0);
myAccount.balance();
myAccount.deposit(500);
myAccount.balance();
myAccount.withdraw(200);
myAccount.balance();
myAccount.withdraw(400);
myAccount.balance();
console.log("Transaction History:", myAccount.transactionHistory());
