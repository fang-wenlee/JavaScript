Question 1: How would you remove duplicate members from an array?
//===========count the unique element in arry ====================================
//=================================================
items = [1,1,2, 3, 5, 22, 22, 33, 33, 1, 5];
items = ["apple", "pear", "orange", "banana", "apple",
         "orange", "apple", "pear", "banana", "orange",
         "apple", "kiwi", "pear", "apple", "orange"]
function removeDup(ary){
	
	var resultAry =[];
	var elm;
	var count =0; 
	var exist={};
	
	for ( var i= 0; i< ary.length; i++){
		elm = ary[i];
	
		if ( !exist[elm]){
			resultAry.push(elm);
			exist[elm]= true;		
			count++;
		}
	}
	console.log("count: " + count)
	return resultAry;
}
removeDup(items);
//===========================================================
//==========================================
//==========================================
//==========================================
Question 2:  find the number of unique elements in an array.

items = [1,1,2, 3, 5, 22, 22, 33, 33, 1, 5];
function elmCount( ary ){
	
	
	var resultAry =[];
	var elm, count=0;
	var exist={};
	
	for ( var i= 0; i< ary.length; i++){
		elm = ary[i];
	
		if ( !exist[elm]){
			resultAry.push(elm);		
			exist[elm]= true;
			count++;
		}
	}
	return count; 
	
}

elmCount(items) ==> 6

//==========================================
//==========================================
//========================================================
//=========================================================
Question 2: How do get nth Fibonacci number?

function fibo(n){
	var resultAry =[0,1];
	
	if ( n <=2 ) return 1;
	
	for ( var i=2; i<=n; i++){
		resultAry[i] = resultAry[i-1] + resultAry[i-2];
	}
	return resultAry[n];
}
fibo(10); =>55
fibo(9); => 34
//==========================================
//==========================================
//=======================================================
//========================================================
Question 3: How would you verify a prime number? check 2,3, 5
can only divide by 1 and itself

function isPrime(num)
{
	
  var divisor =2;
  
    while ( num > divisor){
         if ( num%divisor == 0 ) return false;
	     else
			 divisor++;
	}
	return true;
	
}
isPrime(3) ==> true;
isPrime(9) ==> false;



//==============================================
//==============================================
//=============================================================
//==========================================
Question 4: How could you find all prime factors of a number?
eg. 2, 3, 5, 7
function findPrime(num){
	
	var divisor = 2;
	var resutlAry =[];
	
	
	while(num >= 2){
	if ( num % divisor == 0 ){
		resutlAry.push(divisor)
		num=num/divisor;
	}else{
	divisor++;}
    }
  return resutlAry;
}
findPrime(69); ==> [3,23]
//==========================================
function findPrmeFactor(num){
	var divisor =2;
	var result =[];
	
	while (num >2){	
	         if (num%divisor == 0){
				 result.push(divisor);
				 num = num/divisor;
			 }
			 else{ divisor++;}
	     }

     return result;	
}
//==========================================
//==========================================
//===============================================
//===============================================
Question 5: How would you find the greatest common divisor of two numbers?
Method 1:
Euclid Algorithm to calculate the greatest common denominator of two interger number
GCD is the largest integer that divide both number withouot  leaving remminder

function gcd(a,b){
	
	var t;
	while ( b != 0)
	{
	t =a;
	a =b;
	b = t%b;
	}
	return a;
}

gcd (264, 32)


//==========================================
//==========================================
//==========================================
//==========================================
//----------------------------------------------
function gcd(a, b){
	
	var divisor =2;
	var greatesDivisor =1;
	
	if ( a < 2 || b < 2) return 1;
	while ( a >= divisor && b >=divisor){
	if ( a%divisor ==0 && b%divisor ==0 ){
		greatesDivisor = divisor;
	}	
	divisor++;
	}
}
//==========================================
//==========================================
//=====================================================
//================================================
Question 6: find the list is sorted or not

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
function isSorted(itemlist){
	
	for ( var i=0; i< itemlist.length; i++){
		
		if ( itemlist[i] > itemlist[i +1]){
			return false;
		}
	}
	
	return true;
}
//==========================================
//===========================================
//==========================================
//==========================================
Question 7: bubbleSort for an unorderlist

itemlist = [ 6,20,8,19,56,23,87,41,49,53];
function swap(arr, fIdx, sIdx){
	
	var temp = arr[fIdx];
	arr[fIdx] = arr[sIdx];
	arr[sIdx] = temp;
}

function bubbleSort(arr){
	
	 for ( var i=0; i< arr.length; i++ ){
		 for ( j=0; j< arr.length-1; i++){
			 if ( arr[j] > arr[j+1] ){
				 swap ( arr, j, j+1 );
			 }
		 }
	 }		 
	return arr;	 
	
}
//==========================================
//==========================================
//===========================================
//============================================
QUESTION 8: BINARYSEARCH -- ORDERLIST
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
//----------------------------------------

