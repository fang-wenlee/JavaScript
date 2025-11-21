//The Journey Begins==================================
var sumOftwo = function(n1,n2){

    return n1+n2
}
//console.log(sumOftwo(13,12))
//2. Given a year, return the century it is in



//=====================================
//3. check if it is a palindrome

var isPalindrome = function(str){

    for (let i=0; i< str.length-1; i++){
        if (str[i] !== str[str.length-i-1])
           return "false"
    }
    return true
}
var isPalindrome2 = function(str){
    return str == str.split('').reverse().join('');
}
//console.log(isPalindrome2("aaabaaaa"));
//Edge of the Ocean ==================================================
//4: Given an array of integers, find the pair of adjacent elements that has 
//the largest product and return that product.

var largestProduct = function(arr){
    
    var largest = arr[0] * arr[1];
    for(let i= 1; i< arr.length; i++){
       if( arr[i]* arr[i+1] > largest ){
           largest = arr[i]* arr[i+1];
       }         
    }
    return largest;
}



item= [3, 6, -12, -5, 7, 3]

//console.log(largestProduct(item))


//5: shape of area

var area = function(n){
    var sum=0;
  for( let i=0; i< n-1; i++){
          sum = sum + (2*i +1) *2
  }
  sum = sum + (2*n -1)

  return sum
}
   
//console.log(area(3)) //13
//console.log(area(2)) //5
//6: Make Array Consecutive/ make array 
var findMissingNumber = function (arr){
  
    var largVal = arr[0];
    var smallVal = arr[0];

    if ( largVal < smallVal ) { largVal = smallVal}

    for( let i=1; i< arr.length; i++ ){

        if ( arr[i]> largVal) { largVal = arr[i]}
        if( arr[i] < smallVal ){ smallVal = arr[i]}
    }
    console.log
   var diff = ( largVal-smallVal) - ( arr.length-1);

    return diff
}
var mis = function(arr){
    var len = arr.length;
    var max=arr[0], small=arr[1];
     if( max < small)  max = small;
    for(let i=1; i< arr.length; i++){
           if( arr[i] > max ) max = arr[i]
           if( arr[i] < small) small = arr[i]
    }
    var diff = (max -small) -(len -1)
    
    return diff
}//=====================
var findMis = function (arr){
   let len = arr.length-1;
   let sortArr = arr.sort()
   //console.log( "sorted array" , sortArr)
   let small = sortArr[0];
   var largest = sortArr[len]
   var diff = (largest -small ) - len
   //console.log("Miss number: " ,diff)
    return diff
} 

value1=[6,2,3,8];//3
value2=[5,4,6];//0
value=[6,3];//2
//console.log(findMis(value1))
//console.log(findMissingNumber(value))

//7: increasing sequence by removing no more than one element from the array

var increasingSequence= function(arr) {
    var bad=0
    for(var i=1;i<seq.length;i++) 
       if(seq[i]<=seq[i-1]) {
         bad++
       if(bad>1)
          return false
       if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) 
          return false
    }
    return true
}

//console.log ( increasingSequence([1,3,2,1]) ) //false
//8: ==============================================
function matrixElementsSum(arr){
    var sum=0;
   // console.log ( "Each element Length: " + arr[1].length)
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

var matrixSum = function (arr){
   var sum=0;
    for (let j=0; j<arr[0].length; j++){
        for ( let i=0; i<arr.length; i++ ){
            if ( arr[i][j] == 0 ){
                break;
            }else{
                sum += arr[i][j];
            }
        }
    }
    return sum
}
item0= [ [1,1,1,0], [0,5,0,1], [2,1,3,10]] //9
item1 = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] //9
item2 =[[1,1,1], [2,2,2], [3,3,3]]//18
item3 = [[1], [5], [0], [2]]//6
item4 = [[1,2,3,4,5]] //15
//console.log( matrixSum(item2));
//9: Given an array of strings, return another array containing all of its longest strings.
function allLongestStrings(arr) {

  var res=[];
  var longStr =  arr[0].length;
  //console.log(longStr)
    for ( let i=1; i<arr.length; i++ ){
      if( arr[i].length > longStr) {
          longStr = arr[i].length;
      }
    } //

    for( let j=0; j<arr.length; j++){
        if ( arr[j].length == longStr){
            res.push(arr[j]);
        }
    }
    return res
}
// console.log ( allLongestStrings ( ["aba", "Hello", "ad", "vcd", "aba"]))
// console.log ( allLongestStrings ( ["aba", "aa", "ad", "vcd", "aba"]))
//Smooth Saliling=====================================

