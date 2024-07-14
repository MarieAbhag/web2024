let slideIndex = 0;
let jsonFileContents; //[cont, con, ....]
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const pmOderAm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
        const timeString = `${hours}:${minutes}:${seconds}:${pmOderAm}`;
        document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000)
function loadImages() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            let responseJson = JSON.parse(xhr.response);
            jsonFileContents = responseJson.countries;
            updateImagesDisplay()
        }
    }
    xhr.open('GET','./extern/countries.json', true);
    xhr.send(null);
}
loadImages();

function updateImagesDisplay() { // slideIndex -> numer jsonFileContents[]
    let country = jsonFileContents[slideIndex]
    //country Name
    document.getElementById("country-name").innerHTML =  country.countryName;
    // main-image ->src
    document.getElementById("main-image").src = country.imgSrc;
    // location
    document.getElementById("location").innerHTML = country.location;
    // language
    document.getElementById("language").innerHTML = country.language;
    // capital
    document.getElementById("capital").innerHTML =country.capital;
    //flag ->src
    document.getElementById("flag").src = country.flagImgSrc;

}

function prevSlide() {
    // to check boundries of the array.
    if (slideIndex == 0) {
        return    
    }
    slideIndex--;
    updateImagesDisplay();
}
function nextSlide() {
    // to check boundries of the array.
    if (slideIndex == jsonFileContents.length -1) {
        return  
    }
    slideIndex++;

    updateImagesDisplay();
}

async function getCountryWeather() {

        
    let mainWeatherDiv = document.getElementById("weather-details");
    let child = mainWeatherDiv.lastElementChild;
    while (child) {
        mainWeatherDiv.removeChild(child);
        child = mainWeatherDiv.lastElementChild;
    }

    let selectedCountry = document.getElementById("countries")
    let wetterUrl ="http://api.openweathermap.org/data/2.5/weather?q="+selectedCountry.value +"&appid=2cee41a74613123afb2c3027ee5d7434&units=metric"

    const weather = await fetch(wetterUrl,{
        method:'GET'
    })
    const p = await weather.json()
    console.log(p)
    let weatherCardDiv = document.createElement("div");
    weatherCardDiv.classList.add("weather-card");

    // first div  -> temp 
    let firstDiv = document.createElement("div");
    firstDiv.style.display = "flex"
    firstDiv.style.flexDirection = "column"
    firstDiv.style.justifyContent = "center"
    firstDiv.style.alignItems = "center"

    let iconOfTemp =  document.createElement("img")
    iconOfTemp.src = "./img/icons/location.png"
    iconOfTemp.style.width = "40px";
    let labelH2 = document.createElement("h2");
    labelH2.innerHTML = "Temprature"
    let valueH1 = document.createElement("h1");
    valueH1.innerHTML = p.main.temp + "°C";
    firstDiv.appendChild(iconOfTemp);
    firstDiv.appendChild(labelH2);
    firstDiv.appendChild(valueH1);

    // second div  -> humidity
    let secondDiv = document.createElement("div");
    secondDiv.style.display = "flex"
    secondDiv.style.flexDirection = "column"
    secondDiv.style.justifyContent = "center"
    secondDiv.style.alignItems = "center"

    let iconOfHumadity=  document.createElement("img")
    iconOfHumadity.src = "./img/icons/location.png"
    iconOfHumadity.style.width = "40px";
    let secondLabelH2 = document.createElement("h2");
    secondLabelH2.innerHTML = "humadity"
    let secondValueH1 = document.createElement("h1");
    secondValueH1.innerHTML = p.main.humidity + "%";
    secondDiv.appendChild(iconOfHumadity);
    secondDiv.appendChild(secondLabelH2);
    secondDiv.appendChild(secondValueH1);


    weatherCardDiv.appendChild(firstDiv);
    weatherCardDiv.appendChild(secondDiv);

    mainWeatherDiv.appendChild(weatherCardDiv)

}