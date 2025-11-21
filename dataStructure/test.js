
//1: Write a JavaScript program to get the current date.  

//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var today = new Date();
  var day = today.getDay();
  var date = today.getDate();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var month = today.getMonth();
  var yyyy = today.getFullYear();
//var strtime = hour + ':' +  minute + ':' + second ;
var str =  month +"/" + date + "/" + yyyy;
var str1 =  month +"-" + date + "-" + yyyy;
//console.log("Today is :" + daylist[day]);

 // console.log(str1);
//2. print the contents of the current window.
// console.log ( window.print() );

//====================================================

function almostIncreasingSequence(arr) {
 var count=0;
// console.log(arr.length);
   for ( var i=0; i< arr.length; i++ ){    
     //console.log(arr[i]);
       if ( arr[i+1] - arr[i] <=0  ) {       
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
item = [1,3,2,1]//false
item1 = [1,3,2];//true
item2 = [1,2,1,2]//false
item3= [1, 2, 3, 4, 5, 3, 5, 6]//false
item4= [40, 50, 60, 10, 20, 30]//false
item5= [1, 2, 3, 4, 3, 6]//true
item6=[3, 5, 67, 98, 3]//true
item7 =[1, 2, 3, 4, 5, 3, 5, 6]//false
console.log( almostIncreasingSequence(item1))

//2-3Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//A 1-interesting polygon is just a square with a side of length 
//1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 
//You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
function shapeArea(n) {
   var sum=0;

   for ( var i=0; i<n-1; i++){
     sum += (2*i +1) *2;
     //console.log(sum);
   }
   sum += 2*n-1
 return sum;
}
//console.log(shapeArea(3));

//2.4 ==============================

function makeArrayConsecutive2(arr) {
  var maxVal = arr[0];
  var minVal = arr[0];
  //var  len =0;
 
for (var i =1; i< arr.length; i++){
     if ( arr[i] > maxVal ){ maxVal = arr[i]}
     if( arr[i] < minVal){ minVal = arr[i]}    
}
//len = (maxVal -minVal) +1;
var result =[];
  for ( var i=minVal; i<maxVal+1; i++){     
    result.push (i); 
  }
 var count=  result.length - arr.length
 //console.log(count);

  return count;
}
item=[8,1,0,4,7];//4
item1=[0,3];//2
item2=[6,2,3,8]//3
item3= [3]; //0
item0 =[3,1]
item4 = [5,4,6] // 0
item5 = [6,3] //2
item6 = [4,5,7,2]
console.log(makeArrayConsecutive2(item4));


//2-2Given an array of integers, find the pair of adjacent elements that has the largest product
// and return that product. Example:

function adjacentElementsProduct(arr){
   var maxVal = arr[0]*arr[1];
   if ( arr.length <=2) return false;
  for (var i =1; i< arr.length; i++){
      if (  maxVal < arr[i] * arr[i+1] ){
        maxVal =arr[i] * arr[i+1];
      }
  }
  return maxVal;
}
item= [3, 6, -2, -5, 7, 3];
//console.log ( adjacentElementsProduct(item));

//Given the string, check if it is a palindrome.
function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}


//console.log(isPalindrome("aba"))
//console.log(isPalindrome("madam"))

//2-1 // Program to find century for a year
function findCentury(year){

   if( year <=0 ) 
     return "negative is not allow";
   else if( year <=100) 
     return "1st century";
   else if ( year%100 ==0 ) 
      return year/100 + "century";
   else 
      return Math.floor(year/100) + 1 + " century";
}

//console.log( findCentury(2001));
//3. Write a JavaScript program to get the current date. 



//3-1 Given an array. that contains only numbers in the range.
//find the first duplicate number for which the second occurrence has the minimal index
//eg. a = [ 2, 1, 3, 5, 3, 2 ] 
//ans: firstDuplicate(3) =3;
//There are 2 duplicate numbers 2 and 3. The second occurrence of 3 has a smaller index 
//than the second occurrence of 2 does. 

function duplicateSecond(arr){   
    var elm;
    var obj={};

    for ( var i =0; i< arr.length; i++ ){
        for ( var j=i+1; j< arr.length; j++){
              if ( arr[i] == arr[j]){
                 elm =arr[i];
                 obj[elm] = j;
              }//if
                    
        }//for      
    }//for 
   
    for ( var k in obj){
     console.log("Key is " + k + "; Value is: " + obj[k]);
    }
    const values = Object.values(obj)
    const lowest = Math.min.apply(null, values)
    //console.log(lowest);
    // Using Object.keys(), Object.values() and findIndex()
    const keys = Object.keys(obj)
  const indexOfLowest = values.findIndex(function (x) { return x === lowest })
 //  console.log(`The lowest index is ${lowest} from ${keys[indexOfLowest]}`)

   /*  const keys = Object.keys(obj);
     var len = keys.length;
     var prop;
    // console.log(len) ;
     for ( var i=0; i<len; i++){
           console.log (keys[i]);
          
     } */
//=================================================

}
item1 = [1,2,1,3,5,3,2];
item2= [2,4,3,5,1];

//console.log( duplicateSecond(item1) );
//==================================================
//===================================================
function find_Most(arr){
  var elm, exist={};
  
// assign arry to obj
  for ( var i=0; i< arr.length; i++){
      elm= arr[i];
      isU =true;
      if (!exist[elm]){               
          exist[elm] = 1;
               
      }else{
          exist[elm]++;
          //console.log(exist); 
      }
  } 
 //  for ( var k in exist){
      
  // if ( exist.hasOwnProperty(k)){
     //  console.log("Key is " + k + "; Value is: " + exist[k]);
  
  //  }    
     
  const vals = Object.values(exist);
  var mymax = Math.max(...vals);
  console.log("================================");

  console.log(mymax);
  }


  //4.  find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
function area(n1,n2, n3){

     var s = (n1+n2+n3) /2;
     console.log (s*((s-n1)*(s-n2)*(s-n3)) )
     var area =  Math.sqrt(s*((s-n1)*(s-n2)*(s-n3)));
    console.log ("Triangle area is: " +area);
}

//area(5,6, 7)

//5.  Rotate the string 'w3resource' in right direction by periodically removing one letter 
//   from the end of the string and attaching it to the front.


//===========================================================
  //6. Determine whether a given year is a leap year in the Gregorian calendar.
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
//console.log(leapyear(2016));
  //=====================================================================
  //================================================================
  //9.  calculate days left until next Christmas. 
  function countDay(){
   var today = new Date();
   var month = today.getMonth()+1;
   var year = today.getFullYear();
   console.log("Today is: " + month +"/"+ date +"/" + year );
  var countDay = 31-date;
   for ( var i= month+1 ; i< 12; i++ ){
         countDay = countDay + 30;
   }
      countDay = countDay +25;
    console.log(countDay)
   
  }
 //countDay();
//=====================================
//10:  Write a JavaScript program to calculate multiplication
// and division of two numbers (input from user).  

  function multiply( n1, n2){

    var result = n1 * n2;
    return result;
  }
  function divide( n1, n2){
 
    var result = n1 / n2;
    return result;
  }

 // console.log(multiply(10, 20) )
  //console.log(divide(100, 20));

  //===================================================
  //===================================================
//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Expected Output :
//60°C is 140 °F
//45°F is 7.222222222222222°C
function convertTemp( F, C){
   
    //from F to C
   // f to c
    var c = (( F-32 ) *5 ) / 9;
    // c to F
    var f = ((C*9) /5) +32;
    //console.log( "F to C is: " + c);
   // console.log( "C to F is: " + f);
    
}
//console.log(convertTemp(45, 60) );

 // 12. Write a JavaScript program to get the website URL (loading page). 
   // console.log( document.URL)

  
//14. Write a JavaScript exercise to get the extension of a filename.
//===================================================
   function getExtension(str){
       var extstr =""
     for ( var i=0; i<str.length; i++){
         if (str[i] === "." ){
          // console.log("equle to .")
           for ( var i=i+1; i< str.length; i++)
                  extstr += str[i];          
         }
     }
     return extstr;

   }
filename = "system.php"
//console.log(filename.split('.').pop());
//console.log(getExtension("myfile.txt"))// txt
//console.log(getExtension("system.php"))//php
//==============================================
//==================================================
 //15.  get the difference between a given number and 13, if the number is 
    // greater than 13 return double the absolute difference
    function difference(n){
        if (n > 13){
           return ( Math.abs(n-13)) * 2
        }else
        return Math.abs(n-13);
    
     }
   
//console.log(difference(32))
//console.log(difference(11))
//16.Compute the sum of the two given integers. If the two values are same, 
 //then returns triple their sum. 
 function sumTriple(n1, n2){
    if ( n1 == n2 )
       return  (n1+n2)*3
    else
       return n1+n2;   
  }   
  //console.log(sumTriple(10, 20));
  //console.log(sumTriple(10, 10));   
//17. Compute the absolute difference between a specified number and 19.
// Returns triple their absolute difference if the specified number is greater than 19.    
  function tDifference(n){

    if ( n > 19 )
        return (n-19)*3;
    else
       return Math.abs(n-19);    
  }
  
//console.log(tDifference(12));
//console.log(tDifference(19));
//console.log(tDifference(22));
//===================================================================================
//===================================================================================
//18.  check two given numbers and return true if one of the number is 50 or if their sum is 50. 
function test50(n1, n2){

  if ( n1 == 50 || n2 ==50 || (n1+n2) == 50) return true;
  
  return false;

}
//console.log(test50(50, 50))
//console.log(test50(20, 50))
//console.log(test50(20, 20))
//console.log(test50(20, 30))

//19. check whether a given integer is within 20 of 100 or 400.
function inbetween(n){
   
        if ( (n > 20 && n < 100 ) || (n > 20 && n < 400 ) ) return true;
        else return false;
}
//console.log( inbetween(19));
//===================================================
//===================================================
//20. check from two given integers, whether one is positive and another one is negative. 
function chkPorN(n){
    if ( n > 0) return "Positive ";
    else return "Negative";

}
//console.log( chkPorN(10));
//console.log( chkPorN(123));
//console.log( chkPorN(-1));
//===============================================
//==============================================
//21. create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.

function chpy(str){

    if ( str === null || str === undefined || str.substring(0,2) === 'Py')
    {
      return str;
    }
     return "Py"+str;
  }


function chpy_O(str){

      if ( str.substring(0,2) === "Py") return str;
      else return "Py"+str;
     /*for ( var i=0; i< 2; i++){
         if ( str[i] == "P" && str[i+1] == "y")
            { return str;}    
     }
     str = "Py" + str;
     return str; */
}
//console.log( chpy_O("hello"));
//console.log( chpy_O("Python"));
//console.log( chpy_O("Pthon"));
//===================================================
//==================================================
//22. Remove a character at the specified position of a given string and return the new string. 
function remove_character(str, pos) 
 {
  part1 = str.substring(0, pos);
   console.log(part1);
  //part2 = str.substring( pos + 1, str.length);
  part2 = str.substr(pos+1);
  console.log(part2);
  return (part1 + part2);
 }
// console.log( remove_character("Python", 3));
 //================================================
 //===============================================
 //23. Create a new string from a given string changing the position
 // of first and last characters. The string length must be greater than or equal to 1.

 function change_char_pos(str){
    var pos = str.length-1;
    
    //var tempFirst = str.substring(0, 1);
    var tempFirst = str.charAt(0);
         console.log(tempFirst);
    //var tempLast = str.charAt(pos);
    var tempLast = str.substring( pos)
         console.log( tempLast);
    
     var tempBody  = str.substring( 1, str.length-1);
     console.log(tempBody);
     return tempLast + tempBody + tempFirst;
 }

 //console.log( change_char_pos("Hello"))
//====================================================
//===================================================
//24. create a new string from a given string with the first character 
// of the given string added at the front and back.
function morfit(str){

     var firsttmp = str.charAt(0);
     console.log ( firsttmp);

     return firsttmp + str + firsttmp;
}
//console.log( morfit("Hello"))

//===================================================
//===================================================
//25. check whether a given positive number is a multiple of 3 or a multiple of 7.
function chkMultiple ( num ){
   if ( num%3 == 0 || num%7 ==0 ) return true;
   else return false;
}
//console.log( chkMultiple(9) );
//console.log( chkMultiple(11) );
//=================================================
//===================================================
//26. create a new string from a given string taking the
// last 3 characters and added at both the front and back. The string length must be 3 or more.

 function addlast3char(str){
    if ( str.length <3 ) return "need to have at least 3 characters ";

           
     //var last3 = str.substring(str.length-3, str.length);
     last3 = str.substring(str.length-3);
     return last3 + str + last3;
 }
 //console.log( addlast3char("abcd") );

//==========================================================================
//==========================================================================
//27. check whether a string starts with 'Java' and false otherwise.  

function chkJava( str){
       if( str.substring(0, 4) == "Java" )
       return true;
       else 
       return false;
}

//console.log(chkJava("JavaScript"));
//console.log(chkJava("Java"));
//console.log(chkJava("Python Java"));
//==============================================
//==============================================
//28. check whether two given integer values are in the range 50..99 (inclusive).
// Return true if either of them are in the said range.
function chkbetween( n1, n2){
   if ( ( n1 >= 50 && n1 <= 99) || ( n2>= 50 && n2 <= 99) )
       return true;

    else return false;       
}


//console.log(chkbetween(12, 101));
//console.log(chkbetween(52, 80));
//console.log(chkbetween(15, 99));

//==============================================================
//=============================================================
//30. check whether a string "Script" presents at 5th (index 4) position in a given string, 
// if "Script" presents in the string return the string without "Script" otherwise return the original one. 
 function chkScript(str){


    var str1 = str.substring(4, 10 );
    var result;
    if (  str1 === "Script"){
            result = str.substring(0, 4) + str.substring( 10, str.length)
          return result;
    }
          else 
         return str;     

 // console.log( str1 )

 }
//console.log(chkScript("JavaScript"));
//console.log(chkScript("JavaScripts is my favorite"));
//console.log(chkScript("CoffeeScript"));



//31. Write a JavaScript program to find the largest of three given integers.

function findLargest( n1, n2, n3){
   var myMax;
   
   if ( n1> n2){
       myMax = n1;
    }
   else{ 
       myMax = n2;
    }
   if ( n3 >myMax ){ myMax = n3}
  
   return myMax;
}
//console.log(findLargest( 1,0,11));
//===========================================
//32. Write a JavaScript program to find a value which is nearest to 100 from 
//two different given integer values.

function near100(n1, n2){
    var res1 = 100 -n1;
    var res2 = 100 -n2;

    if ( res1 > res2){
        return n2;
    }else{
        return n1;
    }

}
//console.log( near100( 90, 91));
//====================================================
//====================================================
//33. Write a JavaScript program to check whether two numbers are 
//in range 40..60 or in the range 70..100 inclusive.

function numbers_ranges( n1, n2){
    if ( ( n1 >= 40 && n1 <= 60  &&  n2>= 40 && n2 <= 60) || 
         ( n1 >= 70 && n1 <= 100  &&  n2>= 70 && n2 <= 100))
        return true;
 
     else return false;       
 }
 
// console.log(numbers_ranges(44, 56));
 //console.log(numbers_ranges(70, 95));
 //console.log(numbers_ranges(50, 89));
//==================================================
//==================================================
//34. Find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function find_larg(n1, n2){
    if ( n1 >= 40 && n1 <= 60  &&  n2>= 40 && n2 <= 60){
         if ( n1 > n2) return n1;
         else return n2;
    }
   return false;
}
//console.log( find_larg( 40,59));
//console.log(find_larg(25, 60));
//===================================================
//35. Write a program to check whether a specified character exists within 
//the 2nd to 4th position in a given string.

str ="Write a program to check";

function findChar(val, str){

    for ( var i =2; i<=4; i++){
         if ( str[i] == val){
             return true;
         }
    }
   return false;
}


//console.log(findChar("a", "JavaScript"));
//console.log(findChar("JavaScript", "S"));
//console.log(findChar("Console", "C"));

  //=====================================================
//36. check whether the last digit of the three
  // given positive integers is same.
   function checkSame1( n1, n2, n3){
      
     if ((n1> 0) && n2 > 0 && n3 > 0)
     {return (n1 % 10 == n2 % 10 && n2% 10 == n3% 10 && n1% 10 == n3 % 10);}
    else{
       return false;}
}
function checkSame(n1, n2, n3){
    var str1 = n1.toString();
    var str2 = n2.toString();
    var str3 = n3.toString();
    //console.log(str1);
    //console.log ( str1.length);
    var len1 = str1.length-1;
    var len2 = str2.length-1;
    var len3 = str3.length-1;

    var l1 = str1.charAt(len1, 1);
    var l2 = str2.charAt(len2, 1);
    var l3 = str3.charAt(len3, 1);
   if ( l1 == l2 && l1 == l3){ return true}
   else{ return false;}
   // console.log( str1.charAt(len, 1));
   //console.log( str1.substr(len, 1));   
}  
//console.log("1st: " + checkSame( 10112, 3320, 300));
//console.log("2ns: " + checkSame( 101, 3321, 301));


//=============================================================
//37. Write a JavaScript program to create new string with first 3 characters are in lower case
 // from a given string. If the string length is less than 3 convert all the characters in upper 
 // case.

 function converStr(str){
   var result = "";
    var length = str.length;
    //console.log('string length:' + length);
    if ( str.length <= 3 ) return str.toUpperCase();
   
    for ( var i =0; i<str.length; i++){
        if (i < 3){
        result = result + str[i].toLowerCase();}
        else{
            result =result + str[i];
        }
    }//for
      return result;    
  

 }

 //str = "WRITE A JAVASCRIPT program to compute"
 //str1 = "abc"
 //console.log ( converStr(str)) ;
//==================================================================
//==================================================================
  //39.  compute the sum of the two given integers,
  // If the sum is in the range 50..80 return 65 other wise return 80.

  function sumOftwo( num1, num2){

    var sum = num1 + num2;
    if ( sum > 50   && sum < 80 ){
        return 65;
    }else{
        return 80;}
  }

  //===================================================
  //======================================================
  //40. check from two given integers whether one 
  //of them is 8 or their sum or difference is 8
   function chk8( n1, n2){
     if ( n1 == 8 || n2 == 8 || (n1 + n2) == 8 || (n1-n2) == 8 || (n2-n1) == 8 ){

        return true;
     }else{
         return false;
     }
  
   }
//console.log(chk8(7,8));
//console.log(chk8(16, 8));
//console.log(chk8(24, 32));
//console.log(chk8(17, 18));
//=====================================================================
//=====================================================================
//41. check three given numbers, if the three numbers are same return 30
// otherwise return 20 and if two numbers are same return 40.
function chk_three_numbers(n1, n2, n3){

     if ( n1 == n2  && n2== n3  )// 3 number same
      return "Same";
      if( n1 ==n2 || n2==n3 || n1 == n3)
      return "2 are same";
      else
      return "all different";
}
//console.log(chk_three_numbers(8, 8, 8));
//console.log(chk_three_numbers(8, 8, 18));
//console.log(chk_three_numbers(8, 7, 18));
//====================================================
//=====================================================
//43. check from three given numbers (non negative integers) that two or all 
//of them have the same rightmost digit.
function same_last_digit( n1, n2, n3){

     if ( n1%10 == n2%10 || n2%10 == n3%10 )
        return true;
     else return false;
}

//console.log(same_last_digit(22,32,42));
//console.log(same_last_digit(102,302,2));
//console.log(same_last_digit(20,22,45));
//===========================================================
//===========================================================
//44.check from three given integers that 
//whether a number is greater than or equal to 20 and less than one of the others. 
function lessby20_others(x, y, z) 
{
return (x >= 20 && (x < y || x < z)) ||
(y >= 20 && (y < x || y < z)) ||
(z >= 20 && (z < y || z < x));
}
//console.log(lessby20_others(3, 45, 10));
//console.log(lessby20_others(23, 23, 10));
//console.log(lessby20_others(21, 66, 75));
//====================================================
//====================================================
//45. check two given integer values and return true if one of the number is 
// 15 or if their sum or difference is 15. 

function chksum_diff( x, y ){

   return (x ==15 || y==15 || x+y == 15 || Math.abs(x-y) == 15);
}
 //console.log (chksum_diff(5, 3));
// console.log (chksum_diff(7, 8));
 //console.log (chksum_diff(10, 25));
 //console.log (chksum_diff(7, 9));
 //==========================================
 //=========================================
//46. check two given non-negative integers that whether 
// one of the number (not both) is multiple of 7 or 11
function multiple7_11( x, y){

     if ( x < 0 || y < 0) return "Please input positive number";
     else{
             if (x%7== 0 || x%11 == 0 || y%7==0 || y%11==0 )
                 return true;
             else
             return false;
     }
}
//console.log(multiple7_11(14, 21));
//console.log(multiple7_11(14, 20));
//console.log(multiple7_11(16, 20));
//===============================================
//==============================================
//47. check whether a given number is presents in the range 40..10000.
function inRange(num){

    if ( num >=40 && num<=10000){
        return true;
    }
    return false;
}

//console.log(inRange(188));
//========================================
//=======================================
//48.  Reverse a given string.

function reverseStr_O(str){
    var result = "";
    for ( var i = str.length-1; i>=0; i--){
        result = result + str[i];
    }
    return result;
}
function reverseStr(str){
    
    return str.split("").reverse().join("");
}
//console.log(reverseStr("w3resource"));
//console.log(reverseStr("Good Morning?"))
//===================================================
//===================================================
//49.Replace every character in a given string with the character following it in the alphabet.

//====================================================
//====================================================
//50.Capitalize the first letter of each word of a given string.
function capital_letter_my( str ){
 var wLen =0;
  var strResult = " ";
  strResult += str[0].toUpperCase();
          for ( var i=1; i < str.length; i++){
            if( str[i-1] == ' ' ){                       
                strResult += str[i].toUpperCase();                     
            }
            else {                 
                 strResult += str[i];                                  
                 //console.log( strResult)
            }
        }//for
  return strResult;
}
function capital_letter(str) 
{
    str = str.split(" ");
   console.log( str);
    for (var i = 0;  i< str.length; i++) {
        // console.log( str[i].substr(1));
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        console.log(str[i]);
    }

    return str.join(" ");
}
//50. capitalize the first letter of each word of a given string.

function capital_letter_n(str){

   var str =  str.split(" ") ;
   for (var i =0; i< str.length; i++ ){
       str[i] =  str[i][0].toUpperCase() + str[i].substr(1);
   }
   console.log(str)
   return str.join(" ");
}

//console.log(capital_letter_n("write a JavaScript program to capitalize the first letter of each word of a given string."));
//console.log(capital_letter("good morning fang wen lee"));
//===========================================================
//===========================================================
//52. convert the letters of a given string in alphabetical order.
function alphabet_order(str){

    return str.split('').sort().join(' ');
}
//console.log(alphabet_order("Exercises"));
//==============================================
//=================regularexpression=============================
//53. check whether the characters a and b are separated by exactly 3 places anywhere
// (at least once) in a given string.
function ab_Check(str){

    return (/a...b/).test(str) || (/b...a/).test(str);
}
 
//console.log(ab_Check("Chainsbreak"));
//console.log(ab_Check("pane borrowed"));
//console.log(ab_Check("abCheck"));

//==========================================
//================================================
//54. count the number of vowels in a given string.
function vowel_Count(str){

   return str.replace( /[^aeiou]/g , "").length;
}
//console.log(vowel_Count("Python"));
//============================================
//============================================
//55. Check whether a given string contains equal number of p's and t's. 
function equal_pt(str){
  console.log( str.replace(/[^t]/g, "").length );

  console.log( str.replace(/[^p]/g, "").length);    

  return ( str.replace(/[^t]/g, "").length  == str.replace(/[^p]/g, "").length)
}
//console.log(equal_pt("paatpss"));
//console.log(equal_pt("paatps"));
//==========================================
//==========================================
//59. Extract the first half of a string of even length
function first_half(str){
    if ( str.length%2 == 0){
     return str.slice(0, str.length/2);
    }
    return str;  
}
//console.log(first_half("Python"));  
//console.log(first_half("JavaScript")); 
//console.log(first_half("PHP"));
//======================================
//========================================
//60. create a new string without the first and last character of a given string. 
function without_first_end(str) {
         
    var noF = str.substring(1, str.length-1 );
    console.log(noF);
}
//console.log(without_first_end('JavaScript'));
//=============================================================
//==============================================================
//61. Concatenate two strings except their first character.
function concattwo( str1, str2){

      newstr1 = str1.substr(1);
      newstr2 = str2.substr(1)
      return newstr1 + newstr2;
}
//console.log(concattwo("Php", "JavaScript"));
//console.log(concattwo("PHP","JS"));
//console.log(concattwo("A","B"));
//==========================================
//==========================================
//62. move last three character to the start of a given string. The string 
// length must be greater or equal to three.

 function right_three(str){
         
        // var newStr = str.substring(0, str.length-3); 
        var newStr = str.slice(0, -3); 
       // var newStr = str.substring(0, -3); 
          console.log( newStr); 
       // var lastThree = str.substring(str.length-3, str.length); // last three digit
       var lastThree = str.slice(-3);
         console.log( lastThree); 
      // console.log (lastThree + newStr);
     

 }
//console.log(right_three("Python"));
//console.log(right_three("JavaScript"));
 //console.log(right_three("Hi"));
 //===============================================
 //=================================================
 //63. Create a string using the middle three characters of a given string of odd length. 
 // The string length must be greater or equal to three.



//===============================================
 //=================================================
 //64. concatenate two strings and return the result. If the 
 // length of the strings are not same then remove the characters from the longer string.
 function str_con_cat(str1, str2) {
   var newstr1, newstr2;
       if ( str1.length > str2.length ){
             newstr1 = str1.slice( -2);

             console.log(newstr1+ str2);
       }
       else{
        newstr2 = str2.slice( -2);
        console.log(str1+ newstr2)
       }

 }

//console.log(str_con_cat("Python", "JS"));
 //console.log(str_con_cat("ab", "cdef"));
 //===========================================
 //===========================================
//65.  test whether a string end with "Script". 
//The string length must be greater or equal to 6.
function end_script(str) {
  if ( str.length < 6 ) return "string's length is less then 6"
  else{
        if( str.substring (str.length-6) == "Script" )  return true;
  }
  return false;
}

 //console.log(end_script("JavaScript"));
// console.log(end_script("Java Script"));
 //console.log(end_script("Java Scripts"));
//========================================
//========================================
//66. Display the city name if the string begins with "Los" or "New" otherwise return blank.
function city_name(str){
  //  console.log (str.substring(0,3));
    if((/New/).test(str.substring(1,3)) ||(/Los/).test(str.substring(0,3)))
      return true;
    
    return false;
}
//console.log(city_name("York New"));
//console.log(city_name("Los Angeles"));
//console.log(city_name("London"));
//==============================================================
//==============================================================
//67. create a new string from a given string, removing the first and last characters
// of the string if the first or last character are 'P'. Return the original string 
//if the condition is not satisfied.

function nop(str) {
    let start_pos = 0;
    let end_pos = str.length;
  
    if (str.length > 0 && str.charAt(0) == 'P') { 
        start_pos = 1; 
      }
  
    if (str.length > 1 && str.charAt(str.length - 1) == 'P') {
      end_pos--;
    }
  
    return str.substring(start_pos, end_pos);
}
//console.log(nop("PythonP"));
//console.log(nop("Python"));
//console.log(nop("JavaScript"));
//================================================
//================================================
//68. create a new string using the first and last n
// characters from a given sting. The string length must be greater or equal to n
function two_string(str, n){
if ( str.length < n) return false;

var firstN, lastN;
   firstN = str.substr(0, n);
   lastN = str.substr (str.length-n);
return firstN + lastN

}
//console.log(two_string("Hello", 6));
//console.log(two_string("JavaScript", 2));
//console.log(two_string("JavaScript", 3));
//=======================================
//=======================================
//69.compute the sum of three elements of a given array of integers of length 3
function sum_three(nums){
 if (nums.length <3 ) return false;
  
 return nums[0] + nums[1] + nums[2];

}
//nums =[10, 22,22];
//nums= [10, 32, 20];
//console.log(sum_three(nums));
 
//console.log(sum_three([10, 32, 20]));  
//console.log(sum_three([5, 7, 9])); 
//console.log(sum_three([0, 8, -11]));
//========================================
//========================================
//=======================================
//70. Rotate the elements left of a given array of integers of length 3
function rotate_elements_left_O(array){

    var temp = array[0];
    array[0] = array[1];
    array[1] = array[2];
    array[2] = temp;
    return array;
}
function rotate_elements_left(array){

   
    return [array[1], array[2], array[0]];
}
//console.log(rotate_elements_left([3, 4, 5]));  
//console.log(rotate_elements_left([0, -1, 2]));  
//console.log(rotate_elements_left([7, 6, 5])); 
//============================================
//============================================
//71.check whether 1 appears in first or last position of a given array of 
// integers. The array length must be greater or equal to 1.
function first_last_1(arr){
  var lastIdx = arr.length-1;
        if ( arr[0] == 1 || arr[lastIdx] ==1 )
           return true;
    return false;
}
//console.log(first_last_1([1, 3, 5]));
//console.log(first_last_1([1, 3, 5, 1]));
//console.log(first_last_1([2, 4, 6]));
//=======================================
//=======================================
//72. check whether the first and last elements are equal of a given array of integers length 3.
function first_last_same(arr){
var lastIdx = arr.length-1;  
    if ( arr[0] == arr[lastIdx] )
    return true;
  return false;
}
//console.log(first_last_same([10, 20, 30])); 
//console.log(first_last_same([10, 20, 30, 10])); 
//console.log(first_last_same([20, 20, 20])); 
//===================================================
//===================================================
//73.reverse the elements of a given array of integers length 3.
function reverse3(array) {
   return ( [array[2],array[1],array[0] ] );
}    
//console.log(reverse3([1, 3, 5]));
//console.log(reverse3([1, 3, 4]));
//console.log(reverse3([2, 4, 6]));
//======================================
//======================================
//74. find the larger value between the first or last and set all the other
// elements with that value. Display the new array. 
function all_max(nums){

    var myMax = nums[0];
    for(var i =1; i< nums.length-1; i++){
        if ( myMax <= nums[i]){
            myMax = nums[i]
        }
    }
    for(var i =0; i< nums.length ; i++){
         nums[i] = myMax;
    }
    return nums;
}
//console.log( all_max([12, 4, 3, 1,46,22,2]));
//======================================================
//===================================================
//75. Create a new array taking the middle elements of the two arrays of integer and each length 3. 
  function middle_elements(a, b) {
   
  var newArr = [];

    newArr.push(a[1], b[1]);

    return newArr;
  }

//console.log(middle_elements([1, 2, 3], [1, 5, 6]) );
//console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
//console.log(middle_elements([4, 2, 7], [2, 4, 5])); 
//==============================================
//76. Create a new array taking the first and last elements from a given array of 
// integers and length must be greater or equal to 1
function started(nums) {

     var result = [];
     result.push( nums[0], nums[nums.length-1] );
     return result;
}
//console.log(started([20, 20, 30]));
//console.log(started([5, 2, 7, 8]));
//console.log(started([17, 12, 34, 78])); 

//===============================================================
//===============================================================
//77.  test whether an array of integers of length 2 contains 1 or a 3.

  /*function contins13(nums) {
    if (nums[0] == 1 || nums[1] == 3)
       return true;
    else 
       return false;   
  } */

//console.log(nop("Python"));
  function contins13(nums) {
    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1)
       return true;
    else 
       return false;   
  }
