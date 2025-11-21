var intersect = function(nums1, nums2) {
 var res=[];
    
var small = (nums1.length < nums2.length)? nums1 : nums2;
var large = (nums1 ===small)? nums2: nums1; 

        for ( let num of small){
                let idx = large.indexOf(num);
                if(~idx){
                   // large = large.splice(idx, 1)
                    //console.log(large)
                    res.push(large.splice(idx, 1))
                } 
            
        }
   return res
}
nums1 = [1,2,2,1]
nums2 = [2,2]
//console.log ( intersect( nums1, nums2))

function countCommonChar(s1, s2){
   var res ="", count=0;
   var str1 = s1.split("");
           
  while(str1.length){
        var tmp = str1.pop()
       if ( s2.includes(tmp) ){
            res += tmp+ " "
            count++;
            s2 = s2.replace(tmp, "")
       }                   
   }
   return res
}
s1 = "aabcc" 
s2 = "adcaa"

console.log( countCommonChar(s1, s2))//[ 'c', 'a', 'a' ]