console.log(bs1(3, itemList));
itemList = [1,3,5,9,13,23,26,41,49,56,69];
function bs( val, arr){
	var lowIdx =0, upIdx = arr.length;
	
	while ( lowIdx <= upIdx ){
			midpt = Math.floor((lowIdx + upIdx)/2);
			
			if ( val == arr[midpt] ) return midpt;
			if ( val > arr[midpt]){
				lowIdx = midpt +1;	 
			}else{			
				upIdx = midpt -1;
			}
			
	}
	if ( lowIdx > upIdx ){ return "no found"}
	
	
}
//==========================================
//==========================================
//=============================================================
//====================================================================
Question 9: merge two sorted array

item1=[3,8,9,22,23];
item2=[1,4,7,10];

function merge( left, right){
	
	var rightIdx =0, leftIdx=0;
	var resultAry=[];
	 while( leftIdx < left.length && rightIdx < right.length ){
		 if ( left[leftIdx] < right[rightIdx] ){
			 resultAry.push(left[leftIdx]);
			 leftIdx++;
		 }
		 else{
			 resultAry.push(right[rightIdx]);
			 rightIdx++;
		 }	 
	 }

	while(leftIdx < left[leftIdx]){	
		  resultAry.push(left[leftIdx]);
		  leftIdx++;
	}
	
	while(rightIdx < rightIdx[rightIdx] ){
		 resultAry.push(right[rightIdx]);
		  rightIdx++;
	}
	
	return resultAry;
	
}
//==========================================
//==========================================
//=================================================
Question 10: reverse a string in JavaScript
loop through the string and concatenate letters to a new string

function reverseStr(str){
	var rtnStr = "";
	
	for (var i = str.length -1; i>=0; i--){
		
		rtnStr = rtnStr + str[i];
	}
	return rtnStr;
}
//==========================================
//recursive 
function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

str = "loop through the string"
function reverse(str){
  if(!str || str.length <2) return str;
  
  return str.split('').reverse().join('');
}
//=============================================
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
  console.log(str.substr(0));
// expected output: "Mozilla"
//================================

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
//==========================================
//============================================
//==========================================
//==========================================
//==========================================
QUESTION 11: reverse words in sentence ==> expect answer [ friend my Hello]
//loop from the end of the string to the 1st of letter
str = "loop through the string"
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
//==========================================
str1 = "Hello Fang"; 
function rw(str){
	var result= [];
	var wLen = 0
	
	for ( var i = str.length-1; i>=0; i--){
		if ( str[i] == " " || i==0){
			result.push(str.substr(i, wLen+1));
			wLen=0;
			
		}else{
			wLen++;
		}
	}//for
	return result.join(" ");
	
}


//=======================================
//==========================================
//==========================================
//==============================================


function mergesort( unsortedarray){
	if ( unsortedarray.length <=1 ) return unsortedarray;
	
	var mid= Math.floor(unsortedarray.length/2);
	
	var left =  unsortedarray.slice(0, mid);
	var right = unsortedarray.slice(mid);
	console.log("left: ", left, "length: ", left.length);
	console.log("right: ", right, "length:", right.length );
	console.log("----------------------------");
	return merge( mergesort(left), mergesort(right));
	
}
function merge(left, right ){
	 var leftIdx = 0;
	 var rightIdx = 0;
	 var result =[];
     while( leftIdx < left.length && rightIdx < right.length) {
		 
		 if ( left[leftIdx]  <  right[rightIdx] ){
			 result.push(left[leftIdx]);
			 leftIdx++;
		 }
		 else{
			 result.push(right[rightIdx]);
			 rightIdx++;
			 
		 }
	 }
	 while(leftIdx < left.length){
		 result.push(left[leftIdx]);
		leftIdx++; 
	 }
	 while(rightIdx < right.length){
		 
		result.push(right[rightIdx]);
		rightIdx++; 
	 }
	
}

//===============================================
//===============================================
//===============================================
function isSorted(itemlist){
    //using the brute force method
    for ( var i=0; i< itemlist.length; i++){
        if ( itemlist[i] > itemlist[i+1] )
            return false;
    } 
    return true;
}
function mergesort(unsortArry){
	
	//check if arry is sort or not
	if (unsortArry.length <= 1)return unsortArry;
	if ( !isSorted(unsortArry)){
		var mid = Math.floor( unsortArry.length /2 );
		const left = unsortArry.slice(0, mid);
		const right = unsortArry.slice(mid)
		
		console.log("left: ", left, "length: ", left.length);
    console.log("right: ", right, "length:", right.length );
    console.log("----------------------------");
		mergesort(left);
		mergesort(right);
	}
	else{
		return " array is sorted"
	}	
	
}
//========================================================
//===============================================
//===============================================
//===============================================
Question 13: Implement Queue
class Queue { 
    // Array is used to implement a Queue 
    constructor() { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    // enqueue(item) 
    // dequeue() 
    // front() 
    // isEmpty() 
    // printQueue() 
    enqueue(element) {     
        this.items.push(element); 
    }    

    dequeue() { 
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 
    } 
    front() {  
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
   } 
    isEmpty() { 
        
        return this.items.length == 0; 
    } 

    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 

} 
Question 14: Implement Stack=======================
//===============================================
//===============================================
//===============================================
//===============================================

//first in last out
class Stack{
	
