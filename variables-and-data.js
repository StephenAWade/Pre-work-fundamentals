/*
 * Variables, Data Types, and Typing
 * Variables
 */
let wordData;

wordData = "Word Data";

console.log(wordData);

/*
 *Data Types
 */
let subTotal = 100;
let tax = subTotal * 0.07;
let TotalWithTax = tax + subTotal;

let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2:{
        obj2Key1: "value of inner object",
    }
};

console.log(obj.obj2.obj2Key1);

/*
 *Typing
 */
let variable = "string"
let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

let add = 1 + 2;
let sub = 2 - 1;
let molt = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1" + "String 2"

console.log(string);

/*
 * Conditionals, Functions, Scope and Loops
 * Conditionals
 */

// Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10

// Greater Than Equals
let greaterTHanEq = 5 >= 5;

//Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

/*
 *Functions
 */
function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log( "Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    return number * number
}

let squaredNumber = squareNum (10);
console.log(squaredNumber);

/*
 * Scope
 */

let x = 10;

function addNumbers (n, m) {
    console.log(x);
    let b;
    if (1===1) {
        let b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(1, 2, 10);

/*
 * Arrays
 */

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen= ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log("i is euqal to: " + i)
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to: ' + j);
    }
}

/*
 * While Loop
 */

//let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}

/*
 * APIs, Objects, and Interfaces
 * Objects
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function(typeOfBark){
        console.log ("Bark!");
    },
};

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);
