var item1 = [1,1,2, 3, 5, 22, 22, 33, 33];
var item2 = [3,3,3,4,4,4,5,5,5,5,5,6];
var item3 = ["apple", "pear", "banan", "apple", "apple"]
// need to be sorted array; only return total number of unique element in array

function countUniqueValues(arr) { 
    var i=0;
    for (var j=1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
  
    }
   // console.log(arr)
    return i + 1;
}
console.log( countUniqueValues(item1));