	constructor(){
		this.items = [];
	}
	push(element){
		return this.items.push(element);
	}
	isEmpty(){
		return this.items.length == 0;
	}
	
	pop(){
      if ( this.items.length == 0 ){
          return "Underflow"
      }
      return this.items.pop();
    }
	toppeak(){// last one
		return this.items[this.itmems.length-1]; 
	}
	printstack(){
    var str="";
        for(var i= 0; i<this.items.length; i++)
          str += this.items[i] + " ";
     return str;     
    }
	
}
//===============================================
//===============================================
//==================================
//===============================================
Quesiont 15: Finding  Max Values in Array
var itemList = [6,2,20,8,19,56,23,87,41,49,3,53];
function find_Max(arry){
	
}
//Return the Largest Numbers in a Array
// With Built-In Functions 
var itemList = [6,2,20,8,19,56,23,87,41,49,3,53];
Math.max.apply(null, itemList);
=========================
var itemList = [6,2,20,8,19,56,23,87,41,49,3,53];
function findMax(arr){
	
	var mxValue = arr[0];
	
	for ( var i=1; i< arr.length; i++){
		if ( mxValue <= arr [i]){
			mxValue = arr[i]
		}		
	}
	return mxValue;
	
}
//===============================================
//================================================
//===============================================
//===============================================
Quesiont 16:  Counting total number of unique element in array

var item1 = [1,1,2, 3, 5, 22, 22, 33, 33];
var item2 = [3,3,3,4,4,4,5,5,5,5,5,6];


function countUniqueValue(arr) {
	  var i = 0;
	  for ( var j=1; j< arr.length; j++){
		   if ( arr[i] !== arr[j]){
			   i++;
			   arr[i]= arr[j];
		   }//if  
	  }//for
	   return i + 1; 
}
//===============================================
//===============================================
//===============================================
//==============================================
Quesiont 17:  Counting  number of unique element in array with newObj
var item1 = [1,1,2, 3, 5, 22, 22, 33, 33];  //6
function elmCount(arr){
	
	var newObj = {};
	var elm;
	
	for ( var i =0; i< arr.length; i++ ){
	     elm = arr[i];
	     if ( newObj[elm]){ //if element is already in obj
			 newObj[elm]++;
		 }else{
			 newObj[elm] =1;
		 }			
	}
	console.log( newObj);
	
}
//======================================
//=============================================
/// ================================
Binary Search in Sorted Array
solution: find the mid point and compare with lowIdx and upIdx 
itemList = [1,3,5,9,13,23,26,41,49,56,69];

function bs(item, arr){
	var lowIdx =0;
	var upIdx = arr.length;
	var midpt=0;
	
	while( lowIdx <= upIdx ){
	    midpt = Math.floor((lowIdx + upIdx ) /2);
		if ( item == arr[midpt] ) return midpt;
		if ( item > arr[midpt]){
			lowIdx = midpt+1;
		}
		else{
			upIdx = midpt-1;
		}
    }//While
	
	if ( lowIdx > upIdx) return "not found";
	
}

//======================================
//=======================================
//++++++++++++++++++++++++++++++++++++++
Question: 17 QuickSort
var items = [3,46,2,6, 20,18,19,5,56,4,87,41,1,49,3,53];
function quickSort(unsortArry){
	
	var left= [];
	var right = [];
	var result =[];
	var pivot = unsortArry.pop();
	var length = unsortArry.length;
	if ( length <=1) return unsortArry;
	else{
		for ( var i =0 ; i < length; i++){
			
			if ( unsortArry[i] <= pivot){
				left.push(unsortArry[i]);
			}
			else{
				right.push(unsortArry[i]);
			}
		}//for
		return	result.concat(quickSort(left), pivot, quickSort(right));
	}

	
}
//==============================================
//============================================
//============================================
Quick Sort solution 2;
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
undefined
QuickSort(items, 0, items.length-1)

//================================================
quick sort : solution 
var items = [3,46,2,6, 20,18,19,5,56,4,87,41,1,49,3,53];
function quickSort( arry){
	
	
	
	
	if (arry.length <=1) return arry;
	else{
		var resultArry = [];
		var left =[];
		var right = [];
		var pivotIdx = arry.pop();
		var length = arry.length; 
		
		for (var i=0; i< length; i++ ){
			if ( arry[i] <= pivotIdx ){
				left.push(arry[i]);
			}else{
				right.push(arry[i]);
			}
		}//for
		return resultArry.concat( quickSort(left), pivotIdx, quickSort(right));
	}//else
	
}
console.log(items.join(" "));
console.log(quickSort(items));




//======================================================
//====================================================
count the number of Unique element in sorted array

var item1 = [1,1,2, 3, 5, 22, 22, 33, 33];
var item2 = [3,3,3,4,4,4,5,5,5,5,5,6];

function countElement (arry){
	
	var i=0;
	
	for ( var j =1; j < arry.length; j++){
		if ( arry[i] != arry[j]){
			i++;
			arry [i] = arry[j];
		}	
	}	
	
	return i+1;
}



///Rever a words==================================
str = "Hi Keep up your spirit" 
str1= "Hi, Good Morning"
function reverseword(str){
	var wLen=0;
	var result=[];
	for ( var i = str.length; i >=0; i-- ){
		  if ( str[i] = ' ' || i == 0 ){
			  result.push(str.substr( i, wLen+1));
			  wLen=0;
		  }else{
			  
			  wLen++;
		  }	
	}
	return result.join('');
}

//=======================================

count the number of Unique element in sorted array

var item1 = [1,1,2, 3, 5, 22, 22, 33, 33];
var item2 = [3,3,3,4,4,4,5,5,5,5,5,6];

function countElement (arry){
	
	var i=0;
	
	for ( var j =1; j < arry.length; j++){
		if ( arry[i] != arry[j]){
			i++;
			arry [i] = arry[j];
		}	
	}	
	
	return i+1;
}

//==================================================
//==========================================================
itemlist = [ 6,20,8,19,56,2,23,87,4,41,49,53]
function swap( arr, firstIdx, secondIdx){
	
	var temp;
	temp = arr[firstIdx];
	arr[firstIdx] = arr[secondIdx];
	arr[secondIdx] =temp;
}

function bubbleSort(arr){
	
	
	
	for ( var i=0; i< arr.length; i++){
		for ( var j= 0; j< arr.length -1; j++){
			if (arr[j] > arr[j+1]){
				swap( arr, j, j+1 )
			}
			
		}
	}
 return arr;
}
//==============================================
linklist = head and tail
class Node{
	constructor(element){
		  this.element = element;
		  this.next = null;
	  }

}

class Linklist{
   constructor(){
       this.head = null;
       this.count = 0;
   }
   addB(element){
    var node = new Node(element);
    //check to see the first node -> head
    if (this.head == null){
        this.head = node;
    }else{
                    
        this.head = node;
        node.next = this.head;
    }
    this.count++;
}

addE(element){
    var node = new Node(element);
    var current;
    
    if ( this.head == null){
         this.head = node;
    }else{
        current = this.head;			
        while(current.next){
            current =current.next;
        }//while
            current.next = node;      		
       }	 
	this.count++;		
  }	
  
