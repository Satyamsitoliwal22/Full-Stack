const inputSlider = document.querySelector("[data-LenghtSlider]");
const lenghtDisplay = document.querySelector("[ data-LenghtNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordLenght = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");

//set password lenght according to slider and show on the webpage 
function handleSlider() {
    inputSlider.value = passwordLenght;
    lenghtDisplay.innerText = passwordLenght;
    //aur kuch add kar na ha 
    const min = inputSlider.min;
    const max = inputSlider.max;
    //by this (passwordLenght-min)*100/(max-min) we get the no. which we given by user and by this +"%100%" we calculate percentage 
    inputSlider.style.backgroundSize=((passwordLenght-min)*100/(max-min)+"%100%") //through this we get part that is cover by slider when we set particular password lenght
}

//it indicate the strenght password that has been generated it used to print that color on circle 
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //add shadow-homework
    
}

//we make this function we can select random values
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;//math.random
}

function generateRandomNumber() {
    return getRndInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode( getRndInteger(97,123)) //we used string.fromCharCode is used to convert value into string
}

function generateUpperCase() {
    return String.fromCharCode( getRndInteger(65,91))
}

function generateSymbol() {
    // const randNum = getRndInteger(0, symbols.lenght);
    // return symbols.charAt(randNum);
     const symbolArr = Array.from(symbols);
  const randIndx = getRndInteger(0, symbolArr.length);
  return symbolArr[randIndx];
}

//it tell us about the check box which is marked and generate colour of set indicator
function calcStrenght() {
     let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (uppercaseCheck.checked) hasUpper = true;//.checked is used to get the true if checkbox is checked
  if (lowercaseCheck.checked) hasLower = true;
  if (numbersCheck.checked) hasNum = true;
  if (symbolsCheck.checked) hasSym = true;

  if (hasUpper && hasLower && (hasNum || hasSym) && passwordLenght >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNum || hasSym) &&
    passwordLenght >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {
    //as error can arrive that is why we do error handling
    try {
        await navigator.clipboard.writeText(passwordDisplay.value); //this is an async operation . we did not want to go further till this not get completed that why used await keyword.and this return an promise that is why used await to get promise completed
        copyMsg.innerText = "Copied"
    }
    catch (e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visisble
    copyBtn.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 3000);
}

   function shufflePassword(array) {
        //Fisher Yates Method
       //in Fisher yates we used to swap last value (i) with an (j) index which random 

        for (let i = array.lenght - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
        }
        let str = "";
        array.forEach((el) => (str += el));
        return str;
    }

//we create this functio so we increment the value of checkCount 
function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked)
            checkCount++;
    })
}
//by this function we check everytime when we do change in checkbox by add event listner and call handleCheckBoxChange function to calculate the value of checkCount again from starting
allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})

//special condition that our password lenght should be equal or greater then the no.checked checkbox value 
if (passwordLenght < checkCount) {
    passwordLenght = checkCount;
    handleSlider(); 
}


//add event listner on slider
inputSlider.addEventListener('input', (e) => {
    passwordLenght = e.target.value;
    handleSlider();
})

//this is design which tell you can copy if there is any password present and if there is no passord then you can not copy
copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected\
    if (checkCount == 0) return;

    if (passwordLenght < checkCount) {
        passwordLenght = checkCount;
        handleSlider();
    }

    //let's the journey to find the new password
    //remove old password
    console.log("starting the journey");
    password = "";

    //let's put the stuff mentioned by checkboxs
    // if (uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    //  if (lowercaseCheckcaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    //  if (numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    //  if (symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    //done above samething with an array concept

    let funcArr = [];//we create this array to hold the function of selected checkbox

    if (uppercaseCheck.checked) //this tell that is checkbox is checkrd then push generateUpperCase function in an array
        funcArr.push(generateUpperCase);
    
    if (lowercaseCheck.checked)
        funcArr.push(generateLowerCase);
    
    if (numbersCheck.checked)
        funcArr.push(generateRandomNumber);
    
    if (symbolsCheck.checked)
        funcArr.push(generateSymbol);
    
    //compusory Addition
    for (let i = 0; i < funcArr.lenght; i++) {
        password += funcArr[i]();
    }
    console.log("compusory addition done");
    
    //remainning Addition
    for (let i = 0; i < passwordLenght - funcArr.length; i++) {
        let randIndex = getRndInteger(0, funcArr.length);
        password += funcArr[randIndex]();
    }
    console.log("remaining addition done");

    //shuffle the password because in starting we know that it is uppercase if it is thicked so we need to shufffle so that we did not get known password
    // function shufflePassword(shufflePassword) {
    //     //Fisher Yates Method

    //     for (let i = array.lenght - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = array[i];
    //         array[i] = array[j];
    //     }
    //     let str = "";
    //     array.forEach((el) => (str += el));
    //     return str;
    // }
    password = shufflePassword(Array.from(password));
    console.log("shufling done");

    //show this is in UI
    passwordDisplay.value = password;
    console.log("Ui addition done");
    //now we have to show the strenght 
    calcStrenght();
    
});