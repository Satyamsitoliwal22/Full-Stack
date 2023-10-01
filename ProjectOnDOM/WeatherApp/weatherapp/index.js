const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//we take currentab so that we can set current tab as a your weather.when webpage open type your weather is open my default
let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");//by this we set the property of your wethear
getFromSessionStorage();


function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    
        if (!searchForm.classList.contains("active")) {
            //kya search wala form is invisible ,if yes then make it visisble 
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //phela sa search weather wala tab pa tha ab weather tab visible kar na ha 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //now i am at your weather tab .toh weather bhi display karna padaga .so lets check local storage first
            //for coordinate if we save them  here
            getFromSessionStorage();
        }
    
    
    }
    
}
userTab.addEventListener("click", () => {
    //pass clicked tab as a input
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

//check if coordinate is already prasent in seesion storage
function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        //if there was no local coordinate 
         grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    console.log(coordinates);
    const { lat, lon } = coordinates;
    //make grant container invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API Call
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await response.json();
          
       //after we done api call successfully now we remove the loader 
        loadingScreen.classList.remove("active"); 
        userInfoContainer.classList.add("active");
         console.log(data);
        renderWeatherInfo(data);
    }
    catch (err) {
loadingScreen.classList.remove("active");
    }

}

function renderWeatherInfo(weatherInfo){
    //firstly we have to fetch the element
    console.log("hello")
    
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");


    //fetch the info from weatherinfo object and put it in ui elements
    cityName.innerText = weatherInfo?.name;//this we will give the city name to cityname variable that print on ui
    console.log(cityName.innerText);
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;//with the help of question mark sign? we can go inside the json we use [0] as it is an array 
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${ weatherInfo?.main?.temp } °C ` ;
    windspeed.innerText =`${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;

}  

function getLocation() {
    if (navigator.geolocation) {  //this tells about the permission is there from the user to access its location or not
        navigator.geolocation.getCurrentPosition(showPosition);//by this we get the current position of an user
    }
    else {
        //homework show an alert for no getLocation support available 
    }
}

function showPosition(position) {
   const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    }; 
    //we also convert the the userCoordinate into string in json 
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));//by this we store the coordinates in a session storage 
  fetchUserWeatherInfo(userCoordinates);//this we print value on ui
}


const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);


//now we work on an input tag as user input value on input tag 
const serachInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = serachInput.value;

    if (cityName === "") 
        return;
    else {
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");//till we fetching we have to show the loader option
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
         const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric");
        const data = await res.json();
        console.log(data)
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
        
    }
    catch (err) {
        
    }
}

