     
  
  function groupsame(arr){
    console.table(arr)
    var k=1, count=0;
    var eles = arr.length;
    var res=[];
    var val =arr[0][1]; 
   
     var m=0;
       for ( var i= 0; i< eles; i++){                       
          var k=1;                
             //console.log("index: " + i + " value: " + arr[i][k])              
              if ( arr[i][k] == val )   {  
                     count++;   
                     console.log("Count: " +count);
                     console.log(i)               
                                                                    
               }
              // console.log("arr[" +i+ "][" +j+ "]" + arr[i][j])      
        }//ofr
    
      console.log(res)
    }
   /////////////////////////////////////////////////////////////
   //groupsame( [ [0,3],[1,4],[2,2.5], [3,2.5], [4,3]] ) // arrary of arry
   let numbers = [1, 2, 3];

/* let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);
*/
function totalPrice(arr){
  var sum = arr.reduce( function(acc, curr ) {return acc + curr.qty * curr.price},0)
  console.log("$" +sum)
}

let shoppingCart = [{
  product: 'phone',
  qty: 1,
  price: 699
},
{
  product: 'Screen Protector',
  qty: 1,
  price: 9.98
},
{
  product: 'Memory Card',
  qty: 2,
  price: 20.99
}
];
//totalPrice(shoppingCart)

function circlesarea(){
let circles = [10, 30, 50];

let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);
}
//circlesarea()

function circleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}
function carea(){
let circles = [10, 30, 50];
let areas = circles.map(circleArea);
console.log(areas);
}
//carea()
//sum as long ther is 0 above the elemnt, don't sum

function matrixElementsSum(arr){
    var sum=0;
    console.log ( "Each element Length: " + arr[0].length)
    for ( var j=0; j<arr[0].length; j++){
        for ( var i=0; i<arr.length; i++){
               if ( arr[i][j] == 0 ){
                    break
               }else{

                  sum+= arr[i][j];
               }
        }   
    }
    return sum;
}

item0= [ [1,1,1,0], [0,5,0,1], [2,1,3,10]] //9
item1 = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] //9
item2 =[[1,1,1], [2,2,2], [3,3,3]]//18
item3 = [[1], [5], [0], [2]]//6
item4 = [[1,2,3,4,5]] //15
//console.log( matrixElementsSum(item0));
//Given an array of strings, return another array containing all of its longest strings.
function alternatingSort1(arr) {
  var len= arr.length, temp=0 , odd=0;
  var res=[];
    if ( len%2  == 1 ) {
        temp = Math. ceil( len/2 );
        odd=1;
       // console.log("temp: "+temp)
    }else{
        temp = len/2;
    }
    for ( var i=0; i< temp; i++){
        res[2*i] = arr[i];
        if( i != temp-1)        
          res[2*i +1] = arr[len-1-i]
        else {
          if(odd!=1)
            res[2*i +1] = arr[len-1-i]                                                                                                                                                        
        }
    }
  console.log(res)
}
function alternatingSort(arr){
    var b=[];
    var len = arr.length;
    if ( len%2 == 1) {
       temp = Math.ceil(len/2);
       var odd = 1;
    } else temp = len/2;

      for ( var i=0; i<temp; i++){      
           b[2*i] = arr[i];
           if (i != temp-1)
                b[2*i+1] = arr[ len -1 -i]
           else {
                 if( odd!= 1)
                 b[2*i+1] = arr[ len -1 -i]  
           }
      }
   return b;
}
//
console.log (alternatingSort( [1, 4, 5, 6,3,8]) )
console.log (alternatingSort( [1,4,9]) )

function allLongestStrings(arr) {   
   console.log(arr)
    var myMax = arr[0].length;
    var res =[];
    for ( var i=1; i< arr.length; i++){
            if (  arr[i].length >= myMax){
               myMax = arr[i].length
           }
     }
     for ( var j=0; j< arr.length; j++){
          if (arr[j].length >= myMax)
              res.push(arr[j])
     }
   return res;
}
item = ["aba", "aa", "ad", "vcd", "aba"] // ["aba", "vcd", "aba"]
item1 =["abc",  "eeee",  "abcd", "dcd"]//["eeee", "abcd"]
item2 = ["a", "abc",  "cbd",  "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]
//console.log ( allLongestStrings(item) );

////////////////////////////////////////////////////////
//#6 Assign Numbers in Minesweeper
function mineSweeper(bombs, numRows, numCols) {
  let res = [];
    for (let i = 0; i < numRows; i++) {
      res[i] = [];
      for (let j = 0; j < numCols; j++) {
        res[i][j] = 0;
      }
    }
  console.log(res)

  for (let bomb of bombs) {
  //  console.log(bomb[1])
    let rowB = bomb[0];
    let colB = bomb[1];
    
    console.log("res["+rowB+"]["+colB+"]");
    //assign bom value -1 to res at request position res[2][3] res[2][1]
    res[rowB][colB] = -1;
 
  //assign value to 4 x 4 matrix except bom location
    for (let i = rowB - 1; i <= rowB + 1; i++) {
      for (let j = colB - 1; j <= colB + 1; j++) {
        if (0 <= i && i < numRows && 0 <= j && j < numCols && res[i][j] !== -1) {
              res[i][j] += 1;
              
        }//if
      }//for
    }//for
  }
 console.table(res)
 // return res;
}
console.log ( mineSweeper([[2,3],[2,1]], 4, 4))

//#8 Rotating 2D Array
//You’re given a two-dimensional array which is square, a number of columns is equal
// to a number of rows. Write a function, that rotates this array by 90 degrees clockwise direction.
//eg: Input : 
//arr = [[1,2,3],
//       [4,5,6],
//       [7,8,9]]
//    Output : 
//      [[7,4,1],
//      [8,5,2],
//      [9,6,3]]

function rotateInPlace(arr) {
  
  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    for (let j = 0; j < Math.floor(arr.length / 2); j++) {
      let tmp = [-1, -1, -1, -1],
        curI = i,
        curJ = j;
      for (let k = 0; k <= 3; k++) {
        tmp[k] = arr[curI][curJ];
        console.log("temp[" +k+ "]: " +tmp[k])
        let t = curI;
        curI = curJ;
        curJ = arr.length - 1 - t;
      }
      for (let k = 0; k <= 3; k++) {
        arr[curI][curJ] = tmp[(k + 3) % 4];
      //  console.log("2nd: "+arr[curI][curJ])
        let t = curI;
        curI = curJ;
        curJ = arr.length - 1 - t;
      }
    }
  }
  //console.table(arr)
  return arr;

}
//console.log ( rotateInPlace([[1,2,3],[4,5,6],[7,8,9]]) )