  insertAt(element, idx){
	  
	  var node = new Node(element);
	  if ( idx < 0 || idx > this.count) return false;
	  else{
		  var current, prev;
		   current = this.head;
		  if ( idx == 0) { 
				  this.head = node;
				  node.next = curent;
		  }else{
			  
			  while( i < idx ){
				  i++;
				  prev 
			  }
			  
		  }
		  
		  
	  }
	  
	  
	  
	  
  }
  removeAt(idx){
	  if ( idx < 0 || idx > this.count ) return -1;
	  else{
         var current, prev, i=0; 		  
	     var current = this.head;
		 		 
		  if ( idx == 0){
			  this.head = current.next;
		  }else{
			  while ( i < idx ){
				  i++;
				  prev = current;
				  current = current.next
			  }
			  prev.next = current.next;
		  }
		  
		  
		  
		  
	  }
	  
  }
  removeElement(element){
	  var prev =null;
	  var current = this.head;
	  
	  while(current!=null){		  
		  if (current.element == element){
			  if (prev = null ){//first node
				  this.head = current.next; 				  
			  }else{
					prev.next = current.next;	  
			  }
			  this.count--;
			  return current.element;
		  }//if  
		  
		  prev = current;
		  current = current.next 
		}//while  
		  
	 
		  
  }
  printlist(){
	    var str = " ";
		var current = this.head;
		
		while( current != null){
			str = str + current.element + " ;
			current = current.next;
		}
	  
	  
  }
  
printList() { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
}


}

var list = new Linklist(); 

list.addB(1);
list.addB(2);
list.addB(3);
list.addB(4);

console.log(list.printList);

//===========================================
//=============================================

var items = [3,46,2,6, 20,18,19,5,56,4,87,41,1,49,3,53];
function quickSort(unsortArry){
	
	var left= [];
	var right = [];
	var result =[];
	var pivot = unsortArry.pop();
	var length = unsortArry.length;
	if ( length <=1) return unsortArry;
	else{
		for ( var i =0 ; i < length; i++){
			
			if ( unsortArry[i] <= pivot){
				left.push(unsortArry[i]);
			}
			else{
				right.push(unsortArry[i]);
			}
		}//for
		return	result.concat(quickSort(left), pivot, quickSort(right));
	}

	
}
//============================================================
//============================================================
//90.  find the nth greatest element of a given array of integers 
function find_nth_max( k, arr){
   var result=[];
   console.log("Find the " + k + " larget number from the array" )
   console.log("original array: "  + arr);
      if ( k > arr.length ) return "Over exceed Array";

   for ( var i= 0; i<k; i++){
       var max_index = i, temp = arr[i];
       for ( var j= i+1; j< arr.length; j++){
           if( arr[j] > arr[max_index])
               max_index = j;
       }
       result.push(arr[max_index]);
       arr[max_index] = temp;
   }
   console.log ( result[k-1]);
}

console.log(find_nth_max(1,[1,2,6,4,5]) )

//22. Remove a character at the specified position of a given string and return the new string. 
function remove_character(str, pos) 
 {
  part1 = str.substring(0, pos);
   console.log(part1);
  part2 = str.substring( pos + 1, str.length);
  console.log(part2);
  return (part1 + part2);
 }
 console.log( remove_character("Python", 1));
 
