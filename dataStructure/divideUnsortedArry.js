var items = [6,2,20,18,19,56,4,87,41,49,3,53];
item1=[3,8,9,22,23];

function isSorted(itemlist){
    //using the brute force method
    for ( var i=0; i< itemlist.length; i++){
        if ( itemlist[i] > itemlist[i+1] )
            return false;
    } 
    return true;
}

function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    if (!isSorted(unsortedArray)){
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
   
    console.log("left: ", left, "length: ", left.length);
    console.log("right: ", right, "length:", right.length );
    console.log("----------------------------");
  
    mergeSort(left); 
    mergeSort(right);
    }
    else{
        console.log("Arry is Sorted")
    }
    
 }

 mergeSort(items);
