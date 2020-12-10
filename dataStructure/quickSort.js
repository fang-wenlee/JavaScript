
function quickSort(arry, first, last){

    if ( first < last){
      pivotIdx = partition( arry, first, last)
      quickSort(arry, first, pivotIdx-1);
      quickSort(arry, pivotIdx+1, last)
    }
}

function partition(arry, first, last){

   var pivotIdx = arry[first];
   var lowIdx = first +1;
   var upIdx = last;
   var done = false;
 
   while (!done){
      while( lowIdx <= upIdx  && arry[lowIdx] <= pivotIdx){
          lowIdx++;
      }
      while(arry[upIdx] >= pivotIdx && upIdx >= lowIdx ){
          upIdx--;
      }
      //if the two indexes cross, found the Split point
       if ( upIdx < lowIdx ){
           done=true;
       }else{
          temp = arry[ lowIdx];
          arry[lowIdx] = arry[upIdx];
          arry[upIdx] = temp;
       }
    // when the split point is found, exchange the pivot value
        temp = arry[first];
        arry[first] = arry[upIdx];
        arry[upIdx] = temp;    
    
   
   }

 return upIdx;

}

var items = [3,46,2,6, 20,18,19,5,56,4,87,41,1,49,3,53];
console.log(items)
quickSort(items, 0, (items.length-1) );
console.log(items)