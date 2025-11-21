const anObj = { 100: 'a', 2: 'b', 7: 'c' };

var arryEntries = Object.entries(anObj);
console.log( arryEntries);
//for ( const prop in anObj){
//    console.log(`anObj.${prop} = ${anObj[prop]}`);
//}
//console.log(Object.keys(anObj)); // console: ['2', '7', '100']
//console.log(anObj);

item2 ={};

item2["key1"] = 1;
item2["key2"] = 2;
item2["key3"] = 1;
item2["key4"] = "Hello Fang-wen";

var keys = Object.keys(item2);
var values = Object.values(item2);
var entries = Object.entries(item2);
console.log("Key: " + keys);
console.log("Value: " + values);
console.log("Entries: " + entries);
//----------------------
/*for (var item in item2) {
   
    console.log( `item2.${item} = ${ item2[item]}`);
  }

for (var i=0 in item2) {
   
    console.log(item2[i]);
  }
  
console.log("Item 2 size: " + Object.keys(item2).length );
console.log(item2);
console.log(item2["key4"]);
console.log("What is in key 5?", item2["key5"]); */