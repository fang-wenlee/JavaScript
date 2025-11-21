function reverseString(str){
    var temp;
       for ( var i=0; i< str.length; i++ ){
            temp = str[i];
            str[i] = str[str.length];
            str[str.length] = tmp;
       }
   
       return str;
   }
   str = ["h","e","l","l","o"] // ["o","l","l","e","h"]
   //console.log( reverseString(str))

//Reverse Integer: Given a 32-bit signed integer, reverse digits of an integer.
function reverseInteger(num){

  var result = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
   
  if ( result > Math.pow(2, 31) || result < (-2, 32))
      return "the number is over 32-bit signed integer "
  else
      return result;

}
n = 123 //321
n1 =-123 // -321
n2 = 8666
n3 = 1534236469 //0
n4 = -2147483648 //0

//console.log(reverseInteger(n2))
//First Unique Character in a String;  return its index
var firstUniqChar = function(s) {
    for ( var i=0; i< s.length; i++){
          var j = s.charAt(i)
          if ( s.indexOf(j) === s.lastIndexOf(j))
              return s.indexOf(j) ;
    }

    return -1
};
//return index 
var firstUniqChar = function(s) {
      var elm, tmp=[];
      for ( let i=0; i<s.length; i++){
            elm = s[i]
          tmp[elm] = tmp[elm]? tmp[elm]+1 : 1;
      }
      var k=0
      for ( elm in tmp){
          if( tmp[elm] === 1){
             return k;
          } 
          k++;           
      }
  
}
s = "leetcode"
s1 = "loveleetcode"
//console.log( firstUniqChar(s1))
//return element
function singleNumber(n){
    var elm, tmp=[];
    for ( let i=0; i<n.length; i++){
          elm = n[i]
        tmp[elm] = tmp[elm]? tmp[elm]+1 : 1;
    }
    for ( elm in tmp ){
        if ( tmp[elm] === 1 )
        return elm
    }
    return -1
}
input =  [2,2,1]
//console.log ( singleNumber(input))
//Rotate Array
//Given an array, rotate the array to the right by k steps, where k is non-negative.

 function rotateArr(nums, k){
    var temp, previous;
    for (let i = 1; i <= k; i++) {
    previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
return nums
}

num = [1,2,3,4,5,6,7]; //[5,6,7,1,2,3,4]
k=3;

num1 = [1,2]//0 :[1,2]
num2 = [-1,-100,3,99] //2; [3,99,-1,-100]
console.log( rotateArr(num2, 2)) //[5,6,7,1,2,3,4]

//Given a sorted array nums, remove the duplicates in-place such that each 
//element appears only once and returns the new length.
var removeDuplicates12 = function(arr) {
    var elm, obj={},count=0,res=[];
    for(var i=0; i<arr.length; i++){
        elm = arr[i];
       // tmp[elm] = tmp[elm]? tmp[elm]+1: 1;   
        if ( !obj[elm]){
            res.push(elm)
            count++
            obj[elm] = true;
        }
    }
        

  return res;
}

function removeDuplicates1(nums){
   var elm, count=0, tmp=[];
    for ( var i=0; i< nums.length; i++ ){
        elm = nums[i];
        if(!tmp[elm]){
            nums[count++] = nums[i]
            tmp[elm] =true;
        }  
    }     
    for ( var i = nums.length; i>count; i-- ){        
        nums.pop()  
    }
    return nums

}
function removeDuplicates(nums){
     
    if (nums.length == 0) return 0;
    var j = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] != nums[j]) {
                 j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
 }

nums = [0,0,1,1,1,2,2,3,3,4] //[0,1,2,3,4]
nums1 = [1,1,2]//[1,2]
//console.log(removeDuplicates(nums))

//===============================1st unique number
var singleNumber = function(nums) {
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
             //console.log("1st unique: " + elm)
             //result.push (elm);
             return elm;                     
         }

     }
    return "Not found";
       
}

arr =  [2,2,5]
arr1 =  [4,1,2,1,2]
arr2= [1,3,5,4,5,4,3,2]
arr3= [3,5,4,5,4,3]
//console.log ( singleNumber(arr1))

//==============================
//Intersection of Two Arrays II: Input: nums1 = [1,2,2,1], nums2 = [2,2]
var intersect1 = function(nums1, nums2) {
    const res = []
    const small = nums1.length < nums2.length ? nums1 : nums2   // Find the smallest input array
    const big = nums1 === small ? nums2 : nums1             // Assign the other list

            for ( var i=0; i< small.length; i++ ){
                for ( var j=0; j< big.length; j++){
                        if(small[i] === big[j] ){
                               res.push( small[i])                 
                            break;
                        }//if 
                }//for                      
            
            }//for   
    return res;
}
//find common element for two array either sort or unsort
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
arr = [2]
arr2 = [2,2]
arr3 = [1,2]
arr4=[1,1]
n1 = [1,2,3,8]
n2 = [2,4,6,8]
num = [4,9,5]
num1 = [9,4,9,8,4]

//console.log ( intersect(n1, n2) )
//console.log ( intersect(arr1, arr2) )
//console.log ( intersect(num, num1))
//Given a non-empty array of digits representing a non-negative integer, increment one 
//to the integer. The digits are stored such that the most significant digit is at the head of the
// list, and each element in the array contains a single digit.
//You may assume the integer does not contain any leading zero, except the number 0 itself.
//Plus One
function plusOnemy(digits){//[1,9]
    let carry = 0;
    for (let i = digits.length - 1 ; i >= 0; i--){
        carry = (digits[i] + 1 == 10)? 1 : 0;
        if (carry == 0){
            digits[i] = digits[i] + 1;
            break;
        }else{
            digits[i] = 0 ; 
        }
    }
    if (carry == 1){
        digits.unshift(1);
    }
    return digits;
}

