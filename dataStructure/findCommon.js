function intersect(nums1, nums2) {
    const res = [], str="";
    const small = nums1.length < nums2.length ? nums1 : nums2   
    const big = nums1 === small ? nums2 : nums1             
  
    for (let num of small) {                  
      let idx = big.indexOf(num) 
      //console.log(idx) 
      //if(~idx)              // Check the location of the number big list
      if (idx !== -1) 
     // console.log( big.splice(idx, 1))
       res.push(big.splice(idx, 1)) // If found, add to results, remove from big list    
    }
    return res                                    
}

var findComElement = function (arr1, arr2){
   var res=[], count=0;
   let small = arr1.length < arr2.length? arr1 :  arr2;
   let large = arr1 === small ? arr2: arr1
    
   for( let s of small){
         let idx = large.indexOf(s) 
         if( idx !== -1){
           count++;
           res.push( large.splice(idx,1))
         }   
     }

   return res
}


arr1=[1,2,2,1]
arr = [2]
arr2 = [2,2]
arr3 = [1,2]
arr4=[1,1]
num = [4,9,5]
num1 = [9,4,9,8,4]
s1 = "aabcc" 
s2 = "adcaa"
//console.log( findComElement(arr1,arr3)) //[2]
//console.log ( intersect(arr1, arr2) )//[2,2]
//console.log ( intersect(num, num1))//[4,9]
//console.log ( intersect(s1, s2))//error
//10:  Given two strings, find the number of common characters between them.
//common character count
function commonCharacterCount(s1, s2) { 
    var str1 = s1.split(""), count=0;
    var res =[];
  // "aabcc" 
    while (str1.length){
      var t= str1.pop()
      if(s2.includes(t)){
        count++
        res.push(t);
        s2=s2.replace(t," ") //"adcaa" -- remove letter from s2 list       
      }
    }
    return res;

}
var commonChar = function(s1, s2){
   var res =[], count=0;
  for ( let s of s1){
      if (s2.includes(s)){
          count++
          res.push(s)
          s2=s2.replace(s," ")
      }
  }
  return count
}
s11 = "aabcc" 
s22 = "adcaa"
s1 = [1,2,2,1]
s2 = [2,2]
//console.log(commonChar(s11,s22))//aac
//console.log( commonCharacterCount(s11, s22))//[ 'c', 'a', 'a' ]
function findPrefix(arr){
  if(arr==null || arr.length ==0){
    return "";
}

if(arr.length == 1){
    return arr[0];
}

var i=0;
while(true){
    var flag = true;
    for(let j=1; j<arr.length; j++){ // ["flower","flow","flight"] 
        if(arr[j].length<=i || 
           arr[j-1].length <=i || 
           arr[j].charAt(i) != arr[j-1].charAt(i)){
            flag = false;
            break;
        }               
    }

    if(flag){
        i++;
    }else{
        break;
    }
}

return arr[0].substring(0, i);

}
var comPrefix = function(arr){
  var i=0;
      while(true){
          var flag = true;
          for(let j=1; j<arr.length; j++){ // ["flower","flow","flight"] 
              if( arr[j].charAt(i) != arr[j-1].charAt(i)){
                  flag = false;
                  break;
              }               
          }//for
      
          if(flag) i++;
          else  break;
        
      } //while
      return arr[0].substring(0, i);
  }

item = ["flowers", "flat", "flow", "flaut"]//fl
console.log ( comPrefix(item) )
//console.log ( findPrefix(item))
var longestCommonPrefix = function(arr) {
  let str = ""
  if(arr === null || arr.length === 0) return str

  for (let i=0; i < arr[0].length; i++){ 
      const char = arr[0][i] // loop through all characters of the very first string. 

      for (let j = 1; j < arr.length; j++){ 
        // loop through all other strings in the array
          if(arr[j][i] !== char) return str
      }
      str = str + char
  }

  return str
}
item = ["flowers", "oflat", "wflow"]
//console.log ( longestCommonPrefix(item) )