function chkInteger( n1, n2){
   if ( n1 == 1 || n2 ==3 || n2==1 || n1 == 3  )
        return true;
   else 
         return false; 

}
item =[2,4]
//console.log ( chkInteger(1,5) );
//console.log (contins13(item));

//=================================================
//================================================
//78.  test whether an array of integers of length 2 does not contain 1 or a 3.
function is13(nums) {
     if ( (/[13]/).test(nums[0]) || (/[13]/).test(nums[1]) )
        return true;
     return false;   
}

//console.log(is13([7, 8]));
//console.log(is13([3, 2]));
//console.log(is13([0, 1])); 
//console.log(is13([3, 9])); 
//==================================================
//=================================================
//79. test whether a given array of integers contains 30 and 40 twice.
 function twice3040(arr) {
  if ( (arr[0] == 30 && arr[1]==30) || (arr[0] == 40 && arr[1]== 40))
    return true;
  
  return false;
 }
 //console.log(twice3040([40, 40]));
 //console.log(twice3040([20, 20]));
 //console.log(twice3040([30,30]));
//==================================================
//80. swap the first and last elements of a given array of integers. 
// The array length should be at least 1.
function swap(arr) {
    lastPt = arr.length-1;
      temp = arr[0];
        arr[0]  = arr[lastPt];
        arr[lastPt] = temp;

        return arr;
}
//console.log(swap([1, 2, 3, 4]));  
//console.log(swap([0, 2, 1]));  
//console.log(swap([3])); 
//================================================
//======================================================
//81. add two digits of a given positive integer of length two
function add_two_digits(n)
{
    return n % 10 + Math.floor(n / 10);
}
//console.log(add_two_digits(25))
//console.log(add_two_digits(50))
//=========================================================
//========================================================
//82.  add two positive integers without carry.