nums = [1,2,3]//[1,2,4]
nums1 = [4,3,2,1]//[4,3,2,2]
nums2 = [9] //[1,0]
nums3 = [1,9] //[2,0]
nums4 = [9,9,9,9]//[1,0,0,0,0]
nums5 = [1,2,9] 

//[1,3,0]
//console.log ( plusOne(nums4) )
//Move Zeroes:  Given an array nums, write a function to move all 0's to the end of it while 
//maintaining the relative order of the non-zero elements.

function moveZeroes(nums) {
    var count=0;
    var len = nums.length;
    for ( var i=0; i< len; i++ ){ // all non-zero elements have been moved to front
        if (nums[i] !== 0){
            nums[count++] = nums[i]  
        }      
    }     
    while ( count < len){
           nums[count++] = 0
    }
    return nums
}



input = [0,1,0,3,12] // Output: [1,3,12,0,0]
input1 = [0,0,1] //[1,0,0]
//console.log( moveZeroes(input1))

//====================================
//Two Sum: Given an array of integers nums and an integer target, return 
//indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not 
//use the same element twice.
var twoSum1 = function(nums, target) {

     for ( var i=0; i<nums.length; i++){
         if( nums[i]+ nums[i+1] == target ){
             //console.log (nums[i]+ nums[i+1] )
             return ( i + " " + (i+1) )
         }
     }
     return -1;
    
};
function twoSum(nums, target) {
    var res=[];
    for ( var i=0; i<nums.length; i++){
          for ( var j=i+1; j<nums.length; j++ ){
                if( nums[i]+ nums[j] == target ){
                    res.push(i, j) 
                    return res     
                }
          }    
    }
    return res;

}
num = [2,4,5,3] // [2,3] tarage: 8
num1 = [3,3] // [0,1] target: 6
num2 = [3,2,4] // [1,2] target: 6
num3 = [3,2,3] // [0,2] target: 6
num4 = [2,5,5,11] //[1,2] target: 10
//console.log( twoSum(num4, 10))
//15. missing number
//from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
// You have an array of numbers 1 to 100 in an array. Only one number is missing in the array.
// The array is unsorted. Find the missing number.

function missingNumber11(a){
    var  total =0 , len = a.length;

    total = (len + 1) * (len + 2) / 2;
    for (var i = 0; i < len; i++)
        total -= a[i];
    return total;
}
//=========================
function missingNumber(arr){
    var  total =0 , len = arr.length;

     total = (len+1)*(len+2)/2;

     for ( let i=0; i<arr.length; i++)
        total -= arr[i]
      
      return total;  
}

num = [5, 2, 6, 1, 3]//4
num1 =[1, 2, 4, 5, 6]//3
num2 = [8,1,7,12,9,3,2,6,4,5,10]//11
//console.log( missingNumber(num)) ;
//valid Anagram
function isAnagram( s1, s2 ){
    s1 = s1.split("");
    s2 = s2.split("");
  
  if ( s1.length !== s2.length) return false;
  else{
    s1 = s1.sort()
    s2 = s2.sort()
   
   if ( s1.join('') === s2.join('') ) return true;
   else return false; 
          
         
  }

}
function chkAnagram(s1,s2){

    s1 = s1.split("").sort().join('');
    s2 = s2.split("").sort().join('');
    if( s1.length !== s2.length ) return false;
    if (s1 === s2 ) return true;
    else return false;
      
}

s1 = "anagram"
s2 = "nagaram" // true
//console.log ( chkAnagram( s1, s2 ) )

//Valid Palindrome//

function isPalindrome(string) {
    const lowerString = string.toLowerCase();
   // const characters = lowerString.replace(/[\W_]/g, '');
   const characters = lowerString.replace(/[^A-Za-z0-9]/g, '');
    const reverseCharacters = characters.split('').reverse().join('');
    return characters === reverseCharacters;
  }

function chkPalindrome(s){
    var lowStr =  s.toLowerCase()
    var str =  lowStr.replace(/[^A-Za-z0-9]/g, "");
    var reverseS = str.split('').reverse().join('')
    return str === reverseS
}
s = "A man, a plan, a canal: Panama" //true;
s1 = "race a car" //false;
s2 = "1a2" //false
s3 = 'a'//true;
s4 = "a."//true
s5 ="Madam I'm Adam." //true;
s6= "Coding JavaScript"//false;
s7 = "heh"
//console.log( chkPalindrome(s7)) 
//Implement strStr()
// Return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.
function strStr(a, b ){       
    var index = a.indexOf(b);
    
    if (index<0) 
        return -1;
    else 
       //return a.substring(index);
      return index    
}
s1 = "hello"
s2 = "ll"
s3 = "aaaaa"
s4 = "bba"
s5 = "aaa"
s6="aaaaa"
s7= "mississippi" // 4
s8 = "issip"
s9 = "a"
s10 = ""
//console.log ( strStr(s3, s4))

function checkPrime(n){
  var divider =2;
    while( n > divider )
        if ( n%divider == 0  ) return false;
        else divider++

    return true;
}

function countPrime(n){
var count =0;
  for ( var i=0; i<=n; i++ ){
      if ( checkPrime(n)){
          count++
      }
  }
  return count;

}
n=2
//console.log ( countPrime(n))

