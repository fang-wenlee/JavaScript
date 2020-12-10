
function almostIncreasingSequence(arr) {
    var found = 0;
    for (var i=0;i<arr.length;i++) {   
       if(arr[i] <= arr[i-1]) {
           found++;
        if(found > 1) return false;       
        if(arr[i] <= arr[i-2] && arr[i+1] <= arr[i-1]) return false; 
      }      
    } 
    return true;
}

 
   item0 = [1, 2, 3, 4, 99, 5, 6]//true
   item = [1,3,2,1,3]//falses
   item1 = [1,3,2];//true
   item2 = [1,2,1,2]//false
   item3= [1, 2, 3, 4, 5, 3, 5, 6]//false
   item4= [40, 50, 60, 10, 20, 30]//false
   item5= [1,2,3,4,5,3]//true
   item6= [3, 5, 67, 98, 3]//true
   item7= [1, 2, 3, 4, 3, 6]//true
   item8 = [10, 1, 2, 3, 4, 5] //true
   item9 = [1, 2, 5, 3, 5] //true
   item10 = [1, 2, 3, 4, 99, 5, 6]//true
//console.log(almostSequence1(item5))
//console.log( almostIncreasingSequence(item6) );

//===========================================
//==========================================
function chkUpper(arr,m,n){

   //console.log('Column: ' +n)
    for ( var i=0; i< m; i++){   
      // console.log("Row: " +m);   
         if( arr[i][n] ==0){         
              return false;
         }    
    }
    return true;

}
  function matrixElementsSum1(arr) {
     // console.table(arr)
      var sum=0;
    for(var c=0; c<arr[0].length;j++){ //column
        for(var i=0; i<arr.length;i++){ //row
          if(arr[i][c]===0) break
          else sum+=arr[i][c]
        }
    }
    return sum
  }
function matrixElementsSum(arr){
  var sum =0;
      for ( let j=0; j<arr[0].length;j++){//coloum
          for (let i=0;  i<arr.length; i++){
             if(arr[i][j] === 0) break;
             else sum+=arr[i][j]
          }
      }
      return sum;
  }
item0= [ [1,1,1,0], [0,5,0,1], [2,1,3,10]] //9
item1 = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] //9
item2 =[[1,1,1], [2,2,2], [3,3,3]]//18
item3 = [[1], [5], [0], [2]]//6
item4 = [[1,2,3,4,5]] //15
//console.log( matrixElementsSum(item0));
//================================================
//Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(arr) {
var largest = 0;
var res =[];
        for ( var i=0; i<arr.length; i++){
            if ( arr[i].length > largest )
                largest = arr[i].length;
        }
        for ( var j=0; j< arr.length; j++){
             
               if ( arr[j].length == largest)
                  res.push (arr[j])
        }

  return res;
}

item = ["aba", "aa", "ad", "vcd", "aba"] // ["aba", "vcd", "aba"]
item1 =["abc",  "eeee",  "abcd", "dcd"]//["eeee", "abcd"]
item2 = ["a", "abc",  "cbd",  "zzzzzz", "a", "abcdefg", "asasa", "aaaaaa"]
//console.log ( allLongestStrings(item2) );
//======================================================
//=====================================================
function commonCharacterCount(s1, s2) { 
    var count = 0;
    while(s1.length && s2.length){
        if(s2.includes(s1.charAt(0))){
            count++;
            s2 = s2.replace(s1.charAt(0),"");                  
            s1 = s1.slice(1);
        }
        else {
            s1 = s1.slice(1);
        }
    }
   
     console.log(count)
 }
 function commonCharacterCount(s1, s2){
   var count=0;
    while (s1.length && s2.length){
       if (  s2.includes(s1.charAt(0)) ) {
            count++;
           s2 = s2.replace( s1.charAt(0), " ")
          // console.log("s2: "+ s2)         
           s1 = s1.slice(1);
           //console.log("s1: "+ s1)
       }else{
           s1 = s1.slice(1);
       }
    }
    console.log (count);
 }

//commonCharacterCount("aabcc", "adcaa") //3
//commonCharacterCount("zzzz", "zzzzzzz")//4
//commonCharacterCount("abca", "xyzbac")//3
//commonCharacterCount("a", "b")
//commonCharacterCount("a", "aaa")//1
//commonCharacterCount("aaa", "aaa")//1
//=======================================
//=======================================
//Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if 
//the sum of the first half of the digits is equal to the sum of the second half.
function isLucky(n) {
    var nstr = n.toString();
    var sumF=0, sumB=0;
    for ( var i=0; i< nstr.length; i++){
        if ( i < nstr.length/2 ){
          sumF += parseInt(nstr[i]);
          }
        else 
           sumB += parseInt(nstr[i]);   
    } 
     
   return sumF == sumB;         
}

//console.log(isLucky(1230))
//console.log(isLucky(239017))
//console.log(isLucky(134008))
//console.log(isLucky(11))
//=======================================================================
function sortByHeightMy(arr) {
  var sortarr = [];
  var idxarr = [];
   console.log("ARR  =  "+ arr)

  for ( var i=0; i<arr.length; i++ ){
       if ( arr[i] != -1){
           sortarr.push( arr[i]);
       }
       else {
               idxarr.push(i);
       }
   } 
    console.log("Tree location: " + idxarr);
 
     if ( sortarr.length !== 0){
       sortarr = sortarr.sort(function(a, b){return a - b});
       console.log(sortarr);
      
       var k=0;      
        var flag=true;
        for ( var i=0; i<sortarr.length; i++){             
                    while(flag){
                        if(checktree(idxarr, k)== true) {
                                k++;
                                flag=true;
                        }      
                        else
                            flag=false;
                    }//while
                arr[k] = sortarr[i];
                flag=true;
                k++;               
          }//for
          console.log("result  "+arr);
      }//else
      return arr;
    }
  function checktree(idxarr,k){
        for ( var i=0; i<idxarr.length; i++ ){
            if(idxarr[i] ==k  )
                return true;
        }//for
        return false;
       }
 //====================================================      
