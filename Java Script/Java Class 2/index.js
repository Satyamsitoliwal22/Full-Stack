console.log('chalo shru karta ha ');

//Object creation
// we can acces the object properties by dot operator

// let rectangle ={
//     lenght: 1,
//     bredth: 2,
    

//     // it is called an method not an function if we used an function in object
//     draw: function() {
//         console.log('kasa ho')
//     }
// };


//Factory function
//it is an function which make the object and return the value of object
//in this we foloow a camelcase notation

function cerateRectangle(lenght,breadth) {
    let rectangle ={
    lenght: lenght,
    breadth: breadth,
    

    // it is called an method not an function if we used an function in object
    draw: function() {
        console.log('kasa ho')
        }
    };
    return rectangle;

}

//now we can store the return value of function cerateRectangle in some variable
let rectangleObj1 = cerateRectangle(5, 4);
let rectangl2 = cerateRectangle(2, 4);
let rectangl3 = cerateRectangle(3, 8);


//camelcase written as-> numberOfStudents other first lettre all lettre capital
//pascal notation writeen as -> NumberOfStudent all starting lettre capital
//constructor
//In constructor we follow the pascal notation

//all function is an object
function Rectangle() {
    this.lenght = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log('drawing');
    }
}
//with the help of new we create empty object
 let rectangleObject = new Rectangle();

 //by this we can add new values in function dynamically
rectangleObject.color = 'yellow';
console.log(rectangleObject);

//now we can dynamically delete the property present in function
delete rectangleObject.color;
console.log(rectangleObject);

//in primitive data types we passes copy of vale
//in referance data type are array,function,object we take referance by address
//referance is declare using or generate using object

//example referance
function inc(a) {
    a.value++;
}
let a = { value: 10 };
inc(a);
console.log(a);


let rectangle = {
    lenght: 2,
    breadth: 4
};

//for-in-loop
for (let key in rectangle) {
    //key gives key og object
    //rectangle[key] gives an value of key present in object
    console.log(key,rectangle[key]);
}

//for of loop
//it can be used for array it can be used for object

for (let key of Object.keys(rectangle)) {
    console.log(key);
}

for (let key of Object.entries(rectangle)) {
    console.log(key);
}

if ('color' in rectangle) {
    console.log('Present');
}
else {
    console.log('Absent')
}

//object clone
//1.
let src = {
    a: 10,
    b: 20,
    c:30
}

let dest = {}

for (let key in src) {
    dest[key] = src[key];
}
console.log(dest);
src.a++;
console.log(dest);

//2.
let srcc = {
    a: 20,
    b: 20,
    c:30
}

let destt = Object.assign({}, src);
console.log(destt);
srcc.a++;
console.log(destt);

//3.
let srccc = {
    a: 20,
    b: 20,
    c:30
}

let desttt = { ...src }
console.log(desttt)
srcc.a++;
console.log(desttt);