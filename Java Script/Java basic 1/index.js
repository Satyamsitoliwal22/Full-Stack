console.log('Namste duniya');
   
let a = 5;
console.log(a);

//let and Var
//let
//let is can be access in scope only
//redeclaration let is not possible
//for example
let b = 5;
var c = 6;
if (true) {
    console.log(b);
    console.log(c);
}

//var
//var is can be access outside of the scope
//redeclaration of var is possible



// const a = 13;
// a = 12;
// console.log(a);

//PRIMITIVE TYPES
//1.Sring
//2.Number
//3.Boolean
//4.Undefined
//5.Null

//Dynamix Typing
//in jav script we can run code if we write
//let a=5
//a="love babbar"
//for example

let LastName = 'satyam';
console.log(LastName);
LastName = 4;
console.log(LastName);

//Relative types
//1.Object
//2.Array
//3.Function

//Operators
//1.Arithmetic-** it is used to do power of number
console.log(2 + 3);
//2.increment/decrement
console.log(++a);
//3.Assignment
//4.Comparision 
console.log(2 < 3);
//5.Equality operator-
//== it compare only value
//=== it compare value and data type 
let num = 1;
let str = '1';
console.log(num == str);
console.log(num === str);

//6.Ternary operator-  condition?val1:val2;

let age = 17;
let statu = (age >= 18) ? console.log('can caste vote') : console.log('cannot caste vote');

//7.Logical operator- AND-&&,OR-||,NOT-!
//OR have short cicruit nature when we find first correct value we did not task for other values
console.log(false || 5 || 2);

//8.Bitwise operator - AND-&,OR-| it works on bit level only

//9.Operator Precedence-we used brackets concept in any expression we assign bracket to expreesion then solve it  c=(a+((b*d)/e))
//10,Control statement- if-else,switch,if-elseif-else

let marks = 98;
if (marks > 90) {
    console.log('A');
}
else if(marks > 80){
    console.log('B');
}
else {
    console.log('C');
}

let n = 2;
switch (n) {
    case 1: console.log(1);
    break;
    case 2: console.log(2);
    break;
    default: console.log(0);
}

//10.Loops

for (let i = 0; i < 5; i++){
    console.log(i);
}

let j=0;
while (j < 5) {
    console.log('wbscd');
    j++;
}

let k = 0;
do {
    console.log(23);
    k++;
} while (k < 5);