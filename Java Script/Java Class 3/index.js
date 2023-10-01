//1.Math library ,functions
console.log(Math.PI)

//2.string is primitive ans as well as object type
//Primitive string is define as -- let lastName = 'babbar'
//object string is created as -- let firstName = new String('love')


let lastName = 'babbar'
//by using dot operatoer in last name we can used diffrent property
console.log(lastName.length)
lastName.includes('ba')
lastName[0]
lastName.startsWith('ba')

//to make string as a object we used String function
let firstName = new String('love')

let message = 'this is mine js'
let words = message.split(' ')
console.log(words);

//3.Template literal

let messages = 'this \n is \n \' mine js'
console.log(messages);


//4.Date and Time
//we crete date and time by 5 methods 
let date = new Date()
//2method
let date2 = new Date('june 20 1998 07:15')
console.log(date2)
//3method
//month indexies start from 0
let date3 = new Date(1998, 6, 20, 7)
console.log(date3)
date3.setFullYear(2002)
    
//5.Array

//creationnof an array
let numbers = [ 1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[2])

//Insertion in a array
//1.at end
numbers.push(9)

//2.at begin
numbers.unshift(8)

//3.at end
numbers.splice(2,0,'a') //splice(index no. after which we insert,no.elemnt to remove ,value which wants to add)
console.log(numbers)

//Serching
console.log(numbers.indexOf(2))

//if we want to check number is there or not  in arrey
if (numbers.indexOf(4) != -1)
    console.log('present')
 
console.log(numbers.includes(3))   

//Array of objects
// in primitive we compare the value 

let courses = [
    { no: 1, naam: 'sddsc' },
    {no:2,naam:'sdcc'}
]
//in the object and reference we compare the address

//in this we cannot right answer because of in the object and reference we compare the address
console.log(courses.indexOf( {no:2,naam:'sdcc'}))

//function define in this is calles callback function
let course = courses.find(function (course ) { //here we access the the object properties like  {no:2,naam:'sdcc'} etc with the help of course thet we pass in function
       return course.naam=='sdcc'
})
console.log(course);

//To make above fuctionas Arrow Function
//first we remove function from above
// then we print arrow symbol
//if we have single parameter and singele line code then we remove both brackets and return

// let course = courses.find (course =>course.naam=='sdcc')

//emptying array

let numberss = [1, 2, 3, 4, 5, 6, 7]

numberss.pop();
numberss.shift()
numbers.splice(2, 1) //splice(index start,how many no. want to remove)

//removing element

let count = [1, 2, 3, 4]
let count2 = count
count = []
count2.length = 0  
count2.splice(0, count2.length)  //count2.length = 0  === count2.splice(0,count2.length) this both gives same output

//Cobmine and slice of an array
let first = [1, 2, 3]
let second = [4, 5, 6]
let combined = first.concat(second)
console.log(combined)

let sliced = combined.slice(2, 3) //slice(start index that is include,ending index that is not nclude)
console.log(sliced)

//spread operator
let fi = [1, 2, 3]
let se = [4, 5, 6]

let combied = [...fi, 'a','b',...se]
console.log(combied)

//Iterator in array

let arr = [1, 2, 3, 4]
//we use an for-of loop
for (let value of arr) {
    console.log(value)
}

arr.forEach(function (number) { //foe each required an callback function
    console.log(number)
})

//we convert above function as arroe function
// arr.forEach(number=>console.log(number))

//Joining array

let nu = [1, 2, 3, 4]
const joined = nu.join(',')
console.log(joined)

//split

let me = 'this is js file'
let parts = me.split(' ')
console.log(parts)

//sorting
let num = [1, 6, 3, 4]
num.sort()
console.log(num)

//Fltering array
let a = [1, 2, -1, -2, 4]
 let filterd=a.filter(function (value) {
    return value>=0
 })
console.log(filterd)

//Mapping array
let arr1 = [7, 8, 9, 10]
let items=arr1.map(function (value) {
    return 'student_no' + value
})
console.log(items)

//Mapping of objects
let arr2 = [1, 2, 3, 4]
let filt = arr2.filter(value => value >= 0)
// let item = filt.map(function (num) {
//     let obj = { value: num }
//     return obj
// })
// let item=filt.map(num=> {value:num} )
let item = filt.map(num => {
    return { value: num };
});
console.log(item) 

//chainning of arraow functions
//  let item = arr2.filter(value => value >= 0).map(num => { value: num });
// console.log(item)
