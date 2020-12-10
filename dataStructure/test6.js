function reverseStr1(str){
var strResult= " ";
    if ( typeof str !== 'string' || str == " ") return false;
    for ( let i= str.length-1; i >= 0; i--){

            strResult = strResult + str[i];
    }
return strResult;
}
//console.log(reverseStr("ES6"))
//=============================================
function reverseStr2(str){
    if ( typeof str !== 'string' || str == " ") return false;
    return str.split('').reverse().join('')

}
//console.log(reverseStr("JavaScript"))
//=============================================
function reverseStr(str){
    var strResult= [];
        if ( typeof str !== 'string' || str == " ") return false;
        for ( let i= str.length-1; i >= 0; i--){
    
               strResult.push(str[i])
        }
    return strResult.join("");
    }
//console.log(reverseStr("JavaScript"))
//================================================
// remove duplicate number
var removeDuplicates1 = function(nums) {     
    var set =  new Set(nums)
    return set;
}
//remove duplicate number from array

nums = [1,1,1,2,4,6,6,4,2,1,8]
//console.log (removeDuplicates1(nums) );

//find the largest sum of any two elements

 var findSum = function(nums){
     
        var first = nums[0];
        var second = nums[1];

        if ( first < second ) {
            second = first;
        }
              

        for ( let i=2; i<nums.length; i++){
              if ( nums[i] > first){
                second = first;
                first = nums[i];
              }else if( nums[i] > second){
                    second = nums[i]
              }
        }

        return first + second
 }

nums= [3,1,77,2,5,8];
//console.log( findSum(nums) );
//From a unsorted array, check whether there are any two numbers that will sum up to a given number?

var sumFinder = function(arr, n){

    for ( let i=0; i< arr.length; i++){
        for ( let j=i+1; j< arr.length; j++ ){
            if( arr[i]+ arr[j] === n )
               return true;
        }
    }

    return false;
}

//console.log( sumFinder([6,4,3,2,1,7], 21));

var ckPalindrome1 = function(str){

    for( let i=0; i<str.length; i++){
        if ( str[i] !== str[str.length - i -1] )
            return false;
    }

   return true;
}
var ckPalindrome = function(str){
    return str == str.split('').reverse().join('')
}
//console.log(ckPalindrome('madam'))
//console.log ( ckPalindrome('toyota'))
// 9. reverse words

var reverseWords = function(str){
   
    var rev = [], 
    wordLen = 0;
for(var i = str.length-1; i>=0; i--){
  if(str[i]==' ' || i==0){
    rev.push(str.substr(i,wordLen+1));
    wordLen = 0;
  }
  else
    wordLen++;
}
return rev;

}

//console.log ( reverseWords("JavaScript has many library") )
//reverse word in place

var reverseWordIn = function(str){
     //return  str.split(' ').reverse().join(' ').split('').reverse().join('');
     return  str.split(' ').reverse().join(' ').split('').reverse().join('')
}
//console.log ( reverseWordIn("JavaScript has many library") )

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
  
             return resArr.join('');
  } 
  
  
//console.log( removeDuplicateChar1('Learne more javascript dude') )// "Lnmojvsciptu"

 var firstDuplicateChar = function(str){
    var obj={};
    var s=0;
    
             for( let i=0; i< str.length; i++){
                 s = str[i]
                 if(obj[s]){
                     obj[s]++
                 }else{
                     obj[s]=1;
                 }
             }
  
             for ( let j in obj){
                  if( obj[j] > 1)
                     return j    
             }
 }

 //console.log( firstDuplicateChar ('eearne more javascript dude'))

 //===========================

 var firstNoneRepeateChar1 = function(str){
    var obj={};
    var s=0;
    
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
                     return j    
             }
 }
 //or

 var firstNoneRepeateChar = function(str){
     for( let i=0; i< str.length; i++ ){
         //let j= str[i]// || or
         let j= str.charAt(i)
         console.log(j)
         if(str.indexOf(j) == str.lastIndexOf(j))
            return j
     }
     return null
 }
 var firstNonRepaeat = function(str){
   
    for(let i=0; i<str.length; i++ ){
        let elm =str[i];
        if( str.indexOf(elm) == str.lastIndexOf(elm) ){
           return elm;
        }
    }
    return null;
 }
 //console.log( firstNonRepaeat ('learn more javascript dude'))
//get first Unique from array

