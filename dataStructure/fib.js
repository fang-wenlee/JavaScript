function fibo1( num ){
    var res = [0,1]
        if ( num <=2 ) return 1;

        for ( var i =2; i<=num; i++ )
            res [i] = res[i-1] + res[i-2]
        
  return res[num]
}
//console.log( fibo1(10) );
function firstUniqChar(s){

    for ( var i=0; i< s.length; i++){
        var j = s.charAt(i)
        if ( s.indexOf(j) === s.lastIndexOf(j)){
            console.log("Unique Char: " + j + " index at: " + s.indexOf(j) )
            return s.indexOf(j) ;
        }
  }

  return -1   

}

s = "leetcode" //0
s1 = "loveleetcode" //2
//console.log ( firstUniqChar(s1) )


function getUniqueFromArray(arr){
    return arr.filter(function(value){
              return arr.indexOf(value) === arr.lastIndexOf(value);
               })[0] || -1;
  }
  

  function uniques(nums) {//find all unqiques

   var elm;
   var result = [],  tmp = [];

    for (var i in nums) {
        elm = nums[i];
        tmp[elm] = tmp[elm] 
                 ? tmp[elm]+1 
                 : 1;
    }
    for (elm in tmp) {    
        if (tmp[elm] === 1) {
            console.log("1st unique: " + elm)
           // result[result.length] = elm;
            break;
        }
    }


   return elm;
}
//string
function firstDuplicate (a){
    a = a.split('')
    res = new Set()
    for (i of a)
        if (res.has(i))
            return i
        else{
            res.add(i)
            console.log(res) 
        }
           
    return -1
}


 item = [1,2,3,4,4,3,44,2,1,45]
  item1  =  [22, 25, 3, 3, 1, 2, 0, 0,100,22,25,1,2];
  //alert(getUniqueFromArray(A));

item2 = [5,2,5,2,9,8,5]
//console.log ( getUniqueFromArray(item2) )
//console.log ( uniques(item) )