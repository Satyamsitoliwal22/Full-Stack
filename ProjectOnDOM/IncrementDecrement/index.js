const countValue = document.querySelector('#counter');

const increment = () => {
    //get value from UI
    let value = parseInt(countValue.innerText);//through this we tahe all text of countValue but we get that value in string so we convert that value in intger by parseInt 
   //update the value
    value = value + 1;
    //set value on UI
    countValue.innerText = value;
}

const decrement = () => {
      //get value from UI
    let value = parseInt(countValue.innerText);//through this we tahe all text of countValue but we get that value in string so we convert that value in intger by parseInt 
   //update the value
    value = value - 1;
    //set value on UI
    countValue.innerText = value;
}