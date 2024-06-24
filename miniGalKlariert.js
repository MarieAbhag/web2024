const bilder = [
    'Screenshot_87.png',    //index 0
    'Screenshot_211.png',   //index 1
    'Screenshot_213.png',   //index 2
    'Screenshot_402.png'    //index 3
    
];

let zaehler    = -1;
let running    = 0;

const bildpfad = "img/";
const leinwand = document.querySelector('#leinwand');
const anzeigeVor = document.querySelector('#anzeigeVor');

//auswählen des elementes
const VOR = document.querySelector('#vor');
const ZURUCK = document.querySelector('#zuruck');
const STARTSTOPP = document.querySelector('#startStopp');


//vergabe des events
VOR.addEventListener('click', vor);
ZURUCK.addEventListener('click', zuruck);
STARTSTOPP.addEventListener('click', startStopp);


// --------------ende der globalen variablen----------------------





function vor() {
    zaehler++;
    if( zaehler > bilder.length-2 ) {
        
        VOR.removeEventListener('click', vor);  //remove entfernt den listener

        //setzen eines styles mittels js
        VOR.style.opacity = "0.2";
        
     }

    if( zaehler === 1 ){
        ZURUCK.addEventListener('click', zuruck);
        ZURUCK.style.opacity = "1";
    }


    let bild = bildpfad + bilder[zaehler];
    leinwand.src = bild;
    anzeigeVor.innerHTML = zaehler;
}




function zuruck() {
    zaehler--;
    if( zaehler <= 0 ) {
        ZURUCK.removeEventListener('click', zuruck);
        ZURUCK.style.opacity = "0.2";
    }

    if( zaehler === 2 ){
        VOR.addEventListener('click', vor);
        VOR.style.opacity = "1";

    }
    let bild = bildpfad + bilder[zaehler];
    leinwand.src = bild;
    
    anzeigeVor.innerHTML = zaehler;
}




// mit startStopp
function startStopp() {
    if(running === 0) {
        running = setInterval( vor, 1500);
    } else {
        clearInterval(running);
        running = 0;
    }
}