class Node{
  
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }

}

class Llist{
   constructor(){
       this.head =null;
       this.size = 0;
   }
   //==========================
    insertAtB(data){
        var node = new Node(data);
        var cur = this.head;
        if ( this.head == null )
             this.head = node;
         else{
             this.head = node;
             node.next = cur;
         }    
    }
    insertAtE(data){
        var node = new Node(data)
       if( this.head == null) this.head = node;
       else{
          var cur = this.head;
          while ( cur.next ) // iterate to the end
                  cur = cur.next
           
          cur.next = node;
          this.size++;        
       }

    }

    insertAt(index, data){
      var node = new Node(data)
      var cur =  this.head;
      var pre;


      if( index < 0 || index > this.size) return false;
      
      if( index == 0 ){
          this.head = node;
          node.next = cur;
          
      }else{
          var i=0;
 
          while ( i < index ){
               i++;
               pre =cur;
               cur =cur.next;
          }
          pre.next = node;
          node.next = cur;        
      }

  this.size++;
    }

    removeAt(index){
    var cur, pre;
        if( index < 0 || index > this.size || !isNaN(index) ) return false;
       cur= this.head;
        if ( index == 0)
                this.head = cur.next;           
        else {
                var i=0;
                while ( i< index){
                    i++;
                    pre = cur;
                    cur = cur.next;
                }
                pre.next = cur.next;
             }
            this.size--;
   }
   
   removeElement(data) 
   { 
       var current = this.head; 
       var prev = null; 
     
       // iterate over the list 
       while (current != null) { 
          
           if (current.data ==  data) { 
               if (prev == null) { // first node
                   this.head = current.next; 
               } else { 
                   prev.next = current.next; 
               } 
               this.size--; 
               return current.data; 
           } 
           prev = current; 
           current = current.next; 
       } 
       return -1; 
   } 
   firstElement(){  
       var current = this.head; 
       if ( this.head !== null )
           return current.data
        else 
           return -1;   
   }
   lastElement(){
        var current = this.head;
        while( current.next){
            current =current.next
        }
        return current.data

   }

    findMax(){
      var current = this.head;
      var firstLargest = 0, nextLargest =0;
     
       if ( this.head == null) return "empty list";

       while ( current !== null ){
             if ( current.data > firstLargest ){
                   nextLargest = firstLargest;
                   firstLargest = current.data;
             }else if ( current.data > nextLargest ) {
                        nextLargest = current.data;
             }   
             
             current = current.next;
       }
       

       return "First Largest: " +firstLargest +" 2nd Largest: " +nextLargest;      
    }

    printlist(){
        var cur = this.head;
        var res =[];
        while ( cur != null){
                res.push(cur.data)
               cur = cur.next;
        }
        return res;     
    }

    isListPalindrom() {
        let curr = this.head;
        let arr = [];
      
        if (curr == null) 
            return true;
    
        // push all elements of node into the stack.; a stack in JS is an array.
        while(curr != null){
            arr.push(curr.data);  
           curr = curr.next;
        }
      
        let curr2 = this.head;
        let length = arr.length;
      
        while(curr2 != null){      
          let lastNum = arr.pop();    
          if (curr2.data != lastNum){
            return false;
          }
      
           curr2 = curr2.next;
        }
        return true;
      }
}
//================================================

// Definition for singly-linked list:
// function ListNode(x) {
//   this.data = x;
//   this.next = null;
// }
//

function getNumber(list) {
  let current = list.head;
  let num = [];
  while (current !== null) {
    num.push(current.data);
    current = current.next;
  }

  return num;
}

function addTwoHugeNumbers(a, b) {
  const A = getNumber(a).reverse();
  const B = getNumber(b).reverse();
  const largest = A.length > B.length ? A : B;
  //====================================
  let sum = 0;
  let carry = 0;
  const result = [];
  largest.forEach((num, index) => {    
    const smallest = A.length > B.length ? B : A;
    const adder = smallest[index] || 0;
    sum = num + adder;
    if (carry) { sum += +carry;}
    
    const sumLen = sum.toString().length;

    if (sumLen > 4) {//over 4 digit
      const carryLen = sumLen - 4;
      carry = +sum.toString().slice(0, carryLen);
      const thousands = +sum.toString().slice(carry, sum.length);
      result.push(thousands ? thousands : 0);
    } else { 
      carry = 0;
      if (sum) {
        result.push(sum);
      } else {
        result.push(largest[index]);
      }
    }
  });
  
  if (carry) {
    result.push(carry);
  }
  
  return result.reverse();
}
//====================================================================








var a = new Llist()
a.insertAtE(8756);
a.insertAtE(5432);
a.insertAtE(1999);

//linklist.insertAt(1, 20)
//linklist.insertAtB(30);

console.log(a.printlist())
console.log("============================================");
//console.log(linklist.findMax())
//linklist.removeElement(30)
//console.log(linklist.printlist())
//console.log(`Is palindrome: ${linklist.isListPalindrom()}`)

var b = new Llist()
b.insertAtE(1);
b.insertAtE(8001);
console.log(b.printlist())
//console.log ( a )
//console.log ( b )

console.log(addTwoHugeNumbers(a, b))