 //=========================
 
   var firstStr = str.substring(0, pos);
   var lastStr = str.substr(pos+1);
//50. capitalize the first letter of each word of a given string.

function capital_letter_n(str){

   var str =  str.split(" ") ;
   for (var i =0; i< str.length; i++ ){
       str[i] =  str[i][0].toUpperCase() + str[i].substr(1);
   }
   console.log(str)
   return str.join(" ");
}
//52. convert the letters of a given string in alphabetical order.
function alphabet_order(str){

    return str.split('').sort().join(' ');
}
//81. add two digits of a given positive integer of length two
function add_two_digits(n)
{
    return n % 10 + Math.floor(n / 10);
}
console.log(add_two_digits(25))
console.log(add_two_digits(50))
//84. replace each character of a given string by the next one in the English alphabet.
function alphabet_char_Shift(str) {
  var all_chars = str.split("");
  for(var i = 0; i < all_chars.length; i++) {
    var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
    n = (n + 1) % 26; 
    all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
  }
  return all_chars.join("");
}
 //96. Write a JavaScript program to compute the sum of absolute differences of 
  //    consecutive numbers of a given array of integers.
  item=[1,2, 3, 2, -5]
   function sum_difference( arry ){

        var sumres =0;
        for ( var i=0; i< arry.length-1; i++){
             sumres +=   Math.abs( arry[i]-arry[i+1]);
        }
         //console.log(sumres);
        return sumres;
   }
  function sum_difference(arry){
	var sum=0;  
	  for ( var i=0; i< arry.length; i++ )
		    sum= sum+ Math.abs( arry[i] - arry[i+1]);
		
   return sum;		
  } 
   

  // console.log(sum_difference(item))
   //console.log(sum_difference([1,4,5,1,2,4]))
   //=================================================
   //=================================================
   //91. find the maximum possible sum of some of its k consecutive numbers (numbers that 
//follow each other in order.) of a given array of positive integers.
function array_max_consecutive_sum(arry, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
        temp_sum += nums[i];
    }
  for (var i = k - 1; i < nums.length; i++) {
    temp_sum += nums[i];
    if (temp_sum > result) {
      result = temp_sum;
    }
    temp_sum -= nums[i - k + 1];
  }
  return result;
}

//===================================
//100. check whether there is at least one element which occurs in two given sorted arrays of integers.
function check_common_element(arr1, arr2) {
    for ( var i=0; i< arr1.length ; i++){

        if (arr2.indexOf(arr[i]) != -1 )
          return true;
    }
  return false
}

//=========================================
/98. Write a  program to switch case of the minimum possible 
 number of letters to make a given string written in the upper case 
or in the lower case. ----- my solution 

function converStr1( str ){
    var countU =0, countL=0;
  
    for ( var i= 0; i< str.length; i++ ){
        var upper = /[A-Z]/;
     

        if (upper.test(str[i]) ) {countU++;}
        else{ countL++;}
       
    }
    if ( countU > countL)
        return str.toUpperCase();
    else   
         return str.toLowerCase()

}
//console.log(converStr1("Write"))
//console.log(converStr1("PHp"))
//140.  check whether all the digits in a given number are the same or not.
function test_same_digit(num) {
  var first = num % 10;
  while (num) {
    if (num % 10 !== first) return false;
num = Math.floor(num / 10);
  }
  return true
}

