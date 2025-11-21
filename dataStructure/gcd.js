function gcd( a, b){

    var t;
    while(b != 0 ){
        t = a;
        a = b;
        b = t%b;
    }

    return a
}

console.log (gcd(144,12));  
//12
console.log (gcd(4,8));  



