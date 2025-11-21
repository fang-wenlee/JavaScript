var arry = [6,2,20,8,19,56,23,87,41,49,3,99];

function findmax (items){

   var mymax= items[0];

   for (var i=1; i < items.length; i++){
       if ( mymax <= items[i]){
             mymax = items[i];
            // console.log(mymax)
       }
   }
   return mymax;
}


//console.log(findmax(arry));
//find 1st largest and 2nd laragest number form unsort array

function findMaxtwosum(arr){
    let largest = 0;
    let nextLargest = 0;
    for ( var i=0; i<arr.length; i++){
         if( arr[i] > largest ){
             nextLargest = largest;
             largest = arr[i];
         }else if (arr[i] > nextLargest){
                nextLargest = arr[i];
         }else{
            continue;
         }     
    }
    console.log(largest)
    console.log( nextLargest)

}
var arr = [7, 0, -4, 15, 2, 3];
var num = [6,2,20,102, 8,19,56,23,87,41,49,3,99];
//console.log(findMaxtwosum(arr)); // 15, 7
//console.log( findMaxtwosum(arr1))

function findNumber(nums){
  var firstNum=0, nextNum=0;

  for ( var i=0; i<nums.length; i++){
      if ( nums[i] > firstNum){
           nextNum = firstNum;
           firstNum = nums[i]
      }else if( nums[i] > nextNum) {
             nextNum = nums[i];
      } 
  }
  return ( firstNum + " " + nextNum );

}
console.log( findNumber(num))


