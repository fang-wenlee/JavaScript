//Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?

function sumFinder(arr,n){
    for (var i=0; i<arr.length; i++){
        for ( var j=1+i; j<arr.length-1; j++){
             if( arr[i] + arr[j] == n)
                return true;
        }
    }
    return false;
 }


 
//console.log(sumFinder([6,4,3,2,1,7], 9)); //= true
//console.log( sumFinder([6,4,3,2,1,7], 2));//= false

function alternatingSort(arr) {

    var b=[];
    var len = arr.length;
    var temp = 0;

    if (len%2 ==1){
        temp = Math.ceil(len/2);
        odd =1;
    }
    else temp = len/2;

    for (let i=0; i<temp; i++){

        b[2*i] = arr[i];//this if even
        if ( i !== temp-1) //last node
           b[2*i+1] = arr[len-1-i]//odd
        else{
            if ( odd!==1)
                b[2*i+1] = arr[len-1-i]
        } 

    }
    
 console.log(b)
}
//console.log (alternatingSort( [1, 4, 5, 6, 3]) ) //fals

//console.log (alternatingSort( [5, 3, 8, 6, 7, 9,10,1,2]) )

//===============================================
//109: sort an array of all prime numbers between 1 and a given intege
function isPrime(n){
      
       while ( n >2) {
          if ( n%2 ==0) { return false;}
          else return true;
       }  

}
//console.log( isPrime(7))
function printprime(n){
  var res =[];

  for ( var i=0; i<=n; i++){
      if( isPrime(i)){
          res.push(i);
      }
  }
  return res;
}
//100. check whether there is at least one element which occurs in two given sorted arrays of integers.
function check_common_element(arr1, arr2) {

       for ( var i=0; i< arr1.length; i++){
             
              if ( arr2.indexOf(arr1[i]) !== -1)
              return true;              
       }
       return false;

}   
//
//console.log(check_common_element([1,2,3], [3,4,5]));  //true
//console.log(check_common_element([1,2,3], [5,6,7]));   //false
//91. find the maximum possible sum of some of its k consecutive numbers (numbers that 
//follow each other in order.) of a given array of positive integers.
//===========================================================
function array_max_consecutive_sum(nums, k) {
    let mymax = 0;
    let sum = 0;
    for (var i = 0; i < k - 1; i++) { // sum to k
      sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) { // i start from k-1
            sum += nums[i];
            if (sum > mymax) {
                mymax = sum;
            }
           // console.log(nums[i - k + 1] )
            sum -= nums[i - k + 1];
    }
    return mymax;
  }
  
 //console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2)) //19
 //console.log(array_max_consecutive_sum([2, 3, 5, 1, 6,12], 3))//19
 //console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
 // console.log(array_max_consecutive_sum([2, 3, 5, 1, 6,12, 2], 3)) //20
 // console.log(array_max_consecutive_sum([9, 3, 5, 1, 7,3,5], 2))//12

//Remove Duplicates from Sorted Array

function removeDup1(nums){
  var elm, count=0, obj={}, res=[];

  for ( var i=0; i< nums.length; i++ ){
      elm = nums[i];
      if ( !obj[elm]) {
           res.push(elm);
           count++;
           obj[elm] = true;
      }
  }
//console.log( count );
return res;

}

var removeDuplicates = function(nums) {
    var elm, count=0, obj={}, res=[];
  for ( var i=0; i< nums.length; i++ ){
       elm = nums[i];
       if ( !obj[elm]) {
             res.push(elm);
             count++;
            obj[elm] = true;
        }
  }

return res;
    
};
item=[1,1,2];
item1=[0,0,1,1,1,2,2,3,3,4]
//console.log( removeDuplicates(item) );
function rotateArr1 (nums, k){
   var res=[];
   
   for (let i=k+1; i<=nums.length; i++){
         res.push(i)
   }
   for ( let j=1; j<=k; j++ ) res.push(j)

   return res;

}
function rotateArr(nums, k){
    k = nums.length/2;
    var temp, previous;
        for (let i = 0; i < k; i++) {
        previous = nums[nums.length - 1];
            for (let j = 0; j < nums.length; j++) {
                temp = nums[j];
                nums[j] = previous;
                previous = temp;
            }
        }
    console.log( nums )
}

nums = [1,2,3,4,5,6,7]
//rotateArr(nums, 3)

//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.
function twoSum(nums, target){
var res=[];
       for (let i=0; i<nums.length; i++){
             if ( nums[i] + nums[i+1] == target ){
                res.push(i)
                res.push(i+1)
            } 
       }
    console.log(res)
}
nums = [3,2,4]
nums1 = [2,7,11,15]
//twoSum(nums1, 9)
//Contains Duplicate