var firstDuplicate = function (str){
  var res  = new Set()
  for ( let c of str ){
      if ( res.has(c) )  return c;
      else res.add(c)
  }
       return -1;
}

//console.log( firstUnique("leetcode") ) //e
  //console.log( firstDuplicate("JavaScript") ) //e
//=====================================
 var findMax = function(arr){
   var max = 0;

    for ( let i=0; i< arr.length; i++){
         if( arr[i] > max )
          max= arr[i]
    }
      return max 
 }
var findLargest = function(arr){
    var max = arr[0];
    for ( let i=1; i< arr.length; i++){
        if( arr[i] > max )
           max = arr[i];
    }
    return max
}

arr1 = [6,3,1,56,2,6]
//console.log(  findLargest(arr1) );
//counting zero

var countZero1 = function(n){
    var count=0;
        while ( n>=10){
        count = count + Math.floor( n/10 );
        n = n/10
        }
        return count
}
//console.log( countZero1(2014) )//223
//console.log( countZero1(314) )//34


var factorial = function(n){
   var sum =1 ;
    for ( let i=1; i <=n ; i++ ){
        sum = sum * i
    }
   return sum
}

//console.log("factoral: ",  factorial(4))//24
//console.log("factoral: ",  factorial(5))//120
var removeDuplicateElm = function (arr){
   var elm, obj={}, resArr=[];

   for ( let i=0; i<arr.length; i++){
       elm = arr[i];
       if ( !obj[elm]){
          resArr.push(elm)
          obj[elm] = true;
       }
   }
   return resArr.join('');
}

var delDupElm = function(arr){

    var res = new Set();
    for ( let i of arr){
        if( !res.has(i)) {
            res.add(i)
        }
    }
     res.forEach( item => console.log(item))

}

nums = [1,1,1,2,4,6,6,4,2,1]//[1,2,4,6]
nums1 = [1,3,3,3,1,5,6,7,8,1]//[1, 3, 5, 6, 7, 8]
//console.log ( delDupElm(nums))
//console.log ( removeDuplicateElm(nums)); 
//console.log( removeDuplicateElm('Leescode') )
//console.log( removeDuplicateElm('Learne more javascript dude') )
//1. verify a prime number?

var ckPrime = function(n){
  var divisor =2;

   while( n > divisor ){

     if( n%divisor == 0 ){
          return false;
      }
      divisor++;
   }
   return true;
}
//console.log ( ckPrime(237))
//console.log ( ckPrime(137))
//2.find all prime factors of a number
var allPrime = function (n){

    var divisor=2, resArr=[];

    while(n>2){
        if ( n%divisor == 0){
            resArr.push(divisor)
            n = n/divisor
        }else{
        divisor++;
        }
    }

   console.log(resArr)
}
//allPrime(69)//[3,23]
//allPrime(27)//[3,3,3]
//3: Fibonacci====================================

var fib =function(n){
  var res =[0,1];
  if(n < 2 ) return 1;

  for ( let i=2; i<=n ; i++){
      res[i] = res[i-1] + res[i-2];
  }
  return res[n]
}
//console.log(fib(10))
//4. Greatest Common Divisor
var gcd = function (n1, n2){
 var divisor= 2, gcdvalue=0;

  if(n1<2 || n2< 2) return 1;
     
   
        while( n1>= divisor && n2>=divisor){
            if( n1%divisor ==0 && n2%divisor ==0 ){
                gcdvalue =divisor
            }
                divisor++;
        }
        return gcdvalue;
    
           
}
//console.log (gcd(14,21))
//5:remove duplicate members from an array?
var delDuplicate = function (arr){

    var elm, obj={}, resArr=[];

    for( let i=0; i< arr.length; i++){
        elm = arr[i];
        if(!obj[elm]){
            resArr.push(elm);
            obj[elm] = true;
        }
    }
    return resArr;
}
//console.log ( delDuplicate([1, 2, 3, 4, 5, 3, 9,3, 4]))//[ 1, 2, 3, 4, 5, 9 ]
//6. merge two sorted array
var  mergeSort = function( left, right){
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
   
    //print(resultArray);
   // console.log("Result merge: ", resultArray);
    // We need to concat here because there will be one element remaining
    // from either left OR the right

   return  resultArray;
    
}
//console.log (mergeSort([4,5,6,9], [1,2,3,29,67]))  //[1, 2, 2, 3, 5, 6, 9, 29]
//7. swap number without temp
var swapNumb = function (a ,b){

    b = b-a;
    a = a+b;
    b= a-b;

    console.log(a, b);
}
//swapNumb(4,2)
//10: Reverse in place==========================
var reverseInPlace1 = function(str){
 return str.split(' ').reverse().join(' ').split('').reverse().join('');  
}
//9: reverse words in sentence
var reverseWordInsen = function (str){
var wLen=0, res=[];
 
   for( let i=str.length; i>=0; i--){
       if( str[i] == ' ' || i==0){  
            res.push( str.substr(i, wLen+1)) 

             wLen =0;
       }else{
            wLen++
       }
   }
   return res.join(' ');

}

