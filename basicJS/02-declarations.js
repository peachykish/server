/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//what is a variable? A variable is like a bucket holding contents. In the example below, a is the bucket and 1 is the contents.
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or a dollar sign
//2) numbers may follow the above characters, but cannot come first 
//3) JS is case sensitive--"hello" and "Hello" are different values

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' (or give it a name) a variable  

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value, this can be after initialization (if you assign a different value after you've initialized)
*/

var x;
console.log("Declaration 1:" , x); //undefined 

x = 10;
console.log("Initialization 1:" , x ); //10

x = 33;
console.log("Assignment 1:" , x)

var y;
console.log(y); //declaring

y = "hello";
console.log(y); //initializing

y = "you are my fren";
console.log(y); //assigning

/*
Var, Let, and Const:

var = "old" keyword for variables
let = "new" keyword for variables (Introduced with ES6)
/ var and const let you fill the bucket with something different, like a bucket without a lid. 
const has a lid /
const = also "new", declares unchangeable variables 
*/

let tonight = "great!";
const elevenFifty = "Amazing!";
console.log(tonight, elevenFifty);

tonight = "lovely!";
console.log(tonight, elevenFifty);

elevenFifty = "Super!"
