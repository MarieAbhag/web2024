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
    iconOfTemp.src = "./img/icons/temperature.png"
    iconOfTemp.style.boxShadow = "4px 8px rgba(0, 07, 0, 0.839), 0 6px 20px 0 rgba(237, 235, 235, 0.576)";
    iconOfTemp.style.width = "40px";
    let labelH2 = document.createElement("h2");
    labelH2.innerHTML = "Temprature"
    labelH2.style.backgroundColor = " rgba(40, 40, 42, 0.657)";
    labelH2.style.backgroundColor = "grey";
    labelH2.color = "grey";
    labelH2.style.padding= "8px"
     labelH2.style.border= "2px black solid"
     labelH2.style.borderRadius = "50px";

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

    let iconOfHumadity =  document.createElement("img")
    iconOfHumadity.src = "./img/icons/humidity.png"
    iconOfHumadity.style.width = "40px";
    iconOfHumadity.style.boxShadow = "4px 8px rgba(0, 07, 0, 0.839), 0 6px 20px 0 rgba(237, 235, 235, 0.576)";
    let secondLabelH2 = document.createElement("h2");
    secondLabelH2.innerHTML = "Humadity"
    secondLabelH2.style.backgroundColor = " rgba(40, 40, 42, 0.657)";
    secondLabelH2.style.padding= "8px"
    secondLabelH2.style.border= "2px black solid"
    secondLabelH2.style.borderRadius = "50px";
    let secondValueH1 = document.createElement("h1");
    secondValueH1.innerHTML = p.main.humidity + "%";
    secondDiv.appendChild(iconOfHumadity);
    secondDiv.appendChild(secondLabelH2);
    secondDiv.appendChild(secondValueH1);



        // third div  -> pressure 
        let thirdDiv = document.createElement("div");
        thirdDiv.style.display = "flex"
        thirdDiv.style.flexDirection = "column"
        thirdDiv.style.justifyContent = "center"
        thirdDiv.style.alignItems = "center"
    
        let iconOfpressure=  document.createElement("img")
        iconOfpressure.src = "./img/icons/pressure.png"
        iconOfpressure.style.width = "40px";
        iconOfpressure.style.boxShadow = "4px 8px rgba(0, 07, 0, 0.839), 0 6px 20px 0 rgba(237, 235, 235, 0.576)";
      
        let thirdLabelH2 = document.createElement("h2");
        thirdLabelH2.innerHTML = "Pressure"
        thirdLabelH2.style.backgroundColor = "grey";
        thirdLabelH2.color = "grey";
        thirdLabelH2.style.padding= "8px"
        thirdLabelH2.style.border= "2px black solid"
        thirdLabelH2.style.borderRadius = "50px";
        let thirdValueH1 = document.createElement("h1");
     
        thirdValueH1.innerHTML = p.main.pressure+ "mb" ;
        thirdDiv.appendChild(iconOfpressure);
        thirdDiv.appendChild(thirdLabelH2);
        thirdDiv.appendChild(thirdValueH1);


        
        // fourth div  -> speedOfWind 
        let fourthDiv = document.createElement("div");
        fourthDiv.style.display = "flex"
        fourthDiv.style.flexDirection = "column"
        fourthDiv.style.justifyContent = "center"
        fourthDiv.style.alignItems = "center"
    
        let iconOfspeedOfWind =  document.createElement("img")
        iconOfspeedOfWind .src = "./img/icons/wind.png"
        iconOfspeedOfWind .style.width = "40px";
        iconOfspeedOfWind.style.boxShadow = "4px 8px rgba(0, 07, 0, 0.839), 0 6px 20px 0 rgba(237, 235, 235, 0.576)";
        let fourthLabelH2 = document.createElement("h2");
        fourthLabelH2.innerHTML = "Wind speed ";
        fourthLabelH2.style.backgroundColor = " rgba(40, 40, 42, 0.657)";
        fourthLabelH2.style.padding= "8px" ; 
        fourthLabelH2.style.border= "2px black solid" ; 
        fourthLabelH2.style.borderRadius = "50px";
        let fourthValueH1 = document.createElement("h1");
        fourthValueH1.innerHTML = p.wind.speed + "km/h" ;
        fourthDiv.appendChild(iconOfspeedOfWind );
        fourthDiv.appendChild(fourthLabelH2);
        fourthDiv.appendChild(fourthValueH1);



    weatherCardDiv.appendChild(firstDiv);
    weatherCardDiv.appendChild(secondDiv);
    weatherCardDiv.appendChild(thirdDiv);
    weatherCardDiv.appendChild(fourthDiv);

    mainWeatherDiv.appendChild(weatherCardDiv)

}