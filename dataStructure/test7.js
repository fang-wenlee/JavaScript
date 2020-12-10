// 1. check Prime==================================
var ckPrime = function(n){
var divisor =2;

if ( n < 2 ) return false;
while(n > divisor) {
    if(n%divisor ==0){
        return false;
    }else{
        divisor++
    }
}
   return true;
}

//console.log ( ckPrime(237))

var findPrime = function(n){
    var arr =[];
    for(let i=0; i<= n; i++ ){
        if( ckPrime(i)){
            arr.push(i)
        }
    }
    return arr
}
//console.log ( findPrime(14))
//2. Prime Factors==========================================
var primefactors = function(n){

    var divisor =2, res=[];
                while( n > 2 ){
                
                        if( n %divisor == 0){
                        res.push(divisor)
                        n = n/divisor;
                        }else{
                            divisor++
                            }
            }
   return res;
}
//console.log ( primefactors(69)) //[3,23]
//3. fib===================================================
var fib = function (n){

    var res = [0,1]
    if ( n < 2) return 1;

    for ( let i=2;i<=n; i++){
        res[i]= res[i-1] + res[i-2]
    }

    return res[n]
}
function fibonacci(n){
    if(n<=1)
      return n;
    else
      return fibonacci(n-1) + fibonacci (n-2);  
  }

//console.log( fibonacci(12))//144
//4. Greatest Common Divisor=========================

var gcd = function(a,b){

    var divisor =2, res=1;

     if ( a< 2 || b <2 ) return 1;
    while( a>divisor && b >divisor){
        if( a%divisor==0 && b%divisor==0 ){
            res = divisor;
            
        }
        
        divisor++;
       
    }
    return res
}

//console.log(gcd(69,169))
//5: remove duplicate -arry
var delDuplicateElement = function (arr){

    var elm, res=[], obj={};
    for( let i=0; i<arr.length; i++){
        elm = arr[i];
        if ( !obj[elm] ){
            res.push(elm)
            obj[elm] = true;
      }
    }
    return res;
}
//console.log ( delDuplicateElement([1,3,3,3,1,5,6,7,8,1]));
//find the first duplicate number for which the second occurrence has the minimal index


//6.merge two sorted array
var mergeArr = function(left, right){
   var resArr=[], lidx=0, ridx=0;

   while( left.length > lidx && right.length > ridx){
       if( left[lidx] < right[ridx]){
           resArr.push(left[lidx])
           lidx++;
       }else{
           resArr.push(right[ridx]);
           ridx++
       }
   }
   while( left.length > lidx ){
         resArr.push(left[lidx]);
         lidx++
   }
   while ( right.length > ridx){
          resArr.push(right[ridx]);
          ridx++;
   }
   return resArr;

}

//console.log (mergeArr([2,5,6,9], [1,2,3,29]))