console.log(test_same_digit(1234));
//===============================================
function remove_duplicate_chars(str) {

    var arr = str.split("");
    
       var elm, exist={}, result=[];
    
    // assign arry to obj
        for ( var i=0; i< arr.length; i++){
            elm= arr[i];
            //isU =true;
            if (!exist[elm]){               
                exist[elm] = 1;              
                     
            }else{
                exist[elm]++; }
        } 
            
         for ( var k in exist) {         
                if ( exist[k] == 1){
                     result.push(k);   
                    // console.log(k + ":" + exist[k])
                 }             
         }
      
   return result.join("");      
           
        //const vals = Object.values(exist);
        //const keys = Object.keys(exist);
        //console.log(vals);
        //console.log(keys);
      
       // console.log(result);
       // console.log("================================");
    
        //console.log(mymax);
  
  }
 // console.log(remove_duplicate_chars("abcdabc")); //d
  console.log(remove_duplicate_chars("python"));  //python
  console.log(remove_duplicate_chars("abcabc")); //
  console.log(remove_duplicate_chars("1365451"));//364
//136. Replace the first digit in a string (should contains at least digit) with $ character.
function replace_first_digit(str) {
 return str.replace(/[1-9]/, '$')

}

//================================================================
//sum of even of given number
function sumEven(n){
	var sum=0;
    var curr=2;
	for ( var i=1; i<=n; i++){
		 sum += curr;
		 curr +=2;
	}
	return sum;
}
sumEven([2,4,6,7,10])
// =====================================

function gcd(a,b){
	var temp;
   	while( b!=0){}
	temp = a;
	a =b; 
	b = temp%b;
	
	return a;
}
//===============================================
const arr = {lst1: 300, lst2: 381, lst3: 4, lst4: 4, lst5: 49};
const lowestValue = Math.min(...Object.entries(arr).map(o => o[1]));

console.log(lowestValue);

//================================================
//Given a sequence of integers as an array, determine whether it is possible to obtain a strictly 
//increasing sequence by removing no more than one element from the array.
function almostSequence(arr) {
 var count=0;
   for ( var i=0; i< arr.length; i++ ){
    
       if ( arr[i+1] - arr[i] <=0  ){
          if ( arr[i+1] - arr[i-1] <=0  )
                count++  
         count++;
      }  
      
   }
   if ( count <= 1) 
       return true;
   else 
      return false;

}
///=================================================
//Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) { 
    var count = 0;
    while(s1.length && s2.length){
        if(s2.includes(s1.charAt(0))){
            count++;
            s2 = s2.replace(s1.charAt(0),"");                  
            s1 = s1.slice(1);
        }
        else {
            s1 = s1.slice(1);
        }
    }
   
     console.log(count)
 }
 
 //commonCharacterCount("aabcc", "adcaa") //3
//commonCharacterCount("zzzz", "zzzzzzz")//4
//commonCharacterCount("abca", "xyzbac")//3
//commonCharacterCount("a", "b")
//commonCharacterCount("a", "aaa")
 //============================================
 //Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the 
 //first half of the digits is equal to the sum of the second half.

function isLucky(num){
         
             var sumFirst =0, sumSecond =0;
             var snum =  num.toString();
             for ( var i=0; i< snum.length; i++ ){
                if ( i < snum.length/2 ){
                      sumFirst += parseInt( snum[i]);
                      //console.log(sumFirst);
                }
                else  {
                sumSecond += parseInt(snum[i]);
               // console.log(sumSecond)
                }
            }
     
        return sumFirst == sumSecond
 
}
//console.log(isLucky(1230))


//Remove a character at the specified position of a given string and return the new string. 
function remove_character(str, n){
    

    var first = str.substring(0, n);
    var last = str.substring(n+1, str.length);
    return first.concat(last);
    }
 //console.log( remove_character("Python", 0)); //ython


// console.log( remove_character("Python", 0)); //ython
 //console.log( remove_character("Python", 3)); //pyton
 //console.log( remove_character("Python", 5)); //pytho
//=================================================================
//==============================================================
//Some people are standing in a row in a park. There are trees between them which cannot be moved. 
//Your task is to rearrange the people by their heights in a non-descending order without moving the 
//trees. People can be very tall!

