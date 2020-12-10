//
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

      if( yourLeft == friendsLeft && yourRight == friendsRight)
         return true;
      else if (yourLeft == friendsRight && yourRight == friendsLeft ) 
          return true;
       else 
          return false;      

}
//console.log( areEquallyStrong(10,15,5,20)) 
//console.log( areEquallyStrong(5,20,20,5)) 
//Given an array of integers, find the maximal absolute difference 
//between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(arr) {

    maxdiff= 0;
    for( var i=0; i<arr.length-1; i++){
         if ( Math.abs(arr[i] - arr[i+1]) > maxdiff ){
            maxdiff = Math.abs(arr[i] - arr[i+1]);
         }
    }
   return maxdiff;
}

//console.log ( arrayMaximalAdjacentDifference([2, 4, 1, 0]))//3
//console.log ( arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]))//7

function isIPv4Address(str) {  
   var  temp=str.split(".")       
   return temp.length===4&&temp.every(x=>x!=""&&!isNaN(x)&&x>=0&&x<256)
}
//Given a string, find out if it satisfies the IPv4 address naming rules.
//=====================================================================
function isIPv4Address2(str){
   return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(str);
}
str= "172.16.254.1";//true
str0 = "300.16.254.1"//false
str1 = ".216.254.1";//fasle
str2 = "1.254.055.100"//false
str3 = "1A.1.1.1"; //false
str4 = "64.233.100.00"//FALSE
str5 ="1.1.1.1.1"//false
str6 = "0.254.255.0"//true;
str7 ="01.233.161.131";//fasle
//console.log (isIPv4Address(str4)) 

function avoidObstacles(arr) {
   for(var n=1;;n++){
      if(arr.every(x=>x%n)) 
             return n
   }    
}
//console.log( avoidObstacles([5, 3, 6, 7, 9]) );//4
//console.log( avoidObstacles([2,3]) ); // 4
//console.log( avoidObstacles([1, 4, 10, 6, 2]) );//7
//onsole.log( avoidObstacles([1000, 999]) );//6

function fabi(n){
   res = [0,1];
   
      if ( n < 2) return 1;
      for ( var i=2; i<=n; i++){
           res[i] = res[i-1]+res[i-2];
      }
      return res[n];
   }
//console.log (fabi(8))
function sumto(n){
    var sum =0;
    sum = ((n+1)*n)/2
    console.log(sum)
}
//sumto(5)
function isPrime(n){
   var dividor =2;
   while( n>2 ){
      if (n%dividor ==0 ) return false;
      else dividor++;

      return true;
   }
}
function findprimeupto(n){
var res =[];
   for ( var i=0; i<=n; i++){
       if(isPrime(i)){
          res.push(i)
       }
   }
   console.log(res)
}
//findprimeupto(47)
function gcd(a,b){

   while(b!=0){

      temp = a;
      a=b;
      b=temp%b;
   }
   console.log(a)
}   
//gcd (264, 32)
function isSort(arr){
    for ( var i=0; i<arr.length; i++){
      if ( arr[i]> arr[i+1]) return false
    }
   
    return true;
}

//console.log(isSort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53]));//false
function findMax(arr){
var maxval=arr[0];
     for ( var i=1; i<arr.length; i++){
      
          if ( arr[i] > maxval){            
             maxval = arr[i];
         }
     }
   return maxval;
}
//console.log(findMax([6, 20, 8, 19, 56, 23, 87, 41, 49, 53]))
function findfirstsecond(arr){

   var first= arr[0], second=arr[1];

   for ( var i=2; i<arr.length; i++){
      if ( arr[i]>first ){
         second = first; //push fist to second
         first = arr[i];
       }else if( arr[i] > second ){   
         second = arr[i] 
      }
       else continue    
   }
   console.log("Largest: " +first + " Second: " +second)
}
//findfirstsecond([6, 20, 8, 19, 56, 23, 87, 41, 49])
////90.  find the nth greatest element of a given array of integers 
function find_nth_max( k, arr){
   var result=[];
   console.log("Find the " + k + " larget number from the array" )

      if ( k > arr.length ) return "Over exceed Array";

   for ( var i= 0; i<k; i++){
       var max_index = i, temp = arr[i];
       for ( var j= i+1; j< arr.length; j++){
           if( arr[j] > arr[max_index])
               max_index = j;            
       }
       console.log("largest " + arr[max_index])
       result.push(arr[max_index]);
       arr[max_index] = temp;
       console.log(result)
   }
   console.log ( result[k-1]);
}

