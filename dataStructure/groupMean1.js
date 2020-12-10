// group the arrays a[i] by their mean values, so that arrays with equal mean values are 
//in the same group, and arrays with different mean values are in different groups.
//Each group should contain a set of indices (i, j, etc), such that the corresponding arrays
// (a[i], a[j], etc) all have the same mean. Return the set of groups as an array of arrays, 
//where the indices within each group are sorted in ascending order, and the groups are sorted 
//in ascending order of their minimum element.
/*a = [[3, 3, 4, 2],
       [4, 4],
       [4, 0, 3, 3],
       [2, 3],
       [3, 3, 3]]
the output should be

meanGroups(a) = [[0, 4],
                 [1],
                 [2, 3]]
                 */

function groupsamemean1(a){
    var k =0, sum =0;
    var b=[];
    var res=[];
    
          for ( var i=0; i< a.length; i++){
                // console.log("Len: " +a[k].length)
                //console.log("index: "+ i + " element: " +a[k])
                let sum =0;
                for ( let j=0; j<= a[k].length-1; j++){
                     sum += a[k][j]
                   // console.log("index: "+ j + " item: " +a[k][j])             
                }          
           //console.log(sum)   
           //console.log(sum/a[k].length)  
           //obj[i] = sum/a[k].length;
            b.push([sum/a[k].length, i ])
            //b.push([i, sum/a[k].length ])
           k++
          }  //for   
          b = b.sort() 
        console.log(b);
        var res1 = [];
        var m=0;//for row use
        var k=0;  
        for ( var i=0 ; i<b.length; i++) {   
                res1[m]=[];   
                res1[m][k]= b[i][1];          
             for ( var j=i+1; j<= b.length-1; j++){                      
                if (b[i][0] == b[j][0]){    
                     k++; // for array' arry element use
                     res1[m][k] =b[j][1];                     
                }else{ 
                   i=j-1;
                   m=m+1;//moveing to next row  
                   k=0;//// for array' arry element use
                   break;
                }                    
             }   //inner for   
          }//outer for  
      return res1;
    }

function groupsamemean2(a){
  
    var b =[], k=0;

     for ( let i=0; i<a.length; i++){
         var sum=0
         for (let j=0; j<a[k].length; j++ ){
             sum += a[k][j];
         }
         b.push([sum/a[k].length, i])
         k++;
     }
     b =b.sort();
    //console.log(b.sort())
   var res =[];
   var m=0,k=0;
        for ( var i=0; i<b.length; i++){
              res[m]= [];
              res[m][k] = b[i][1];
              for ( var j=i+1; j<=b.length-1; j++ ){
                  if ( b[i][0] == b[j][0]){
                        k++;
                        res[m][k] = b[j][1];
                  }else{
                      i= j-1;
                      k=0;
                      m++;
                      break;
                  }
              }//for
        }//for
   return res.sort();
}

function groupsamemean(a){    
    
    var b =[]
    var k=0; // index for inner element
    for (let i=0; i<a.length; i++){
         var sum =0;
         for ( let j=0; j<a[k].length; j++){
              sum += a[k][j];
         }
        // console.log(sum)
         b.push([sum/a[k].length, i])
         k++;
    }
    b= b.sort();
    console.log(b);
    var res=[];
    var k=0, r=0;

    for ( var i=0; i<b.length; i++){
          res[r]=[];
          res[r][k] = b[i][1];
        for( var j=i+1; j<= b.length-1; j++){
               if ( b[i][0] == b[j][0]){
                     k++;
                     res[r][k] = b[j][1];
               }else{
                   i= j-1;
                   k=0;
                   r=r+1;
                   break;
               }
        }//for
    }//for
    return res

}
console.log(  groupsamemean([[3, 3, 4, 2],[4, 4], [4, 0, 3, 3], [2, 3],[3, 3, 3] ]) )
 //Replace Elements with Greatest Element on Right Side

