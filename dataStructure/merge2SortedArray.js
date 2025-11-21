item1=[3,8,9,22,23];
item2=[1,7, 10];

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

   return  resultArray;

  }

function print(items)
{
    var str="";
    for(var i= 0; i<items.length; i++)
       str += items[i] + " ";
    console.log("========================");
    console.log( str );
       
}

merge(item1, item2);