itemList = [1,3,5,9,13,23,26,41,49,56,69];
//the arrary has to be sorted.
function binarySearch(item, itemList){

    var upperIdx = itemList.length -1;
    var lowerIdx = 0;

    while ( lowerIdx <= upperIdx ){
      var midPt =  Math.floor((lowerIdx + upperIdx )/2);
     //if item is found, return the idex 
      if ( itemList[midPt] == item ){ return midPt}
      if ( item > itemList[midPt] ){
             lowerIdx = midPt+1;
      } 
      else{
          upperIdx = midPt-1;
      }

    }
    
    if (lowerIdx > upperIdx) {return None;}
}
console.log( binarySearch(56, itemList));
