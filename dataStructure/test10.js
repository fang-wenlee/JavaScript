//http://thatjsdude.com/interview/js1.html

//1. Verify a prime number: number can only divde by 1 and itself
var isPrime = function(n){
let divisor =2;

if( n < 2 ) return false;

while( n > divisor){
    if(n%2 == 0) return false;
    divisor++
}
return true;  
}
n=7;
//console.log (isPrime(n));

//2.Find all prime factors of a number?
var findPrime = function(n){
   let divisor =2;
   let resarr = [];

   while(n > 2){

    if( n%divisor == 0 ){
       resarr.push(divisor)
       n = n/divisor;
   }else
       divisor++;
   }  
  return resarr;
   
}
n1 = 10 //[2,5]
n2= 69 //[3,23]
//console.log ( findPrime(n1))
//3. Get nth Fibonacci number
var fib = function(n){
    let fibArr = [0,1];
    if (n < 2) return 1;

    for ( let i=2; i<=n; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2]
    }
    return fibArr[n]

}
n1 =10
//console.log(fib(n1))
//4: Find the greatest common divisor of two numbers?
var gcd = function (n1, n2){
    let comDividor =1, d =2;
   if( n1<2 || n2 <2) return 1;

   while( n1 >=d  && n2 >= d){
        if(n1%d ==0 && n2%d == 0){
            comDividor =d;       
        }
        d++;
   }
   return comDividor
}

//console.log(gcd(27, 63)) //9
//console.log(gcd(14, 169)) //1
//console.log(gcd(14, 21)) //7
//5. Remove duplicate members from an array?
var removeDuplicate1 = function(arr){
 
    var newset = new Set();

    for ( let i of arr ){
        if(!newset.has(i))
           newset.add(i)
    }
   return newset;
}
//5.1============================
var removeDuplicate = function(arr){
     let res=[], obj={}, resArr=[];

     for(let i=0; i< arr.length; i++){
        elm = arr[i]
        if(!obj[elm]){
            resArr.push(elm)
            obj[elm] = true;
        }
     }
     return resArr;
}

//console.log ( removeDuplicate([1,3,3,3,1,5,6,7,8,1]))  // [1, 3, 5, 6, 7, 8]
//5.2 find first duplicate element
var findFirstDuplicate1 = function(arr){
    let res=[], obj={};

    for(let i=0; i< arr.length; i++){
       elm = arr[i]
       if(obj[elm]){    
          obj[elm]++
       }else
          obj[elm] =1
    }
     for( elm in obj){
         if(obj[elm] >2 ) return elm
     }
}

//console.log ( findFirstDuplicate([1,3,3,3,1,5,6,7,8,1])) //1
//5.3: find the first duplicate number for which the second occurrence has the minimal index.
var firstDuplicate = function(arr){
    var elm, obj={}, res=[];
    
    for ( let i=0; i< arr.length; i++){
        elm = arr[i];
        
        if(!obj[elm]){       
           obj[elm] =true;
            // console.log(elm, "=====")
        }else{
          res.push(elm);
        }
    }
    return res[0]
    }
    //console.log ( firstDuplicate([1,3,3,3,1,5,6,7,8,1]))
    //6: Merge two sorted array?

    var mergeSortedArray = function ( left, right){

        let sortedArr =[], leftIdx=0, rightIdx =0;

        while( left.length > leftIdx && right.length > rightIdx ){
             if( left[leftIdx] > right[rightIdx]){
                 sortedArr.push( right[rightIdx])
                 rightIdx++;
             }else{
                 sortedArr.push(left[leftIdx]);
                 leftIdx++;
             }
        }
        while( left.length >leftIdx){
            sortedArr.push(left[leftIdx]);
            leftIdx++;
        }
        while( right.length > rightIdx){
            sortedArr.push(right[rightIdx])
            rightIdx++;
        }

        return sortedArr;
    }

   // console.log(mergeSortedArray([1,2,3,8],[2,5,9] ))
  //7. Swap two numbers without using a temp variable?
  var swap1 = function(a,b){  
        b = b-a;
        a = a+b;
        b= a-b;

        console.log("a: ", a ,"b: " ,b)
  }
