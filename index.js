//subclassing or inheritance

//solution 2
//factory funtion approach

function createUser(name, score) {
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score;

    return newUser;
}

const userFunctions = {
    increment: function () {
        this.score++;
    },
    printName: function () {
        console.log(`My name is ${this.name}`)
    }
};

const user1 = createUser('John', 10);

user1.printName();


function createPaidUser(paidName, paidScore, accountBalance) {
    const newPaidUser = createUser(paidName, paidScore);

    //manually creating a link
    // Object.setPrototypeOf(newPaidUser, paidUserFunctions);

    newPaidUser.__proto__ = paidUserFunctions;
    //not recommend to directly use __proto__ due to performance reasons

    newPaidUser.accountBalance = accountBalance;

    return newPaidUser;

}

const paidUserFunctions = {
    incrementBalance: function () {
        this.accountBalance++;
    }
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);


const newPaidUser1 = createPaidUser('Alex', 8, 100);

console.log(newPaidUser1.printName())

//implement solution 3 and 4 as homework