//10: Common Charactor count: Given two strings, find the number of common characters between them.
//inslcue and slice


function commonCharacterCount(s1, s2) { 
    var count = 0, res=[];
    while(s1.length && s2.length){
        if(s2.includes(s1.charAt(0))){
            count++;
            res.push(s1.charAt(0))
            //s2 = s2.replace(s1.charAt(0),"");     
            s2 =s2.replace(s1.charAt(0), "")           
            s1 = s1.slice(1);
        }
        else {
            s1 = s1.slice(1);
        }
    }
   
    return  res;
}
var findComChar = function(s1,s2){
  var res=[], count=0;
  while(s1.length && s2.length ){
        if( s2.includes(s1.charAt(0))){
            count++;
            res.push(s1.charAt(0));
            s2 =s2.replace(s1.charAt(0), "")           
            s1 = s1.slice(1);
        }else{
            s1 = s1.slice(1);
        }
   }
    return count
}
s1 = "tqaabcc" 


s2 = "adcaa"
//console.log ( findComChar(s1,s2))
//console.log ( commonCharacterCount(s1,s2))
//isLucky :  A ticket number is considered lucky if the sum of the first half of 
//the digits is equal to the sum of the second half.       
var isLucky =function(n){

  var strn = n.toString();
  var sum=0,sum1=0, len = strn.length/2;
  
  for( let i=0; i<len; i++ ){
       sum += parseInt(strn[i])  
       sum1 +=  parseInt(strn[strn.length -i -1])
  }

//   for( let j=len; j< strn.length; j++){
//        sum1 += parseInt(strn[j])
//   }
 
//     if(sum == sum1 ) return true;
//     else return false;  
    return sum==sum1? "YES": "NO"
}
var isLucky1 =function(n){

    var strn = n.toString();
    var sum=0,sum1=0, len = strn.length/2;
    
    for( let i=0; i<len; i++ ){
         sum += ( parseInt(strn[i])- strn.charAt(strn.length -1 -i)  )
    }
     return (sum==0 ? "yes": "no")    
  }
n = 1230//true
//console.log ( "Is it a lucky number? " ,isLucky(n))
//12: sortByHeight
var sortByHeight1 =function (a){
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
   // console.log(s)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        
        return -1;
    })

}

a = [-1, 150, 190, 170, -1, -1, 160, 180] // [-1, 150, 160, 170, -1, -1, 180, 190]
//console.log ( sortByHeight(a))
//13. reverrseInParenthese: reverses characters in (possibly nested) parentheses in the input string.
var reverseInParentheses = function(str){
  while(true){
    let cp = str.indexOf(")");
    if(cp === -1) break;
    let op = str.substring(0,cp).lastIndexOf('(');
    //console.log(op)
    let start = str.substring( 0, op);
    let mid = str.substring(op+1, cp).split('').reverse().join('');
    let end = str.substring(cp+1, str.length);
    str = start + mid + end;
   
  }
 return str

}
str ="foo(bar)baz(blim)"
str1 = "a(bar)";
str2 = "foo(bar(baz))blim"
//console.log ( reverseInParentheses(str2))
//EXPLORE THE WATER ====================================
//14. alternatingSums //sum even element and sum odd element and retrun new array with even and odd 
  var sumOddandEven = function(arr){
    
    let sumOdd =0, sumEven=0, resArr=[];
    for( let i=0; i< arr.length; i++){
        if( i%2 == 0 ){
            sumOdd += arr[i]
        }else{
            sumEven += arr[i]
        }
    }
    //console.log(sumEven)
    resArr.push(sumOdd, sumEven)
    return resArr
  }
