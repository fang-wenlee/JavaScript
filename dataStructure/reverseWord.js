
function rw(str){
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
//console.log("=====================");
//str = "loop through the string"
//console.log(rw(str));
function reverseInParentheses(str) {
 
    while(true){
     var cp = str.indexOf(')');
     if ( cp === -1 ) break; 
     var op = str.substring(0, cp).lastIndexOf("(");

     var start = str.substring(0, op);
     var mid = str.substring(op+1, cp).split("").reverse().join("");
     var end = str.substring( cp+1, str.length)
     var str = start + mid + end;
    }

    return str;

}

str = "(bar)"
str1 ="foo(bar)baz"
//console.log ( reverseInParentheses(str1) )
//First non repeating char
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
str = 'the quick brown fox jumps then quickly blow air'
console.log( nonRepeat(str));
