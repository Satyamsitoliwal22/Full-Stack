console.log('kya chal raha ha ')

function run() {
    console.log('running')
}

//function invoke or function call
run() //we can call the fuction before declaring the function on js this concept is called hoisting .hoisting is a process which bring the intialization function before calling function statement 
console.log(run);

//Named function assignment
let stand = function walk() {
    console.log('walking')
}

//we can call the function assignmnt by assign name not from function name
stand(); //give output
//walk(); //give error

let jump = stand;
jump();

//Anonymous Function assignment - in this we can remove function name from the function assignment declaration
let stand2 = function () {
    console.log('walking')
}
stand2();

//js is an dynaic languguge
let x = 'a'
x = 1
console.log(x)

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 4))
console.log(sum(1)) //give output NaN not an number
console.log(sum()) //give output NaN not an number
console.log(sum(1, 2, 3, 4)) // output 3


function total(a,b) {
    let total = 0
    for (let value of arguments) {  //here we use argument because it take all the value that give at time of function call we that no. parameter is not define then also
        total = total + value
       
    }
     return total
}
console.log(total(1,2,3,4))

//Rest operator - it means te rest values

function su(...args) {
    console.log(args) // this rest operator prints array 
// ergs hold the value which parameter is not defined
}

su(1, 2, 3, 4)

//default parameter - in this we can use an default value if user does not pass the value then default value is used if it passes then pass value is used
function interest(p, r=5, y=10) {
    return p*r*y/100
}

console.log(interest(1, 3, 6))

//Getter and Setter
//getter- access properties
//setter-change or update properties
let person = {
    fName: 'Love',
    lName: 'Babbar',
    //getter
  get fullName() {
    return `${ person.fName } ${person.lName}`;
    },
  
  //setter
    set fullName(value) {
        if (typeof value !== String) {
            throw new Error('you have not send an string')
        }
        let parts = value.split(' ')
        this.fName = parts[0]
        this.lName=parts[1]
  }
};
console.log(person.fullName)
//  function fullName() {
//     return `${ person.fName } ${person.lName}`;
// }
// console.log(fullName())

//Error Handling
try {
    person.fullName = 1;
}
catch (e) {
    alert(e)
}
// catch (e) {
//     alert('you have set an number in full name ')
// }

//let and var keyword
//let - it is an keyword which has scope only for nearest {} curly bracket
//var have scope only in function where it is defined

if (true) {
    let a=5
}
console.log(a)

if (true) {
    var a=6
}
console.log(a)

//Reducing array
let array = [1, 2, 3, 4]
// let total = 0
// for (value of array) {
//     total = total + value
//     console.log(total);
// }
let totalSum = array.reduced((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(totalSum)