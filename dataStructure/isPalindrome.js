//1
function isPalindrome1(str){
   
    var len = str.length;

    for ( var i=0; i< len/2; i++ ){

          if ( str[i] !== str[len-1-i])
             return false;
    }
    return true;
}

function chkPalindrome(s){
    var lowStr =  s.toLowerCase()
    var str =  lowStr.replace(/[^A-Za-z0-9]/g, "");
    var reverseS = str.split('').reverse().join('')
    return str === reverseS
}
function isPalindrome(str){
  var string1 = str
  var reversestr = str.split('').reverse().join('');

  return string1 === reversestr

}
str1 = "Abcba"
console.log ( isPalindrome(str1))
//2
function largestProduct(arr){
 
      var largest = arr[0] * arr[1];

      for (var i=1; i< arr.length; i++ ){
           if ( (arr[i]* arr[i+1]) > largest )
                largest = arr[i]* arr[i+1]
      }

   return largest;
}
inputArray = [3, 6, -2, -5, 7, 3]
//console.log ( largestProduct(inputArray) )
//3.   shape Area
function shapeArea(n) {
    var sum=0;
 
    for ( var k=0; k<n-1; k++){
      sum += (2*k +1) *2;
     //  console.log("K: " +sum);
    }
    sum +=( 2*n-1)
  return sum;
 }

//console.log( shapeArea(2))//5
//console.log( shapeArea(3))//13
//console.log( shapeArea(4))//25

//4: makeArrayConsecutive
