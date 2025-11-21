class Stack{
    constructor(){
        this.items = [];
    }

    push(data){
        this.items.push(data);
    }
    pop(){
      if ( this.items.length == 0 ){
          return "Underflow"
      }
      return this.items.pop();
    }
    toppeek(){
       
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    printstack(){
    var str="";
        for(var i= 0; i<this.items.length; i++)
          str += this.items[i] + " ";
     return str;     
    }


}

// creating object for stack class 
var stack = new Stack(); 
  
// testing isEmpty and pop on an empty stack 
  
// returns false 
console.log(stack.isEmpty());  
  
// returns Underflow 
console.log(stack.pop());  

// Adding element to the stack 
stack.push(10); 
stack.push(20); 
stack.push(30); 
// Printing the stack element 
// prints [10, 20, 30] 
console.log(stack.printstack());
console.log("========================");

console.log(stack.pop());
console.log(stack.printstack());


