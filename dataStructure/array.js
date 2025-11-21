// User defined class Array 
class Array { 
  
    // Create constructor 
    constructor() {   
      
        // It store the length of array. 
        this.length = 0;  
          
        // Object to store elements. 
        this.data = {};  
    } 

    push(element) { 
        this.data[this.length] = element; 
        this.length++; 
        return this.data; 
    } 
    pop() { 
        let item = this.data[this.length-1]; 
        delete this.data[this.length-1]; 
        this.length--; 
        return this.data; 
    } 
    insertAt(item, index) { 
        //moveing item 
        console.log("size:" + this.length)
        for(let i=this.length; i>=index; i--) { 
          this.data[i]=this.data[i-1]; 
          console.log(this.data[i]);
        } 
        this.data[index]=item; 
        this.length++;  
        return this.data; 
    } 

    deleteAt(index) { 
        for(let i = index; i < this.length - 1; i++) { 
          this.data[i] = this.data[i+1]; 
         // console.log( this.data[i]);
        } 
        delete this.data[this.length-1]; 
      // delete this.data[index]; 
        this.length--; 
        return this.data; 
    } 
    getElementAtIndex(index) { 
        return this.data[index]; 
    } 
   printArray(){
    var str="";
    for(var i= 0; i<this.length; i++)
      str += this.data[i] + " ";
 return str;     
}  
   }



const array= new Array(); //we are instantiating an object of Array class 
	array.push(1); 
	array.push(13); //pushing element 
	array.push(14); 
    array.push(10); 
    array.push(17); 
    console.log(array.printArray());

console.log("============================");

//console.log( array.insertAt(88, 3));
//noconsole.log(array.printArray());


console.log(array.deleteAt(3));

//console.log(array.printArray());