//83. find the longest string from a given array of strings.  
function longest_string(arr) {
    var maxStr =  arr[0].length;
    var result ="";
   for (var i=1; i< arr.length-1; i++){
        if ( maxStr < arr[i].length ){
            maxStr = arr[i].length;
            result = arr[i];
        }
   }
  return result;
}

//console.log(longest_string(['a', 'abaa', 'aaa','abcdefg','aaaa']))
//==========================================================
//==========================================================
//84. replace each character of a given string by the next one in the English alphabet.
function alphabet_char_Shift(str) {

}
//===========================================
//=======================================================
//85. Divide a given array of positive integers into two parts. First element 
// goes to first part, second element goes to second part, and third element goes to first part 
//and so on. Now compute the sum of two parts and store into an array of size two.
function alternate_Sums(arr) {
   var result =[];
    var oddSum = arr[1];
    evenSum = arr[0]; 
    for ( var i=2; i< arr.length; i++){
         if ( i%2 == 0 ){
             evenSum = evenSum + arr[i];

         }else{
            oddSum = oddSum + arr[i]; 
         }
    }
   // console.log(evenSum);
   // console.log(oddSum);
    result.push(oddSum, evenSum);
  return result;
}
//console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))
//console.log(alternate_Sums([3, 43, 21, 12, 53, 10, 3]))
//========================================
//=================================================
//

