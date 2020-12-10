//Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
function plusOne(d){

     var carry;

     for ( var i= d.length -1; i>=0; i-- ){
        carry = (d[i] + 1 === 10)? 1 : 0

             if( carry === 0 ){
                d[i] = d[i] +1;
                break
             }
             else 
                 d[i] = 0   
     }
     if (carry ===1 ) 
          d.unshift(1)
     
    return d
}
nums = [1,2,3]//[1,2,4]
nums1 = [3,2,1]//[3,2,2]
nums2 = [3,2,9]//[3,3,0]
nums3 = [9]
//console.log ( plusOne(nums3))

function twoSum(nums, target){
var res=[];
    for ( var i= 0; i< nums.length; i++){
         for ( var j = i +1; j< nums.length; j++){
              if ( nums[i] + nums[j] === target){
                  res.push(i,j)
                  
              }
         }
    }
    return res
   
}

nums = [2,11,7,15] 
nums1 =[1,7,11,2]
t = 9
//console.log ( twoSum ( nums, t))
function twosumcon( nums ,target){
   
     var res=[]
      for ( var i=0; i<nums.length; i++){
          if ( nums[i] + nums[i+1] === target ){
              res.push(nums[i], nums[i+1])
          }
      }

      return res;
}
nums = [2,11,7,15] 
nums1 =[1,7,11,2]
t = 18
console.log ( twosumcon ( nums, t))