a = [50, 60, 60, 45, 70]
//console.log ( "result: ", sumOddandEven(a) );
//15. Add Border: Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder1(arr) {
    var width = arr[0].length + 2;
    return [
        '*'.repeat(width),
        ...arr.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}

var addBorder = function(arr){
    var many = arr[0].length +2;
    return[ '*'.repeat(many),
            ...arr.map(i => `*${i}*`),
            '*'.repeat(many)
            ]
}
a =["abc", "ded"]
//console.log ( addBorder(a)) 
//============================
//16. are similar :Two arrays are called similar if one can be obtained from another by swapping 
//at most one pair of elements in one of the arrays.
 var areSimilar = function (arr1, arr2){
     var sum=0;
    for( let i=0; i< arr1.length; i++ ){
        if( arr1[i] !== arr2[i])
           sum++
    }
    arr1.sort();
    arr2.sort();
    return arr1.toString() == arr2.toString() && sum < 3
 }
 a= [1, 2, 3]
 b=[1, 10, 2]
//console.log(areSimilar(a,b))
//17.===============================


//18. palindromeRearranging: find out if its characters can be rearranged to form a palindrome
//inputString = "aabb" true

 var palindromeRearranging = function(str){

    var elm, obj={}, count;

    for( let i=0; i< str.length; i++){
        elm = str[i];
        if(obj[elm]){
            obj[elm]++;
        }else 
          obj[elm] =1;
    }
    for( let j in obj ){
        if( obj[j]%2 !==0 ){
            count++
       }
    }
     return count > 1 ? false : true
 }

  //console.log ( palindromeRearranging("abdabcc"))

  //use Math.max to find the max value in array

   findMax = function(arr){
    return Math.max.apply(null, arr);  
  }
  nums =[ 2,6,12,4,6,9 ]
  //console.log(findMax(nums))
  //==========================================

  var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  //console.log ( person.fullName.apply(person1, ["Oslo", "Norway"]));

  var num = 10,
    name = "Addy Osmani",
    obj1 = {
      value: "first value"
    },
    obj2 = {
     value: "second value"
    },
    obj3 = obj2;
 
function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Paul Irish";
    obj1 = obj2;
    obj2.value = "Hello";
   
}
 
change(num, name, obj1, obj2);
 
// console.log(num); // 10
// console.log(name);// "Addy Osmani"
// console.log(obj1.value);//"first value"
// console.log(obj2.value);//"new value"
//console.log(obj3.value);//"new value"   
//delete can delete but==================================


// var myObject = {
//     price: 20.99,
//     get_price() {
//         return this.price;
//     }
// };
var myObject = {
    price: 20.99,
    get_price: function() {
        return this.price;
    }
};
// var customObject = Object.create(myObject);
// customObject.price = 19.99;
// console.log(customObject.get_price())
// delete customObject.price;
// console.log(customObject.get_price());

function foo(){  
    
    function bar() {
        return 3;
    }
   return bar();
    function bar() {
        return 8+1;
    }
   
}
//console.log ( foo())

var fruits = ['Banana', 'Orange', 'Apple']

// console.log ( fruits.splice(0,1))// return removed item
// console.log(fruits)
// fruits.splice(2, 0, "Lemon", "Bule Berry")
// console.log(fruits)

function rotateImage(arr) {
    var n = arr.length;
    console.log(n)
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
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
    ]
//console.log ( rotateImage(a))

var rotateArr =function(arr){
 var n= arr.length;
    for ( let i =0; i< Math.floor(n/2); i++ ){
        for (let j= i+1; j <n; j++){

            let a = arr[i][j];
            let b = arr[j][n-1-i];
            let c = arr[n-1-i][n-1-j];
            let d = arr[n-1-j][i];

            arr[j][n-1-i] = a;
            arr[n-1-i][n-1-j] =b;
            arr[n-1-j][i]=c;
            arr[i][j] = d;
        }
        return a;
    }

}

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
    ]
//console.log ( rotateArr(a))