//==============================================================
//================================================//============================================================
//90.  find the kth greatest element of a given array of integers 

function find_th_max( k, arr ){
 var result =[];
 console.log("Find the " + k + " larget number from the array" )
      if ( k > arr.length ) return "Over exceed Array";
 console.log("original array: "  + arr);
      
      for (var i = 0; i < k; i++) {
         var  max_index = i, tmp = arr[i];       
         for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[max_index]) {
               max_index = j;     
            }//if
         }//1st for   

       //arr[i] = arr[max_index];
       //console.log( arr[max_index]);
        result.push(arr[max_index]); 
       //==============================     
       arr[max_index] = tmp;
       
      } 
    
    //  console.log ( result[k-1] );
      // return result[k];
      //return arr[k - 1];    
}
function find_nth_max( k, arr){
   var result=[];
   console.log("Find the " + k + " larget number from the array" )
   console.log("original array: "  + arr);
      if ( k > arr.length ) return "Over exceed Array";

   for ( var i= 0; i<k; i++){
       var max_index = i, temp = arr[i];
       for ( var j= i+1; j< arr.length; j++){
           if( arr[j] > arr[max_index])
               max_index = j;
       }
       result.push(arr[max_index]);
       arr[max_index] = temp;
   }
  // console.log ( result[k-1]);
}

