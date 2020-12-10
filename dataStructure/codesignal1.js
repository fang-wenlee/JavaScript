//Several people are standing in a row and need to be divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, 
//the fourth into team 2, and so on.
//14:
function alternatingSums(a) {
   var even=0, odd=0;
   var res =[];
   for ( let i=0; i< a.length; i++ ){    
          if ( i%2 == 0 ){
                even += a[i];
                console.log(even)
          }
          else 
              odd += a[i];
   }
     // res.push(even,odd);
        res[0]= even;
        res[1] = odd
    return res;

}
a = [50, 60, 60, 45, 70]
a1= [100, 51, 50, 100]
//console.log( alternatingSums(a1)) 
//Given a rectangular matrix of characters, add a border of asterisks(*) to it.
//15
//Given a rectangular matrix of characters, add a border of asterisks(*) to it.
function addBorder(arr) {
    var  k=0;
   
   var cols = arr.length +2;
   var star = "*".repeat(cols);
   return [star,
          ... arr.map(i=> `*${i}*`),
          star]
}

item =  ["abc","ded"]
item1 = ["abcde", "fghij", "klmno", "pqrst", "uvwxy"]
//console.log(addBorder(item1))
//===============================
//Two arrays are called similar if one can be obtained from another by swapping at most 
//one pair of elements in one of the arrays.
//Given two arrays a and b, check whether they are similar.
//16
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
//You are given an array of integers. On each move you are allowed to increase exactly one of 
//its element by one. Find the minimal number of moves required to obtain a strictly increasing 
//sequence from the input.
//17

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

function firstUnique(nums){
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
            // console.log("1st unique: " + elm)
             result[result.length] = elm;
             break;           
         }
     }
    return result;
       
}
item = [6,7,9,6,7,2,9]
str = "abcdeabc"
//console.log( firstUnique(str) )
//18: PalindromeRearranging : Given a string, find out if its characters can be rearranged to form a palindrome.
function palindromeRearranging(str) {
    var tmp=[], count=0,elm;

    for ( var i=0; i< str.length; i++){
           elm = str[i]
           tmp[elm] = tmp[elm] 
           ? tmp[elm]+1 
           : 1;
         
    }
    for ( elm in tmp){
        if ( tmp[elm] === 1 )
              count++;
    }
     console.log(count)
    if ( count > 1 ) return false
    else return true;

}
str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"//false;
str1 = "abbcabb" //true;
//console.log ( palindromeRearranging(str))

//19: areEquallyStrong
function areEquallyStrong(yLeft, yRight, fLeft, fRight) {
    if ( yLeft == fLeft && yRight == fRight)  return true;
    else if ( yLeft== fRight && yRight == fLeft)  return true;
    else return false;
  }

  yourLeft = 10
  yourRight = 15
  friendsLeft = 15
  friendsRight = 13
  
  //console.log(areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight))
//20: Given an array of integers, find the maximal absolute difference between any 
//two of its adjacent elements.
function arrayMaximalAdjacentDifference(arr) {
   
    var maxDiff = Math.abs (arr[0] - arr[1])
    for ( var i=1; i<arr.length; i++){
        if (maxDiff <  Math.abs( arr[i] - arr[i+1])){
               maxDiff = Math.abs ( arr[i] - arr[i+1])
        }
    }
    return maxDiff
}
inputArray =  [10, 11, 13] //2
inputArray1 = [-1, 4, 10, 3, -2]

//console.log (arrayMaximalAdjacentDifference(inputArray1) )
//22: Avoid Obstacles:
//You are given an array of integers representing coordinates of obstacles situated on a straight line.
//Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to
// make jumps of the same length represented by some integer.
//Find the minimal length of the jump enough to avoid all the obstacles. 

function avoidObstacles(inputArray) {
    var max =Math.max(...inputArray);
       for (var i = 1; i< max; i++) {
          // var divs = inputArray.some(x=>x%i==0)
          // if(!divs) return i; [5, 3, 6, 7, 9] //4
          if( ! (inputArray.some(x=>x%i==0))  ) 
               return i;
       }
       return max +1;
   }

function avoidObstacles1(arr) {
  for(var n=1;;n++) 
    if(arr.every(x=>x%n)) 
       return n
}
inputArray = [5, 3, 6, 7, 9] //4
inputArray1 = [1, 4, 10, 6, 2]//7
//console.log ( avoidObstacles(inputArray))
//============================================
//24: 
  function minesweeper1(matrix) {
    let newMatrix = []
    for(let a = 0; a < matrix.length; a++){
        newMatrix.push([])
        for(let b = 0; b < matrix[0].length; b++){
            let top = a - 1 != -1
            let right = b + 1 < matrix[0].length
            let bottom = a + 1 < matrix.length
            let left = b - 1 != -1
            let number = 0
            
            if (top && matrix[a - 1][b]) {number += 1}
            if (top && right && matrix[a - 1][b + 1]) {number += 1}
            if (right && matrix[a][b + 1]) {number += 1}
            if (bottom && right && matrix[a + 1][b + 1]) {number += 1}
            if (bottom && matrix[a + 1][b]) {number += 1}
            if (bottom && left && matrix[a + 1][b - 1]) {number += 1}
            if (left && matrix[a][b - 1]) {number += 1}
            if (top && left && matrix[a - 1][b - 1]) {number += 1}
            newMatrix[a][b] = number
        }
    }
    return newMatrix
}




