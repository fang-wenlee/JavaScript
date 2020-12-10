class Node{
  
    constructor(data, next){
        this.data = (data===undefined ? 0 : data)
        this.next = null
    }

}

class Llist{
   constructor(){
       this.head = null
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
       if( this.head == null) 
           this.head = node;
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
    
   

    reverseList (){


        var prev = null, next = null; 
        var current = this.head; 
       
        while (current != null) { 
            next = current.next; 
            current.next = prev; 
            prev = current; 
            current = next; 
        } 
        this.head = prev; 
        return this.head; 

    }

}
var mergeTwoLists = function(l1, l2) {
    var head = new Node(0); // a fake head
    var p=head;
  
    var p1=l1;
    var p2=l2;
    while(p1!=null && p2!=null){
        if(p1.val < p2.val){
            p.next = p1;
            p1 = p1.next;
        }else{
            p.next = p2;
            p2 = p2.next;
        }
        p=p.next;
    }
 
    if(p1!=null){
        p.next = p1;
    }
 
    if(p2!=null){
        p.next = p2;
    }
 
    return p;
};

 

var linklist = new Llist()
linklist.insertAtB(1);
linklist.insertAtB(3);
linklist.insertAtB(56);
//linklist.insertAtE(2);
//linklist.insertAtE(23);
//linklist.insertAtE(1);

//linklist.insertAt(1, 20)
//linklist.insertAtB(30);
var linklist1 = new Llist()
linklist1.insertAtB(11);
linklist1.insertAtB(32);
linklist1.insertAtB(5566);
console.log(linklist.printlist())
console.log(linklist1.printlist())
console.log("============================================");


var p=  mergeTwoLists(linklist, linklist1)
console.log ( p.printlist())
//console.log(linklist.printlist())

//console.log(linklist.findMax())
//linklist.removeAt(0)
//linklist.reverseList()
//console.log(linklist.printlist())
//console.log(`Is palindrome: ${linklist.isListPalindrom()}`)

