//API(Application Programming Interface)

//Promise - it can achieve or does not get achieve
// let meraPromise = new Promise(function (resolve, reject) {
//     console.log('i am inside promise');
//     resolve(1989); // we write this resolve to tell explicitly that promise is resolved
// });

// let meraPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('i am inside promise');
//     }, 5000);
//     resolve(1989);
// });
console.log('phelaaa')

//uses of then() and catch() function in promise then() handle value and catch() handle error
let meraPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('i am inside promise');
    }, 5000);
    // resolve(1989);
    reject(new Error('bhai error'));
});
// meraPromise.then((value) => { console.log(value) }); // this will print the resolve value that is 1989
meraPromise.catch((error) => { console.log('recived ab error') }); // this will print the reject error that is 1989


let waada1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('settimeout 1 started');
    }, 2000);
});
waada1.then(() => {
    let waada2 = new Promise(function (resolve, reject) {
        resolve('waada2 resolve')
    })
    return waada2;
}).then((value) => console.log(val));

//async and await- we can use a asynchronous function to return an promise that function is async function
//by this async await function we will stop the promise 2 till promise 1 does not get complete
//aysnc function always return promise 
async function abcd() {
    return 7;    // this function does not return 7 it return promise with value 7
}

//await-as in below both promise delehiMausem ,hydMausem run parellelly that is why we have to use await keyword

async function utility() {


    let delehiMausem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('delhi ma gharmi han');
        }, 1000);
    });

    let hydMausem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hyderbad ma cool han');
        }, 5000);
    });

    let dM = await delehiMausem;
    let hM = await hydMausem;

    return [dM, hM];
}

//Fetch API- it used to send amd get data from server and it return promise to us

//this whole ia get process data from server
let obj = {
    heading:"head"
}
async function utilityy() {
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');//we use awit to wait till we get value from server
    let output = await content.json;//by this we complete content value in json format
    console.log(output);

}
utilityy();

// how to send data to server

async function helper() {
    //this option is an object
    let options = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',  //we are sending this three thing on fetch link mentioned below
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };

    let contentt = await fetch('https://jsonplaceholder.typicode.com/posts', options);//through this we send option on fetch link
    let response = contentt.json;
    return response;
}

async function unoo() {
    let ans =await helper();
    console.log(ans);
}

//closures- it contain the function + data
//as in this let keyword is a block scope when scope get over let keyword value also get null but can access through closure
//closure is formed for every nested function
//clsoure always form a refernce of data not an copy