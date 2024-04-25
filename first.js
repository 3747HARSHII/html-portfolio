// console.log("harshita")
// let age =22;
// const student = {
//     fullname : "harshita",
//     age : 22
//     //key:value
// };

// student["age"]+=1;
// console.log(student["age"]) 

// const profile = {
//     username: "@harshita",
//     isFollow: true,
//     followers: 678,
//     following: 89 
// };

// console.log(typeof profile["username"])

// let a= 4
// let b= "4"

// console.log(a==b) //checks equality
// console.log(a===b) //checks equality as well as datatype.
// console.log(a!==b) //checks equality as well as datatype.

// let age = 25;
// if(age>18){
//     console.log("true");
// }

// alert("heyy!!!!")
// prompt("hello!!1") //changes can be made instantly.

//prompt is used to get the values from user.

// let num = prompt("enter a number");

// if(num % 5 == 0){
//     console.log(num, "is multiple of 5");
// }
// else{
//     console.log(num,"is not");
// }

//iterating over characters: we use for-of loop
//for-of loop is used for strings and arrays
// let str = "harshita";
// let len = 0;
// for(let i of str){
//     len++;
// }
// //len of string
// console.log(len);

//for-in loop is used for object..and to get access over its keys..




//cretaing object here student is an object.
// let  student = {
//     name: 'harshita',
//     age: 22,
//     cgpa: 9.0,
//     is_pass: true
// };

// for(let key in student){
//     // console.log(key); //gives the key.
//     // //to get the value of the key,
//     // console.log(student[key])/
//     console.log(key, student[key]);
// }

//funGAME
// let game_num = 25
// let user_num = prompt("enter the game_num");
// while(user_num != game_num){
//     user_num = prompt("try again!");
// }
// console.log("correct")

//Template Literals: used to compile the entire
//console statement into one line..without using ,

// let obj = {
//     item: "pen",
//     price: 10
// };
// console.log("the cost of",obj.item,"is",obj.price,"rupees..");
// //using template literal..also known as string interpolation...
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//array loop for-of
// let marks = [85,98,67,24,99,88];
// let sum =0;
// for( let val of marks){
//     sum=sum+val;
// }
// console.log(sum);

// //splice: takes 3 parameters, one the position, where we want to add, second how many elements we have to delete, third how many elements we have to add..
// //splice is also used to replace.
// let arr = [7,8,3,4,6,1,2,6];
// let arr1 = [7,8,3,4,6,1,2,6];

// arr.splice(2,2,101,102);
// arr1.splice(2,0,101,190,187);


//modern JS
//arrow =>
// function sum(a,b){
//     return a+b;
// }

// const arrowSum = (a,b) => 
// { console.log(a+b); }


// function mul(a,b){
//     return a*b;
// }

// const arrowMul = (a,b) => 
// { console.log(a*b); }

// function count_vowels(str){
//     let count = 0;
//     for (const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count++;
//         }
//     }
//     return count;
// }

// //using arrow function
// const arrow_vowels = (str) => {
//     let count = 0;
//     for (const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count++;
//         }
//     }
//     return count;
// }

//forEach loop in array it is a method.... only used with arrays

//arr.forEach(callBackFunction)
//forEach is a Higher order function

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function printValue(val){
//     console.log(val);
// })

// let nums = [67,54,90,87,45,98,23,98];
// let calSquare = (nums) => {
//     console.log(nums**2);
// };

// nums.forEach(calSquare);

//Maps array methods saves it in a new array
//map is same as forEach..

// let nums = [67,54,90,87,45,98,23,98];
// let new_array = nums.map((val) => {
//     return val*2 ;
// })

// console.log(new_array);
 
// //to get the max value from array:
// let arr = [1,8,4,6,2,10,32,98,65,33,98];
// const output = arr.reduce((prev, curr) => {
//     return prev>curr ? prev : curr;
// });
// console.log(output);


// DOM

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div.");
// };

//creating toggle button..
// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body")
// let currMode = "light";
// modeBtn.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");  
//         body.classList.remove("dark");      
//     }
//     console.log(currMode);
// })



//classes

// const student = {
//     fullName: "Harshita Shrivastava",
//     marks: 94.5,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     },
// };


// //prototype
// const employee = {
//     calTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000
// };

// //using calTax function for the new employee karanArjun..
// karanArjun.__proto__ = employee;

//CLASSES
//constructors : it is automatically created hen we create objects..
//or else we can create constructor on our own...

// class toyotaCar {
//     //every car has strat and stop function
//     //creating constructors..
//     constructor(brand, mileage) {
//         console.log("creating new objects..");
//         this.brandName = brand;
//         this.CarMileage = mileage;
//     }

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     //creating new property in class..
//     // setBrand(brand) {
//     //     this.brandName = brand;

//     // }
// }

// //creating objects from class..

// let fortuner = new toyotaCar("FORTUNER", 12);
// // fortuner.setBrand("FORTUNER");
// //can create multiple objects
// let lexus = new toyotaCar("LEXUS",10);
// //because 2 times a object is created so 2 times creating is printed..


//inheritence

//asynchronous programming....
//synchronous means ki jis format mei code likha hai usi format mei run ho...

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000) //timeout means after how many time do we have to execute our code.
// //2s = 2000ms//2 second k baad print hoga..

//promise

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("Success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected!", err);
// });

//promise-chain

// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// }


// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// //promise-chain

// // console.log("fetching data1");
// // let p1 = asyncFunc1();
// // p1.then((res) => {
// //     console.log(res);
// //     console.log("fetching data2...");
// //     let p2 = asyncFunc2();
// //     p1.then((res) => {
// //         console.log(res);
// //     });
// // })


// //OR

// console.log("fetching data1");
// asyncFunc1().then((res) => {
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {});
// })


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     })
// }

// //promise chain
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

//async Await

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// } 
// async function getWeatherData() {
//     await api(); //1st call
//     await api(); //2nd call

// }

//calling api
//fetch api
//api = application programming interface.

// const URL ="https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn1 = document.querySelector("#btn1");
// // let promise = fetch(URL);
// // console.log(promise);

// //using async
// // const getFacts = async() => {
// //     console.log("getting data......")
// //     let response = await fetch(URL);
// //     console.log(response); //JSON Format
// //     let data = await response.json();
// //     factPara.innerText = data[0].text;
// // };

// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[1].text;
//     })
// }

// btn1.addEventListener("click", getFacts);

//response 200 means successfully updated.
//using JSON method to fetch..it returns second promise.
//that is input is JSON and output is JS object..


///////// CREATING PROJECT /////////






























































