function sortBy(arr) {
    var sortarr = [];
    var idxarr = [];
    var k=0;
    console.log("ARR  =  "+ arr)
    sortarr = arr.filter( p => p > 0 ).sort((a,b)=> a-b );
    console.log("Sort: " +sortarr)
     for ( var i=0; i<arr.length; i++ ){
         
         if ( arr[i] !== -1){         
            arr[i] = sortarr[k];
            k++;
         }//if    
     }     
     console.log("After: " +arr) 
     return arr;
}
sortBy(item)
origianl: 23,1,12,-1,-1,3,2,20,-1,19,-1,3,4
sorted: 1,2,3,-1,-1,3,12,19,-1,20,-1,23,4

//=================================================================================
//Write a function that reverses characters in (possibly nested) parentheses in the input string.
//Input strings will always be well-formed with matching ()s.

//reverseInParentheses("foo(bar)baz");//foorabbaz
//reverseInParentheses("foo(bar(baz))blim")


function reverseInParentheses(str) {
   
    while (true) {
        let cp = str.indexOf(")"); 
       // console.log("close Parentheses: " +cp); 
        if (cp === -1) break;
        let op = str.substring(0, cp).lastIndexOf("(");
        let start = str.substring(0, op);
        let middle = str.substring(op + 1, cp).split("").reverse().join("");
        //console.log(middle)
        let end = str.substring(cp + 1, str.length);     
        str = start + middle + end;
    }
    //console.log(str);
    return str;
}
//You are implementing your own programming language and you've decided to add support
 //for merging strings. A typical merge function would take two strings s1 and s2, and return the 
 //lexicographically smallest result that can be obtained by placing the symbols of s2 between the 
 //symbols of s1 in such a way that maintains the relative order of the characters in each string.

//For example, if s1 = "super" and s2 = "tower", 
//the result should be merge(s1, s2) = "stouperwer".

//=======================================================
//==========================================================
Given an integer n and an array a of length n, your task is to apply the following mutation to a:
Array a mutates into a new array b of length n.
For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. 
For example, b[0] should be equal to 0 + a[0] + a[1].

function mutateTheArray(n, arr) {
   var b=[]; 
   for (var i=0; i<arr.length; i++){
       if ( arr.length == 1)  b[i] =  arr[i];
       else if( i == 0 )
        b[i] =  arr[i] + arr[i + 1];
       else if ( i == arr.length-1)
           b[i] = arr[i-1] + arr[i];
       else 
       b[i] =  arr[i-1] + arr[i] + arr[i + 1];
   } 
   return b;
}




//===================================================
//===================================================
Given an array of positive integers a, your task is to calculate the sum of 
every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string 
representations of a[i] and a[j] respectively.

For a = [10, 2], the output should be concatenationsSum(a) = 1344.
    a = [6,8]
a[0] + a[0] = 10 ∘ 10 = 1010,
a[0] + a[1] = 10 ∘ 2 = 102,
a[1] + a[0] = 2 ∘ 10 = 210,
a[1] + a[1] = 2 ∘ 2 = 22.
So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

For a = [8], the output should be concatenationsSum(a) = 88.

There is only one number in a, and a[0] ∘ a[0] = 8 ∘ 8 = 88, so the answer is 88.
function concatenationsSum(arr){
        var str ="";
        sum =0;
    for ( let i=0; i<arr.length; i++ ){
       for ( let j=0; j< arr.length; j++){
             str = arr[i].concat(arr[j]);
              sum += parseInt (str)
       }
    }//for

    console.log(sum)
}
//concatenationsSum([10,2])//1344
//concatenationsSum([6,8]) //308
//==================================

function addBorder(arr) {
    const width = arr[0].length + 2;
    const asterintics = '*'.repeat(width);
    return [
      asterintics,
      ...arr.map(i => `*${i}*`),
      asterintics
    ];

  }