//console.log ( reverseWordInsen('I am the good girl')); 
//10: everse in place
function revrseWord(str){
    var resstr =" ";
    //console.log(str);
   for ( let i=str.length-1; i>=0; i--){   
         resstr = resstr + str[i]
   }
  
  return resstr;
}

var reverseInPlace = function(str){
     var wLen=0, teststr =" ",res=[];
    for (let i =0; i < str.length; i++ ){
        //console.log(str.length)
         if ( str[i] !== ' ' || wLen == 0  ){
             teststr = teststr + str[i]
            // console.log( teststr )
             wLen++;
         }
         else{   
                        
               res.push ( revrseWord (teststr) )       
              //res.push( teststr.split('').reverse().join(''))
               teststr = '';
               wLen = 0;          
         }
    }  
    res.push ( revrseWord (teststr) ) 
    return res
   }
//console.log ( reverseInPlace('I am the good girl')); // "I ma eht doog yob"
//11-1: firt unique number from array
var uniqueNumber = function(arr){

  return  arr.filter( (i)=> {
          return arr.indexOf(i) === arr.lastIndexOf(i)
       })[0] || -1
           
}
//console.log(uniqueNumber([5,2,5,211,2,9,3,5,]))//9
//11: First non repeating char: for string
var firstRepeatChar = function(str){
   var nset = new Set();
   
   for ( let i of str ){
      if ( nset.has(i)) return i;
      else nset.add(i);
   }
}


//console.log(firstRepeatChar([5,2,5,2,9,5]))
//console.log ( firstRepeatChar('Leetcode'))//L
var firstUniqueChar = function(str){
   var charCount={}, char, res=[];

   for(var i =0; i<str.length; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1){
        return j
    }     
  }
 }
 
//console.log ( firstUniqueChar('thequickbrown'))//space
console.log ( firstUniqueChar('Leetcode'))//L
//13: check Palindrome
var isPalindrome = function (str){

    return str ==  str.split('').reverse().join('')
}
// console.log ( isPalindrome('madam')) //true
// console.log( isPalindrome('toyota'))//false;
//14: rand between 1 to 5 && 5 to 7
var rand5 = function(){
    return Math.ceil(1+ Math.random()*4)
}
var rand5to7 = function(){
    return 5 + rand5() / 5 * 2;
}
//console.log ( rand5to7() )

//15: missing number -- 
var  missingNumber  = function(arr){

    var sortArr = arr.sort();
   
    for( let i=0; i< sortArr.length; i++){ 
      
         if ( sortArr[i+1] - sortArr[i] >= 2 ) {
             return (sortArr[i] +1);
         }
            
            
    }
    return false;
}
    
//console.log ( missingNumber([ 2, 6, 4, 1, 3]))  // 4
//16: sum of two 
var sumFinder = function (arr,n){
       
    
    for(let i =0; i< arr.length; i++){
        for ( let j= i+1; j< arr.length; j++){
            if ( arr[i]+ arr[j] == n )
                return true;
        }
    }
    return false;
}
// console.log ( sumFinder([6,4,3,2,1,7], 9) ) //true
// console.log ( sumFinder([6,4,3,2,1,7], 2)) //false;
//17: Find the Largest Sum of any two elements
var findMaxSum = function (arr){
   
    var first = arr[0];
    var second = arr[1];

    if ( first < second ){
        first = second;
    }

    for ( var i=2; i<arr.length; i++){
        if( arr[i] > first ){
            second = first;
            first = arr[i];
        }else{
            second = arr[i]
        }       
    }
    return first + second
}

//console.log( findMaxSum ([6,2,20,5,1,7]))//27
//18: counting zero
var countZero = function(n){

    var count=0;

    while( n >0 ){
       count += Math.floor( n/10 )
       n = n/10;
    }
    return count
}

//console.log ( countZero(230) )//25