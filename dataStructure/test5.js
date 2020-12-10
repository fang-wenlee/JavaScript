//remove duplicate number from array
var removeDuplicates1 = function(nums) {  
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;    
};

var removeDuplicates = function(nums) {  
   
    var set =  new Set(nums)

    return set
}

nums = [1,1,1,2,4,6,6,4,2,1]
console.log (removeDuplicates(nums) );
//remove dupicate char from array

function removeDuplicateChar(str){
    var len = str.length,
        char, 
        charCount = {}, 
        newStr = [];


    for(var i =0; i<len; i++){
      char = str[i];
      if(charCount[char]){
        charCount[char]++;
        }
      else
        charCount[char] = 1;
    }

    //loop through object with for .. in
   for (var j in charCount){
        //console.log ( charCount )
      if (charCount[j]==1)
         newStr.push(j);
       }
    return newStr.join(' ');
  }
  
//console.log ( removeDuplicateChar('Learn more javascript dude'));//"Lnmojvsciptu"
// chkPrime
chkPrime = function(n){

  var  divisor =2;

  if ( n ===1 || n === 0 ) return false;

while( n > divisor ){

            if ( n%divisor === 0)
                return false;
            else 
                divisor++     
     }

 return true;    


}

 //console.log ( chkPrime(1))  //false
 //console.log ( chkPrime(25))  //false
 //display prime numbers up to n.

 findPrime = function (num) {

     var resArr = [];

     for (let i =0; i<= num; i++ ){
         if ( chkPrime (i)){
             resArr.push(i)
         }
     }
     return resArr;
 }

// console.log(findPrime(13))
//================================
//find all prime factor
primfactor = function(num){
 var d =2;
 var prime=[];
 while ( num > 2 ){
     if ( num %d === 0){
      prime.push(d);
      num = num/d;
     // console.log(num)
     }else{
         d++;
     }
     
 }
return prime
}

//console.log( primfactor(69) ) //[3,23]
//console.log( primfactor(10) )//2,5
//console.log( primfactor(5) )
//Get nth Fibonacci number

function fibonacci(n){
    var fibo = [0, 1];
    
    if (n <= 2) return 1;
  
    for (var i = 2; i <=n; i++ ){
     fibo[i] = fibo[i-1]+fibo[i-2];
    }
  
   return fibo[n];
  } 
  
 // console.log( fibonacci(12)) ; //144
 // console.log( fibonacci(10)) ; //55   
 //console.log( fibonacci(20)) ; //6765  
 //========================================
//factorial -- Returns a number that is the factorial of the given number

factorial = function (n){
   
    var res = 1; 
    for (let i = 2; i <= n; i++) 
        res = res *i;
        //res *= i; 
    return res;   
}

//console.log( factorial(6) )//720//
//console.log( factorial(5) )//360

//=========================================
//4: isSorted 

  isSorted = function(arr){

    for ( var i=0; i< arr.length; i++){
        if ( arr[i] > arr[i+1] ) 
            return false
    }   
      return true;  

  }


//console.log ( isSorted([]) )                    // true
//console.log (isSorted([-Infinity, -5, 0, 3, 9]))  // true
//console.log ( isSorted([3, 9, -3, 10]) )           // false
// filter - Implement the filter function.
 //filter([1, 2, 3, 4], n => n < 3) 

filterTest = function( arr ){
    
  return  arr.filter(  i => i > 4  )
}
item = [1,2,3,5]
//console.log ( filterTest(item)) 
//reverse - Reverses the given string 

reverseStr = function (str){

    return str.reverse();
}

item = [1,2,3,5]
//console.log ( reverseStr(item) )


function loopString(str){

    for ( let i of str ){
        console.log(i)
    }
}
//loopString("JavaScript")

missing = function(arr){
   var arrSorted = [];
    arrSorted = arr.sort()
    for ( var i=0; i< arrSorted.length; i++){
        if( arrSorted[i+1] - arrSorted[i]  > 1)
             return arrSorted[i] +1 
    }
     return "there are no missing number"
   
}

item=[1,4,3,2]
item1 = [5, 1, 4, 2]     
//console.log( missing(item1) )

isPalindrome1 = function ( str ){
  return  str == str.split('').reverse().join('')
}

isPalindrome = function (str){
 var len = str.length;
    for ( var i=0; i< len/2; i++ ){
        if ( str[i] !== str[len-1-i ])
           return false
    }

    return true;

}
/*isPalindrome('')                                // true
isPalindrome('abcdcba')                         // true
console.log ( isPalindrome('abcd') )                           // false
console.log ( isPalindrome('A man a plan a canal Panama')) 
*/
//generate random number between 1 to 5
function rand5(){
    return 1 + Math.ceil ( Math.random() * 4);
 }
// console.log ( rand5() )
// find first duplicate string ===============================
findFirstDup = function ( str ){
    var len = str.length,
    char, 
    charCount = {};
for(var i =0; i<len; i++){
  char = str[i];
  if(charCount[char]){
    charCount[char]++;
  }
  else
    charCount[char] = 1;
}
for (var j in charCount){
  if (charCount[j] > 1)
     return j;
}

}

//console.log(findFirstDup("the quick brown fox jumps then quickly blow air"))

//find the largest number  of given array

largestNum = function(arr){
   var max =0;
   for (var i=0; i< arr.length; i++){
      
        if ( arr[i]> max)
            max = arr[i]
   }
  return max;
}
item= [1,5,2,9,3,21]
//console.log(largestNum(item))

//find the largest sum of any two elements

largestSum = function (arr){
    var firstLargest = arr[0], secondLargest= arr[1];
 
    if ( arr.length < 2) return null;
    if ( firstLargest < secondLargest ){
        firstLargest = arr[1]
        secondLargest = arr[0]      
    }
  //  console.log(firstLargest)
    //console.log(secondLargest)
    for ( let i=2; i< arr.length; i++ ){
         if ( arr[i] > firstLargest ){
               secondLargest = firstLargest
               firstLargest = arr[i]; 
         }
    }
    return firstLargest + secondLargest       


item= [1,5,2,9,3,5,4,11]
//console.log(largestSum(item))//14
// From a unsorted array, check whether there are any two numbers that will sum up  a given numbe

sumFinder = function (arr, num){
     var sum;
    for(let i= 0; i< arr.length;  i++){
         for ( let j= i+ 1; j< arr.length; j++){
             if ( arr[i] + arr[j] == num  )
                return true;
         }
    }
    return false;
}


//console.log( sumFinder([6,4,3,2,1,7], 9)) //true
//console.log( sumFinder([6,4,3,2,1,7], 2)); 

var removeDuplicateChar1 = function(str){
  var obj={};
  var resArr=[], s=0;
  
           for( let i=0; i< str.length; i++){
               s = str[i]
               if(obj[s]){
                   obj[s]++
               }else{
                   obj[s]=1;
               }
           }

           for ( let j in obj){
                if( obj[j] == 1)
                    resArr.push(j)    
           }

           return resArr;
} 


console.log( removeDuplicateChar1('Learn more javascript dude') )