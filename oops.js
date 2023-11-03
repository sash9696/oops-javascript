


// const user1 = {
//     name: 'John',
//     score: 10,
//     increment: function () {
//         user1.score++;
//     }
// };

// user1.increment(); // user1.score will be 11

// //this is encapsulation


// //using dot notation

// const user2 = {};

// user2.name = 'Peter';
// user2.score = 5;
// user2.increment = function(){
//     user2.score ++;
// };

// //using Object.create

// const user3 = Object.create(null);

// user3.name = 'Rock';
// user3.score = 3;
// user3.increment = function(){
//     user3.score ++;
// };


//code is getting repetitive, as we r breaking DRY princple
//if we have millions of users????



//solution 1 => we can generate objects using a function
// function createUser(name, score) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function () {
//         newUser.score++;
//     };
//     //10 more functions
//     return newUser;
// }

// //1 million users
// //we will be creating 10 * i million


// const user1 = createUser('John', 10);
// const user2 = createUser('Peter', 5);
// user1.increment();

//Problems of solution 1

//each time we create a new user we uylize space of computer memory for all our
//data and functions;
//the functions are just extra copies


//Solution 2 

//Store the increment function in just one object
//if the interpreter does not find the function inside user1, it goes and
//search for that object to check for the increment function

//How the link can be made??

// const functionStore ={
//     increment: function(){this.score ++},
//     login: function(){console.log('logged in')}
// }

// const user1 = {
//     name: 'John',
//     score: 10
// };

// user1.increment()



//Solution 2 


// function createUser(name, score) {
//     //creating a link manually
//     const newUser = Object.create(userFunctionStore);
//     console.log(newUser);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;

// };
// const userFunctionStore = {
//     increment: function () {
//         this.score++;
//     }
// };
// const user1 = createUser('John', 10);
// const user2 = createUser('Peter', 5);
// user1.increment();

//not much problem at all
//some amount manual work

//Solution 3 that means our new key word
//1. it will create a new object
//2. it will create a link
//3. it will return the new object

//again some problems comes that
//How to refer the auto created objects?? => this keyword
//where we will put the single copy of functions to be shared among users?





// function multiplyByFive(num) {

//     return num * 5;
// }

// multiplyByFive.storedNum = 5;
// console.log(multiplyByFive(10));

// console.log(multiplyByFive.storedNum);

// console.log(multiplyByFive.prototype);



//Solution 2  using new keyword


// function CreateUser(name, score) {
//     //create an empty object and make it equal to this
//     console.log(this);
//     this.name = name;
//     this.score = score;
//     //creates a link between new object and and the function's prototype object
//     //return the new created object
// }

// //keep the shared functions inside the function's prototype object
// CreateUser.prototype.increment = function () {
//     this.score++;
// };
// CreateUser.prototype.login = function () {
//     console.log('login');
// };
// const user1 = new CreateUser('John', 10);
// // const user2 = new CreateUser('Peter', 5);

// user1.increment();
// user2.increment();

// console.log(user1.score)
// console.log(user2.score)

// console.log(user1.__proto__)


//javascript uses __proto__ link to give objects, functions and arrays a bunch of bonus functionalities;

//All objects by default have __proto__;

//perfect solution
//faster to write
//still a old practice in professional level code
//90% people fail in the oops interviews
//uppercase letter tells the developer that new keyword
//should be required


//latest es 5  or es 2015

//solution 4 
//we will write share methods separately from the object 
//constructor
//we can write code with es 2015 like other languages


//class syntatic sugar

//solution 4 

//emerging as a new standard
//feels like style of other languages like python , java


//drawback
//90% fail in the interviews because thet y do not have any idea
//how this works under the hood or behind the scenes



// class CreateUser {
//     constructor(name, score){
//         //instance properties
//         this.name = name;
//         this.score = score;
//     }
//     //methods
//     increment(){
//         this.score++;
//     }
//     login(){
//         console.log('Login');
//     }
// }
// const user1 = new CreateUser('John', 10);



// const obj = {
//     num: 10
// }

function multiplyBy2(num) {
    return num * 2
}