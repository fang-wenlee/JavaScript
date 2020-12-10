function firstDuplicate1(arr) {
  var elm =0, res=[], obj={};
  for ( var i=0; i< arr.length; i++){
      elm = arr[i];
      if ( !obj[elm] )        
          obj[elm] = true;
      else
          res.push(elm);
  }
 
   if (res.length < 1 || res === undefined )
      return -1
   else
    return res[0];
}
//===================================
//=================================
function firstDuplicate (str){ 
    res = new Set()
    
    for (e of str)
        if (res.has(e))
            return e
        else{          
            res.add(e)
            
        }
           
    return -1
}

a = [2, 1, 3, 5, 3, 2] //2
b = [2, 4, 3, 5, 1]
c= [1]
d= [8, 4, 6, 2, 6, 4, 7, 9, 5, 8]
str= "leetcode" //0
str1 = "FindapeacefualPlace"
//console.log ( firstDuplicate(a) )
//====================================
//===================================
var firstUniqChar = function(s) { // only use for string
    
    for ( var i=0; i< s.length; i++){
          var j = s.charAt(i)
          if ( s.indexOf(j) === s.lastIndexOf(j))
              return s.indexOf(j) ;
    }

    return -1
};



s = "leetcode" //o
s1 = "loveleetcode" //2
a = [ 1, 3, 5, 3, 2] //1
//console.log ( firstUniq(a) )
//console.log ( firstUniqChar(s1) )
//==================================================
var reverse1 = function(num) {
   return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
};
function reverse(n) {
    const reversed = n.toString().split('').reverse().join(''); // turn a number into a string, then turn it into an array to reverse. 
    return Math.sign(n) * parseInt(reversed); // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
  }

item1=123
item2 = -123
item3= 120
item4 = 1534236469
//console.log( reverse1(item4))


// first unique from arry
function getUniqueFromArray(arr){
    return arr.filter(function(value){
              return arr.indexOf(value) === arr.lastIndexOf(value);
               })[0] || -1;
  }
  
//find all unqiques or first unique from arry
  function uniques(nums) {
   var elm;
   var result = [],  tmp = [];

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
function firstU(arr){
  var element, temp=[];
     for ( var i=0; i< arr.length; i++ ){
          element = arr[i];
          temp[element] = temp[element]? temp[element]+1 : 1
     }

       for ( element in temp ){
           if (temp[element] === 1 )
               return element
       }

       return -1;

}

 item = [2,3,4,4,3,44,1,45]//44
  item1  =  [22, 25, 3, 3, 1, 2, 0, 0,100,22,25,1,2]; 
item2 = [5,2,5,2,9,8,5]
str = "abacabad" //c
//console.log ( getUniqueFromArray(item2) )
//console.log ( uniques(str) )
console.log (firstU(str) )

function removeDup(ary){
	
	var resultAry =[];
	var elm;
	var count =0; 
	var exist={};
	
	for ( var i= 0; i< ary.length; i++){
		elm = ary[i];
	
		if ( !exist[elm]){
            //resultAry.push(elm);
            resultAry[resultAry.length] = elm
			exist[elm]= true;		
			count++;
		}
	}
	console.log("number of Unique element: " + count)
	return resultAry;
}
//console.log ( removeDup(item));

//find first duplicate from arry
function firstDuplicate4(nums) {
    var elm;
    var result = [],  tmp = [];
 
     for (var i in nums) {
         elm = nums[i];
         tmp[elm] = tmp[elm] 
                  ? tmp[elm]+1 
                  : 1;
     }
     for (elm in tmp) {    
         if (tmp[elm] === 1) {
           //  console.log("1st unique: " + elm)
              result[result.length] = elm;
             //break;
         }         
     }
     if ( result.length === 0 )
         return -1;
     else return result;

 }
  item = [1,2,3,4,4,3,44,2,1,45]
   item1  =  [22, 25, 3, 3, 1, 2, 0, 0,100,22,25,1,2];
   
 
 item2 = [5,2,5,4,6,2,5]
 //console.log ( getUniqueFromArray(item2) )
 //console.log ( uniques(item) )
 //console.log ( firstDuplicate4(item2))
 //5; Given two strings, find the number of common characters between them.
//common character count
function commonCharacterCount1(s1, s2) { 
   
    var count=0, str1= s1.split("");
    var res =[];
    //console.log(str1)

    while( str1.length ){
           var tmp = str1.pop()    
           if ( s2.includes(tmp)){
                count++;
                res.push(tmp);
                s2 = s2.replace(tmp, " ")
           }               
    }
    return count

}
s1 = "aabcc" 
s2 = "adcaa"
//console.log(commonCharacterCount1(s1, s2))
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

yourLeft = 15
yourRight = 10
friendsLeft = 15
friendsRight = 10

console.log(areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight))