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
// --------------------------------fetch----------------------------------
// fetchData(); //11:21
// async function fetchData(){
//     try{
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//         if (!response.ok) {
//             throw new Error("could not fetch resource")
            
//         }
//         const data = await response.json();
//         const pokemonSprite = data.pokemonSprite.front_default;
//         imgElement.src= pokemonSprite;
//         imgElement.style.display = "block";
        
//     }
//     catch(error){
//         console.error(error);
//     }
// }









// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response => {

//         if (!response.ok) {
//             throw new Error( "could not fetch resource")
//         }
//         return response.json();

//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


// -----------------------------------------images---------------------------
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
document.addEventListener("DOMContentLoaded", initializeSlider)
function initializeSlider(){

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId  =  setInterval(nextSlide, 5000);
    }
    


}    

function showSlide(index){

    if (index >= slides.length) {
        slideIndex = 0 ;
        
    } else if (index < 0 ){
        slideIndex = slides.length - 1;
        
    }
    slides.forEach( slide => {
        slide.classList.remove("displaySlide")
    });
        slides[slideIndex].classList.add("displaySlide")
}
function prevSlide() {
    slideIndex--;
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex)
}





















// const fs = require('fs');
// const path = require('path');
// const axios = require('axios');

// const flagsDir = path.join(__dirname, 'flags');
// if (!fs.existsSync(flagsDir)) {
//     fs.mkdirSync(flagsDir);
// }

// // JSON data
// const jsonData = [

// ];

// const downloadImage = async (url, filepath) => {
//     const response = await axios({
//         url,
//         method: 'GET',
//         responseType: 'stream'
//     });
//     return new Promise((resolve, reject) => {
//         const file = fs.createWriteStream(filepath);
//         response.data.pipe(file);
//         file.on('finish', () => {
//             file.close(resolve);
//         });
//         file.on('error', (err) => {
//             fs.unlink(filepath);
//             reject(err.message);
//         });
//     });
// };

// const downloadAllFlags = async () => {
//     for (let i = 0; i < jsonData.length; i++) {
//         const { flag, country, code } = jsonData[i];
//         const filename = `${i}.svg`;
//         const filepath = path.join(flagsDir, filename);

//         try {
//             await downloadImage(flag, filepath);
//             console.log(`Downloaded flag for ${country} to ${filepath}`);
//         } catch (error) {
//             console.error(`Error downloading flag for ${country}: ${error}`);
//         }

//         jsonData[i].flag = `./flags/${filename}`;
//     }

//     const updatedJsonPath = path.join(__dirname, 'extern/updated_countries.json');
//     fs.writeFileSync(updatedJsonPath, JSON.stringify(jsonData, null, 2));
//     console.log(`Updated JSON data saved to ${updatedJsonPath}`);
// };

// downloadAllFlags();








