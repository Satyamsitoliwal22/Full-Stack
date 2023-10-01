console.log("Hi heelo");

const API_KEY = "b971e6235b9789517d9762b78d2f8eee";
 const apikey = "3045dd712ffe6e702e3245525ac7fa38";
async function showWeather() {

    try {
         // let latitude = 15.3333;
    // let longitude = 74.0833;

    // let city = "goa";
    //we use an await keyword it is posssible that response does not get from server then we use await keyword to stop till answer not come from server
    // const response =await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric');
     const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apikey}`);

    const data = await response.json();//by this we convert the response comming from server in to json format
    console.log("weather data", data);
    
   // let newPara = document.createElement('p');//by this we add paragraph tag to hold the value that we have to print on UI
   // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C` //through this we print particular value from response data that saves in data by us above 
   // document.body.appendChild(newPara);//by this we append child on paragraph
   
   RaenderWeatherinfo(data)//it is used toshow the data on ui
    }
    catch (err) {
        //handle the error here
        console.log("Error Found", err);
   }
} showWeather();


//this getlocation function is find the coodinate of the user
//by the help of (geolocation)  navigator.geolocation.getCurrentPosition(showPosition);
function getLocation() {
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
     }
     else {
          console.log('No geloaction Support')
     }

}

function showPosition(position) {
     let lat = position.coords.latitude;
     let longi = position.coords.longitude;
     console(lat);
     console(longi);
     
}