//console.log(find_nth_max(2,[1,2,6,4,5]) )//5
//console.log(find_nth_max(6,[1,2,6,4,5,10,3,23]))//6
//===========================
//assuming arr are sorted
function bsearch(arr, n ){

   var Lidx =0, Uidx=arr.length-1, mid=0;
   while( Lidx <= Uidx){
        mid = Math.floor((Lidx + Uidx)/2);
        if ( n == arr[mid] ) return arr[mid];
        if ( n > arr[mid]){
           Lidx = mid+1;
        }else{
           Uidx = mid-1;
        }
   }
   if ( Lidx > Uidx) return "not found"   
}
//console.log ( bsearch([1,3,5,9,13,23,26,41,49,56,69], 49));
function reversestr(str){
  var res="";
   for ( var i =str.length-1; i>=0; i--){
       res += str[i];
   }
   console.log(res);
}
//reversestr("loop through the string")
function reversewordinplace(str){ // friend my hello
   var res=[], wlen=0;

    for ( var i =str.length; i>=0; i--){
          if ( str[i] == " " || i ==0 ){
                 res.push( str.substr(i, wlen+1) );
                 wlen =0;
          }else
                wlen++;
    }
    console.log(res.join(" "))  
 }

 //reversewordinplace("Hello my friend")// friend  my Hello
 
 function reverseword(str){ // I ma eht doog yob
   var res=[], wlen=0, temp="";

    for ( var i =str.length; i>=0; i--){
          if ( str[i] == " " || i ==0 ){
                 temp = str.substr(i, wlen+1).split('').reverse().join("");               
                 res.push( temp);
                 wlen =0;
                 temp ="";
          }else
                wlen++;
    }

    console.log(res.reverse().join(" ")) 
 }
 //reverseword("Hello my friends")//olleh ym sdneirf
//22. Remove a character at the specified position of a given string and return the new string. 
function remove_character(str, pos) {
  
   var start = str.substr(0, pos);
   var end = str.substr(pos+1)
   console.log(start+end)
       
}

//console.log( remove_character("Python", 1));//pthon
//console.log( remove_character("Python", 0));//ython
//50. capitalize the first letter of each word of a given string.
function capital_letter_n(str){

   var str =  str.split(" ") ;
   for (var i =0; i< str.length; i++ ){
       str[i] =  str[i][0].toUpperCase() + str[i].substr(1);
   }
   //console.log(str)
   return str.join(" ");
}
//console.log( capital_letter_n("convert the letters of a given string in alphabetical order"))
//================================================================================
function bloxBlur(image){
   let imageArr =[];
   for ( let y = 0; y < image.length-2; y++){
       let line=[];
       for ( let x =0; x<image[y].length-2; x++){
          let sum =0;
          for ( let a =y; a < y +3; a++){
                for (let b =x; b < x+3; b++){
                   sum += image[a][b];
                }
          }
          line.push(Math.floor(sum/9
            ));
       }
       imageArr.push(line);
   }
   return imageArr;
}
item0 =[[1, 1, 1], [1, 7, 1],  [1, 1, 1]]//[[1]]
item1 =[[0,18,9], [27,9,0],  [81,63,45]]//[[28]]
item2 = [[36,0,18,9], [27,54,9,0],  [81,63,72,45]] //[[40,30]]

//console.log( bloxBlur(item2))
/*
insert a[0] to b[0]  a[0]
       a[lastidx] to b[1] a[lastIdx]
       a[1] to b[2]  a[1]
       a[len-1] to b[3] a[lastIdx-1]
 
*/
function alternatingSort(a) {
   var len = a.length;
   var b=[];
   var temp =0;
   if ( len%2 ==1 ){
      temp = Math.ceil (len/2); 
      console.log(temp) 
   }else{   temp = (len)/2;}

   for (var i=0; i<=temp-1; i++){
         b[2*i] = a[i];
      if(i!=temp-1)
          b[2*i+1] = a[len-1-i];  
      else
         b[2*i+1] = a[len-1-i];        
   }
    console.log(b)
}

//console.log (alternatingSort( [1, 4, 5, 6, 3]) ) //fals

//console.log (alternatingSort( [5, 3, 8, 6, 7, 9,10,1,2]) )

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
function groupsamemean(a){
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
                 k++;
                 res1[m][k] =b[j][1];
                   
            }else{ 
               i=j-1;
               m=m+1;  
               k=0;
               break;
            }                    
         }   //inner for   s
      }//outer for  
  return res;
}

groupsamemean([[3, 3, 4, 2],[4, 4], [4, 0, 3, 3], [2, 3],[3, 3, 3] ])
function groupsame(b){
   b = b.sort();
   console.log (b)
   var res = [];
   var m=0;//for element use
        var k=0;  
   for ( var i=0 ; i<b.length; i++) { 
           
         /*  if(!res[m]){      
           res[m]=[]; 
           }   */  
           res[m]=[];   
           res[m][k]= b[i][1];
          
        for ( var j=i+1; j<= b.length-1; j++){  
                     
           if (b[i][0] == b[j][0]){    
                k++;
                res[m][k] =b[j][1];
                  
           }else{ 
              i=j-1;
              m=m+1;  
              k=0;
              break;
           }                    
        }   //inner for   s
     }//outer for
 
 return res;
}
//============================================================

// groupsame( [ [0,3],[1,4],[2,2.5], [3,2.5], [4,3]] )
//console.log(groupsame( [ [ 2.5, 2 ], [ 2.5, 3 ], [ 3, 0 ], [ 3, 4 ], [ 4, 1 ] ] ))