//console.log(find_nth_max(1,[1,2,6,4,5]) )
//console.log(find_th_max(2, [-10,-3,-5,-4,0]) )
//=======================================================================
//===============================================================================
//91. find the maximum possible sum of some of its k consecutive numbers (numbers that 
//follow each other in order.) of a given array of positive integers.
function array_max_consecutive_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
        temp_sum += nums[i];
    }
  for (var i = k - 1; i < nums.length; i++) {
       temp_sum += nums[i];
      if (temp_sum > result) {
          result = temp_sum;
       }
       temp_sum -= nums[i - k + 1];
    }
  return result;
}
//console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
//console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
//console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))
  //==================================================
  //92. find the maximal difference between any two adjacent elements of a given array of integers.
function findMax_diff(arr){
    var myMax = 0;
   for ( var i=0; i< arr.length; i++ ){
        var temp = Math.abs (arr[i]-arr[i+1]);    
        if ( myMax < temp){
            myMax = temp;
        }
   }
   return myMax;
}

//console.log ( findMax_diff([1, 2, 3, 8, 9]));

//console.log ( findMax_diff([1, 2, 3, 18, 9]));
//================================================
//======================================================
//93.  find the maximal difference among all possible pairs of a given array of integers.
function array_max_diff(arr) {

  var mymax = arr[0];
    var mymin = arr[0];  
  for ( var i= 1; i< arr.length; i++){
      if ( mymax < arr[i]){
           mymax = arr[i];
      }
  }//for
  for ( var i=1; i< arr.length; i++ ){
      if( mymin > arr[i]){
          mymin = arr[i];
      }
  }
    return mymax -mymin;
}
//console.log(array_max_diff([1, 2, 3, 8, 9]))
//console.log(array_max_diff([1, 2, 3, 18, 9]))
//console.log(array_max_diff([13, 2, 3, 8, 9]))
//=======================================================
//=======================================================
//94: Find the number which appears most in a given array of integers
function find_Most_O(arr){
    var ctr = [],
    ans = 0;

  for(var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for(var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    //console.log(ctr[arr[i] - 1]);
    if(ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;  
}

//console.log(find_Most_O([2,1,1,1,3,5,9,2,1,2,8,1,2]))
//==================================================
function find_Most(arr){
    var elm, exist={};
    
// assign arry to obj
    for ( var i=0; i< arr.length; i++){
        elm= arr[i];
        isU =true;
        if (!exist[elm]){               
            exist[elm] = 1;
                 
        }else{
            exist[elm]++;
            //console.log(exist); 
        }
    } 
     for ( var k in exist){
        
    // if ( exist.hasOwnProperty(k)){
       //  console.log("Key is " + k + "; Value is: " + exist[k]);
    
      }    
       
    const vals = Object.values(exist);
    var mymax = Math.max(...vals);
    console.log("================================");

    //console.log(mymax);
  

    //===============================================================
    //===================================================================
    //Fast way to get the min/max values among properties of object
    // const max = Math.max.apply(null, Object.values(exist));
   

     //console.log(mymax);
}

//console.log(find_Most([2,1,1,1,3,5,9,2,1,2,8,1,2]))


//==============================================
//95.  replace all the numbers with a specified number of a given array of integers

function replace_num( arry, n1, n2){
          
      for ( var i=0; i< arry.length-1; i++ ){
           if ( arry[i] == n1){
               arry[i] = n2
           }
      }
   return arry;
}
items = [1, 2, 3, 2, 2, 8, 1, 9];
//console.log(items.join(" "));
//console.log( replace_num( items, 2, 4).join(" "));

  //============================================
//96. Write a JavaScript program to compute the sum of absolute differences of 
  //    consecutive numbers of a given array of integers.
  item=[1,2, 3, 2, -5]
   function sum_difference( arry ){

        var sumres =0;
        for ( var i=0; i< arry.length-1; i++){
             sumres +=   Math.abs( arry[i]-arry[i+1]);
        }
         //console.log(sumres);
        return sumres;
   }

  // console.log(sum_difference(item))
   //console.log(sum_difference([1,4,5,1,2,4]))
//=========================================
//97.  find the shortest possible string which can create 
// a string to make it a palindrome by adding characters to the end of 





  //==========================================
//============================================
//98. Write a  program to switch case of the minimum possible 
// number of letters to make a given string written in the upper case 
//or in the lower case. Fox example "Write" will be write and "PHp" will be "PHP"----- my solution 

function converStr( str ){
    var countU =0, countL=0;
  
    for ( var i= 0; i< str.length; i++ ){
        var upper = /[A-Z]/;
        var lower = /[a-z]/;

        if (upper.test(str.charAt(i))) countU++;
        if (lower.test(str.charAt(i))) countL++;
    }
    if ( countU >  countL)
        return str.toUpperCase();
    else   
         return str.toLowerCase()

}

function converStr1( str ){
    var countU =0, countL=0;
  
    for ( var i= 0; i< str.length; i++ ){
        var upper = /[A-Z]/;
    
        if (upper.test(str[i]) ) {countU++;}
        else{ countL++;}
       
    }
    if ( countU > countL)
        return str.toUpperCase();
    else   
         return str.toLowerCase()

}

function converStr2(str){
   
    var upper = /[A-Z]/;
 
    var countU=0;
    var countL=0;

    for ( var i=0; i< str.length; i++){
        if ( upper.test(str[i])){
            countU++;
        }
        else countL++;
    }
    if (countU++) return str.toUpperCase();
    else return str.toLowerCase();

    


return str;

}

//console.log(converStr2("WRitE"))

//console.log(converStr1("PHp"))

//================================================
function change_case(new_str) {
    var x = 0;
    var y = 0;
  
    for (var i = 0; i < new_str.length; i++) {
      if (/[A-Z]/.test(new_str[i])) {
        x++;
      } else y++;
    }
  
    if (y > x) return new_str.toLowerCase();
    return new_str.toUpperCase();
  }

//console.log(converStr ("Goodmorning"));
//console.log(converStr ("GOODMORNing"));
//============================================
//99. Check whether it is possible to rearrange characters of a given string 
// in such way that it will become equal to another given string.
function rearrangement_characters(str1, str2) {
    var first_set = str1.split(''),
    second_set = str2.split(''),
    result = true;

    first_set.sort();
    second_set.sort();

for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
  if (first_set[i] !== second_set[i]) {
    result = false;
  }
}

return result;
 
}

//console.log(rearrangement_characters("xyz", "zyx"))
//console.log(rearrangement_characters("xyz", "zyp"))
//===========================================
//===========================================
//100. check whether there is at least one element which occurs in two given sorted arrays of integers.
function check_common_element(arr1, arr2) {
    for ( var i=0; i< arr1.length ; i++){

        if (arr2.indexOf(arr1[i]) != -1 )
          return true;
    }
  return false
}
//console.log(check_common_element([1,2,3], [3,4,5]));   
//console.log(check_common_element([1,2,3], [5,6,7]));   

//==========================================================
//102. Find  number of inversions of a given array of integers.
item = [0, 3, 2, 5, 9]
function find_inversion( arry){
    var count = 0;
for ( var i = 0; i< arry.length; i++){
    for ( var j=i+1; j< arry.length; j++ ){
         if ( arry[i] > arry[j]){
             count++;
         }
    }
}
  return count;
    
}
//console.log(find_inversion(item))
//console.log(find_inversion([1, 5, 4, 3]))
//====================================
//103.  find the maximal number from a given positive integer by 
//    deleting exactly one digit of the given number.

function find_Max_after_delete(num){
   

 var strNum = num.toString();;  
 var str ="";
 var str2 = "";
   for (var i =1; i < strNum.length; i++ )
        str += strNum[i];

    for (var i =0; i < strNum.length-1; i++ )
        str2 += strNum[i];
    
         if (Number(str)> Number(str2)){ return str }
         else return str2;

}

//console.log(find_Max_after_delete(13245));
//console.log(find_Max_after_delete(10));
//console.log(find_Max_after_delete(100));
//=====================================
//104.  find two elements of the array such that their absolute difference is not 
//greater than a given integer but is as close to the said integer.
function different_values(arr, n) {
    var mindiff = 0;
   for ( var i =0; i< arr.length; i++ ){
         for ( var j= i+1; j<arr.length; j++)
       var x =  Math.abs( arr[i]- arr[j] );
       if ( x <= n )  {
           mindiff=  Math.max( mindiff, x)
       }
   }
     return mindiff;
}
//console.log(different_values([12, 10, 33, 34], 10));
//console.log(different_values([12, 10, 33, 34], 24));
//console.log(different_values([12, 10, 33, 44], 15));
//====================================================
//=====================================================
//105. Find the number of times to replace a given number with the sum of its digits 
//until it convert to a single digit number.
function digit_to_one(num) {


}
//================================
//===============================
// 106.  divide an integer by another integer as long as the result is an integer 
//  and return the result
function divide_digit(num, d) {
    if (d==1)
         return num;
    else
       {
        while (num % d === 0) {
               num /= d;
        }
    return num;
       }
}
//console.log(divide_digit(-12, 2))
//console.log(divide_digit(12, 2))
//console.log(divide_digit(13, 1))

//108. Write a JavaScript program to create the dot products 
//     of two given 3D vectors. 
item = [1,2,3];
item1 = [1,2,3];

function dotProduct( vetor1, vetor2){  
    var result=0;
    for ( var i=0; i< 3; i++){
        result += vetor1[i] * vetor2[i];
       // console.log( result );
    }
   return result;
}

//console.log(dotProduct(item,item1))
//console.log(dotProduct([2,4,6],[2,4,6]))
//=================================================
//=================================================
//109: sort an array of all prime numbers between 1 and a given intege
function findPrime(num){

   var result=[];
   
   if ( !isPrimeChk(num)){
       return num +" this is prime number!"
   }else{

    result.push( num);
   for ( var i = num-1; i>0; i--){
      var isPrime = true;
     
      for ( var d=2; d*d <= i; d++){
          if ( i%d === 0 ){
              isPrime = false;
              // console.log(i);
              break;
          }
      }//for
      if(isPrime){
          result.push(i);
      }
   }//for
}
   return result.reverse();
}

//console.log(findPrime(7))
//console.log(findPrime(9))
//console.log(findPrime(16))

//=======================================
  //=====================================
  //110.  find the number of even values in sequence before the first 
  //occurrence of a given number.
  function find_numbers(arr, num) {
      var count= 0;
  
      for ( var i=0; i<arr.length; i++){
          if (arr[i]%2 === 0 && arr[i] < num ){
               count++;
          }      
      }
         if (count > 0) return 2;
    
     return 0;
      
     // console.log(count)
    //return -1;
  }
   //110.  find the number of even values in sequence before the a given number.
function find_even_numbers(arr, num){
  var result =[];

  for ( var i =0; i< arr.length; i++){
     // console.log(arr[i])
      if (arr[i]%2 === 0 && arr[i] < num ){
        result.push(arr[i]);
   }      
  }
   return result;
}

 //console.log(find_even_numbers([1,2,3,4,5,6,7,8], 5))
  //console.log(find_numbers([1,3,5,6,7,8], 6))

  //===============================================
  //111. Check a number from three given numbers where two numbers
  // are equal, find the third one.

  function find_number(n1, n2, n3){
    //console.log(n1);
    if ( n1!==n2 && n1!== n3 && n2!==n3){ return "there number are different"}
    if ( n1 == n2) return n3;
    if (n1==n3) return n2;
      
    return n1
  }
 // console.log( find_number(1, 2, 3))
 //console.log( find_number(2, 12, 2))
 // console.log( find_number(22, 2, 2))
//====================================================
//====================================================
//113. Calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.
function int_sum(n) {
    
       var sum = 0;
       while( n > 0){
           sum = sum + n;
           n = Math.floor(n/2) 
       }     
       return sum;
}
//console.log(int_sum(8))
//console.log(int_sum(9))
//console.log(int_sum(26))

//=======================================================================
//======================================================================
//114. check whether a given string represents a correct sentence or not.
// A string is considered correct sentence if it starts with the capital letter and ends with a full stop .
//==================================
function is_correct_Sentence(input_str) {
    var first_char = input_str[0]
    var last_char = input_str[input_str.length-1];
        if( (/[A-Z]/).test(input_str[0]) && last_char =="."  ){
             return true;
        } 
        
    return false;
} 
//console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
//console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
//console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));
//console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));
//======================================================
//======================================================
//


//============================================
//============================================
//116. Find all the possible options to replace the hash in a string
// (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. Go to the editor
//For a string "2*0", the output should be : ["210", "240", "270"]
function is_divisible_by3(mask_str) {
 var result = [];
    
    for( var i  = 0; i<10; i++ ){
        mask_str = mask_str[0] + i + mask_str[2];
       
       if ( parseInt(mask_str)%3 == 0 ){
           result.push(mask_str);
       }
    }//for
   return result;
}
//console.log(is_divisible_by3("2#0"))
//console.log(is_divisible_by3("4#2"))
//==============================================
//==============================================
//118. To check whether a given number is in a given range. 
function is_inrange(x, y, z) {
    return  y>=x && y <= z;

}
//console.log(is_inrange(1,2,3));
//console.log(is_inrange(1,2,-3));
//console.log(is_inrange(1.1,1.2,1.3));
//=====================================
//====================================
//119. Check whether a given integer has an increasing digits sequence. 
function is_increasing_digits_Sequence(num) {
    var arr_num = ('' + num).split('');
   // var arr_num =  num.split('');
      //  console.log( arr_num);
   
     for ( var i=0; i< arr_num.length-1; i++){
            if ( arr_num[i] >= arr_num[i+1] ) return false;            
     }

  return true;
}   
//console.log(is_increasing_digits_Sequence(123));
//console.log(is_increasing_digits_Sequence(1223));
//console.log(is_increasing_digits_Sequence(45677));
//======================================================
//======================================================
//123. Find whether the members of a given array of integers is 
//a permutation of numbers from 1 to a given integer

function is_permutation(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0) 
          return false;
    }
    return true;
}
//console.log(is_permutation([1, 2, 3, 4, 5], 7));
//console.log(is_permutation([1, 2, 3, 5], 4));


