//5: ECMAScript Functions==============================
// Using string.repeat function =======================
let yell = "woo!"
 
let party = yell.repeat(20);

//console.log(yell.repeat(20));
let cat= {
    meow(times){
        console.log("meow".repeat(times))
    },
    purr(times){
        console.log("prrr".repeat(times))
    },
    snore(times){
        console.log("ZZzzZ".repeat(times))
    }
}
// cat.meow(4);
// cat.purr(5);
// cat.snore(5);
//Arrow function =========================/
let studentList = student => student

//console.log (studentList(['A','B','C']));
let list =['Apple', 'Banana', 'Pineapple', 'Cherry']

 //list.map(item => console.log(item) )
//this in arrow funcitons==========================
let person ={
    first: "Angie",
    hobbies: ['Bike','Hike', 'Yoga'],
    printHobbies: function(){    
        this.hobbies.forEach( hobby => 
             console.log(`${this.first} like ${hobby}`) );
    }
}
//person.printHobbies()

//generator: allow us to pause functions in the middle of execution to be resumed later

function* director(n1, n2){

    yield "three";
    sum = n1 +n2
    yield "two";
    yield "one";
    console.log(sum)
    yield "Action";

}

let countdown = director(2, 4);

// console.log(countdown.next().value);
// console.log(countdown.next().value);
// console.log(countdown.next().value);
// console.log(countdown.next().value);
// console.log(countdown.next());

//Asynchronous JavaScript =========================
//6-1. Building Promises
const delay = seconds =>
   new Promise((resolve, reject) =>{
         if(typeof seconds !== "number"){
             reject(new Error("second must be number"));
         }
         setTimeout(resolve, seconds* 1000)
   })

//    console.log("Zero second")
//    delay(1).then(() => console.log("one second"));
//    delay(2).then(()=> console.log("2nd second"));
//    delay(3).then(()=> console.log("3 second"));
//    delay(5).then(()=> console.log("5 second"));

//6.2 Loading remote data with promise =======================
const spacePeople =()=>{
    return new Promise((resolve, reject)=>{
       const api = "http://api.open-notify.org/astros.json";
       const request = new XMLHttpRequest();
       request.open('GET', api);
       request.onload = ()=>{
           if( request.status === 200 ){
               resolve(JSON.parse(request.response))
           }else{
                reject(Error(request.statusText))
           }
       };
       request.onerror = (err) =>reject(err);
       request.send();         
    })
}

// spacePeople().then( spaceData => 
//                     console.log(spaceData),
//                     err=> console.error(new Error("Can't load data!")));

const getSpacePeople = () =>
 fetch('http://api.open-notify.org/astros.json')
.then(res => res.json())
//.then(console.log)

//getSpacePeople().then(data=> console.log(data))
//6.4: async/await syntax


const delay1 = (secondes) => {
    return new Promise( resolve => {
         setTimeout(resolve, secondes * 1000 )
    })
   
}

 const countFive= async() =>{
     console.log("zero");
     await delay1(2)
     console.log("2 second")
     await delay1(3)
      console.log("3 seconds") 
}
//countFive()
//3. Array and Array Methods
// array spread operatorcan turn elements of an array into argument of funciton call
//or intor element of an array literal

let dogs =['Smoky', 'Stella', 'Camper'];
let cats =["AA", "BB"]
let animals = ['Biscuit', 'Jungle', ...dogs, ...cats]
//console.log(animals)

//3.2: Destructuring arrays: give us an esay to extrct data from arrays and object
//and assign them to variables

var cities = ["Taipei", "Fremont", "San Jose", "New Yor", "Seattle"]
//var [first,,,third ] = ["Taipei", "Fremont", "San Jose", "New York", "Seattle"]
//console.log ( "I Love" ,cities[0])
//console.log(first, third);
//console.log(cities.includes('Taipei'))

//4. ECMAScript Objects ==========================
//Enhancing object literals enhancement
function skierO(name, sound){
    return {
        name: name,
        sound: sound,
        powderYell: function(){
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}`);
        }
    }
}
//=================Enhance
function skier(name, sound){
    return {
        name,
        sound,
        powderYell: function(){
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    }
}
//skier("Sandy", "yeah").powderYell();

//4. Object with the spread Operator
const daytime = {
    breakfast : "oatmeal", 
    lunch : "sandwich"
   };
//const nighttime = {dinner: "noodles"};    
//const todayMeal = { ...daytime, ...nighttime}
const nighttime = "noodles";
const todayMeal = { daytime, nighttime}
//console.log(todayMeal)
//4.3: destructuring objects=====================

const sandwich ={
    title: "Reuben",
    price: 7,
    description: "A Classic",
    ingredients: ['bread','beef','dressing', 'sauerkraut', 'cheeze']
}
function recepi({title, ingredients}){
    console.log(`To make a ${title} sandwich:
    you need to include ${ingredients}`)
}

//console.log(recepi(sandwich))
//console.log(sandwich.price)
const {title, price} ={
    title: "Reuben",
    price: 7,
    description: "A Classic",
    ingredients: ['bread','beef','dressing', 'sauerkraut', 'cheeze']
}
//console.log(title, price)
//2.5 Using symbols ===========================

const id = Symbol();
const couseInfo ={
    id: "js-script",
    title: "JavaScript",
    topics: ["strings","arrays", "objects", "symbol" ]
}
couseInfo[id] = 1234;
//console.log(couseInfo.id)
//console.log(couseInfo[id])

//2.6  maps =====================new data type
let course = new Map();

course.set('react', {description: "ui"})
course.set('jest', {description: 'test'})
course.set('css', {description: 'ui'})

//   for ( let c of course.keys() ){
//       console.log(c)
//   }
// for ( let c of course.values() ){
//     console.log(c)
// }
//course.forEach(item => console.log(item))


//console.log(course)
//console.log(course.get('jest'))

let detail = new Map([
    [new Date(), "today"],
    [2, {javascript: ['js', 'node', 'react']}],
    ['item', [1,2]]
]);


//console.log(detail.size)
//detail.forEach(item => console.log(item))

//2.7 sets ===============
let books = new Set();

books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist")
// console.log(books)
// console.log(books.size)
// console.log("has Oliver Twist? ", books.has("Oliver Twist"))
//  console.log(books.delete("Oliver Twist"))

// console.log(books)

//books.forEach(item => console.log(item))
//4.4 arrow funcitons and the 'this' scop

var people = {
    name: "Fang-wen",
    action: ["Yoga","hike", "Dance", "Bike"],
    printAction : function(){
        this.action.forEach( function(action){
             var str = this.name + " like " + action;
            console.log(str);
        }.bind(this));
    }
};

// var people = {
//     name: "Fang-wen",
//     action: ["Yoga","hike", "Dance", "Bike"],
//     printAction : function(){
//         this.action.forEach( action =>{
//              var str = this.name + " like " + action;
//             console.log(str);
//         });
//     }
// };
people.printAction()




