//15. missing number
//from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
// You have an array of numbers 1 to 100 in an array. Only one number is missing in the array.
// The array is unsorted. Find the missing number.

function missingNumber(a){
    var  total =0 , len = a.length;

    total = (len + 1) * (len + 2) / 2;
    for (var i = 0; i < len; i++)
        total -= a[i];
    return total;
}
arr =[1,3,5,4]
arr1 = [5, 2, 6, 1, 3]
//console.log( missingNumber(arr1))
//16. Sum of two
//From a unsorted array, check whether there are any two numbers that will sum up to a given number?
function sumFinder(arr, sum){
var res=[];
        for (var i=0; i< arr.length; i++ ){
            if ( arr[i] + arr[i+1] === sum ){
                console.log("found")
                   res.push(arr[i], arr[i+1])
            }
        }
       return res
}
arr=[2,4,6,1]
//console.log( sumFinder(arr, 10))
//find the largest sum of any two elements
function  findMaxSum(arr){
    var max = arr[0] + arr[1]
   for ( var i=0; i< arr.length; i++){
       for ( let j=i+1; j< arr.length; j++ ){
             if( arr[i]+ arr[j] > max ){
                 max = arr[i]+ arr[j];
             }
       }
   }
   return max;
}
arr=[3,1,5,12,2,24]
//console.log( findMaxSum(arr))
//find first and second largest number from element of Array

function firstAndNext(arr){
  var first =0, next=0;

   for (let i=0; i<arr.length; i++){
       if ( arr[i] > first){
           next = first;
           first = arr[i]
       }else if( arr[i] > next){
           next = arr[i]
       }
   }
   return ( "First Largest: "+first+ " 2nd Largest: " +next)

}
arr=[3,1,5,12,2,24]
//console.log( firstAndNext(arr))
//Count Total number of zeros from 1 upto n
//Total number of zeros from 1 upto n?
function countZero(n){

    var count = 0;
    while(n>0){
     count += Math.floor(n/10);
     n = n/10;
    }
    return count;
}


//console.log ( countZero(2014) ) //223
//console.log ( countZero(214) ) //23
//console.log ( countZero(101) ) //11

//console.log ( countZero(50) ) //5

//verify a prime number

function chkPrime(n){

     var divider =2;
     while ( n > divider){
        if ( n%divider == 0){
            return false;
        }   
        else 
            divider++    

     }
     return true;
}
//console.log ( chkPrime(137) )//true
//console.log ( chkPrime(13) )//true

//et nth Fibonacci number
function fib(n){
var res = [0,1]
 if ( n < 2) return 1;

   for ( var i=2; i<=n; i++){
          res[i] = res[i-1] + res[i-2]
   }
   return res[n];

}

//console.log ( fib(10) )
//Find the greatest common divisor of two numbers

function gcd(a ,b){
var tmp;
     while ( b!=0){
            tmp = a;
            a = b;
            b = tmp%b;
     }
  return a
}
//console.log( gcd(14, 21)) ; //7
function mergeSortedArray(left, right){
    
   
        var res =[];
        var leftIdx=0, rightIdx=0;
        while( leftIdx < left.length && rightIdx < right.length ){
            if ( left[leftIdx] < right[rightIdx]){
                  res.push(left[leftIdx]);
                  leftIdx++;
            }else{
                res.push(right[rightIdx]);
                rightIdx++;
            }
        }
        while( leftIdx < left.length ){
            res.push(left[leftIdx]);
            leftIdx++;
        }
        while(rightIdx < right.length){
              res.push(right[rightIdx]);
                rightIdx++;
        }
        return res;
    
}
//===========================
function mergeSort( Larr, Rarr){
    var res =[], lidx=0, ridx=0;

    while( lidx < Larr.length && ridx < Rarr.length){
        if ( Larr[lidx] < Rarr[ridx]){
            res.push(Larr[lidx] )
            lidx++
        }else{
            res.push(Rarr[ridx] )
            ridx++
        }
    }
    while( lidx < Larr.length){
        res.push(Larr[lidx] )
        lidx++
    }
    while( ridx < Rarr.length){
        res.push(Rarr[ridx] )
        ridx++
    }
    return res
}

arr1 = [2,5,6,9];
arr2 = [1,2,3,29];
//console.log ( mergeSort( arr1, arr2));
function intersect(nums1, nums2) {
    const res = []
    const small = nums1.length < nums2.length ? nums1 : nums2   
    const big = nums1 === small ? nums2 : nums1             
  
    for (let num of small) {                  
      let idx = big.indexOf(num)                // Check the location of the number big list
      if (~idx) res.push(big.splice(idx, 1)) // If found, add to results, remove from big list    
    }
    return res                               
       
}


arr1=[1,2,2,1]
function findsame( left, right){
 
     var res=[], leftIdx =0; rightIdx=0
     
     
     while( leftIdx < left.length && rightIdx < right.length ){

           if ( left[leftIdx] == right[rightIdx]){
                 res.push( left[leftIdx])
                 leftIdx++
                 rightIdx++
                 
           } else if( left[leftIdx] < right[rightIdx]) {
                        leftIdx++ 
           } else  
              rightIdx++;
     }
   return res
}
left= [2,5,6,9];
right = [2,4,6,8,9]
//console.log ( findsame( left, right))
//Swap two numbers without using a temp variable
function swap(a, b){
   b = b- a;
   a = a+b;
   b = a-b;

   console.log ( "n1: " + a + " n2: " +b)
}
n1 =10
n2 = 20
//console.log ( swap( n1, n2) )

function reverseInteger(num){
    var result = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

        if ( result > Math.pow(-2, 31)  && result <  ( Math.pow(2,31 )-1)  )
        return result
        else   return 0 
}
n =123 //321
n1 = -432
n3 = 1534236469 //0
n4 = -2147483648 //0
console.log(reverseInteger(n4) )