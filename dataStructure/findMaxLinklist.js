
var arry = [6,100, 2,20,8,19,56,23,87,41,49,3, 99,53];

function find_Max(arry){
var opt1, opt2;

        if (arry.length == 1 ){
            return arry[0];
        } 

        opt1 = arry[0];
        console.log(arry.slice(1, arry.length))
        opt2 = find_Max(arry.slice(1, arry.length));

        if ( opt1 > opt2){
            return opt1;
        }else{
            return opt2;
        }

}

function print(arry)
{
    var str="";
    for(var i= 0; i<arry.length; i++)
       str += arry[i] + " ";
    console.log("========================");
    console.log( str );
       
}
//console.log( Math.max.apply(null, arry));

console.log(find_Max(arry));







