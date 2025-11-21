class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    
    var len = 0; 
    var tmp = head; 
    while (tmp != null){ 
        len++; 
        tmp = tmp.next;  
    } 
      
    console.log(len)
    if (n > len) { 
        return "Your number is over list's size";  
    } else if (n == len)  { 
        return head.next;  
    } 
    else{ 
        // Remove len - n th node from starting 
        var diff = len - n;          
        var prev= null;      
        var curr = head;          
        for(let i = 0; i < diff; i++) 
        { 
            prev = curr;          
            curr = curr.next;      
        } 
        prev.next = curr.next; 
        return head; 
    } 


};
function insertAtB(head, data){
    
      var node = new Node(data)
      
      var cur = head;
      if (head == null || head == undefined ){
          head = node;
        
      }else{
          head = node;
          node.next = cur;
      }
  return head;
}
function insertAtE(head, data){

    var node = new Node(data)
   
    if ( head == null){
        head = node;
    }else{

        var cur = head;
        while( cur.next){
            cur = cur.next;
        }
        cur.next = node;
    }

    return cur;

}

function deleteNodeAt(head, idx){
   var cur=head, prev=null, i=0;

     if (head == null || cur.next == null)  return -1; 
  
    if (idx == 0) { 
        head = cur.next;   // Change head 
    }else{ 
            while(i < idx){
                i++;
                prev =cur;
                cur = cur.next;
            }
        // Find previous node of the node to be deleted 
             prev.next = cur.next;
    }
   
}
function deleteNode(node) {//delete first
   
    node.val = node.next.val;
    node.next = node.next.next;
    
 }
function isListPalindrom1(l) {
    var current = l;
	var prevNode = l;
	while (current) {
		if (current != prevNode) {
			current.prev = prevNode;
		}
		prevNode = current;
		current = current.next;
	}
	var lastNode = prevNode;

	var currentF = l;
	var currentB = lastNode;
	while (currentF) {
		if (currentF.value != currentB.value) {
			return false;
		}
		currentF = currentF.next;
		currentB = currentB.prev;
	}
	return true;
}

function isListPalindrom(head) {
    let curr = head;
    let arr = [];
  
    if (head == null) // head is empty
        return true;

    // push all elements of head into the stack.; a stack in JS is an array.
    while(curr != null){
        arr.push(curr.val);  
       curr = curr.next;
    }
     console.log(arr)
    let curr2 = head;
    let length = arr.length;
    // Traverse the list again & check by popping from the stack:
    while(curr2 != null){ 
      // get the top most element on the stack:
      let lastNum = arr.pop();
      // check if the head data isn't the same as the element popped:
      if (curr2.val != lastNum){
        return false;
      }
  
      // Half way point for evens
      if (length / 2 === arr.length) {
          return true;
      } 
  
      // move ahead:
      curr2 = curr2.next;
    }
    return true;
  }

  function reverseList1(head) {
    let curr = head,
    prev = null,
    next =null;
   
    while (curr) {     
        next = curr.next;   
        curr.next = prev;
        prev = curr;
        curr = next;
        }//while  
     head = prev
        
   return head;
};
function reverseList(head) {

   if ( head == null || head.next ==null) return head

 let newHead = reverseList(head.next);
   head.next.next = head;
   head.next = null;

   return newHead
}   
function printlist(head){
  
    var front = head;
    var str=""
    while(front){
            str += front.val + " ";
            front = front.next;
    }
    return str;
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
 
    return head.next;
};


head = new Node(1)

head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
//====================================
insertAtE(head, 22)
insertAtE(head, 22)

console.log ( printlist(insertAtB(head, 20)))
console.log ( printlist(insertAtB(head, 120)))
head1 = new Node(11)
head1.next = new Node(22)
head1.next.next = new Node(44)
head1.next.next.next = new Node(66)


//console.log( "List 1: " + printlist(head) );
//console.log( "List 2: " + printlist(head1) );

//deleteNode(head1)
//var merg =  mergeTwoLists(head, head1)
//console.log( "Merge: " +printlist(merg) );

//deleteNodeAt(merg,6)
//console.log( "After delete node: " +printlist(merg) );
// head = reverseList1 (head)
 //previous = reverseList (head)
//console.log( printlist(head) );
//removeNthFromEnd (head, 3)


//console.log(`Is palindrome: ${isListPalindrom(head)}`)
//console.log("============================")
/*head.next.next.next.next.next = new Node(132)
console.log( printlist(head) );
console.log(`Is palindrome: ${isListPalindrom(head)}`) */