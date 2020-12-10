items = [33,4,20,6,10,1,2,23];

//2 args: item and itemlist 
//return index

function findItem( item, itemslist){
   
    var size = itemslist.length;

    for ( var i=0; i< size; i++ ){
        if ( itemslist[i] == item){
             return i;
            }
    }
    return "None";
}

console.log( findItem( 23, items));
console.log( findItem( 11, items));