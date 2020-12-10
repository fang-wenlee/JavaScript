class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Node{
	
	constructor( data, next=null){
		this.data = data;
		this.next = null
	}
}


console.log(node) 
============

const nodeOne = new Node(1);
const nodeTwo = new Node(2);
const nodeThree = new Node(3);

nodeTwo.next = nodeThree;
nodeOne.next = nodeTwo;

const head = nodeOne;

console.log(head)

========================================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  
  addE(data) 
  { 
      // creates a new node 
      var node = new Node(data); 
    
      // to store current node 
      var current; 
    
      // if list is Empty add the 
      // element and make it head 
      if (this.head == null) 
          this.head = node; 
      else { 
          current = this.head; 
    
          // iterate to the end of the 
          // list 
          while (current.next) { 
              current = current.next; 
          } 
    
          // add node 
          current.next = node; 
      } 
      this.count++; 
  } 
}
const linkedList = new LinkedList();

linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(linkedList)

//---------------------------------------------
function findMiddle(linkedList) {
  //write your answer here!
  let fast = linkedList.head;
  let slow = linkedList.head;

  while(fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

console.log(findMiddle(linkedList).data)
//===========================================================


insertAt(element, index) 
{ 
    if (index > 0 && index > this.size) 
        return false; 
    else { 
        // creates a new node 
        var node = new Node(element); 
        var curr, prev; 
  
        curr = this.head; 
  
        // add the element to the first index 
        if (index == 0) { 
            node.next = this.head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var i = 0; 
  
            // iterate over the list to find 
            // the position to insert 
            while (i < index) { 
                i++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // adding an element 
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
} 