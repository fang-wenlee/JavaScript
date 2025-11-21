//https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-(Written-by-a-Frontend-Engineer

//1. isPrime - Returns true or false, indicating whether the given number is prime.

var isPrime = function (n){
    var d =2;
    if( n<2 ) return false;
    while( n > d){
        if( n%d ==0) {
            return false
        }else
        d++;
    }
 return true; 
}  
n=0; //false
n1=10 //false
n2 =17//true;
//console.log( isPrime(n1))
//2. factorial - Returns a number that is the factorial of the given number.
var fac = function(n){
var sum=1;
    for(let i=1; i<=n; i++ ){
        sum = sum * i
    }
  return sum;
}
//console.log(fac(5))//120
//console.log(fac(6))//720
//3: fib - Returns the nth Fibonacci number.

var fib= function(n){
 var res =[0,1];
 if( n < 2) return 1;
 for( let i=2; i<=n; i++){
     res[i] = res[i-1] + res[i-2];
 }
 return res[n]
}
n=10 //55
n1=4
n2 =50
//console.log(fib(n2))//12586269025
//4: isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
var isSorted = function(arr){
  
    for (let i=0; i<arr.length; i++){
        if( arr[i] > arr[i+1] )
           return false;
    }
    return true;
}
a1= [1,4,7,10]//true
a2 = [4,0,1,3,10]
//console.log(isSorted (a2))

//5: filter
a2 = a2.filter(i => i > 3 )
//console.log(a2)
//6.reducer
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer));
function myReducer(total, num) {
    return total + num;
  }
var numbers = [170,50,25]//245
//console.log ( numbers.reduce(myReducer))
//7: reverse - method reverses an array in place. The first array element becomes the last,
str = "God bless us";
arr =[1,2,3,4,5]
const reversed = arr.reverse();
//console.log('reversed:', reversed);

//8: isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
var isBalanced = function(s){
        let len = s.length

        let cp = s.indexOf('}');
        let op = s.indexOf('{')
       
        if( op > cp || len%2 !== 0 ) {
            return false;
        }   else{
        //console.log(op)
        return true;
        }


}
//console.log ( isBalanced('}{'))                    // false
 //console.log( isBalanced('{{}') )                   // false
 //console.log( isBalanced('{}{}') )                   // true
 //9. includes - Return true or false indicating whether the given number appears in the given
 //sorted array. Can you do it in O(log(N)) time?
var includes = function(arr, n){

    for( let i=0; i< arr.length; i++){
        if( arr[i] == n ) return true;
    }
    return false;
}
 
// console.log ( includes([1, 3, 8, 10], 8) )           // true
// console.log ( includes([1, 3, 8, 8, 15], 15) )       // true
// console.log ( includes([1, 3, 8, 10, 15], 9) )     // false
//10: uniq - Takes an array of numbers, and returns the unique numbers.
// Can you do it in O(N) time?

var uniq1 = function(arr){
    var elm, obj={}, res=[];
    for ( let i=0; i< arr.length; i++){
        elm = arr[i];
        if( !obj[elm] ){
               obj[elm] = 1
        } 
        else{
            obj[elm] ++; 
        }    
    }
    for( elm in obj){
        if(obj[elm] ==1 ){
           res.push(elm)
        }
    }
    return res
}
a =[1, 4, 2, 2, 3, 4, 8]
//console.log(uniq1(a)) //[1,3,8]
var uniq = function(arr){
    var elm, obj={}, res=[];
    for ( let i=0; i< arr.length; i++){
        elm = arr[i];
        if( !obj[elm] ){
              res.push(elm);
              obj[elm] = true;
        }     
    }
    return res
}
a =[1, 4, 2, 2, 3, 4, 8]
//console.log(uniq(a)) //[1,4,2,3,8]
//11. intersection - Find the intersection of two arrays. 
//Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
var intersection1 = function(arr1, arr2){
  
    // var t;
    // if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    // return a.filter(function (e) {
    //     return b.indexOf(e) > -1;
    // });
    var results = [];
   if( arr2.length > arr1.length){
        for (var i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) !== -1) {
                results.push(arr1[i]);
            }
        }
    } else if (arr2.length < arr1.length) {     
        for (var i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) !== -1) {
                results.push(arr1[i]);
            }
        } 
    }
    return results;
}
var intersection = function(arr1, arr2){
     
    var results = [], t;
    if (arr2.length < arr1.length) t = arr2, arr2 = arr1, arr1 = t;     
    
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            results.push(arr1[i]);
        }
    }
    
    return results;
}
var findComElm = function(arr1, arr2){
    var res=[],tmp;
    if( arr2.length < arr1.length){ t = arr1, arr1= arr2, arr2 =tmp}

    for( let i=0; i< arr1.length; i++){
        if( arr2.indexOf(arr1[i]) !== -1){//if it is found
            res.push(arr1[i])
        }
    }
    return res

}

console.log( findComElm([1, 5, 4, 2], [8, 91, 4, 1, 3]))
// console.log ( intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])  )  // [4, 1]
// console.log ( intersection( [1,2,1,1,3], [1] ));//[1]
//console.log ( intersection([1, 5, 4, 2], [7, 12]) )           // []
//debugging 
function greet(person) {
    if (person.name ==  'amy' ) {
      return 'hey amy'
    } else {
      return 'hey arnold'
    }
  }

//  console.log ( greet({ name: 'amy' }) )

for (let i = 0; i < 4; i++) {
   // setTimeout(() => console.log(i), 0)
  }
 //0,1,2,3,4 
 let dog = {
    name: 'doggo',
    sayName() {
      console.log(this.name)
    }
  }

//dog.sayName()

// function Dog(name) {
//     this.name = name
//   }
//   Dog.bark = function() {
//     console.log(this.name + ' says woof')
//   }
//   let fido = new Dog('fido')
//   fido.bark()

dog ={
      name: this.name,
      bark(){
      console.log(this.name + ' says woof')
      }
}
dog.name ="Jew Jew";
//dog.bark();

function isBig(thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
      return false
    }
    return true
  }
//  console.log( isBig([1]) )    // false
//   console.log ( isBig([2]) )  // false
//   console.log ( isBig([3]) ) // true

  //harder
  //1. permute - Return an array of strings, containing every permutation of the given string.
//   function permutations(str){
//     var arr = str.split(''),
//         res = [],
//         rest,
//         picked,
//         restPerms,
//         next;
    
//         if (arr.length == 0) return [str];
    
//         for (var i=0; i<arr.length; i++)
//         {
//             rest = Object.create(arr);          
//             picked = rest.splice(i, 1);           
//             restPerms = permutations(rest.join(''));
            
//            for (var j=0, jLen = restPerms.length; j< jLen; j++)
//            {
//                next = picked.concat(restPerms[j]);
//                res.push(next.join(''));
//            }
//         }
//        return res;
//     }
//==================================
let permutations1 = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
       //recursive
       for (let permutation of permutations(remainingChars)){
           permutationsArray.push(char + permutation) }
    }
    return permutationsArray
 }

var permutations = function(str){

    var res=[];

    if( !str || typeof str !== 'string') 
         return "Please return string";
    else if (str.length < 2 ){
        return str
      }
    
    for( let i=0; i<str.length; i++){
         let char = str[i];
        // console.log(char)
         let remain = str.slice(0, i) + str.slice(i+1, str.length);
       //  console.log(remain)     
                    
         for(let p of permutations(remain)){
              res.push(char + p);
         }
             
        }//for
    
    return res;
}
//console.log ( permute('') )             // []
//console.log ( permutations('abc'))          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log ( permutations('abc')) 