//125: Find the longest string from a given array
//=================================================
item1 = ["my","a","longest", "abcd", "a", "efghi"]
item0 = ["a", "abcd", "a", "efghi"]
function findLstring( arry ){
    mystr = arry[0];
     for ( var i=0; i< arry.length-1; i++ ){
          if ( mystr.length <= arry[i].length ){
              mystr = arry[i];
             // console.log(mystr)
          }
     }
    return mystr;
}
//console.log(findLstring(item1));
//console.log(findLstring(item0));


 /* console.log( sumOftwo(30, 43));
  console.log( sumOftwo(30, 13));
  console.log( sumOftwo(50, 50)); */
//=============================================
//============================================
//126. Write a JavaScript program to get the largest even number 
//from an array of integers.
item1=[10,3,100, 5, 23, 35];

function findLnum(arry){
    myMax = arry[0];

    for ( var i =0; i< arry.length; i++) {
        if ( myMax <= arry[i]){
            myMax = arry[i];
        }
    }
    return myMax;
}
//console.log(findLnum(item1))
//==========================================================
//==============================================================
//127 reverse the order of the bits in a given integer. 
function mirror_bits_O(n) {
    //console.log( parseInt(n,2));
    var binarySum=0;
    binarySum =  parseInt(n.toString(2).split("").reverse().join(""), 2);
   
    console.log(  binarySum);

  }
 
