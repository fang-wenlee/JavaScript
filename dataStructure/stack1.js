class Stack{
	//first in first out
	constructor(){
		this.items = [];
    }
	push(element){
		return this.items.push(element);
    }
    pop(){
      if ( this.items.length == 0 ){
          return "Underflow"
      }
      return this.items.pop();
    }
    toppeak(){
		return this.items[this.itmems.length-1]; 
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