function containDup(nums){
  

   for ( var i=0; i<nums.length; i++){
       var  mynum = nums[i];
          for (let j=i+1; j<=nums.length; j++ ){
             if ( nums[j] == mynum)
                  return true;                 
          }
      
   }

   return false

}
item = [1,2,3,1]
item1 =[1,2,3,4];
item2 =[1,1,1,3,3,4,3,2,4,2]
item3 = [2,14,18,22,22]
//console.log (containDup(item3));
//single Number
//Given a non-empty array of integers, every element appears 
//twice except for one. Find that single one.

function singleNumber( nums){
   
    var obj={}, elm, result=[];

    for ( var i=0; i< nums.length; i++ ){
        elm = nums[i];

        if (obj[elm])
            obj[elm]++;
        else 
        obj[elm] =1;
    }

    for ( var k in obj) {         
        if ( obj[k] == 1){
             result.push(k);   
            // console.log(k + ":" + exist[k])
         }             
 }

 console.log(result)

}
item= [4,1,2,1,2]
item1 =[2,2,1,4,4, 12]
//singleNumber(item1)

//==========================================
//Best Time to Buy and Sell Stock II
//Design an algorithm to find the maximum profit. You may complete as many 
//transactions as you like 
//(i.e., buy one and sell one share of the stock multiple times).

  function findProfit1(prices) {
    let profit
    let maxProfit = 0
    
    prices.forEach(function(buy, index) {
        let rest = prices.slice(index + 1)       
        if (rest){
          let sell = Math.max(...rest)      
            sell > buy ? profit = sell - buy : null
             profit > maxProfit ? maxProfit = profit : null    
      }     
    })  
     return maxProfit    
 };
 function findProfit(prices) {
    let maxProfit = 0;
    min  = prices[0];
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
     return maxProfit    
 };


 item = [7,1,5,3,6,4] // ouput 5
// console.log(findProfit(item));

function plusOne(digits){
 
   
   var lastnum = digits[digits.length -1] +1;
  // console.log(lastnum)
  
   for ( var i =0; i<=digits.length; i++ ){
         if ( i == digits.length)
            digits[digits.length-1] = lastnum;  //update last element      
   }
  console.log(digits)    
}
item0 = [0] //0
item = [1,2,3] //output [1,2,4]
item1 = [4,3,2,1] //output [4,3,2,2]
item2 =[2,4,7]//output [2,4,8]

//plusOne(item2)

//Move Zeores: Given an array nums, write a function to move all 0's to the end of it 
//while maintaining the relative order of the non-zero elements.

function moveZero(arr){
res = [];

            for ( var i =0; i< arr.length; i++){
                   if ( arr[i] !== 0){
                       res.push ( arr[i]);
                   }
            }
         
        for ( j=res.length; j<arr.length; j++){
              res.push (0);
        } 
         console.log(res)
}
item = [0,1,0,3,12] //  [1,3,12,0,0]
//moveZero(item)
//Intersection of Two Arrays II
function intersect(num1, num2){
    var res =[]; 
   
    for ( let i = 0; i<num1.length; i++ ){
        for ( let j =0; j<num2.length-1; j++ ){
        
             if( num1[i]  == num2[j]){
                 res.push(num1[i])
                 break;
             }
        }//for
    }//for    
    console.log( res)      
}
// intersect( [4,9,5], [9,4,9,8,4]) //[4,9]
 //intersect([1,2,2,1], [2,2]) // [2,2]
 //intersect( [2,2], [1,2,2,1])
 function rotate(matrix){
  var n = matrix.length;
  for ( let i=0; i< Math.ceil(n/2); i++){
      for ( let j=i; j< n-1-i; j++){
        let a = matrix[i][j];
        let b = matrix[j][n-1-i]
        let c = matrix[n-1-i][n-1-j]
        let d = matrix[n-1-j][i] 

        matrix[j][n-1-i] = a;
        matrix[n-1-i][n-1-j] =b;
        matrix[n-1-j][i] =c
        matrix[i][j] =d
      }
  }
  console.log(matrix)
 }
 //rotate([[1,2,3],[4,5,6],[7,8,9]])//[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

 //rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])//[[ 15, 13, 2, 5 ],[ 14, 3, 4, 1 ],[ 12, 6, 8, 9 ],[ 16, 7, 10, 11 ]]

 //rotate([[1,2],[3,4]])//[ [ 3, 1 ], [ 4, 2 ]

 var reverseString = function(s) {
    // s = s.split("");
    // console.log(s)
var res ="";
    for (var i=s.length-1 ; i>=0; i--) 
           res += s[i] 
       
 return res;   
};

str = "Hello"
//console.log ( reverseString(str))
function firstNotRepeatingCharacter(str) {
    for(let i = 0; i < str.length; i++) {
        let j = str.charAt(i)
        if (str.indexOf(j) == str.lastIndexOf(j)) {
          return j;
        }
     }
     return null;
   
}

