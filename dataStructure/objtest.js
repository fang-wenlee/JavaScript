var Obj = {              
    arrayOne: ['Geeks', 'for', 'Geeks'], 
    arrayTwo: [] 
}; 
  
// Array to be inserted 
var arraynew = ['Hello', 'World', '!!!'];  
  
newObj = { ...Obj, arraynew}
// Pushing of array into arrayTwo 
//Obj['arrayTwo'].push(arraynew);        
//alert(Obj.arrayTwo); 
console.log(newObj)