function findPrimeFactor(num){
	var divisor=2;
	var result= [];
	

	while ( num >= 2){
		
		if (num%divisor == 0 ){
			result.push( divisor);
			num = num/divisor;
		}
		else{
			divisor++;
		}
	}
	return result;
}

function pf(num){
   
	var d = 2;
	


}


console.log(findPrimeFactor(1));
//console.log(findPrimeFactor(20));
console.log(findPrimeFactor(17));
console.log(findPrimeFactor(10));