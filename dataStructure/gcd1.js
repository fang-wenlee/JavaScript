function gcd(n1, n2){

    var divisor =2;
    var greattDivisor =1;
    if ( n1 <2 || n2 <2 ) return 1
    while ( n1 >= divisor && n2 >= divisor){

        if ( n1%divisor ==0 && n2%divisor ==0 ){
            greattDivisor = divisor;
        } 
            divisor++
    }

  return greattDivisor;

}


console.log ( gcd( 144,12));