function sortByHeight(arr) {
    var s = arr.filter(h => h > 0).sort((a, b) => a - b)
     console.log(s)
    return arr.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        
        return -1;
    })
   
}

//sortByHeight([ 23,54,-1,43, 1, -1, -1, 77, -1,-1,-1,3])// res: 1,3,-1,23,43,-1,-1,54,-1,-1,-1,77
//sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]);
//sortByHeight([4, 2, 9, 11, 2, 16])
//sortByHeight([-1,-1, -1,1, 4, -1, 2,-1, 9,-1, 11, 2, 16,-1])
//=================================================
//===================================================
function sortBy(arr) {
    var sortarr = [];
    var idxarr = [];
    var k=0;
    console.log("ARR  =  "+ arr)
    sortarr = arr.filter( p => p > 0 ).sort((a,b)=> a-b );
    console.log("Sort: " +sortarr)
     for ( var i=0; i<arr.length; i++ ){
         
         if ( arr[i] !== -1){         
            arr[i] = sortarr[k];
            k++;
         }//if    
     }     
     console.log("After: " +arr) 
     return arr;
}
    

//sortBy([ 23,54,-1,43, 1, -1, -1, 77, -1,-1,-1,3])// res: 1,3,-1,23,43,-1,-1,54,-1,-1,-1,77
//sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]);
//sortByHeight([4, 2, 9, 11, 2, 16])
//sortByHeight([-1,-1, -1,1, 4, -1, 2,-1, 9,-1, 11, 2, 16,-1])

//Write a function that reverses characters in (possibly nested) parentheses in the input string.
//Input strings will always be well-formed with matching ()s.





function reverseInParentheses(str){

      while(true){
          let cp = str.indexOf(")");
          if ( cp === -1 ) break;
          let op = str.substring(0, cp).lastIndexOf("(");
          let start = str.substring(0, op);
          let middle = str.substring(op+1, cp).split("").reverse().join("");
          let end = str.substring(cp+1, str.length);
          str = start + middle + end;
      }
     console.log (str);
}

//console.log (reverseInParentheses("(bar)") )
//reverseInParentheses("foo(bar(baz))blim") // foobazrabblim
//reverseInParentheses("foo(bar)baz");// foorabbaz

function isLucky(num){
    
       
             var sumFirst =0, sumSecond =0;
             var snum =  num.toString();

            for ( var i=0; i< snum.length; i++ ){
                if ( i < snum.length/2 ){
                      sumFirst += parseInt( snum[i]);
                      //console.log(sumFirst);
                }
                else  {
                sumSecond += parseInt(snum[i]);
               // console.log(sumSecond)
                }
            }
     
        return sumFirst == sumSecond
 
}
//console.log(isLucky(1230))
//console.log(isLucky(239017))
//console.log(isLucky(134008))
//console.log(isLucky(11))

//================================================================
//======================================================================
//Given an integer n and an array a of length n, your task is to apply the following mutation to a:
//Array a mutates into a new array b of length n.
//For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
//If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. 
//For example, b[0] should be equal to 0 + a[0] + a[1].
// [4, 0, 1, -2, 3]



function mutateTheArray1(n, arr) {
      var b = [];
      if ( arr.length == 1) return arr;
        for ( var i=0; i < arr.length; i++ ){
             if ( i == 0 )    
                 b[i] =  arr[i] + arr[i+1];                  
             else if( i == arr.length-1)  
                  b[i] = arr[i-1] + arr[i]      
             else {
                 b[i] = arr[i-1] + arr[i] +arr[i+1];//
            }

        }
        return b;
}
//console.log (mutateTheArray1(5,  [4, 0, 1, -2, 3]));//[4,5,-1,2,1]
//console.log (mutateTheArray1(1,  [9])); //9
//==============================
//======================================
//You are given two arrays of integers a and b of the same length,
// and an integer k. We will be iterating through array a from left to right,
// and simultaneously through array b from right to left, and looking at pairs 
//(x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation 
//xy is strictly less than k.
//Your task is to return the number of tiny pairs that you'll encounter during 
//the simultaneous iteration through a and b.//

function countTinyPairs(a, b, c) {
  
    var count=0, k=b.length-1;
    var res =""
    for ( var i= 0; i<a.length; i++ ){    
        res = a[i].toString().concat(b[k].toString())     
       if ( Number(res) < c ){
            count++;           
       }
          
      k--;    
    }   
   return count;
}

//console.log( countTinyPairs([1,2,3], [1,2,3], 31));
//============================
//===========================
//Given an array of positive integers a, your task is to calculate the sum of 
//every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string 
//representations of a[i] and a[j] respectively.
function concatenationsSum(arr){
        var str ="";
        sum =0;
    for ( let i=0; i<arr.length; i++ ){
       for ( let j=0; j< arr.length; j++){
             str = arr[i].concat(arr[j]);
              sum += parseInt (str)
       }
    }//for

    console.log(sum)
}
//concatenationsSum([10,2]) //1344
//concatenationsSum([10])//1010
//concatenationsSum([10,2,2]) 
//concatenationsSum([6,8]) //308
//===============================
//For a = [50, 60, 60, 45, 70], the output should be
//alternatingSums(a) = [180, 105].
function alternatingSums(a) {

   var res=[];
   var sumEven=0, sumOdd=0;

   for ( var i =0; i<a.length; i++){
       if ( i%2 == 0)
           sumEven += a[i];
       else    
           sumOdd += a[i]
   }

    res.push(sumEven,sumOdd);
  return res;
}
//alternatingSums([50,60,60,45,70])
//=====================================================
//=============================================================
//Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addborder1(arr){
  var cols = arr[0].length +2;
  
  var star = "*".repeat(cols);
  //console.log(star)   ;
  return [star,
          ...arr.map(i=>`*${i}*`),
          star]
}
//console.log(addborder(["ab", "efc"]));
//================================
function addborder(arr) {
     var myMax=0, k=0;
      for ( let i=0; i< arr.length; i++){
              if ( arr[i].length > myMax)
                 myMax = arr[i].length;
      }
     var cols = myMax+2;
     var star = "*".repeat(cols);
     return [star,
            ... arr.map(i=> `*${i}*`),
            star]
      
}
//console.log ( addborder(["abcd", "ded"]))
//console.log ( addborder(["a", "ded"]))
  function addBorder12(arr) {
      var res =[];
      var str = "";
      var star ="";
    var cols = arr[0].length + 2;
    var rows = arr.length+2;
    for ( var i =0; i<rows-1; i++ ){
        for ( var j=0; j< cols; j++){
              if ( i==0){
                 str = str + "*";
                 star =str;
              }
              else {
                   str = "*" + arr[i-1];  
                   str +="*"  //last
              }             
        }
       res.push(str)
    }
    res.push(star);
  //console.table(res)
return res;

  }
 

