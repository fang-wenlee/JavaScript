function isPowerOfThree (num) {
  var i=1, res=0;
   while(true){
       if ( num ==1 ) return true;
       if ( num == 0 ) return false;
     var res =   Math.pow(3,i)
     if( res < num )
        i++;
     else if ( res == num )
         return true;
     else
        return false;
   }

};

n=27//true;
n1=0//false
n2= 9//true;
n3 = 45//false
n4 =1 //true
 
//console.log ( isPowerOfThree(n1) )
//Roman to Integer