const matrix = [[true, false, false],
[false, true, false],
[false, false, false]]
  
// console.log(  minesweeper(matrix) )
//=============================
//25

function arrayReplace(inputArray, elemToReplace, substitutionElem) {

      for (var i=0; i< inputArray.length; i++)
          if( inputArray[i] == elemToReplace)
              inputArray[i] =  substitutionElem;
    
    return inputArray;         
}

arr = [1, 2, 1] //[3,2,3]
arr1 = [1, 2, 3, 4, 5] // [1,2,0,4,5]
//console.log ( arrayReplace(arr, 1, 3) )
//console.log ( arrayReplace(arr1, 3, 0) )
//26: Check if all digits of the given integer are even.
function evenDigitsOnly(n) {
   var str = n.toString()
 
  for ( var i=0; i<str.length; i++ ){
      if( parseInt(str[i])%2 !== 0  ) return false;
   }
   return true;
}
n = 642386
n1 = 248622
//console.log ( evenDigitsOnly(n1))
//27:  variable name
//Correct variable names consist only of English letters, digits and underscores and they 
//can't start with a digit.Check if the given string is a correct variable name.

function variableName(name) {

    return /([a-zA-Z_])/.test(name.charAt(0)) && !/\W/.test(name);
    //return /^[a-z_]\w*$/i.test(name)  
}
name = "var_1__Int"
name1 = "C72.316.254.1"
name2 = " varialbe";
name3 = "va[riable0"
//console.log( variableName(name3) )
//28 :  Given a string, your task is to replace each of its characters by the next one
// in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

function alphabeticShift(str){
    var strOut='';
    for (var i = 0; i < str.length; i++) {
        if ( str.charCodeAt(i) == 122 ){
          strOut += "a"
        }
        else if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            strOut += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return strOut;
}

str = "abc" //bcd
str1 = "x"
str2 = "zz"
str3 = "fuzzy"
//console.log ( alphabeticShift(str2) )

function shaparea(n){
var sum =0;
    for ( var i=0 ; i < n-1; i++){
        sum +=(2 * i + 1) *2
    }
    sum += 2*n -1;

    return sum
}
n= 3
//console.log ( shaparea(n) )
//==========================================

function convertNum(l){
    switch(l){
        case 'a':
             cell = 0;
             break;
        case 'b':
             cell = 1;
            
             break;
        case 'c':
             cell = 2; 
             break;
        case 'd':
             cell = 3;
             break;
         case 'e':
             cell = 4;
             break;
         case 'f':
             cell = 5;  
             break;                
         case 'g':
             cell = 6; 
             break;
         case 'h':
              cell = 7;
              break;
         default:
             console.log('default')      
       }  
   return cell
}

function chessBoardCellColor(cell1, cell2) {
  
   var num1 = convertNum( cell1.toLowerCase().charAt(0))
  var num2 = convertNum( cell2.toLowerCase().charAt(0))
 //console.log(num2)
    var p1 =  num1 + parseInt (cell1.charAt(1))
    var p2 =  num2 + parseInt(cell2.charAt(1))
    if ( p1%2 ===0 && p2%2 ===0 ||  p1%2 !==0 && p2%2 !==0 ) return true;
    else return false;
 
}

c1 = "A1"
c2 = "H3"
//console.log ( chessBoardCellColor("A1", "H3"))
//console.log ( chessBoardCellColor("A1", "C3"))

function circleOfNumbers(n,firstNumber) {
    return (firstNumber+(n/2)) % n;
}


//console.log ( circleOfNumbers(10,2))//7

//console.log ( circleOfNumbers(18,5))//14

function depositProfit(deposit, rate, threshold) {
       rate = rate /100 +1;
       var i =0;
      
       while (true){
           
           deposit =   deposit * rate ;
         if ( deposit < threshold ){
               i++
         }else{
             flag = false;
             break
         }
       }
   return i+1
}

//console.log ( depositProfit(100, 20, 170) )//3
//console.log ( depositProfit(100, 1, 101) )//1
//console.log ( depositProfit(1, 100, 64) )

function absoluteValuesSumMinimization12(a) {
    let result = a[0];
    let total = Number.MAX_VALUE;

    for(let i=0; i<a.length; i++){
        let tmp = 0;
        for(let j=0; j<a.length; j++)
            tmp += Math.abs(a[j]-a[i]);
        if(tmp < total) {
            result = a[i];
            total = tmp;
        }
    }
    return result;
}
function absoluteValuesSumMinimization(arr) {

   var  total=Number.MAX_VALUE, sum=0, res=[0];   
     for ( var i= 0; i < a.length; i++){       
            sum = 0
            for (var j=0; j< a.length; j++ ){         
                sum +=  Math.abs( arr[i]- arr[j])       
            }
          console.log ( "element: " + arr[i] + " Total: " + sum)
           if(sum < total) {
               res = arr[i];
               total = sum;
           }
        }
    return res  
}
   
    

function absoluteValuesSumMinimization1(A) {
    return A[Math.ceil(A.length/2)-1];
}

a = [2, 4, 7] //4
a1 = [1, 1, 3, 4] //1
//console.log ( absoluteValuesSumMinimization(a))

function stringsRearrangement(inputArray) {


}
str = ["ab", "bb", "aa"]
//console.log ( stringsRearrangement(str) )