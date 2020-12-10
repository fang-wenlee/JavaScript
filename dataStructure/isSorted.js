item1 = [6,8,19,20,23,41,49,53,56,87]
item2 = [5,2,4,19,23,15,99,33,11,5,80]
item3 = [ 6,20,8,19,56,2,23,87,4,41,49,53]
item4= [1,2,3,4]
// check elements in array if it is in the order
function isSorted(itemlist){
//using the brute force method
for ( var i=0; i< itemlist.length; i++){
    if ( itemlist[i] > itemlist[i+1] )
        return false;
}

return true;
}
console.log(isSorted(item4));