class Queue { 
    // Array is used to implement a Queue 
    constructor() { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    // enqueue(item) 
    // dequeue() 
    // front() 
    // isEmpty() 
    // printQueue() 
    enqueue(element) {     
        this.items.push(element); 
    }    

    dequeue() { 
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 
    } 
    front() {  
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
   } 
    isEmpty() { 
        
        return this.items.length == 0; 
    } 

    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 

} 

var queue = new Queue(); 
console.log(" 1st command to delete ==" + queue.dequeue());
console.log("Is Queue Empty:" + queue.isEmpty());

console.log("===============================");
// Adding elements to the queue 
// queue contains [10, 20, 30, 40, 50] 
queue.enqueue(100); 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 

console.log ("Get the 1st element form Queue: " +queue.front() );
console.log("==========================");
console.log("Print Original: " +queue.printQueue());

console.log("==================");
queue.dequeue();
console.log("Print after delete: " + queue.printQueue());
