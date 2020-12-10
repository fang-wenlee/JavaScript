itemlist = [ 6,4,5]
function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubbleSort(arr){

    var len = arr.length,i, j;
    var result =[];
    for (i=0; i < len; i++){
        for (j=0; j < len-1; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    /*var result =[];
      var mymax = arr[arr.length-1];
     console.log ( mymax);
     for ( var j=0; j < arr.length; j++){
         if ( arr[j+1] - arr[j] !== 1 )
          result.push( arr[j]+1)          
     }
     console.log( result)
     */
    return arr;
}

function print(items)
{
    var str="";
    for(var i= 0; i<items.length; i++)
       str += items[i] + " ";
    console.log("========================");
    console.log( str );
       
}
item=[8,1,0,4,7];//4
item1=[0,3];//2
item2=[6,2,3,8]//3
item3= [3]; 
item4 = [5,4,6] // 0
item5 = [6,3] //2
   
console.log( bubbleSort(item2));
//print(item);

