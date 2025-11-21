class Node{
	constructor(){
		this.data =data;
		this.left = null;
		this.right = null;
	}
}
class tree{
	constructor(){
		this.root =null;
	}
	
	
	remove(data){
		this.removeNode(this.root, data)
	}
	
}

findMinNode(node){
	
	if ( node.left === null )
         return node;
	 else
		 return this.finMindNode(node.left);
}

