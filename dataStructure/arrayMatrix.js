function groupsamemean(a){
    var k =0, sum =0, obj={};
    var b=[], res=[];
    
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
           // b.push([sum/a[k].length, i ])
            b.push([i, sum/a[k].length ])
           k++
          }  //for   
        //  b = b.sort() 
        console.log(b);

      var reuslt =[];
     /* for ( var k of obj){        
            console.log("obj[k]: " + obj[k]+ " k: " + k)
            j++;} 
           
            }  */    
      
  }  
  //groupsamemean([[3, 3, 4, 2],[4, 4], [4, 0, 3, 3], [2, 3],[3, 3, 3] ])
       
  // retrieve all the same item from Object of array        
  function findvalue(){
    var array = [
      {
        name: "Steven Smith",
        Country: "England",
        Age: 35
      },
      {
        name: "Hannah Reed",
        Country: "Scottland",
        Age: 23
      },
      {
        name: "Steven Smith",
        Country: "England",
        Age: 35
      },
      {
        name: "Robert Landley",
        Country: "England",
        Age: 84
      },
      {
        name: "Mary Smith",
        Country: "England",
        Age: 100
      },
      {
        name: "Robert Landley",
        Country: "England",
        Age: 84
      }
    ];
    var res =[];
    var count =0;
      for(let obj of array){
          for(let ele of array){
              if(obj==ele){
                console.log(obj)
                 continue;
              }
              if(ele.name===obj.name && ele.age===obj.age){
                 res.push([count, obj] )
                //console.log(ele);
                break;
              }      
          }//for  
          count++;   
      }//for
      console.log(res)
  }
 // findvalue() // object of array 
  //============================= How to assign value to 2 dynamion array
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
 // groupsame( [ [ 2.5, 2 ], [ 2.5, 3 ], [ 3, 0 ], [ 3, 4 ], [ 4, 1 ] ] )
    // two dynamison array
  function practiceArray1(){
    var grid = [];
    iMax = 3;
    jMax = 2;
    count = 0;
        for (let i = 0; i < iMax; i++) {
          grid[i] = [];
    
          for (let j = 0; j < jMax; j++) {
            grid[i][j] = count;
            console.log( grid[i][j]);
            count++;
          }
        }
    
    // grid = [
    //   [ 0, 1 ]
    //   [ 2, 3 ]
    //   [ 4, 5 ]
    // ];
    
   // console.log(grid[2][0]); // 4

  }
  function practiceArray(){
    let activities = [
      ['Work', 9],
      ['Eat', 1],
      ['Commute', 2],
      ['Play Game', 1],
      ['Sleep', 7]
  ];
  let grid = [ [0,3],[1,4],[2,2.5], [3,2.5], [4,3]] 

  /* activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed();
    activity[2] = percentage + '%';
   }); */
   var res =[];
  /* for (let i = 0; i < activities.length; i++) {    
    var innerArrayLength = activities[i].length;  
    for (let j = 0; j < innerArrayLength; j++) {
     
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
} */

    activities.forEach((activity) => {       
        console.log(activity);

      });
   

  //console.log(activities);  
  console.table(grid);
  //console.table(activities); 
  }
  //practiceArray()