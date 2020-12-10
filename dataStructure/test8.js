//return first dipulate element:
//1: find the first duplicate number for which the second occurrence has the minimal index. 
var firstDuplicate = function(arr){
var elm, obj={}, res=[];

for ( let i=0; i< arr.length; i++){
    elm = arr[i];
    
    if(!obj[elm]){ 
       
       obj[elm] =true;
         console.log(elm, "=====")
    }else{
      res.push(elm);
    }
}
return res[0]
}




item = [2,1,3,5,3,2]
item1 = [2,3,3]
//console.log ( firstDup(item))
//console.log ( firstDuplicate(item1))
//2: firstRepeatingCharacter : or all duplicate

var findFirstDupChar1 = function(str){
    let elm, obj={},res=[];
    for(let i=0; i<str.length; i++){
        elm = str[i]; 
       if(!obj[elm])
          obj[elm]=true;
       else
           res.push(elm)    
     }
     //return res[0];
     return res
}

var findFirstDupChar = function(str){
    let elm, obj={},res=[];
    for(let i=0; i<str.length; i++){
        elm = str[i]; 
       if(obj[elm])
          obj[elm] +=1;
       else
           obj[elm] =1  
     }
     for( let j in obj){
         if(obj[j]> 1)
           return j
     }
     
}
//console.log(findFirstDupChar([2, 1, 3, 5, 3, 2]) )//3,2
//console.log(findFirstDupChar([ 1, 3,2, 5,2, 3]) )//2,3
//console.log(findFirstDupChar("zeacabade") )

//console.log(firstNotRepeatingCharacter("eetscode"))
//console.log(firstNotRepeatingCharacter("abacabad"))//c

var reverseWordInSen = function(str){
  var resStr="", wLen=0;

for( let i=str.length-1; i>=0; i--){
    if( str[i] == ' ' || i ==0){ 
        //resArr.push(str.substr( i, wLen+1))
        resStr += str.substr( i, wLen+1) + " "
        wLen=0;
    }else{
        wLen++
    }
}
return resStr;
}

s1 = "Good Morning Black Friday"
//console.log ( reverseWordInSen(s1))

var reverseWord = function(str){
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
    return res;
}
s1 = "Good Morning Black Friday"
//console.log ( reverseWord (s1));

//Island of Knowledge
// 20. Maximal Adjacent Difference ===========================
var maxiAdjacentDiff = function(arr){
   let maxdiff= Math.abs( arr[0] - arr[1]);
    for( let i=1; i< arr.length; i++ ){
      if (Math.abs( arr[i] - arr[i+1]) > maxdiff ){
           maxdiff = Math.abs( arr[i] - arr[i+1])
       }
           
    }
   return maxdiff
}
inputArray = [2, 4, 1, 0]//3
inputArray1 = [-1, 1, -3, -4]
//console.log ( maxiAdjacentDiff(inputArray1))

//21. is IPv4Address

function isIPv4Address(s) {
  var  r=s.split(".") //[ '172', '16', '254', '1' ]
 // console.log(r)
 
  return r.length===4 && r.every(x=>  x!="" && !isNaN(x) && x>=0 &&x<256 && x !== '00' && x!== "01"  )
}
s = "172.16.254.12"
s1 = "172.16.254.cc"
s2 = "64.233. .001" //false
s3= "64.00.161.131" //false
s4 = "01.233.161.131"//false
//console.log ( isIPv4Address(s3) )

//22. avoid Obstacles 23. Box Blur 24: Minsesweeper

//Rains of season ===========================
//25. Arrary replace

var elmReplace = function ( arr, r, s ){
    
    for ( let i=0; i<arr.length; i++){
        if( arr[i] ==r){
            arr[i] =s;
        }
    }
   return arr
}
inputArray1 =[1, 2, 1, 2, 1]
//console.log ( elmReplace(inputArray1, 2,1 ))

var removeDuplicate = function (arr){
    var elm, obj={}, res=[];
    for ( let i=0; i< arr.length; i++){
          elm = arr[i];
          if( !obj[elm]){
               res.push(elm);
               obj[elm] =true;
          }
    }
    console.log( res)
}
//removeDuplicate([1,3,3,3,1,5,6,7,8,1]);//[1, 3, 5, 6, 7, 8]
//26. Check if all digits of the given integer are even.

var chkDigits = function(n){
var ns = n.toString()
        for( let i=0; i< ns.length; i++ ){
            if( parseInt(ns[i]) %2 !== 0 )
                return false;
        }
        return true
}
 var ckEven = function(n){

    var ns = n.toString();
    for ( let i=0; i< ns.length; i++){
        if( parseInt (ns[i])%2 !== 0 )
            return false; 
    }
    return true;
 }

n = 248622
n1 = 642386
//console.log(ckEven(n1))
//console.log( chkDigits(n1))
//27. check variable names consist only of English letters, digits and underscores 
//and they can't start with a digit. 

var chkVariable = function(str){

   return /([a-zA-Z_])/.test(str.charAt(0)) && /\W/.test(str)
}
s1 = "-var_1__Int";
s = "var_1__Int&";
s2 = "345"
//console.log ( chkVariable(s2))


//28.replace a with b, replace b with c, etc (z would be replaced by a).
//122 = z; a =96

var shiftAl = function(str){
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
s1 = "sdbc"///tecd
//console.log(shiftAl(s1))

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
s1= "crazy"

//console.log ( alphabeticShift(s1))

//29: chessBoardCellColor================

//Through the Fog

//30.

function avoidObstacles(inputArray) {
    var max =Math.max(...inputArray);
   

       for (var i = 1; i< max; i++) {
           var divs = inputArray.some(x=>x%i==0)
            //console.log("divs: ",divs)
           if(!divs) return i;
       }
       return max +1;
   }


   avoidObstacles([5,3,6,7,9])