
// User defined class node 
class Node {  
    constructor(data) { 
        this.data = data; 
        this.next = null
    } 
} 

class LinkedList { 
    constructor() { 
        this.head = null; 
        this.size = 0; 
    } 
  
    // functions to be implemented 
    // add(data) to head; addE(data) at the End list
    // insertAt(data, idx) 
    // removeAt(Idx) 
    // removeElement(data) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 

    add(data) 
    { 
        // creates a new node 
        var node = new Node(data);      
        // to store current node 
        var current; 
      
        // if list is Empty add the  data and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head;       
            // iterate to the end of the list 
            while (current.next) { 
                current = current.next; 
            } 
      
            // add node 
            current.next = node; 
        } 
        this.size++; 
    } 
//=============================================
    addB(data) {
        //create a new node
        var node = new Node(data);
        if (this.head == null){
            this.head = node;
        }
        else{
            
            this.head = node;
            node.next = this.head;
            
        }
        
        this.count++;
      }
    
//====================================
insertAt(data, index) 
{ 
    if (index < 0 || index > this.size) 
        return false; 
    else { 
        // creates a new node 
        var node = new Node(data); 
        var curr, prev; 
  
        curr = this.head; 
  
        // add the data to the 
        // first index 
        if (index == 0) { 
           
            this.head = node; 
             node.next = curr; 
        } else { 
            curr = this.head; 
            var it = 0; 
  
            // iterate over the list to find 
            // the position to insert 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // adding an data 
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
} 
//===================================

removeAt(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // deleting first node 
        if (index ==  0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to removce an data 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // remove the data 
            prev.next = curr.next; 
        } 
        this.size--; 
  
        // return the remove data 
        return curr.data; 
    } 
} 

//======================================
removeElement(data) 
{ 
    var current = this.head; 
    var prev = null; 
  
    // iterate over the list 
    while (current != null) { 
        // comparing data with current 
        // data if found then remove the 
        // and return true 
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

//===================================
indexOf(data) 
{ 
    var count = 0; 
    var current = this.head; 
  
    // iterae over the list 
    while (current != null) { 
        // compare each data of the list 
        // with given data 
        console.log(current);
        if (current.data === data) 
            return "Found at index: " + count; 
        count++; 
        current = current.next; 
    } 
  
    // not found 
    return "not found"; 
} //========================
getCount()  { 
    var temp = this.head;; 
    var count = 0; 
    while (temp != null) 
    { 
        count++; 
        temp = temp.next; 
    } 
    return count; 
} 
//=================================================================
isEmpty() 
{ 
    return this.size == 0; 
} 
//=====================
size_of_list() 
{ 
    console.log("Size: " + this.size); 
} 
//====================
printList() 
{ 
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.data + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 



} 

var ll = new LinkedList(); 
  
// testing isEmpty on an empty list 
// returns true 
//console.log("is empty:" + ll.isEmpty()); 

ll.add(10); 
ll.add(20); 
ll.add(30);  

ll.add(40); 

ll.printList(); 
/*
ll.insertAt(1, 0); 
ll.insertAt(2, 1); 
ll.insertAt(3, 2); 
ll.insertAt(4, 3); 

ll.insertAt(103, 0);*/
//console.log(ll.indexOf(20));
//console.log(ll.getCount()); 
// prints 10 
//ll.printList(); 
//console.log(ll.size_of_list()); 
//console.log("remove element "+ ll.removeAt(0)); 
console.log("remove element "+ ll.removeElement(40)); 
ll.printList(); 