//console.log ( addBorder(["abcde", "fghij", "klmno", "pqrst", "uvwxy"]))
//console.log(addBorder(["a"]));
//===================================================
//Two arrays are called similar if one can be obtained from another by swapping
// at most one pair of elements in one of the arrays.
//Given two arrays a and b, check whether they are similar.
//For a = [1, 2, 3] and b = [1, 2, 3], the output should be
//areSimilar(a, b) = true.


function areSimilar1(a, b) {
   // [2,3,1], [1,3,2] true
   // [2,3,1], [1,10,2] false
    const ad = a.filter((v,i)=>v!=b[i])
    const bd = b.filter((v,i)=>v!=a[i])
    console.log("arry1: " + ad.join(''));
    console.log("arry2: " + bd.join(''));
    console.log("arry2 reverse: " +  bd.reverse().join(''));
    return ad.length == 2 && ad.join('') == bd.reverse().join('');
}
  
function areSimilar(arr1, arr2) {
     // [2,3,1], [1,3,2] true
   // [2,3,1], [1,10,2] false
   
   //[4,6,3], [3,4,6] false
  //[832, 998, 148, 570, 533, 561, 894, 147, 455, 279], 
  //[832, 998, 148, 570, 533, 561, 455, 147, 894, 278]
    sum = 0;
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            sum++
        }
    }
    //console.log(sum)
    //arr1.sort(); console.log(arr1.toString())
    //arr2.sort();console.log(arr2.toString())
    return arr1.toString() == arr2.toString() && sum < 3
}

function areSimilar1(a, b) {
    let s = [];
    for(i in a){
        if(a[i] != b[i]){
            s.push(i); 
            console.log (s);  }
    }       
         
    return s.length == 0 || s.length == 2 && a[s[0]] == b[s[1]] && b[s[0]] == a[s[1]];
}
 console.log( areSimilar([1,2,3], [2,1,3]));//true;
//console.log( areSimilar([2,3,1], [1,3,2]));//true
//console.log( areSimilar([2,3,1], [1,3,2]));//true
//console.log( areSimilar([2,3,1], [1,10,2])); //false;
//console.log( areSimilar([4,6,3], [3,4,6])); //false
//console.log( areSimilarp([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 998, 148, 570, 533, 561, 455, 147, 894, 278]));
//console.log( areSimilar([1,2,3], [1,2,3])); //true;

// ========================================================

//===============================
//Given a string, find out if its characters can be rearranged to form a palindrome.
function palindromeRearranging(str) {
   var len =  str.length;
   var elm, count= 0;
   var obj={};

   for ( var i= 0; i<str.length; i++){
       elm =str[i];
       if (!obj[elm]){               
           obj[elm] = 1;       
       }else{
         obj[elm]++;
       }      
   } 
    console.log(obj)
    for ( var k in obj) {   
         // console.log(obj[k])      
       if( obj[k]%2 !== 0 ) 
          count++;
     }     
     // if odd count > 1; it can't form palindrome
     
   if ( count >1) return false;
   else return true;      
}
//palindromeRearranging("aabb")
//console.log (palindromeRearranging("aabb"));
//console.log (palindromeRearranging("geeksforgeeks"));
//console.log (palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"));
//console.log (palindromeRearranging("abbcabb"));//true
//console.log (palindromeRearranging("zyyzzzzz"));//true
function isPalindrome(str) {
    var len = str.length
    for ( var i = 0; i< len/2; i++){
        if ( str[i] !== str[len-1-i])
             return false;
    }        
    return true;
}
//console.log ( isPalindrome("aabaaa") ); //fasle;
console.log ( isPalindrome("abcba") );//true;
//==========================================
//===============================================================
function alternatingSums(a) {
    var res=[];
   var sumEven=0, sumOdd=0;
   for ( var i =0; i<a.length; i++){
       if ( i%2 == 0)
           sumEven += a[i];
       else    
           sumOdd += a[i]
   }

    res.push(sumEven,sumOdd);
    return res;
}
//console.log (alternatingSums([50, 60, 60, 45, 70]));
//===================================
//=================================
//You are given an array of integers. On each move you are allowed to increase exactly 
//one of its element by one. Find the minimal number of moves 
//required to obtain a strictly increasing sequence from the input

function arrayChange1(inputArray) {
    //[-1000, 0, -2, 0]
    let moves = 0;
    const newarr = inputArray;
    for (let i = 1; i < newarr.length; i += 1) {
      if (newarr[i] <= newarr[i - 1]) {
        const diff = (newarr[i - 1] - newarr[i]) + 1;
        newarr[i] += diff;
        moves += diff;
      }
    }
    console.log ( newarr)
    return moves;
  }

