//Given a string, your task is to replace each of its characters by the next one in 
//the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
function alphabeticShift1(str){

    var res =""

    for ( var i=0; i< str.length; i++){
        if ( str.charCodeAt(i) == 122) res += 'a';
        else if( 96< str.charCodeAt(i) && str.charCodeAt(i) < 123) {
               res += String.fromCharCode(str.charCodeAt(i)+1)
        }

    }
   console.log ( res)
}
function alphabeticShift(s){
var res ="";
    for ( var i=0; i<s.length; i++){
        if ( s.charCodeAt(i) === 122){
             res += "a";
        }
        else if( s.charCodeAt(i) > 96 && s.charCodeAt(i)  < 123 ){
            res += String.fromCharCode( s.charCodeAt(i) +1 )
        }
    }
    return res
}

inputString = "crazy" // "dsbaz"
inputString2 = "z" //a
//console.log( alphabeticShift(inputString) )
//Reverse String; Write a function that reverses a string. The input string is
// given as an array of characters char[].

var reverseString = function(arr) {
    var temp;
     var len = arr.length-1, i=0;

    while (i < len)
    {
        temp = arr[i]; //first node
        arr[i] = arr[len];//lastnode
        arr[len] = temp;
        i++;
        len--;
    } 
    return arr
}
input= ["h","e","l","l","o"]
//console.log( reverseString(input))

function rS(str){
    var res="";
    for ( var i=str.length-1; i>=0; i--){
        res += str[i] + ""
    }
    return res
}
input= ["h","e","l","l","o"]
//console.log( rS(input))

function rString(str){
    var res="",tmp;
    var hlen = Math.floor ( str.length /2) -1;
    var len = str.length;

    for ( var i =0 ;i<= hlen; i++ ){
        tmp = str[i]
        str[i] = str[len-i-1]
        str[len-i-1] = tmp
    }
    return str
}
input= ["h","e","l","l","o"]
//console.log( rString(input))

//=============================
function rw( str ){
    var resultAry = [];
    var wLen =0;
    
    for (var i= str.length-1; i>=0; i--){
        if ( str[i] == ' ' || i ==0 ){
          resultAry.push( str.substr(i, wLen+1));
           wLen =0;
        }else{
            wLen++;
        }
    }
    
    return resultAry.join(' ');
    

}
str = "Good Morning Fang Wen" //Wen Fang Morning Good
str1 = "loop through the string" //string the through loop
//console.log( rw( str ))
//find First non repeating char//Unique
function nonRepeat(str){
    var elm, tmp=[];
        for ( var i=0; i< str.length; i++){
            elm = str[i];
           tmp[elm] = tmp[elm]? tmp[elm]+1 : 1
        }
        for ( elm in tmp ){
            if( tmp[elm] === 1)
               return elm
        }
       return -1;
    }
str = 'the quick brown fox jumps then quickly blow air' //f
//console.log( nonRepeat(str));

function firstDup(str){
      var elm, tmp=[];
      for ( let i=0; i< str.length; i++){
          elm = str[i];
          tmp[elm] = tmp[elm]? tmp[elm]+1: 1
      }
      for ( elm in tmp ){
          if (tmp[elm] !== 1)
             return elm
      }

      return -1

}
str = "abcddeg"
arr = [1,3,4,5,3]
//console.log( firstDup(arr) )
function removeDup(str){
    var elm, tmp=[], res=[];

    for ( var i=0; i< str.length; i++){
          elm = str[i]
          tmp[elm] = tmp[elm]?tmp[elm]+1: 1;
    }

    for ( elm in tmp){
        if( tmp[elm] === 1)
          res.push(elm)
    }
    console.log ( res.join(''))

}
str='Learn more javascript dude'//Lnmojvsciptu
str1 = "aabcdefdgh"//bcefgh
//removeDup(str1)
function chkPalindrome(str){

    var len = str.length;

    for ( var i=0; i< len/2; i++ ){
        if ( str[i] !== str[len-i-1])
            return false;
    }

    return true;

}
str = "madam"//true
str1 = 'toyota' //false
//console.log( chkPalindrome(str1))


//=========================
// Reverse Integer : 123 ==>321; -123=>-321
function reverse1(n) {
            var re = n.toString().split('').reverse().join('')
            return Math.sign(n) * parseInt(re); 
}
function reverse(num) {
    var rev_num = 0; 
    while(num > 0) 
    { 
        rev_num = rev_num * 10 + num % 10; 
        num = num / 10; 
    } 
    return rev_num; 
}

num=123
num1=-123
num2=1534236469

//console.log( reverse(num1))
//count words in a string
function countword(str){

    var count=1;

    for ( var i=0; i< str.length; i++){
        if ( str[i] == " "){    
            count++;
        }
    }
    return count;
}
str = "Hello Fang Wen"//3
str1 ="display prime numbers up to n"//6
//console.log( countword(str1))
//Implement strStr()
function strStr(a, b ){       
    var index = a.indexOf(b);
    if (index<0) 
        return -1;
    else 
       return a.substring(index);
      //return index    
}
s1 = "hello"
s2 = "ll"
s3 = "aaaaa"
s4 = "bba"
s5 = "aaa"
s6="aaaaa"
s7= "mississippi" // 4
s8 = "issip"
s9 = "a"
s10 = ""
//console.log ( strStr(s1, s2))
//common character count
function commonCharacterCount(s1, s2) { 
    var str1 = s1.split("")
    var  count=0;
    var res =[];
  // "aabcc" 
    while (str1.length){
      var t= str1.pop()
      if(s2.includes(t)){
        count++
        res.push(t);
        s2=s2.replace(t," ") //"adcaa"      
      }
    }
    return res.join("");

}
s11 = "aabcc" 
s22 = "adcaa"
s1 = [1,2,2,1]
s2 = [2,2]
//console.log( commonCharacterCount(s11, s22))//[ 'c', 'a', 'a' ]
//  Longest Common Prefix

function findprefix(arr){
 
  if( arr.length == 1) return arr[0];

   var j=0;
    while(true){
       var  flag=true;
        for ( let i=1; i< arr.length; i++){
            if ( arr[i].length<=j || 
                 arr[i-1].length <= j ||
                arr[i].charAt(j) !== arr[i-1].charAt(j) ){
                flag = false;
                break
                }   
        }
    
        if(flag){
            j++
        }else{
            break
        }
    }
    if( j > 1) return arr[0].substring(0, j)
    else return -1

}
item =  ["flower","flow","flight"] //fl
item1 = ["dog","racecar","car"]//notfind
item2 = ["dog"]//notfind
//console.log(lcprefix( item1 ))
//console.log( findprefix(item2) )

function findComPrefix(arr){
  
    var str ="", s="";
    for( var i=0; i< arr[0].length; i++){
        s = arr[0][i]
        for ( var j=1; j < arr.length; j++){
             if ( arr[j][i] !== s ) return str;
        }
        str = str + s;
    }

    return str;
}
item =  ["flower","flow","flight"] //fl
item1 = ["dog","racecar","car"]//notfind
//console.log ( findComPrefix(item1) )
//Reverse String: mondify in place

function reverseString(str){
 var temp;
    for ( var i=0; i< str.length; i++ ){
         temp = str[i];
         str[i] = str[str.length];
         str[str.length] = tmp;
    }

    return str;
}
str = ["h","e","l","l","o"] // ["o","l","l","e","h"]
//console.log( reverseString(str))