//swap(10,1)
//7.1. Swap two numbers without using a temp variable?

var swap = function(a,b){  
    a = a^b;
    b = a^b;
    a = a^b;

    console.log("a: ", a ,"b: " ,b)
}
//swap(23, 12)
//8 reverse a string
var reverseStr1 = function (str){
 
    return str.split('').reverse().join('')
}
function reverseStr(str){

    var resStr = ' ';
   if( typeof str !== 'string' || str.length < 2) return str
    for(let i = str.length-1; i>=0 ; i--){
        resStr += str[i];
    }
    return resStr;
}
//console.log (reverseStr('you are a nice dude')); // "edud ecin a era uoy"
//9. reverse words in sentence -- reverseWord("I am a good girl"))//girl good a am I 
var reverseWord = function (str){
  var wLen =0, resstr = [];
   for (let i=str.length-1; i>=0; i--){
         if( str[i] ==" " || i == 0 ){
             resstr.push( str.substr(i, wLen+1 ));
            wLen=0;
         }else
              wLen++;
   }
   return resstr.join(" ");
}
//console.log ( reverseWord("I am a good girl"))//girl good a am I 
//10  reverse in place// I ma a doog lrig
var reverseInplace = function(str){
    var wLen=0, teststr =" ",res=[];
    for (let i =0; i < str.length; i++ ){

         if ( str[i] !== ' ' ){
             teststr += str[i];
             wLen++;
         }
         else{                 
              // res.push ( revrseWord (teststr) )       
              res.push( teststr.split('').reverse().join(''))
               teststr = '';
               wLen = 0;          
         }
    }  
    //res.push ( revrseWord (teststr) ) 
    res.push( teststr.split('').reverse().join(''))
    return res.join(' ');
}

var re = function(str){
   var  resStr= '', resArr=[];
   for( let i=0; i< str.length; i++){
       if( str[i] !== ' '){
           resStr += str[i];     
       }else{
           resArr.push(resStr.split('').reverse().join('')); 
           resStr ='';       
       }
     
   }
     resArr.push(resStr.split('').reverse().join(''));
     return resArr; 
}

s1 = "Good Morning Black Friday"
//console.log ( re(s1));
//console.log ( reverseInplace(s1));
//console.log ( reverseInplace("I am a good girl"))
//10.1 reverse word in Paranthese

var reverwordP = function(str){
    
    while(true){
     let cp = str.indexOf(')');
     if(cp === -1) break;
     let op = str.substring(0, cp).lastIndexOf('(');
             // str.substring(0,cp).lastIndexOf('(');
     let start = str.substring(0,op);
     let mid = str.substring(op+1, cp).split('').reverse().join('');
     let end = str.substring(cp+1, str.length);
     str = start + mid + end;
    }
    return str;
}
s1= 'good(morning)!'
s2 = "a(bar)";
s3 = "foo(bar(baz))blim"
//console.log ( reverwordP(s3))
//11. find first non repeating char in string

var firstNonRepeatChar = function (str){
let elm, obj={}, res=[];
  for (let i=0; i<str.length; i++ ){
      elm = str[i];
      if( obj[elm]) obj[elm]++;
      else obj[elm] =1;
  }
  for ( elm in obj){
      if( obj[elm] ==1 )
      return elm;
  }
}
//console.log( firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));
//12. remove duplicate char
var removeDuplicateChar = function(str){
    let elm, obj={}, res=[];
    for (let i=0; i<str.length; i++ ){
        elm = str[i];
        if( obj[elm]) obj[elm]++;
        else obj[elm] =1;
    }
    for ( elm in obj){
        if( obj[elm] ==1 )
          res.push(elm)
    }
    return res.join('');

}
//console.log ( removeDuplicateChar('Learn more javascript dude'));
//13. check palindrome
var isPalindrome1 = function(str){

    return str == str.split('').reverse().join('');
}
var isPalindrome = function(str){
    
    for(let i=0; i<str.length; i++){
        if( str[i] !== str[str.length -1 -i]) return false;
    }
    return true;
}
//console.log ( isPalindrome('madam')) //true
//console.log ( isPalindrome('toyota'))//false;
//14. random between 5 to 7
var random5 = function (){
   return  1 + Math.ceil(Math.random() *4 )
}
var random5to7 = function(){

     return 5 + random5()/ 5*2
}
//console.log (random6())
//15. missing number
//Question: from a unsorted array of numbers 1 to 100 excluding one number,
// how will you find that number.

