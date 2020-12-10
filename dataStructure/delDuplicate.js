var items = [1,1,2, 3, 5, 22, 22, 33, 33];
var itemStr = ["apple", "pear", "banan", "apple", "apple"]
function delDuplicate(arr){
    var resultAry =[], elm, exist={};

    for ( var i=0; i< arr.length; i++){

        elm= arr[i];
        if (!exist[elm]){
             console.log( exist);
            resultAry.push(elm);
            exist[elm] =true;
        }
    }
    
 return resultAry;
}

function print(items)
{
    var str="";
    for(var i= 0; i<items.length; i++)
       str += items[i] + " ";
   
    console.log( str );
       
}
//print(itemStr);
//print( delDuplicate(itemStr));
//remove duplicate ===============
var removeduplicate = function (arr){

   var res2 = new Set()
    for (let i of arr){
          if(!res2.has(i)){
              res2.add(i)
          }
    }
    return res2
}
var item = [1,2,5,5,2, 22, 33, 33];
//console.log (removeduplicate(item))


//find first duplicate from arry
var firstDuplicate = function(items){

    var res = new Set(); 
    //=======================
    for (let e of items)
    if (res.has(e)) return e
    else{          
        res.add(e)
        }
}

var items = [1,2,3,5, 2, 22, 33, 33];
//console.log(firstDuplicate(items))



function areSimilar(arr1, arr2) {
   
    if ( arr1.length !== arr2.length) return false;
   var k=0, sum=0, sum1 =0; 
   sum = 0;
   for (i = 0; i < arr1.length; i++) {
       if (arr1[i] != arr2[i]) {
           sum++
       }
   }
      
   arr1 = arr1.sort();
   arr2 = arr2.sort();
    
    if ( arr1.toString()  === arr2.toString() && sum < 3) return true;
    else return false;
 
}
a1 = [1, 1, 4] 
b1 = [1, 2, 3]

a = [1, 2, 3] 
b = [2, 1,2]
//console.log( areSimilar(a, b))
//=====================================
function firstDup(nums){
    var elm;
    var result = [],  tmp = []
     for (var i in nums) {
         elm = nums[i];
         tmp[elm] = tmp[elm] 
                  ? tmp[elm]+1 
                  : 1;
     }
     for (elm in tmp) {    
         if (tmp[elm] > 1) {
            // console.log("1st unique: " + elm)
             result[result.length] = elm;
             break;           
         }
     }
    return result;
       
}
item = [6,7,9,6,7,2,9]
str = "abcdec"
//console.log( firstDup(item) )
//=====================================
function firstUnique1(nums){
    var elm;
    var result = [],  tmp = []
     for (var i in nums) {
         elm = nums[i];
         tmp[elm] = tmp[elm] 
                  ? tmp[elm]+1 
                  : 1;
     }
     for (elm in tmp) {    
         if (tmp[elm] === 1) {
            console.log("1st unique: " + elm)
            // result[result.length] = elm;
            result.push(elm)
             break;           
         }
     }
    return result;
       
}

// var firstUnique =function (arr){
   
//     var elm, obj={}, result=[];
//      for ( let i=0; i< arr.length; i++ ){
//         elm = arr[i];
//         if( !obj[elm] )
//             obj[elm] = obj[elm] + 1;
//         else
//            obj[elm] =1;
//      }
//      for (elm in obj) {    
//         if (obj[elm] === 1) {
//             console.log("1st unique: " + elm)
//            result.push(elm)
//             break;           
//         }
//     }
//    return result;
 
// }

item = [6,7,9,6,7,2,9]//2
str = "abcdeabc"//d
console.log( firstUnique1(item) )



