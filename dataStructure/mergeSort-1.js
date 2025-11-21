var items = [6,2,20,8,19,56,23,87,41,49,3,53];

function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
   
    // console.log("left: ", left, "length: ", left.length);
    //console.log("right: ", right, "length:", right.length );
    //console.log("----------------------------");
  
    // Using recursion to combine the left and right
    return merge(
       mergeSort(left), mergeSort(right)  
    );
  }

//=================================================
// Merge the two arrays: left and right

// Merge the two arrays: left and right
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }

    while ( leftIndex < left.length){
        resultArray.push(left[leftIndex]);
        leftIndex++;      
    }
    while ( rightIndex < right.length){
        resultArray.push(right[rightIndex]);
        rightIndex++;      
    }
   
    print(resultArray);
   // console.log("Result merge: ", resultArray);
    // We need to concat here because there will be one element remaining
    // from either left OR the right

   return   resultArray
                .concat(left.slice(leftIndex))
                .concat(right.slice(rightIndex)); 
        
 
  
  }

function print(items)
{
    var str="";
    for(var i= 0; i<items.length; i++)
       str += items[i] + " ";
    console.log("========================");
    console.log( str );
       
}
  print(items);
  mergeSort(items);