var missingNumber = function(arr){
    var sortArr =arr.sort();
    for( let i=0; i< arr.length; i++){
        if( arr[i+1] - arr[i]  > 1 )
           return arr[i] +1
    }
}
//console.log ( missingNumber([5, 2, 6, 1, 3]));
//16. Sum of two
//Question: From a unsorted array, check whether there are any two numbers
//that will sum up to a given number?
var sumFinder =function(arr, n){
      
    for( let i=0; i< arr.length-1; i++){
        for(let j=i+1; j< arr.length; j++ ){
            if( arr[i] + arr[j] == n ) return true
        }
    }
    return false;
}

//console.log ( sumFinder([6,4,3,2,1,7], 9));//true;
//console.log ( sumFinder([6,4,3,2,1,7], 2));//false;
//17:  Largest Sum
// find the largest sum of any two elements?
var findLargestSumofTwo = function(arr){
    var largest = arr[0];
    var second = arr[1];
    if ( largest < second) { 
        largest = arr[1];
        second = arr[0];
    }
    for (let i=2; i< arr.length; i++){
        if( arr[i] > largest){
            second = largest;
             largest = arr[i];
        }else if ( arr[i] > second ) {
            second = arr[i];
        }
    }
    return largest + second;   
}
//console.log ( findLargestSumofTwo ([12,45,1,5,23,9]) )
//18. Counting Zeros
//Question: Count Total number of zeros from 1 upto n?
var countZero = function (n){
    let  count =0;
 
    while( n >=10){
        count += Math.floor( n/10)
        n = n/10
    }
    return count
    
}
//console.log ( countZero(2014))//223
//18.1 count words in a string
var countWord = function(str){
    let count=0, strRes ="", res=[];
    
    for(let i=0; i< str.length; i++ ){
        if(str[i] == ' ' || i == str.length-1 ){ 
            
            res.push(strRes)
            strRes= ' ';
            count++;
            
        }else{
           strRes += str[i]
        }

    }
    return count;
}
console.log( countWord("Good Morning Fang-Wen Lee"))
//19. From two sorted array how would you find common number?
//this can only use when the length of  two array are equal 
var findComNumberr = function(a1, a2){
   let j=0
   for (let i=0; i< a1.length; i++){
         if( a1[i] == a2[j])
             return a1[i]
          else
              j++;   
   }
}

arr1= [1,3,5,8]
arr2=[0,4,6,8]
//console.log( findComNumberr( arr1, arr2))//8

var intersection = function(arr1, arr2){
     
    var results = [], t;
    if (arr2.length < arr1.length) {
        t = arr2;
        arr2 = arr1;
        arr1 = t;   
    }  
    
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
           
            results.push(arr1[i]);
        }
    }
    
    return results;
}
//console.log ( intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])  )  // [4, 1]
arr1= [1,3,5,8];
arr2= [2,,3,4,6,8]; //[3,8]
console.log ( intersection(arr1, arr2) );
//19. subString. Question: How can you match substring of a sting?
 var subStringFinder = function(str, subStr){
   var idx =  str.indexOf(subStr)
   return idx
}
//console.log ( subStringFinder('abbcdabbbbbck', 'bck'))// 9
//console.log ( subStringFinder('abbcdabbbbbck', 'ab'))//0
//console.log ( subStringFinder('abbcdabbbbbck', 'bbbck') )//8