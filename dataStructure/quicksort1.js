var items = [3,46,2,6, 20,18,19,5,56,4,87,41,1,49,3,53];

function quicksort(origianl){

    if ( origianl.length <=1 ){
        return origianl;
    }else{

    var left= [];
    var right =[];
    var newArray=[];
    var pivot = origianl.pop();
    var length = origianl.length;
    
    for ( var i =0; i<length; i++ ){
        if( origianl[i] <= pivot){
            left.push(origianl[i]);
        }else{
            right.push(origianl[i]);
        }
    }//for
 
   return newArray.concat(quicksort(left), pivot, quicksort(right));

    }

}
console.log(items.join(" "));
console.log(quicksort(items).join(" "));