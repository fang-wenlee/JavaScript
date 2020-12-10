class Node{
   constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
   }
}
class Dlinklist{
   constructor ( ){
        this.head = null;
        this.tail = null;
        this.size = 0;
   }

        appendE(data){//at the end
            var node = new Node(data);
            
            if( this.head == null){ //null link; create 1st
                    this.head = node;
                    this.tail =node;
            }else{ //not null link
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;      
            }
            this.size++           
        }
        appendB(data){//at the end
            var node = new Node(data);
            
            if( this.head == null){ //null link; create 1st
                    this.head = node;
                    this.tail =node;
            }else{ //not null link
               node.next = this.head;
               this.head.prev = node;
               this.head = node;
            }
            this.size++           
        }
   
        appendAt( pos, item ) {
            let current = this.head;
            let counter = 1;
            let node = new Node( item );
            if( pos == 0 && current == null ) {
                   this.head = node;
                   this.tail = node;
            } else if( pos == 0 ){
                  
                    this.head.prev = node
                //  node.next = this.head
                    node.next = current;
                    this.head = node;
            }else{
                if( current == this.head){             
                    node.prev = this.tail;
                    this.tail.next = node;
                    this.tail =node;
                }else{
                            while(current) {  
                            if(counter ==post){
                                    node.prev = current.prev
                                    current.prev.next = node
                                    node.next = current
                                    current.prev = node
                                }
                                current = current.next;
                                counter++
                            }//while
                    }


            }//else
        }

       

        remove( item ) {
            let current = this.head;
            while( current ) {
                if( current.data === item ) {
                    if( current == this.head && current == this.tail ) {
                        this.head = null;
                        this.tail = null;
                    } else if ( current == this.head ) {
                        this.head = this.head.next
                        this.head.prev = null
                    } else if ( current == this.tail ) {
                        this.tail = this.tail.prev;
                        this.tail.next = null;
                    } else {
                        current.prev.next = current.next;
                        current.next.prev = current.prev;
                    }
                }//if
               current = current.next
            }//while
        }

  removeAt( pos ) {
    let current = this.head;
    let counter = 1;
    if( pos == 0 ) {
        this.head = this.head.next;
        this.head.prev = null;
    } else {
     while( current ) {
        current = current.next
        if ( current == this.tail ) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else if( counter == pos ) {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            break;
        }
      counter++;
     }
    }
  }
   
  reverse1(){
    let current = this.tail;
  
    while( current ){
        console.log( current.data)
        current = current.prev   
    }
    
} 

  reverse(){
        let current = this.head;
        let prev = null;
        while( current ){
                let next = current.next
                current.next = prev
                current.prev = next
                prev = current
                current = next
        }
        this.tail = this.head
        this.head = prev
  }

  swap( nodeOne, nodeTwo ) {
    let current = this.head;
    let counter = 0;
    let firstNode;
    while( current !== null ) {
      if( counter == nodeOne ){
        firstNode = current;
      } else if( counter == nodeTwo ) {
        let temp = current.data;
        current.data = firstNode.data;
        firstNode.data = temp;
      }
      current = current.next;
      counter++;
    }
    return true
 }

    length() {
        let current = this.head;
        let counter = 0;
        while( current !== null ) {
            counter++
            current = current.next
        }
        return counter;
    }

  isEmpty() {
       return this.length() < 1
  }

  traverse( fn ) {
    let current = this.head;
    while( current !== null ) {
        fn(current)
        current = current.next;
    }
    return true;
 }
 traverseReverse( fn ) {
    let current = this.tail;
    while( current !== null ) {
     fn(current)
     current = current.prev;
    }
    return true;
  }
  search( item ) {
    let current = this.head;
    let counter = 0;
    while( current ) {
      if( current.data == item ) {
       return counter
      }
      current = current.next
      counter++
    }
    return false;
  }

   printlist(){
        var str="";
        var cur = this.head;
        while( cur !== null){
             str += cur.data + " ";
             cur = cur.next
        }
        return str
   }

}

var dlist = new Dlinklist();

 

 dlist.appendE(1)
 
 dlist.appendAt(2,2)
 
 //dlist.appendAt(0,3)
// dlist.appendAt(4,3)
console.log (dlist.printlist())
//console.log (dlist.traverse (node))
//console.log ("===========================================")
//console.log ( "Found at index: " + dlist.search(24))
//console.log( dlist.remove(99))
//console.log ("List length: " +dlist.length())
//dlist.reverse()
//console.log (dlist.printlist())

