itemList = [1,3,5,9,13,23,26,41,49,56,69];

function bs1( item, itemList){
	
	var lowIdx, upIdx;
	lowIdx = 0;
	upIdx = itemList.length -1;


	while( lowIdx <= upIdx ){
		var midIdx = Math.floor( (lowIdx + upIdx)/2);
		if ( item == itemList[midIdx]) return midIdx;
		if ( item > itemList[midIdx]){
			lowIdx = midIdx +1;
		}
		else{
			  upIdx = midIdx -1;			
		}	
	}
	if ( lowIdx > upIdx) return "None";
}


console.log(bs1(3, itemList));