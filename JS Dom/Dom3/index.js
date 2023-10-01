//adding 1000para
const t1 = performance.now(); //this is will tell the time
for (let i = 0; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is a para' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this took" + (t2 - t1) + "ms"); //this is will print the time taken to excute above code

//optimized code version of above code
const t3 = performance.now(); 
let mydiv = document.createElement('div');

for (let i = 0; i<=100; i++){
    let element = document.createElement('p');
    element.textContent = 'this is a para' + i;

    document.body.appendChild(element);
}
const t4 = performance.now();
console.log("this took" + (t4 - t3) + "ms");

// synchronus- means occuring at same time
//Asynchronus- eventListner is an example it is excute through event loop

//Event Loop- in this if any synchronus statement is running in call stack then till that no addeventlistner function does not excute sfter call stack become empty then addeventlistber function get excute

//setTimeout()-in this we set the time after which this code will excute it can take more time to exute if call stack does not become empty as it is also Asynchronus so it use event loop
// in setTimeout we passes function and time in mili second
// setTimeout(function () {
//     console.log('hi helo');
// },5000)