function mirror_bits(n){
    var bitC =0;
    var bitsum = [];
        while ( n >0 ){
            if ( n%2 ==0 ){
                 bitsum.push(0);
                 n = n/2;
                 //console.log(n)
            }
            else if(n==1) {
                bitsum.push(1);          
                break;
            }
            else{
                bitsum.push(1);
                n = Math.floor(n/2);
              // console.log(n)
            }          
        }//while
        console.log(bitsum.reverse().join(""))
        var len = bitsum.length;
        var sum =0, nlen=0;
     
        if (bitsum[len-1] == 0) {
          len =  bitsum.length -1;
            console.log("length:"+ len);
        }
        
       
        for ( var j=len-1;j>=0;j--){
            console.log(j)             
            sum += ( bitsum[j] * Math.pow(2, j));
            
        }
        console.log(sum);
      
}
 
//console.log(mirror_bits(14));
// console.log(mirror_bits(56));
//console.log(mirror_bits(234));
//128. Find the smallest round number that is not less than a given value. 
//==========================================================================
//128.1 Sum of first n even numbers

function sumOfEven(n){ 
   var sum=0, curr=2;

    for ( var i=1; i<= n; i++){
          sum += curr;
          curr +=2;
        }
    return sum;    
}
//console.log(sumOfEven(10));
//=====================================================
  //==========================================
  //129. find the  next prime number strictly 
  //greater than a given number

