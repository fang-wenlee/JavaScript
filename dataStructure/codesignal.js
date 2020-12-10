function almostIncreasingSequence1(arr) {
    var count=0;
   // console.log(arr.length);
      for ( var i=0; i< arr.length; i++ ){    
        //console.log(arr[i]);
          if ( arr[i+1] - arr[i] <=0  ) {  // item4= [40, 50, 60, 10, 20, 30]    
            count++; 
             //console.log(arr.length);
             if(i-1 >=0 && (i+1 <= arr.length-1)) {
                if ( arr[i+1] - arr[i-1] <= 0  ){           
                     count++;            
                }   
               }//if       
          }        
      }
      if ( count <= 1) return true;
      else return false;
   
   }
//1
function almostIncreasingSequence(arr) {
     var found = 0;
        for (var i=0;i<arr.length;i++) {   // [3, 5, 67, 98, 3]
            if(arr[i] <= arr[i-1]) {
              found++;  
            if(found > 1)
               return false;       
            if(arr[i] <= arr[i-2] && arr[i+1] <= arr[i-1]) 
                return false; 
            }
        
        }//for 
        return true;
}


   item = [1,3,2,1]//false
   item1 = [1,3,2];//true
   item2 = [1,2,1,2]//false
   item3= [1, 2, 3, 4, 5, 3, 5, 6]//false
   item4= [40, 50, 60, 10, 20, 30]//false
   item5= [1, 2, 3, 4, 3, 6]//true
   item6=[3, 5, 67, 98, 3]//true
   item7 =[1, 2, 3, 4, 5, 3, 5, 6]//false
 //  console.log( almostIncreasingSequence(item6))

 //2
 function makeArrayConsecutive2(arr) {
   
        var maxnum=arr[0], minnum=arr[0];
        var res = [];
        for ( var i=0; i<arr.length; i++){
            if( arr[i] > maxnum ){
               
                maxnum = arr[i]
            }
            if( arr[i] < minnum){
                minnum = arr[i]
            }
        }
        for ( var j = minnum; j<=maxnum; j++){
              res.push(j)
        }
       // console.log(res)
       return (res.length - arr.length);
      
 }
// console.log ( makeArrayConsecutive2([6, 2, 3, 8]) )//3
// console.log ( makeArrayConsecutive2([0,3]) )//2
// console.log ( makeArrayConsecutive2([5, 4, 6]) )//0
//console.log ( makeArrayConsecutive2([6,3]) )//2

//3
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
    var sum=0;
    var innerLen =0;
     for (var i=0; i<arr.length; i++){    
              innerLen = arr[i].length;
          for ( var j=0; j<innerLen; j++){
              // console.log(i + "-" + j)           
              if( i == 0){
                 sum += arr[0][j];             
              }else if (chkUpper(arr, i,j)){
                 sum += arr[i][j];
              }                   
          }
     }
   return sum;
 }
 
function matrixElementsSum(arr){
    var sum=0;
    console.log ( "Each element Length: " + arr[0].length)
    for ( var j=0; j<arr[0].length; j++){
        for ( var i=0; i<arr.length; i++){
               if ( arr[i][j] == 0 ){
                    break
               }else{

                  sum+= arr[i][j];
               }
        }   
    }
    return sum;
}
//9: Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(inputarry) {
   var res=[];
    maxlen = inputarry[0].length;

    for ( var i=1; i<inputarry.length; i++){
          if ( inputarry[i].length > maxlen )
              maxlen = inputarry[i].length
    }

    for ( var j=0; j<inputarry.length; j++){
            if ( inputarry[j].length ==maxlen)
              res.push(inputarry[j])
    }

    return res;


}
arr =["aba", "aa", "ad", "vcd", "aba"]
arr1 = ["abc", "eeee", "abcd", "dcd"]
arr2 = ["abacaba", "abacab", "abac", "xxxxxx"]
//console.log ( allLongestStrings(arr2))
//10:  Given two strings, find the number of common characters between them.
//common character count
function commonCharacterCount(s1, s2) { 
    var str1 = s1.split(""), count=0;
    var res =[];
  // "aabcc" 
    while (str1.length){
      var t= str1.pop()
      if(s2.includes(t)){
        count++
        res.push(t);
        s2=s2.replace(t," ") //"adcaa"      
      }
    }
    return res;

}
s11 = "aabcc" 
s22 = "adcaa"
s1 = [1,2,2,1]
s2 = [2,2]
console.log( commonCharacterCount(s11, s22))//[ 'c', 'a', 'a' ]
//isLucky==============================
function isLucky(n) {
    var nstr = n.toString();
       var sumF=0, sumB=0;
       for ( var i=0; i< nstr.length/2; i++){
             sumF += parseInt(nstr[i])         
       } 
       for (var j=nstr.length/2; j<nstr.length ; j++){
             sumB += parseInt(nstr[j]) 
             
       }   
    
       if  ( sumF === sumB) 
             return true;
       else 
              return false; 
   }
   

n = 1230
n1 = 1010
n2 = 3609
//console.log ( isLucky(n2) ) 



//12:Some people are standing in a row in a park. There are trees between them 
//which cannot be moved. Your task is to rearrange the people by their heights in a non-descending 
//order without moving the trees. People can be very tall! 

function sortByHeight(arr) {
  var res=[];
  for ( var i =0; i< arr.length; i++ ){
       if ( arr[i] != -1)
          res.push(arr[i])
  }//for
  // res = res.sort()
  res = res.sort(function(a, b){return a - b});
  console.log("sorted: " + res)
  var k=0
  for ( var i = 0; i< arr.length; i++ ){
         if ( arr[i] !=-1 ){
           arr[i] = res[k]
           k++
         }
  }

  return arr;
  
}
a = [-1, 150, 190, 170, -1, -1, 160, 180]
a1 = [4, 2, 9, 11, 2, 16]
a2 = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
a3 =  [-1, -1, -1, -1, -1]
a4 = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]
//console.log ( sortByHeight(a4))
//7: 
function reverseInParentheses(str) {
 
    while(true){
     var cp = str.indexOf(')');
     if ( cp === -1 ) break; 
     var op = str.substring(0, cp).lastIndexOf("(");

     var start = str.substring(0, op);
     var mid = str.substring(op+1, cp).split("").reverse().join("");
     var end = str.substring( cp+1, str.length)
     var str = start + mid + end;
    }

    return str;

}

str = "(bar)"
str1 ="foo(bar)baz"
//console.log ( reverseInParentheses(str1) )