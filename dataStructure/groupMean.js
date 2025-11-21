function remove (res){
    res.length =0
   // console.log(res)
   return res;
  }
   function groupsame(arr){
     console.log(arr)
     var k=1,m=0, count=0; 
     var res = [], b=[[]], obj={};
     var val; 
     var elm; 
     for ( var i=0; i<arr.length; i++){ //count unit
         elm = arr[0][i];
         if( !obj[elm]){         
             obj[elm] = true;
             b[i]= []
             count++;
         }
     }
     //console.log("how many: " + count)
  
   for ( var p=0; p<arr.length; p++){ 
        val = arr[p][1];
       // console.log(p + " value: " +val)
         for ( var i= 0 ; i< arr.length; i++){                                                  
                 if ( arr[i][k] == val ) {                                                        
                       res.push(i)                      
                       for ( var j=0; j<res.length; j++){                         
                            //console.log("P:" +p+ " J: "+j)
                             if ( p < count)
                                b[p][j] = res[j];
                       }                                                                              
                 }                      
         }//for   
         m++;
         remove(res);        
        // console.log(b)  
         //console.log("total len: " +res.length)
        
         
  } //     
             console.log(b)    
 }
    /////////////////////////////////////////////////////////////
    groupsame( [ [0,3],[1,4],[2,2.5], [3,2.5], [4,3]] ) // arrary of arry