var item1 = [1,1,2, 3, 5, 22, 22, 33, 33];
var item2 = [3,3,3,4,4,4,5,5,5,5,5,6];
var item3 = ["apple", "pear", "banan", "apple", "apple"]
//sum up unique element 


function countUniqueValues(arr){

    let newObj = {};                  //created new empty object to hold integer values.
  
    for (let i=0; i<arr.length; i++){ //iterate over the array
  
        let char = arr[i];
  
        if ( newObj[char] > 0 ) {     //if the item is already in newObj 
            newObj[char]++            //increment its value by 1
        } else {
            newObj[char] = 1          //if the integer is not already in newObj put it there with a value of 1
        }
  
    }
    console.log(newObj);
    return Object.keys(newObj).length;   //return length of array returned by Object.keys(newObj)
  }


console.log(countUniqueValues(item1));




