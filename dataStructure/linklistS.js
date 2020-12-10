class Node{
   constructor( data, next=null){
       this.data = data;
       this.next = next;
   }
}

class Linklist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtB(data){
         var node = new Node(data);
         var cur = this.head
         if ( this.head == null){
              this.head = node;
         }else{
              this.head = node;
              node.next = cur
         }
        this.size++;
    }

    insertAtE(data){
        var node = new Node(data);
        var cur = this.head;

       if ( this.head == null){
            this.head = node;
       }else{
           while(cur.next ){
               cur = cur.next
           }
           cur.next = node;        
       }
       this.size++;

    }

    insertAt( pos, data){
        var pre, cur, i=0;
        var node = new Node(data);
        if ( pos < 0 || pos > this.size ) return false;
        cur = this.head;
        if ( pos == 0 ){
            this.head = node;
            node.next = cur;
        }else {
                while ( i < pos ){
                    i++;
                    pre = cur;
                    cur = cur.next;
                }
                pre.next = node;
                node.next = cur;
                this.size++;
            }

    }

    removeAt(pos){
        
        var pre,cur, i=0;
        if ( pos < 0 || pos > this.size) return false;

        cur = this.head;     
        if ( pos == 0) {
               this.head = this.head.next;//see
        }else{
            while ( i < pos){
                i++;
                pre = cur;
                cur = cur.next;
            }
            pre.next = cur.next;          
        }
       this.size--;
    }
    
    remove(element){
     var cur, pre = null;
     cur = this.head;

      while( cur){
         if ( cur.data == element ){
             if ( pre == null ){
                   this.head = cur.next;
             }else{
                   pre.next = cur.next;
             }
          }//if          
            pre = cur;
            cur = cur.next;
        }//while
         this.size--;
     }

     search(element){

        var cur;
        cur = this.head;

        while( cur !=null ){
            if( cur.data === element){
                 return "found"
            }
            cur = cur.next;
            
        }
        
           return -1;
       
     }


  

    printlist(){
        var cur = this.head;
        var str=""
        while(cur){
            str += cur.data + " ";
            cur = cur.next
        }
      return str;
    }

}

var list = new Linklist();
list.insertAtB(1);
list.insertAtB(2);
list.insertAtB(3);
list.insertAtB(4);
list.insertAtE(10);
list.insertAt(4, 9)
list.insertAt(0, 0)

//list.removeAt(3)
//list.remove(1)
//console.log ( list.search(9))
console.log ( list.printlist())