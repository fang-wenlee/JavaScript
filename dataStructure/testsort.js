function QuickSort( arry, first, last){
	
	if ( first < last ){		
		pivot = partition( arry, first , last);
		QuickSort(arry, first , pivot-1 );
		QuickSort(arry, pivot+1, last  )
		
	}
}


function partition( arry, first, last){
	
    var	pivot = arry[first];
	var lowIdx = first +1;
	var upIdx = last;	
	var done= false;
	
	while(!done){
		
		while( lowIdx <= upIdx && arry[lowIdx] <= pivot){
			lowIdx++;
		}
		while( arry[upIdx] >= pivot && upIdx >= lowIdx){
			upIdx--;
		}
		if ( upIdx < lowIdx){
			done = true;
		}else{
			
			temp = arry[lowIdx];
			arry[lowIdx] = arry[upIdx];
			arry[upIdx] = temp;
		}
		// when the splic point is found, exchange pivot value
		 temp = arry[first];
		 arry[first] = arry [upIdx];
         arry[upIdx] = temp;		 
	}
     
	 return upIdx;
	
	
}


var items = [3,46,2,6, 20,18,19,5,56,4,87,41,1,49,3,53];
console.log(items.join(" "));
QuickSort(items, 0, (items.length-1) );
console.log(items.join(" "))