console.log ( addBorder(["abc", "ded"]))  
//================================================
//Given the string, check if it is a palindrome.
function isPalindrome(str) {
    var len = str.length;
    for ( var i = 0; i< len/2; i++){
        if ( str[i] !== str[len-1-i])
             return false;
    }        
    return true;
}
console.log ( isPalindrome("aabaaa") //false
console.log ( isPalindrome("abcba") );//true;


//========================================
//Given a string, find out if its characters can be rearranged to form a palindrome.
function palindromeRearranging(str) {
   var len =  str.length;
   var elm, count= 0;
   var obj={};

   for ( var i= 0; i<str.length; i++){
       elm =str[i];
       if (!obj[elm]){               
           obj[elm] = 1;       
       }else{
         obj[elm]++;
       }      
   } 
 
    for ( var k in obj) {   
          console.log(obj[k])      
       if( obj[k]%2 !== 0 ) 
          count++;
     }             
   if ( count >1) return false;
   else return true;
      
}
//palindromeRearranging("aabb")

//You are given an array of integers. On each move you are allowed to increase exactly 
//one of its element by one. Find the minimal number of moves 
//required to obtain a strictly increasing sequence from the input
function arrayChange(arr) {
   var len = arr.length;
   var diff =0, sum=0;
            for ( var i=0; i<=len-2; i++){ 
               if ( arr[i] >= arr [i+1]){                     
                    diff  =  arr[i] - arr[i+1] +1;                
                    arr[i+1] = diff + arr[i+1] ; 
                    sum += diff;
                    diff=0;        
               } //if               
          }//for
         return sum;  
  }
  
//console.log (arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15])); //13
//console.log (arrayChange([1,1,1]));//3
//console.log (arrayChange([-1000, 0, -2, 0]));
//====================
//10. reverse in place
//reverseInPlace('I am the good boy'); // "I ma eht doog yob"
function reverseInPlace(str){
	
	
	   
}
//==========================================
/*
insert a[0] to b[0]  a[0]
       a[len] to b[1] a[lastIdx]
       a[1] to b[2]  a[1]
       a[len-1] to b[3] a[lastIdx-1]
 
*/
function alternatingSort(arr) {
  var len= arr.length, temp=0 , odd=0;
  var res=[];
    if ( len%2  == 1 ) {
        temp = Math. ceil( len/2 );
        odd=1;
       // console.log("temp: "+temp)
    }else{
        temp = len/2;
    }
    for ( var i=0; i<temp; i++){
        res[2*i] = arr[i];
        if( i != temp-1)        
          res[2*i +1] = arr[len-1-i]
        else {
          if(odd!=1)
            res[2*i +1] = arr[len-1-i]                                                                                                                                                        
        }
    }
  console.log(res)
}

//console.log (alternatingSort( [1, 4, 5, 6, 3]) ) //fals

//console.log (alternatingSort( [5, 3, 8, 6, 7, 9,10,1,2,80]) )

//Given a string, find out if its characters can be rearranged to form a palindrome.



======================================
mean(a[0]) = (3 + 3 + 4 + 2) / 4 = 3;
mean(a[1]) = (4 + 4) / 2 = 4;
mean(a[2]) = (4 + 0 + 3 + 3) / 4 = 2.5;
mean(a[3]) = (2 + 3) / 2 = 2.5;
mean(a[4]) = (3 + 3 + 3) / 3 = 3.

You are given an array of arrays a. Your task is to group the arrays a[i] by their mean values, so that arrays with equal mean values are in the same group, and arrays with different mean values are in different groups.
Each group should contain a set of indices (i, j, etc), such that the corresponding arrays (a[i], a[j], etc) all have the same mean. Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order, and the groups are sorted in ascending order of their minimum element.

a = [[3, 3, 4, 2],
     [4, 4],
     [4, 0, 3, 3],
     [2, 3],
     [3, 3, 3]]
the output should be

meanGroups(a) = [[0, 4],
                 [1],
                 [2, 3]]
				 
=====================================================
function groupsamemean(a){
  
    var b =[], k=0;

     for ( let i=0; i<a.length; i++){
         var sum=0
         for (let j=0; j<a[k].length; j++ ){
             sum += a[k][j];
         }
         b.push([sum/a[k].length, i])
         k++;
     }
     b =b.sort();
    //console.log(b.sort())
   var res =[];
   var m=0,k=0;
        for ( var i=0; i<b.length; i++){
              res[m]= [];
              res[m][k] = b[i][1];
              for ( var j=i+1; j<=b.length-1; j++ ){
                  if ( b[i][0] == b[j][0]){
                        k++;
                        res[m][k] = b[j][1];
                  }else{
                      i= j-1;
                      k=0;
                      m++;
                      break;
                  }
              }//for
        }//for
   return res.sort();
}

    
 console.log(   groupsamemean([[3, 3, 4, 2],[4, 4], [4, 0, 3, 3], [2, 3],[3, 3, 3] ]) )
 //=====================================================
 //don't add if there is 0 on top of it// assuming there are in same dimonsion
function matrixElementsSum(arr){
    var sum=0;
    console.log ( "Each element Length: " + arr[0].length)
    for ( var j=0; j<arr[0].length; j++){
        for ( var i=0; i<arr.length; i++){
               if ( arr[i][j] == 0 ){
                    break
               }else{

                  sum+= arr[i][j];
               }
        }   
    }
    return sum;
}

item0= [ [1,1,1,0], [0,5,0,1], [2,1,3,10]] //9
item1 = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] //9
item2 =[[1,1,1], [2,2,2], [3,3,3]]//18
item3 = [[1], [5], [0], [2]]//6
item4 = [[1,2,3,4,5]] //15
console.log( matrixElementsSum(item0));



				 
				 
				 You've created a new programming language, and now you've decided to add hashmap support to it. Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:

insert x y - insert an object with key x and value y.
get x - return the value of an object with key x.
addToKey x - add x to all keys in map.
addToValue y - add y to all values in map.
To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.