function arrayChange(arr) {
   var len = arr.length;
   var diff =0, sum=0;
            for ( var i=0; i<=len-1; i++){ 
               if ( arr[i] >= arr [i+1]){                     
                    diff  =  arr[i] - arr[i+1] +1;                
                    arr[i+1] = diff + arr[i+1] ; 
                    sum += diff;
                    diff=0;        
               } //if               
          }//for
         return sum;  
  }
  
//console.log (arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])); //13
//console.log (arrayChange([1,1,1]));//3
//console.log (arrayChange([-1000, 0, -2, 0]));
//console.log (arrayChange([2, 1, 10, 1]));
//console.log (arrayChange([2, 12,12,10, 15]));
// remove duplicate members from an array
function removeDup(ary){
    var res= [];
    var elm, count=0;
    var obj={};

     for ( var i=0; i<ary.length; i++){
         elm = ary[i];
         if( !obj[elm]){
             res.push(elm);
              obj[elm] = true;
              count++
         }
        
            
     }//for
     console.log("Unique Number:" + count)
    return res;
}
items = [1,1,2, 3, 5, 22, 22, 33, 33, 1, 5];
//console.log(removeDup(items));
//===============================
//find nth Fibonacci number?
function fibo(nth){
    var res =[0,1];

     if ( nth < 2) return 1;
     for ( var i=2; i<=nth; i++){
           res[i] = res[i-1]+ res[i-2]
     }
     return res[nth];
}
//console.log ( fibo(10));
//============================
//check prime
function isPrime(n){
    var divisor =2;
        while ( n > divisor ){
             if ( n%divisor ==0 )
               return false;                
             else
                divisor++;
        }
     return true;
}
//====================================
//find all prime factors of a number?
function findPrime(num){
    var divisor =2;
	var result =[];
	
	while (num >2){	
	         if (num%divisor == 0){
				 result.push(divisor);
				 num = num/divisor;
			 }
			 else{ divisor++;}
	     }

     return result;	 
}
//console.log( findPrime(10))
//find the list is sorted or not
function isOrder(arr){

    for (var i=0; i<arr.length; i++){
          if( arr[i] > arr[i+1])
             return false;
    }
    return true;
}
//console.log( isOrder([1,6,2,5,8,9,4]))
//bubbleSort for an unorderlist
function bubbleSort(arr){
	
    
    for ( var i=0; i<arr.length; i++){
        for ( var j=0; j<arr.length-1; j++){
              if ( arr[i]< arr[j]){
                  swapidx(arr,i,j)
              }
        }
    }
    return arr;
}
function swapidx(arr, firstIdx, secondIdx){
             var temp;
             temp = arr[firstIdx];
             arr[firstIdx] = arr[secondIdx]; 
             arr[secondIdx] =temp;
}
itemlist = [ 6,20,8,19,56,23,87,41,49,53];
//console.log ( bubbleSort([ 6,20,8,19,56,23,87,41,49,53]));
// merge sorted 
function mergeSort(arr){
    var  len= arr.length;
     var left=[], right=[];

    if ( arr.length <=1) return arr;//no need to sort

    var midPt = Math.floor(len/2);
    left = arr.slice(0, midPt);
    right = arr.slice(midPt);
   //console.log("left: ", left, "length: ", left.length);
   //console.log("right: ", right, "length:", right.length );
   //console.log("----------------------------");
   return merge(mergeSort(left), mergeSort(right));
}
//merge sort for 2 arry
function merge(left, right){
   
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
//console.log (mergeSort([ 6,20,8,19,56,23,87,41,49,53]) );
//=============================

function bs1( val, arr){
    var lowIdx=0, upIdx = arr.length-1;

    while ( lowIdx <= upIdx ){
        var mid = Math.floor ( (lowIdx +upIdx)/2);
        if ( val == arr[mid] ) return mid;
        if (val >arr[mid]){
                lowIdx = mid+1;
        }else{
            upIdx = mid -1;
        }    
                
     }//while
   if ( lowIdx > upIdx ) return "no found";  


}

itemList = [1,3,5,9,13,23,26,41,49,56,69];
//console.log(bs1(33, itemList));
// merge 2 sorted arry
function ms(left, right)
{
    var res = [];
    var leftIdx =0, rightIdx=0;
    while( leftIdx < left.length && rightIdx < right.length){
        if ( left[leftIdx] > right[rightIdx]){
            res.push( right[rightIdx])
            rightIdx++;
        }else{
                res.push( left[leftIdx])
                leftIdx++;
        }
    }// while
    while( leftIdx < left.length){
        res.push( left[leftIdx])
        leftIdx++;
    }
    while(rightIdx < right.length){
        res.push( right[rightIdx])
        rightIdx++;
    }
  console.log(res)
}
//ms([3,8,10], [1,5,6,9])
//reverse a string
function reverseStr1(str){
   if ( str=="" || str.length <2) return str;
   return(  str.split("").reverse().join(""));
}
function reverseStr(str){
  var s = str.split("");
  var strR = "";
        for ( var i = s.length-1; i >=0; i--){
            strR += s[i];
        }
       console.log(strR)
 }
str = "Mozilla";
//console.log( reverseStr(str))
//reverse words in sentence ==> expect answer [ friend my Hello]

function rw(str){
    var res = [];
    var wLen =0;
    
    for (var i= str.length-1; i>=0; i--){
        if ( str[i] == ' ' || i ==0 ){
          res.push( str.substr(i, wLen+1));
           wLen =0;
        }else{
            wLen++;
        }
    }
    
    return res;  
    }

//console.log( rw("Hello Fang wen"));// wen Fang Hello
//Finding  Max Values in Array
function findMax(arr){

    var myMax =arr[0];
    for ( var i=1; i< arr.length; i++){
          if ( myMax < arr[i] ){
              myMax = arr[i];
          }
    }
    return myMax;
}
//console.log (findMax([6,20,8,19,56,23,87,41,49,53]))
//find 1st largest and 2nd laragest number form unsort array



function findMaxtwosum(arr){
    let highestInt = 0;
    let nextHighestInt = 0;
    for ( var i=0; i<arr.length; i++){
         if( arr[i] > highestInt ){
             nextHighestInt = highestInt;
             highestInt = arr[i];
         }else if (arr[i] > nextHighestInt){
                nextHighestInt = arr[i];
         }else{
            continue;
         }     
    }
    console.log(highestInt + nextHighestInt)

}
var arr = [7, 0, -4, 15, 2, 3];
//console.log(findMaxtwosum(arr)); // 22
// Counting total number of unique element in array
function countU(arr){
  var obj ={};
  var count=0, elm=0;

  for ( var i =0; i< arr.length; i++){
      elm = arr[i];
      if ( !obj[elm]){
        obj[elm] = true; 
          count++
      }
      else  
          obj[elm] = false;
  }
   console.log( count);  
}

function countUniqueValue(arr) {
    var i=0;
    
    for ( var j= 1; j< arr.length; j++){
        if ( arr[i] !== arr[j]){
            arr[i] = arr[j]
            i++;
        }     
    }
    return i;
}

var item1 = [1,1,2, 3, 5, 22, 22, 33, 33];
var item2 = [3,3,3,4,4,4,5,5,5,5,5,6];
//console.log(countUniqueValue(item1);
//Remove a character at the specified position of a given string and return the new string. 
function remove_character1(str, pos) {

    //console.log(str.length)

    part1= str.substring(0,pos);
    part2 = str.substring(pos+1, str.length);
    return part1+part2;
  
 }
// console.log( remove_character("Python", 0)); //ython
 //console.log( remove_character("Python", 3)); //pyton
 //console.log( remove_character("Python", 5)); //pytho
 ////50. capitalize the first letter of each word of a given string.
function capital_letter_n(str){
   var strC = str.charAt(0).toUpperCase();
   console.log(strC)
     for ( var i=1; i< str.length; i++){
           if (str[i] == " "){
               strC += str[i].toUpperCase();
           }
           else
              strC += str[i] 
     }//for
     return strC;
}
//console.log ( capital_letter_n("fang wen lee"))
//reverse in place
//10. reverse in place
//reverseInPlace('I am the good boy'); // "I ma eht doog yob"

function reverseInPlace(str){
var res =[];
var wstr="";
    for ( var i=0; i< str.length; i++){
        if(str[i] !== " " ){
            wstr = wstr + str[i];         
        }else{
            wstr = wstr.split("").reverse().join('') ;
            //console.log(wstr)
            res.push(wstr)
            wstr ="";          
        }
    }//res
            var space = str.lastIndexOf(" ");
            wstr = str.substring(space, str.length).split("").reverse().join("");
            res.push(wstr);
       
   return res;
}

//console.log ( reverseInPlace('I am the good boy'));//I ma eht doog yob
function reverseInParentheses2(str) {
    
    return str.split(" ").reverse().join(" ").split("").reverse().join("");
   
}	  	   
//console.log( reverseInParentheses2("I am the good boy"))

//========================================
//Given a string, find out if its characters can be rearranged to form a palindrome.
//soultion count Unique letter, odd can't greater than 1

function isPalindrome(str){
var obj= {};
var elm,count=0;
    for ( var i=0; i< str.length; i++){
        elm = str[i];
        if ( !obj[elm]){
            obj[elm] =1;
        }else
           obj[elm]++
    }
    for ( var k in obj){
         if( obj[k]%2 !==0  )
          count++;
    }
    if ( count > 1) return false;
    else return true;
   // console.log(obj)
}
//console.log(isPalindrome("aabb"))
//console.log ( isPalindrome("aabbaaa") );
//============================
function addBorder(arr) {
    var cols = arr[0].length +2;
    var rows = arr.length;
     var star = "*".repeat(cols);
    return [star, ...arr.map(i => `*${i}*`), star];

}
//console.log ( addBorder(["abc", "ded","ccc"]))  
//
//You are given an array of integers. On each move you are allowed to increase exactly 
//one of its element by one. Find the minimal number of moves 
//required to obtain a strictly increasing sequence from the input   
function arrayChange(arr){
   var diff=0, sum=0;
   var res=[];
    for ( var i=0; i < arr.length-1; i++){
          if ( arr[i] >= arr[i+1]){
              diff = arr[i] - arr[i+1] +1;
              arr[i+1] = diff + arr[i+1];             
              sum += diff;
          }
    }
        console.log("sum: " +sum)
        console.log(arr)

}

//console.log (arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])); //13
//console.log (arrayChange([1,1,1]));//3
//console.log (arrayChange([-1000, 0, -2, 0]));
 //console.log (arrayChange([2, 1, 10, 1]));
//console.log (arrayChange([2, 12,12,10, 15]));//5
//=====================================
//Given the string, check if it is a palindrome.

function isPalindrome1(str){
 

     var len = str.length;
    for ( var i = 0; i< len/2; i++){
        if ( str[i] !== str[len-1-i])
             return false;
    }        
    return true;
}
//console.log ( isPalindrome ("aabb") ); //false;
//console.log ( isPalindrome ("abcba") ); //false;
//console.log ( isPalindrome("aabaa") );//true

function concatenationsSum(arr){ 
 var res = [];
 var sum =0;

     for ( var i=0; i< arr.length; i++){
         for ( var j=0; j< arr.length; j++){
          
                res.push(  arr[i].toString().concat(arr[j].toString()) )
         }
     }
     for ( var i=0; i< res.length; i++){
         sum += parseInt (res[i]);
     }
    console.log(sum)
}
//concatenationsSum([10,2])//1344 ==> a[0] + a[0] = 10 10 =>1010
                                      //a[0] + a[1] = 10 2 => 102
                                      //a[1] + a[0] = 2 10 => 210
                                      //a[1] + a[1] = 2 2  =>22
                                      // 1010 + 102 + 210 + 22 = 1344
//concatenationsSum([8]) // a[0] + a[0] = 8 8 =>88
//==============================
//Given an integer n and an array a of length n, your task is to apply the following mutation to a:
//Array a mutates into a new array b of length n.
//For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
//If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. 
//For example, b[0] should be equal to 0 + a[0] + a[1].
function mutateTheArray1(n, a) {
    var b=[];
   // console.log(a.length)
    if ( a.length == 1 ) return a;
     for ( var i=0; i<a.length; i++ ){
         if ( i == 0)
              b[i] =  a[i] + a[i + 1];
          else if(i == a.length -1)    
               b[i] = a[i - 1] + a[i];
          else
               b[i] = a[i - 1] + a[i] + a[i + 1];

     }
   console.log(b)
}

function mutateTheArray(n, arr) {
    var b =[];
    for ( var i=0; i<n; i++){
        if (i==0) //1st index
         b[i] = 0 + arr[i] + arr[i+1];
         else if( i == n-1)//last index
             b[i] = arr[i-1] + arr[i];
         else
             b[i] = arr[i-1] + arr[i] + arr[i+1];
    }
    console.log(b)
}
//console.log (mutateTheArray(5,  [4, 0, 1, -2, 3])); // [4,5,-1,2,1]
//console.log (mutateTheArray(1,  [9]));
///
function findPrime(n){

    var divisor =2;
    var res = [];
    while(n >2){
    if ( n%divisor == 0 ){
         res.push(divisor);
         n = n/divisor;
    }
    else
       divisor++
    }   
    return res
}
//console.log (findPrime(12))
//============================
// From a unsorted array, check whether there are any two numbers that will sum up to a given number
function sumFinder(arr, n){
  
    for ( var i=0; i<arr.length; i++){     
        for ( var j=i+1; j< arr.length; j++){
            console.log(arr[i] + arr[j])
            if ( arr[i] + arr[j] === n)  { 
                return true;
            }   
       } 
      
    }
   return false;
}
//console.log( sumFinder([6,4,3,2,1,7], 9)) ;// true
//console.log( sumFinder([6,4,3,2,1,7], 20)); // false;

//=======================================================
//15. missing number
//from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
// missingNumber([5, 2, 6, 1, 3]); = 4

function missingNumber(arr){
  arr = arr.sort( (a,b) =>  a-b);
  console.log(arr);
   var res= [];
   for ( var i=0; i< arr.length; i++ ){
       if (arr[i+1] -arr[i] >1 ){
           res.push(arr[i] +1)
       }
   }
   return res
}
//console.log( missingNumber([5, 2, 6, 1, 3]))  //4
//console.log( missingNumber([5, 7, 10, 8, 6])) //7
//17. Largest Sum
// How would you find the largest sum of any two elements?
//sorting
function findMaxtwosum1(arr){
  var res=[];
  var len = arr.length -1;
  
  arr = arr.sort();
  //console.log (arr)
  var sum = arr[len] + arr[len-1];
  console.log( sum)
}
//greedy
function findMaxtwosum(arr){
    let highestInt = 0;
    let nextHighestInt = 0;
    for ( var i=0; i<arr.length; i++){
         if( arr[i] > highestInt ){
             nextHighestInt = highestInt;
             highestInt = arr[i];
         }else if (arr[i] > nextHighestInt){
                nextHighestInt = arr[i];
         }else{
            continue;
         }     
    }
    console.log(highestInt + nextHighestInt)

}
var arr = [7, 0, -4, 15, 2, 3];
//console.log(findMaxtwosum(arr)); // 22
//Count Total number of zeros from 1 upto n?
//Answer: If n = 50. number of 0 would be 11 (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100). 
//Please note that 100 has two 0. This one looks simple but little tricky
//Explanation: So the tick here is. if you have a number 1 to 50 the value is 5. just 50 divided by 10. 
//However, if the value is 100. the value is 11. you will get by 100/10 = 10 and 10/10. Thats how you will 
//get in the more zeros in one number like (100, 200, 1000)
function countZero(n){

    var count =0;

    while ( n > 0){
         count += Math.floor( n/10)
         console.log ( count )
          n = n/10
         
    }
    return count; 
}
//console.log (countZero(2014));//= 223

//19. subString
//Question: How can you match substring of a sting?

// subStringFinder('abbcdabbbbbck', 'ab') // = 0
// subStringFinder('abbcdabbbbbck', 'bck') // = 9

//doesn't work for this one.
// subStringFinder('abbcdabbbbbck', 'bbbck')  // = -1f
//1. check Prime
function isPrime(n){
  var d=2;
   while( n >d )
        if (n%d == 0) return false;
        else
            d++;

  return true;   
}
//console.log(isPrime(237))//false
//2. Prime Factors

function findFactors(n){
   var res=[];
   var divisor=2;

   while( n > 2){
      if ( n % divisor == 0){
          res.push(divisor);
          n = n/divisor;
      }else{
          divisor++;
      }
   }//while
   return res;
}
//console.log(findFactors(69)) //[3,23]
//3. Fibonacci: How do get nth Fibonacci number?
function fibonacci(n){
        var fibo=[0,1];
        if ( n <= 2) return 1;

        for ( var i=2; i<=n; i++){
            fibo[i]= fibo[i-1] + fibo[i-2];
        }
   return fibo[n];
}
//console.log( fibonacci(12)); //= 144    
//console.log( fibonacci(10)); //= 55   
//4. Greatest Common Divisor
function gcd(a,b){
    var temp;
    while(b!=0){
        temp = a;
        a =b;
        b = temp%b;
    }
    return a;
}
//console.log(gcd(14, 21));//7
//console.log(gcd(69, 169));//1

//5.remove duplicate members from an array?
function removeDup(arr){
  var res=[];
  var elm, obj={};

  for ( var i=0; i< arr.length; i++){
        elm = arr[i]
        if( !obj[elm]){
            res.push(elm);
            obj [elm] = true;
        }           
  }

 return res;
}
//console.log ( removeDup([1,3,3,3,1,5,6,7,8,1]))
//6. merge two sorted array
function mergeSortedArray( left, right)
{
   var leftIdx=0, rightIdx=0;
   var res =[];

   while(leftIdx < left.length && rightIdx < right.length ){
       if ( left[leftIdx] > right[rightIdx]){
             res.push(right[rightIdx])
             rightIdx++;
       }else{
        res.push(left[leftIdx])
             leftIdx++;
       }
   }//while
   while( leftIdx < left.length){
        res.push(left[leftIdx])
        leftIdx++;
   }

   while(rightIdx < right.length){
       res.push(right[rightIdx])
       rightIdx++;
      }
   return res;
}

//console.log( mergeSortedArray([2,5,6,9], [1,2,3,29]));
//7. swap number without temp
function swapNumb(a, b){
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b -a;
    console.log(b)
    a = a+ b;
    console.log(a)
    b = a-b;
    console.log('after swap: ','a: ', a, 'b: ', b);  
  }
//swapNumb(2, 3);
//9. reverse words Question: How would you reverse words in a sentence?
// ==> expect answer [ friend my Hello]
function rw(str){
  
   var res =[];
    var wlen= 0;
     for ( var i= str.length-1; i>=0; i--){    
        if ( str[i] == " " || i == 0){           
                res.push(str.substr(i, wlen+1))
                wlen=0;  
        }//
        else
           wlen++;
         
     } 
   return res.join(' ');

}
//console.log(rw("Hello My Friends"));
//10. reverse in place => expect answer [ I ma eht doog yob]
function rwinplace1(str){
  var temp = "";
  var res =[];
  //var space = str.lastIndexOf(" ");
    for ( var i=0; i< str.length-1; i++){
        if ( str[i] !== " "){
             temp +=str[i];
        }
        else if( str[i] == str[str.length-1]){
            temp +=str[i];
        }
        else{
             var rw = temp.split("").reverse().join("");
             console.log(rw);
             res.push(rw);
             temp ="";                 
        }
       
    }//for 

    //temp = str.substr(space, str.length);
    res.push(temp.split("").reverse().join("")); 

    console.log ( res)
}
function rwinplace(str){
    var temp = "";
    var res =[];
      var space = str.lastIndexOf(" ");
      for ( var i=0; i< str.length-1; i++){
          if ( str[i] !== " "){
               temp +=str[i];
          }       
          else{
               var rw = temp.split("").reverse().join("");
               console.log(rw);
               res.push(rw);
               temp ="";                 
          }
         
      }//for 
  
      temp = str.substr(space, str.length);
      res.push(temp.split("").reverse().join("")); 
  
      console.log ( res)
  }
 // rwinplace("I am the good girl")

//rwinplace("I am the good girl")

//find the first non repeating char in a string
function firstNonRepeatChar(str){
    var obj={};
    var elm;
    for ( var i=0; i< str.length; i++){
         elm = str[i];
         if( obj[elm]){
             obj[elm]++;
        }else{
            obj[elm] = 1; 
        } 
    }//for
   for ( var k in obj){
       if (obj[k] ==1)
          return k
   }//for

}
//console.log( firstNonRepeatChar('the quick brown fox jumps then quickly blow air'));
//console.log( firstNonRepeatChar('geeksforgeeks'));
//====================================
//find the max number of repeating char in a string

function findMaxL(str){

    var obj={};
    var elm, myMax=0;
    for ( var i=0; i< str.length; i++){
         elm = str[i];
         if( obj[elm]){
             obj[elm]++;
        }else{
            obj[elm] = 1; 
        } 
    }//for
   for ( var k in obj){
       if (obj[k] > myMax){
          myMax = obj[k];
       }         
   }//for
   console.log(obj)
   return myMax;
}
//console.log( findMaxL('geeksforgeeks'));
//12. remove duplicate char
function removeDup(str){
    var res=[];
    var elm;
    var obj={};
  // str = str.split("");
    for ( var i=0; i<str.length; i++){
        elm = str[i];
        if(!obj[elm]){
            res.push(elm);
            obj[elm] = true;
        }
        
    }
    console.log(res);
}

items = [1,1,2, 3, 5, 22, 22, 33, 33, 1, 5];
//removeDup("geeksforgeeks")
//removeDup(items);
//13. check palindrome
function isPalindrome(str){
    str = str.split("");
    for (var i=0; i< str.length/2; i++){
     //   console.log("1st: " + str[i] + " last: " + str[str.length-1-i])
        if (str[i] !== str[str.length-1-i] ){
            return false;
        }
    }
    return true;
}
//console.log( isPalindrome("aabaa"));
//15. missing number
//Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

function missingNumber1(arr){
    var n = arr.length+1, 
    sum = 0,
    expectedSum = n* (n+1)/2;
    
    for(var i = 0, len = arr.length; i < len; i++){
      sum += arr[i];
    }
    
    return expectedSum - sum;
  }
  function missingNumber(arr){
    arr = arr.sort( (a,b) =>  a-b);
    console.log(arr);
     var res= [];
     for ( var i=0; i< arr.length; i++ ){
         if (arr[i+1] -arr[i] >1 ){
              return arr[i] +1;
         }
     }
  }
 //console.log( missingNumber([5, 2, 6, 1, 3]));
 //console.log( missingNumber([9,8,10,7,5]));
 //16. Sum of two
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


 // console.log(sumFinder([6,4,3,2,1,7], 9)); //= true
console.log( sumFinder([6,4,3,2,1,7], 2));//= false

 // 17. Largest Sum//[6,4,3,2,1,7]
//Question: How would you find the largest sum of any two elements?

function topSum(arr){
    var first=arr[0], second =arr[1];

    for (var i=2; i<arr.length; i++){
        if(arr[i] > first){
            second = first;
             first = arr[i]
           
       // }else if( arr[i] > second &&  arr[i] != first){
        }else if( arr[i] > second ){
             second = arr[i];
        }else{
            continue;
        }
    }
    return first + second;
}
//console.log (topSum([6,4,3,2,1,7,12]))//19
//console.log (topSum([6,4,3,2,1,12]))//19
//===========================================================
//Remove a character at the specified position of a given string and return the new string. 

function remove_character2(str, n){
    
    var first = str.substring(0, n);
    console.log(first)
    var last = str.substring(n+1, str.length);
    return first.concat(last);
}

   function remove_character(str, p){
   var res = "";
       for (let i=0; i< str.length; i++){
         if ( i != p)
             res += str[i]            
       }
     console.log(res)
   }

    
// console.log( remove_character("Python", 0)); //ython
 //console.log( remove_character("Python", 3)); //pyton
// console.log( remove_character("Python", 5)); //pytho

 //18. Some people are standing in a row in a park. There are trees between them which cannot be moved. 
//Your task is to rearrange the people by their heights in a non-descending order without moving the 
//trees. People can be very tall!


function sortBy(arr){
    var sortedArr =[] 
   console.log("orignia:" + arr)
   for ( let i=0; i< arr.length; i++){
        if (arr[i] !== -1){
            sortedArr.push(arr[i]);
        }
   }
    sortedArr =  sortedArr.sort((a,b) => a-b);
    
    var k=0
           for (let i=0; i<arr.length; i++){
                if ( arr[i] !== -1){
                    arr[i] = sortedArr[k]
                    k++;      
               }
            }
   console.log(arr);
}

item = [23,1,12, -1,-1, 3, 2, 20, -1, 19,-1, 3,4]
//sortBy(item)



//19. display all prime numbers up to n.

function isPrime(n){
    var d=2;
     while( n >d )
          if (n%d == 0) return false;
          else
              d++;
  
    return true;   
  }

function primeNum(n){
    var res =[];
    res.push(2);
    for ( var i =3; i<=n; i++ ){
        if(isPrime(i) ){
          res.push(i)
        }
    }
    return res;
}

//console.log (primeNum(100));
// sum up from 1 to 100
function suminteger1(n){
  var sum =0;

  for ( var i = 1; i<=n; i++){
        sum +=i;
  }
  return sum;
}
function suminteger(n){
    var sum =0;
  
      sum = ((n+1)*n)/2
    return sum;
  }
//console.log( suminteger(5)) 

//20. Display number which is repeated for event times in an array
function displayEven(arr){
   var res=[];
      for ( var i=0; i<arr.length-1; i++){
           if( arr[i]%2 == 0){
               res.push(arr[i])
           }
      }
return res;

}
//console.log ( displayEven([3,1,4,2,6,7,9,11]))
//21; Find non repeating character not case sensitive
function nonrepeat(str){
    var res=[], obj={};
    var elm

    for ( var i=0; i<str.length; i++){
            elm = str[i];
            if ( obj[elm]){       
                obj[elm]++;
            }
            else{
                obj[elm]=1;
            }
        }//for
       /* Object.keys(obj).forEach(item => {
            if( obj[item] == 1){
            console.log("vaule: " +item+ " obj[item]: " +obj[item]); // key         
           }
        });   */

       var objProps = Object.getOwnPropertyNames(obj)
        console.log("props: "+objProps); 
       for (var i = 0; i < objProps.length; i++) {

            var propName = objProps[i];        
            if (obj[propName] == 1 ) {
               console.log(propName)
            }
        }
       
    return obj
}
//item0 = [1,1,2, 3, 5, 22, 22, 33, 33, 1, 5];
item1 = ["apple", "pear", "orange", "banana", "apple",
         "orange", "apple", "pear", "banana", "orange",
         "apple", "kiwi", "pear", "apple", "orange"] //Kiwi
item2= ["a", "b", "c","d","b","h"]
//item3="geeksforgeeks"
//console.log(nonrepeat(item1))
//22. count words in a string
function countWords1(str){
wcount=0;
for ( var i=0; i<str.length-1; i++){
    if (str[i] == " "){
        wcount++;
    }
}
 return wcount+1;
}
//======================================
function countWords(str){
    str = str.split(" ")
     return str.length;
    }
//console.log(countWords("Idea is very simple. We will convert the string to an array."));//12
//capitalize the first letter of each word of a given string
function convertoUper(str){
    var str =  str.split(" ") ;
    for (var i =0; i< str.length; i++ ){
        str[i] =  str[i][0].toUpperCase() + str[i].substr(1);
    }
    console.log(str)
    return str.join(" ");
    }
    //console.log(convertoUper("display prime number which is repeated for event iems in an array"));
    // Object Equality;  compare two objects in JavaScript?

    function isEqual(a, b) {
        var aProps = Object.getOwnPropertyNames(a), 
             bProps = Object.getOwnPropertyNames(b);
    //console.log(aProps)
    //console.log(bProps)
        if (aProps.length != bProps.length) {
            return false;
        }
    
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
          //  console.log(a[propName] + " b: "  + b[propName])
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    }
         
   obj1 ={ apple: 5, pear: 3, orange: 4, banana: 2, kiwi: 1 } 
   obj3 = obj1;
   obj4 ={ apple: 1, pear: 4, orange: 4, banana: 5, kiwi: 1 } 
   obj2 ={ '1': 3, '2': 1, '3': 1, '5': 2, '22': 2, '33': 2 }
   //console.log( isEqual(obj1, obj4) )
   function toUpfirst(str){
     var str = str.split(" ");
    
     for ( var i=0; i < str.length; i++){            
             str[i] =  str[i][0].toUpperCase() + str[i].substr(1);
            // console.log(str[i])
         }            
    
     return str.join(" ");
   }
//console.log(toUpfirst("fang Wen lee don't be afarid"));