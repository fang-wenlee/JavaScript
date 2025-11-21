function makeArrayConsecutive2(arr) {
    var maxVal = arr[0];
    var minVal = arr[0];
    //var  len =0;
   
    //find Max and Min
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