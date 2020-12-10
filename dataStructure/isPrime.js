//prime numberr is only divisible by itsself and 1
//check if the number is prime or not


function isPrime(n){

    var divisior = 2;
 
    if ( n < 2 ) return false;
    while ( n > divisior ){
     if ( n%divisior == 0 ) 
          return false;
     else 
         divisior++;

    }
    return true;
      
}

function countPrimes1(n){
    var isPrime = new Uint8Array(n);
    for (var i = 2; i < n; i++) {
      isPrime[i] = true;
   }
   for (var i = 2; i * i < n; i++) {
          if (!isPrime[i]) continue;
          for (var j = i * i; j < n; j += i) {
             isPrime[j] = false;
          }
       }
   var count = 0;
   for (var i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
   return count;
}
n=10//4
n=0//0
n=2//
n=4
n2 = 499979
//console.log ( countPrimes(499979))

//console.log ( isPrime(5) );
//count prime: Count the number of prime numbers less than a non-negative number, n.
function  countPrimes(n) {
    var count = 0;
    for (var i = 1; i < n; i++) {
       if (chkPrime(i)) count++;
    }
    return count;
 }
 
function chkPrime(num) {
    if (num <= 1) return false;
  
    for (var i = 2; i * i <= num; i++) {
       if (num % i == 0) return false;
    }
    return true;
 }
 n=2//0
 n3 =3 //1
 n4= 5//2
n1=4//2
n2 = 499979//41537
console.log ( countPrimes(n4))

