// lets learn about ES6

// what is different between "var","let","const"?

// question number 1
var sum = 1;
var sum = 2

console.log(sum)

// question number 2
let sum = 2;
sum = 3
console.log(sum)

// question number 3

const sum = 2;
console.log(sum)

// 4) rest opearator

// example of ES5

function sum(a,b) {
  console.log(a+b)
}
sum(2,2)

// now in ES6

function abc(...all){
   console.log(all)
}
abc(1,2,3,4,5)

function sum(...args){
    
    let result = 0;

    for (let i = 0; args.length; i++){
        result += args[i]
    }

   document.write(args)



}
sum(2,3,4,5)


//  5) template literal

// // example of ES5

var firstName = "abdullah";
var lastName = "meeer"

var fullName = firstName + " "+ lastName;

console.log(fullName)

// now ES6

 let firstName = "abdullah";
 let lastName = "meeer"

 let fullName = `my name is ${firstName} ${lastName}.`;

 console.log(fullName)

// 6) spread operator

let sum = [2,42,36];

let sums = [2,4,5,6];

let fullSum = [...sum,...sums]

console.log(fullSum)

// 6) what is for of ?

let score =[60,40,20,50];

for(let x of score){
    console.log(x)
}

// example of spread with the help of Object

let name1 = {
    name:"abdullah",
    age: 29
}

let name2 = {
    ...name1,
    school:"abc"
}
console.log(name2)


// 7) Array of Destructing

// example of ES5


var book = ["teach",200,150];

var autor = book[0];
var price = book[1];
var pages = book[2]

console.log(pages)


// now ES6
let book = ["teach",200,150];

let [autor,price,pages] = book;

console.log(autor)

function book(){
    return ["teach",200,150]
}
let [author,price,pages] = book();

console.log(price)


// 8) object of Destructing

let book = {
    name1: "abdullah",
    price: 300,
    pages:500
};

let{name1,price,pages} = book;

console.log(name1,price,pages)


// 9) Arrow function

// example of ES5

function name1(){
    console.log("abdullah")
}

name1()

function name1(){
  return name1
}
console.log("abdullah")

// now ES6 

let name1 = () => {
   return name1
}

console.log("meer")


// 10) class and object (oop concept)

class customer {
    constructor(n){
        this.name = n;

    }
    age = 23;
    buy = () => {
        console.log("car")
    }
}

let customer1 = new customer("abdullah");

console.log(customer1)

customer1.buy()

// 11) inheritent

class customer{
    constructor(n){
        this.name = n;
    }
    age = 30;
    buy = () => {
        console.log(this.name);
    }
}
  class newcustomer extends customer{
   hello (){
       console.log("hi");
   }
  }


let customer1 = new newcustomer ("meer");

console.log(customer1)


// 12) reference (object,array) and premitive type(string,number)

// in premetive type change the value while in refernce type not change in it
let num = 2;

let num2 = num;

 num2 = 4

console.log(num2,num)

let person ={
    name : "abdullah",
    age :23
}
let person2 = {
    name : "abc",
    age : 34
}

console.log(person.name,person2.name)

// if we want to equal both side in reference type then we use spread operator

let person ={
    name : "abdullah",
    age :23
}
let person2 = {
  ...person
}
console.log(person2)

// 13) map and filter


let num = [1,2,3,4];

let num1 = num.map(n => n*2)
console.log(num1)

let name1 = [1,2,3,10];

let name2 = name1.filter(n => n%2 == 0)
console.log(name2)

// before we starting the react all above concept will be clear other wise you have to repeat it 