s= "abacabad";
//console.log ( firstNotRepeatingCharacter(s) )

function rotateImage(arr) {

    var n = arr.length;
  for ( let i=0; i< Math.ceil(n/2); i++){
      for ( let j=i; j< n-1-i; j++){
        let a = arr[i][j];
        let b = arr[j][n-1-i]
        let c = arr[n-1-i][n-1-j]
        let d = arr[n-1-j][i] 

        arr[j][n-1-i] = a;
        arr[n-1-i][n-1-j] =b;
        arr[n-1-j][i] =c
        arr[i][j] =d
      }
  }
  return arr
}
item = [[1,2,3], [4,5,6], [7,8,9]]
item1 = [[10,9,6,3,7], [6,10,2,9,7], [7,6,3,8,2], [8,9,7,9,9], [6,8,6,8,2]]
//rotateImage(item)

function sudoku2(grid) {
    var collapsed = [[], [], []];
    //Guaranteed to be 9x9. Guaranteed to have '.' or 1-9
    for(var x = 0; x < grid.length; x++) { //Check row    
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, grid[x].join(""))) { 
                return false;
            }
        }
             
        var column = [];
        for(var y = 0; y < grid.length; y++) { //Check column
            column.push(grid[y][x]);
            collapsed[(x % 3)].push(grid[x][y]);
        }        
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, column.join(""))) { 
                return false;
            }
        }
    }
  
    var squares = [[], [], [], [], [], [], [], [], []];
    var k = 0;
    while(k < 9) {
        for(var j = 0; j < 3; j++) {
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
        }
        for(var i = 1; i <= 9; i++) {
            if(!isValid(i, squares[k].join(""))) { 
                return false;
            }
        }
       k++;
    }
   return true;
}
function isValid(i, a) {
    // No number is repeated
    var first = a.indexOf(i);
    if(first >= 0) {
        if(a.indexOf(i, first + 1) >= 0) {
            return false;
        }
    }
    return true;
}

a = [[".",".",".",".",".",".",".",".","2"], 
 [".",".",".",".",".",".","6",".","."], 
 [".",".","1","4",".",".","8",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".",".","3",".",".",".","."], 
 ["5",".","8","6",".",".",".",".","."], 
 [".","9",".",".",".",".","4",".","."], 
 [".",".",".",".","5",".",".",".","."]] //true

 b = [[".",".",".",".","2",".",".","9","."], 
 [".",".",".",".","6",".",".",".","."], 
 ["7","1",".",".","7","5",".",".","."], 
 [".","7",".",".",".",".",".",".","."], 
 [".",".",".",".","8","3",".",".","."], 
 [".",".","8",".",".","7",".","6","."], 
 [".",".",".",".",".","2",".",".","."], 
 [".","1",".","2",".",".",".",".","."], 
 [".","2",".",".","3",".",".",".","."]] //false
 //console.log ( sudoku2(b) );
 //===========================
//=====================================================
///declare linklist data structure
function isPalindrome1(l) {
    var len = l.length;
      for ( var i=0; i<len/2; i++){
           if ( l[i] !== l[len-i-1])
               return false;
      }
       return true;
  }
// console.log( isPalindrome([1, 2, 2, 3]) )//false

// Definition for singly-linked list:
function ListNode(x) {
     this.value = x;
  this.next = null;
 }
//
function isListPalindrome(l) {
    var current = l;
	var prevNode = l;
	while (current) {
		if (current != prevNode) {
			current.prev = prevNode;
		}
		prevNode = current;
		current = current.next;
	}
	var lastNode = prevNode;

	var currentF = l;
	var currentB = lastNode;
	while (currentF) {
		if (currentF.value != currentB.value) {
			return false;
		}
		currentF = currentF.next;
		currentB = currentB.prev;
	}
	return true;
}

//console.log( isListPalindrome([1, 2, 2, 3]) )//false
//console.log( isListPalindrome([0, 1, 0]) )//true
//==================================
//Remove Duplicates from Sorted Array
function delDup(arr){
var elm, count=0, obj={}, res=[];

for ( var i= 0; i<arr.length; i++){
    elm = arr[i];
    if ( !obj[elm]){
        count++;
        res.push(elm)
        obj[elm] = true;
    }
   
}
    return res;
}
item=[1,1,2];//2
item1=[0,0,1,1,1,2,2,3,3,4]

//console.log ( delDup(item) )
//============================

function addTwoHugeNumbers(a, b) {
    var temp;

  
    for ( var i= a.length; i>=0; i++){     
           for ( var j=b.length; b>=0; j++){
                   if ( a[i] + b[j] > 9999)
                         temp =1;
                         break;
           }
          elm = a[i]
          elm = elm +temp;
    }
    console.log( sum)
}
a = [9876, 5432, 1999];
b = [1, 8001];
//addTwoHugeNumbers(a, b)