function prior_prime_num(num){
  var result=[];

       for ( var i= num-1; i >0; i--){
           var isPrime = true;
          // console.log(i)
           for ( var d=2; d*d <=i; d++){       
               if( i%d === 0 ){
                    isPrime = false;
                    break;
               } 
           }
           if ( isPrime)
               result.push(i);

       }
       return result;

}
//console.log(prior_prime_num(23))

  function next_Prime_num(num) {    
    for (var i = num + 1;; i++) {
        console.log( i )    
        var isPrime = true; 
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}


//console.log(next_Prime_num(5));
//console.log(next_Prime_num(17));
//129 -2 is this number a prime number 
function isPrimeChk(n){
   var divisor =2;
   var isPrime = true;

   
    while ( n >divisor){
        if ( n%divisor == 0 ) {
            //isPrime = false;
            return false;
        }
        else{ divisor++;}
    }//while
    return true;
}
//console.log( isPrimeChk(11));
//console.log( isPrimeChk(131));
//======================================
 //129 -1 find all prime factors of a number 
function findPrimeFactor(n){

    var result =[];
    var divisor =2;

    while ( n> 2){
        if ( n%divisor == 0 ){
            result.push(divisor);
            n = n/divisor;
        }
        else{
        divisor++;
        }
    }//while

     return result; 
}
//====================================================
//=====================================================
// 130:  find the number of even digits in a given integer.
function isEven(num){
    if ( num%2 == 0 )
        return "even";
     else
       return "Odd"   

  }
//console.log( isEven(2));
//console.log( isEven(11));
//======================================================
//==================================================================
//131. Create an array of prefix sums of the given array.
function prefix_sums(arr) {
    var sum = 0;
    var result =[];
     for ( var i= 0; i< arr.length; i++){
        sum +=  arr[i];
        //console.log(sum);
        result.push(sum)
     }
    return result;    
}

//console.log(prefix_sums([1, 2, 3, 4, 5]));
//console.log(prefix_sums([1, 2, -3, 4, 5]));
//=========================================================================================================
//=================================================================================================================
//132. find all distinct prime factors of a given integer.
function find_unique_Prime(num){
	
	var divisor = 2;
	var resutlAry =[];
	count=0;
	while(num >= 2){
        if ( num % divisor == 0 ){
              count++
              if ( count == 1) resutlAry.push(divisor)
              
            num=num/divisor;
        }else{
          divisor++;
          count =0;
        }
    }


  return resutlAry;
}
//console.log( findPrimeFactor(69))
//console.log( find_unique_Prime(69))
//console.log( find_unique_Prime(100))
//console.log( find_unique_Prime(104))
//console.log( find_unique_Prime(105))
//========================================
//===============================
//133. check whether a given fraction is proper or not.
function proper_improper_test(num) {
  
       if ( num[0] < num[1]) return "Proper fraction";
       else return "Improper fraction";

}
//console.log(proper_improper_test([12, 300]));
//console.log(proper_improper_test([2, 4]));
//console.log(proper_improper_test([103, 3]));
//console.log(proper_improper_test([104, 2]));
//console.log(proper_improper_test([5, 40]));

//===================================================
//===================================================
//134.change the characters (lower case) in a string where a turns into
// z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a


//===================================================
//===================================================
//135. Remove all characters from a given string that appear more than once. 
function remove_duplicate_chars_O(str) {
    var arr_char = str.split("");
    var result = [];

    for (var i = 0; i < arr_char.length; i++) {
    //   console.log( "indexOf: " + str.indexOf(arr_char[i]));     
     // console.log ("lastIndexOf: " + str.lastIndexOf(arr_char[i]))
      if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
     
        result.push(arr_char[i]);
      }
  
    return result.join("");
  }
 //console.log(remove_duplicate_chars_O("abcdabc")); //d
//console.log(remove_duplicate_chars_O("python"));
  //console.log(remove_duplicate_chars_O("abcabc"));
 // console.log(remove_duplicate_chars_O("1365451"));
  function remove_duplicate_chars_my(str) {

    var arr = str.split("");
    
       var elm, exist={}, result=[];
    
    // assign arry to obj
        for ( var i=0; i< arr.length; i++){
            elm= arr[i];
            //isU =true;
            if (!exist[elm]){               
                exist[elm] = 1;                      
            }else{
                exist[elm]++; }
        } 
            
         for ( var k in exist) {         
                if ( exist[k] == 1){
                     result.push(k);   
                    // console.log(k + ":" + exist[k])
                 }             
         }
      
   return result.join("");      
           
        //const vals = Object.values(exist);
        //const keys = Object.keys(exist);
        //console.log(vals);
        //console.log(keys);
      
       // console.log(result);
       // console.log("================================");
    
        //console.log(mymax);
  
  }
  function remove_duplicate_chars_h(str) {
    var arr = str.split("");
    var result = [];
    var len  = arr.length;
    
    for (var i=0; i< len; i++ ){
         for ( var j= i+1; j<len; j++ ){
             if ( arr[i] == arr[j]){
                 arr[j] = "Hey";
                 arr[i] = "Hey"
               //  console.log( arr[i]);
             }//if
         } //for        
    }
   // console.log( arr.length)
    for ( var i=0; i< len ; i++ ){    
        if (arr[i] !== "Hey") {
                 result.push(arr[i]);
        }  //if  
    }//for

    return result;
}   
//console.log(remove_duplicate_chars_h("abcdabc")); //d
//console.log(remove_duplicate_chars_h("python"));
 //console.log(remove_duplicate_chars_h("abcabc"));
//console.log(remove_duplicate_chars_h("1365451"));
//================================================
//==================================================================================
//136. Replace the first digit in a string (should contains at least digit) with $ character.
function replace_first_digit(str) {
 return str.replace(/[1-9]/, '$')

}
//console.log(replace_first_digit("abc1dabc"));
//console.log(replace_first_digit("p3ython"));
//console.log(replace_first_digit("abcabc"));   
//===============================================================
//==============================================================
//137. Test whether a given integer is greater than 15 return the given number, otherwise return 15
function test_fifteen(num) {

    if ( num >15) return num;
    else return 15;
}
//console.log(test_fifteen("123"));
//console.log(test_fifteen("10"));
//console.log(test_fifteen("5"));
//=================================================================
//====================================================================================
//138.Reverse the bits of a given 16 bits unsigned short integer.


//140.  check whether all the digits in a given number are the same or not. 
function test_same_digit(num) {
  var last = num%10;
  
  while(num){
      if ( num%10 != last) return false;
      num = Math.floor(num/10);
  }
 return true;
}


//console.log(test_same_digit(1234));
//console.log(test_same_digit(1111));
//console.log(test_same_digit(22222222));
//=============================================================
//==========================================================
//141.Find the number of elements which presents in both of the given arrays. 
function test_same_elements_both_arrays(arra1, arra2) {
    var result = 0;
    for(var i = 0; i < arra1.length; i++) {
      for(var j = 0; j < arra2.length; j++){
        if(arra1[i] === arra2[j])
        {
          result++;
        }
      }
    }
    return result;
  }
  //console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,4]));
  //console.log(test_same_elements_both_arrays([1,2,3,4], [1,2,3,5]));
  //console.log(test_same_elements_both_arrays([1,2,3,4], [11,22,33,44]));


//===========================================
//===========================================
//142.Simplify a given absolute path for a file in Unix-style
function simplify_path(main_path) {



}
//console.log(simplify_path("/home/var/./www/../html//sql/"));
//==========================================
//143. sort the strings of a given array of strings in the order of increasing lengths.
function sort_by_string_length(arr) {
 
      for ( var i= 0 ; i< arr.length; i++){
           for ( var j= i +1; j< arr.length; j++){
                if ( arr[i].length > arr[j].length ){
                        var temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                }//if
           }//for
               
        }//1st for
     
      return arr.join(" ");
}
    var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
  //  console.log("Original array: "+ arra+"\n");
   // console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));
//====================================================
//====================================================
//145.  find the maximum integer n such that 1 + 2 + ... + n <= a given integer.
function sumn(val) {
    var sum=0;
    var i=0;
    while( sum <= val){
            sum += i++;
    }
    console.log(sum)
       console.log(i-2)

}
//console.log(sumn(11))
//console.log(sumn(16))
//=======================================================
//==============================================================
//144.break an address of an url and put it's part into an array. 
//Note: url structure : ://.org[/] and there may be no part in the address.
function break_address(str) {
  var  newStr="", wLen=0;
  var result=[];

    for ( var i=0; i< str.length; i++ ){
       //console.log( i + ":" + str[i]);
        if ((/[:\/\/]/).test(str[i])){
          
            if( newStr !== " " )result.push(newStr);
             newStr = " ";
                  
        }else{   
            newStr = newStr + str[i];
           // console.log(newStr);
        }
    }
   return result;
}
//var url_add = "https://www.w3resource.com/javascript-exercises/"
var url_add = "https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-142.php/"
//console.log("Original address: "+url_add)
//console.log(break_address(url_add))

//================================================================
//=================================================================
//146. Compute the sum of cubes of all integer from 1 to a given integer.  
function sum_Of_Cubes(n) {

}
console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));
//147.  compute the sum of all digits that occur in a given string.
function sum_digits_from_string(dstr) {
    var sum =0;
    for ( var i=1; i< dstr.length; i++){
        if ((/[0-9]/).test(dstr[i])){
            sum += parseInt(dstr[i]);
        }
    }
    return sum;
}   
//console.log(sum_digits_from_string("abcd12efg9"))
//console.log(sum_digits_from_string("w3resource"))
//===================================================
//148. swap two halves of a given array of integers of even length.

function halv_array_swap(arr) {
    if (((arr.length)%2)!=0){
      return false;
      }

     var mid=  arr.length/2;
     var len = arr.length;
     console.log(mid)
     var temp;
     for ( var i=0; i<len; i++ ){
          var temp =  arr[i];
          arr[i] = arr[i+mid];
          arr[ i+mid] =temp;
        
     }
    return arr.join("");
}

//console.log(halv_array_swap([1,2,3,4,5,6]))        

//==========================================================================================
//=================================================================================================================================================
//149.  change the capitalization of all letters in a given string. 

function change_case(str) {
    var temp="";
    for ( var i=0; i<str.length; i++){
       // console.log(str[i]);
        if ( (/[A-Z]/).test(str[i]) ){
            temp += str[i].toLowerCase();
           // console.log(str[i].toLowerCase());
        }else{
            
            temp +=str[i].toUpperCase();
        }
    }
   return temp;
}

//console.log(change_case("w3resource"));
//console.log(change_case("Germany"));

//=====================================================================
//===============================================================================
//150. Swap pairs of adjacent digits of a given integer of even length.
function swap_adjacent_digits(n) 
{
    
    if( n%2 !== 0 ) return false;
    
    var arr = ("" + n).split("");
    var len = arr.length;
    var temp=0;
    for ( var i=0; i< len; i+=2){
          temp= arr[i]
          arr[i] = arr[i+1];
          arr[i+1] =temp;
    }
  //  console.log(arr.join(''));

  
}
//console.log(swap_adjacent_digits(1234));
//console.log(swap_adjacent_digits(123456));
//console.log(swap_adjacent_digits(12345));   